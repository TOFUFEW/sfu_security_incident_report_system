import { Component, Input, OnInit } from '@angular/core';
import { IncidentService } from '../../service/incident.service';
import { StaffService } from '../../service/staff.service';
import { Incident } from './incident';
import { Location } from '../location/location';
import { Staff } from '../staff/staff';
import { Config } from '../../util/config.service';

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

    assignToStaff() {
        this.incidentToAssign.attributes.ACCOUNT_ID = this.selectedStaffId;
        var index = this.staffArr.findIndex( x => x.attributes.ACCOUNT_ID == this.incidentToAssign.attributes.ACCOUNT_ID );
        if ( index >= 0 )
            this.incidentToAssign.incidentElements.push( this.staffArr[ index ] );
        this.incidentService.assignToStaff( this.incidentToAssign ).then(
            returnedIncident => {
                console.log (returnedIncident);
                if ( returnedIncident != null ) {
                    var index = this.incidents.findIndex( x => x.attributes.ACCOUNT_ID == returnedIncident.attributes.ACCOUNT_ID );
                    this.incidents[ index ] = returnedIncident;
                    this.incidents[ index ].incidentElements.forEach( elem => {
                        if ( elem.table == Config.StaffTable ) {
                            this.incidents[ index ].guard = elem as Staff;
                        }
                    });
                    alert("Success! Incident has been assigned.");                                    
                }
                else {
                    console.log("Assign failed.");
                }
                
                delete this.incidentToAssign;
                this.incidentToAssign = new Incident();
            }
        );
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
