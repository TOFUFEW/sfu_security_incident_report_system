import { Component, Input, OnInit } from '@angular/core';
import { IncidentService } from '../../service/incident.service';
import { StaffService } from '../../service/staff.service';
import { Incident } from './incident';
import { Location } from '../location/location';

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
    lastRemovedId: number = 0;
    constructor( private incidentService: IncidentService ){
        this.incidentService.lastRemovedId
            .subscribe( value => this.removeFromWorkspace( value ) );
    };

    getIncidents(): void {
        this.incidentService.getIncidents().then( returnedIncidents => {
            this.incidents = returnedIncidents;
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

    ngOnInit() : void {
        this.getIncidents();
    }
  
    private doNothing() {
        // do nothing
        console.log( "doing nothing...");
    }
}
