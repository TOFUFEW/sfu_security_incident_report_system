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
    };

    getIncidents(): void {
        this.incidentService.allReports
        .subscribe(
            (responseData) => {
                setTimeout( () => {
                    this.incidents = responseData;
                    } , 1000);
            },
            (errors) => {
                alert(Config.FailedToRetrieveMsg);
            },
            () => {
                console.log("Done before data is finished");
            }
        );
    }

    getStaffList() {
        this.staffService.getStaffs().then( ret => { this.staffArr = ret } );
    }

    addToWorkspace( incident: Incident ): void {
        this.incidentService.addToWorkspace( incident );
    }

    removeFromWorkspace( id: number ): void {
        this.incidentService.removeFromWorkspace( id );
    }

    setIncidentToAssign( id: number ) {
        console.log(id);
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
        var index = this.staffArr.findIndex( x => x.attributes.ACCOUNT_ID == this.selectedStaffId );
        var existingStaffIndex = this.incidentToAssign.incidentElements[Config.StaffKey]
            .findIndex( e => e.table === Config.StaffTable );

        var staff = null;
        if ( index >= 0 ) {
            staff = this.staffArr[ index ];
        }

        if ( existingStaffIndex >= 0 ) {
            if ( staff == null ) { // de-assign
                this.incidentToAssign.incidentElements[Config.StaffKey].splice( existingStaffIndex, 1 );
            }
            else { // replace
                this.incidentToAssign.incidentElements[Config.StaffKey].splice( existingStaffIndex, 1, staff);
            }
        }
        else {
            if ( staff != null ) { // assign
                this.incidentToAssign.incidentElements[Config.StaffKey].push( staff );
            }
        }

        this.incidentToAssign.guard = staff;

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
        this.getStaffList();
    }
}
