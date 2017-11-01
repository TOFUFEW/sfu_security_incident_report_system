import { Component, Input, OnInit } from '@angular/core';
import { IncidentService } from '../../service/incident.service';
import { Incident } from './incident';
import { Location } from '../location/location';
import {Staff} from "../staff/staff";
import {StaffService} from "../../service/staff.service";
import {User} from "../login/user";
import {DataHelperService} from "../../util/data-helper.service";
import {Config} from "../../util/config.service";
import {AssignGuardService} from "../../service/assign-guard.service";

@Component(
    {
        selector: 'incidents-component',
        templateUrl: './incidents.component.html',
        styleUrls: ['../../../assets/css/incidents.component.css',
                    '../../../assets/css/panels.css']
    }
)

export class IncidentComponent implements OnInit {
    incidents: Incident[];
    newUser: User = new User();
    incidentToAssign: Incident = new Incident();
    staffs: Staff[] = [];
    lastRemovedId: number = 0;
    constructor( private incidentService: IncidentService, private staffService: StaffService ) {
        this.incidentService.lastRemovedId
            .subscribe( value => this.removeFromWorkspace( value ) );
    };

    getIncidents(): void {
        this.incidentService.getIncidents().then( returnedIncidents => {
            this.incidents = returnedIncidents;
        } );
    }

    getStaffs(): void {
        this.staffService.getStaffs().then( returnedStaffs => {
            this.staffs = returnedStaffs;
        } );
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

    deleteIncident( id: number ): void {
        this.incidentService.delete( id ).then( isDeleted => {
            var msg = isDeleted ? "Incident successfully deleted!" : "Delete failed";
            alert(msg);
            var i = this.incidents.findIndex( loc => loc.attributes.REPORT_ID === id );
            // remove 1 object at index i
            this.incidents.splice( i, 1 );
        });
    }

    setIncident (incident: Incident): void {
        this.incidentToAssign = incident;
        console.log(this.incidentToAssign);
        // alert ("Report Assigned to guard");
    }

    updateGuards (): void {
        for ( var i = 0 ; i < this.incidentToAssign.incidentElements.length ; i++ ) {
            if ( this.incidentToAssign.incidentElements[ i ].table = "STAFF") {
                delete this.incidentToAssign.incidentElements[ i ];
            }
        }
        var staff = new Staff();
        staff.table = Config.StaffTable;
        console.log(this.newUser);
        staff.attributes.ACCOUNT_ID = this.newUser.ACCOUNT_ID;
        this.incidentToAssign.incidentElements.push(staff);

        console.log(this.incidentToAssign);
        // this.incidentService.update( this.incidentToAssign ).then(returnedBoolean => {
        //     if ( returnedBoolean ) {
        //        alert ( "Successful update" );
        //     } else {
        //         alert ( "Unsuccessful update" );
        //     }
        // });

        this.newUser = new User();
    }

    ngOnInit() : void {
        this.getIncidents();
        this.getStaffs();
    }

    private doNothing() {
        // do nothing
        console.log( "doing nothing...");
    }
}
