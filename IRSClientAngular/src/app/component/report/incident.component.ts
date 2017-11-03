import { Component, Input, OnInit } from '@angular/core';
import { IncidentService } from '../../service/incident.service';
import { StaffService } from '../../service/staff.service';
import { Incident } from './incident';
import { Location } from '../location/location';
import { User } from "../login/user";
import { DataHelperService } from "../../util/data-helper.service";
import { Config } from "../../util/config.service";
import { AssignGuardService } from "../../service/assign-guard.service";
import { Staff } from '../staff/staff';

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
    selectedStaffId: number = 7;
    incidents: Incident[];
    incidentToAssign: Incident = new Incident();
    lastRemovedId: number = 0;


    constructor( private incidentService: IncidentService, private staffService: StaffService ){
        this.staffService.getStaffs().then( returnedArr => {
            this.staffArr = returnedArr;
        });
        this.incidentService.lastRemovedId
            .subscribe( value => this.removeFromWorkspace( value ) );
    };

    getIncidents(): void {
        this.incidentService.getIncidents().then( returnedIncidents => {
            this.incidents = returnedIncidents;
        } );
    }

    getStaffList() {
        this.staffService.getStaffs().then( ret => { this.staffArr = ret } );
    }

    addToWorkspace( incident: Incident ): void {
        alert("Report added to workspace");
        incident.inWorkspace = true ;
        console.log("adding to workspace...");
        console.log(incident);
        this.incidentService.addToWorkspace( incident );
    }

    removeFromWorkspace( id: number ): void {
        if ( this.incidents == null || this.incidents.length == 0 ) return;
        console.log(" removing " + id);
        var index = this.incidents.findIndex( i => i.attributes.REPORT_ID == id );
        console.log( "index: " + index );
        this.incidents[ index ].inWorkspace = false;
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

    setIncidentToAssign ( incident: Incident ): void {
        this.incidentToAssign = incident;
        console.log( this.incidentToAssign );
        // alert ("Report Assigned to guard");
    }

    assignToGuard (): void {        
        for ( var i = 0 ; i < this.incidentToAssign.incidentElements.length ; i++ ) {
            if ( this.incidentToAssign.incidentElements[ i ].table.toLowerCase() === Config.StaffTable.toLowerCase() ) {
                delete this.incidentToAssign.incidentElements[ i ];
            }
        }

        var index = this.staffArr.findIndex( x => x.attributes.ACCOUNT_ID == this.selectedStaffId );

        if ( index < 0 ) return ; // not found

        var staff = this.staffArr[ index ];

        this.incidentToAssign.incidentElements.push( staff );

        console.log(this.incidentToAssign);
        this.incidentService.update( this.incidentToAssign ).then( returnValue => {
            if ( returnValue != null ) {
                var incidentIndex = this.incidents.findIndex( i => i.attributes.REPORT_ID === returnValue.attributes.REPORT_ID );
                returnValue.guard = staff;
                this.incidents.splice( incidentIndex, 1, returnValue );
                console.log (returnValue );
                alert ( "Successful update" );
            } else {
                alert ( "Unsuccessful update" );
            }
        });

    }

    ngOnInit() : void {
        this.getIncidents();
        this.getStaffList();
    }
}
