import { Component, Input, OnInit } from '@angular/core';
import { IncidentService } from '../../service/incident.service';
import { StaffService } from '../../service/staff.service';
import { Incident } from './incident';
import { Location } from '../location/location';
import { User } from "../login/user";
import { Config } from "../../util/config.service";
import { AssignGuardService } from "../../service/assign-guard.service";
import { Staff } from '../staff/staff';
import { IncidentElement } from '../report/incident-element';

@Component(
    {
        selector: 'incidents-component',
        templateUrl: './incidents.component.html',
        styleUrls: ['../../../assets/css/incidents.component.css',
                    '../../../assets/css/panels.css']
    }
)

export class IncidentComponent implements OnInit {
    staffArr: Staff[] = [];
    selectedStaffId: number = -1;
    incidents: Incident[];
    incidentToAssign: Incident = new Incident();
    lastRemovedId: number = 0;


    constructor( private incidentService: IncidentService, private staffService: StaffService ){
        this.staffService.getStaffs().then( returnedArr => {
            this.staffArr = returnedArr;
        });
        this.incidentService.lastRemovedId
            .subscribe( value => this.removeFromWorkspace( value ) );
        this.incidentService.editedReport
            .subscribe( value => {
                if ( value != null && this.incidents!= null && this.incidents.length > 0 ) {
                    var index = this.incidents.findIndex( i => i.attributes.REPORT_ID == value.attributes.REPORT_ID );
                    if ( index >= 0 )
                        this.incidents.splice(index, 1, value);
                }
            });
    };

    getIncidents(): void {
        this.incidentService.getIncidents().then( returnedIncidents => {
            this.incidents = returnedIncidents;
        } );
    }

    getStaffList() {
        this.staffService.getStaffs().then( ret => { this.staffArr = ret } );
    }

    addToTimer(){
        this.incidents.forEach(incident => {
            if(incident.attributes.TIMER_START != null){
                //add to timers list
            }
        });
    }

    addToWorkspace( incident: Incident ): void {
        incident.inWorkspace = true ;
        this.incidentService.addToWorkspace( incident );
    }

    removeFromWorkspace( id: number ): void {
        if ( this.incidents == null || this.incidents.length == 0 ) return;
        console.log(" removing " + id);
        var index = this.incidents.findIndex( i => i.attributes.REPORT_ID == id );
        console.log( "index: " + index );
        this.incidents[ index ].inWorkspace = false;
    }

    setIncidentToAssign( id: number ) {
        if ( id == null ) return;
        var index = this.incidents.findIndex( x => x.attributes.REPORT_ID == id );
        if ( index >= 0 ) {
            this.incidentToAssign = this.incidents[ index ];
        }
    }

    onSelectStaff(): void {
        var index = this.staffArr.findIndex( x => x.attributes.ACCOUNT_ID == this.incidentToAssign.attributes.ACCOUNT_ID );
        if ( index >= 0 )
            this.selectedStaffId = this.staffArr[ index ].attributes.ACCOUNT_ID;
    }

    deleteIncident( id: number ): void {
        this.incidentService.delete( id ).then( isDeleted => {
            var msg = isDeleted ? "Incident successfully deleted!" : "Delete failed";
            alert(msg);
            var i = this.incidents.findIndex( loc => loc.attributes.REPORT_ID === id );
            // remove 1 object at index i
            this.incidents.splice( i, 1 );
        });
    }

    assignToGuard (): void {
        this.incidentToAssign = this.incidentService.updateAssignedStaff( this.incidentToAssign, this.selectedStaffId );
        console.log(this.incidentToAssign);
        this.incidentService.update( this.incidentToAssign ).then( returnValue => {
            if ( returnValue != null ) {
                var incidentIndex = this.incidents.findIndex( i => i.attributes.REPORT_ID === returnValue.attributes.REPORT_ID );
                this.incidents.splice( incidentIndex, 1, returnValue );
                console.log (returnValue );
                alert ( "Successful update" );
            } else {
                alert ( "Unsuccessful update" );
            }
        });

        this.incidentToAssign = new Incident();
        this.selectedStaffId = -1;
    }

    ngOnInit() : void {
        this.getIncidents();
        this.incidentService.staffArr.subscribe(
            arr => { this.staffArr = arr; }
        );
    }
}
