import { Component, Input, OnInit } from '@angular/core';
import { Incident } from '../model/incident';
import { IncidentsService } from '../service/incidents.service';

@Component( 
  {
  selector: 'incidents-component',
  templateUrl: '../view/incidents.component.html'
  }
)

export class IncidentsComponent implements OnInit {
  incidents: Incident[];
  newIncident: Incident = new Incident();
  
  constructor( private incidentsService: IncidentsService ){};

  getIncidents(): void {
    this.incidentsService.getIncidents().then( returnedIncidents => {
      this.incidents = returnedIncidents;
    } );    
  }

  addIncident(): void {
    this.incidentsService.create( this.newIncident )
        .then( returnedIncident => {
            if ( returnedIncident != null  ) {
              this.incidents.push( returnedIncident );
              alert( "Incident successfully added!" );
            }
            else alert( "Add failed." );
        } );
    delete this.newIncident;
    this.newIncident = new Incident();
  }

  updateIncident( incident: Incident ): void {
    this.incidentsService.update( incident )
        .then( returnedIncident => {
            if ( returnedIncident != null  ) {
              var i = this.incidents.findIndex( inc => inc.REPORT_ID === returnedIncident.REPORT_ID );
              // remove 1 object at index i, replace it with returnedLocation
              this.incidents.splice( i, 1, returnedIncident );
              alert( "Incident successfully edited!" );
            }
            else alert( "Edit failed." );
        } );
  }

  deleteIncident( id: number ): void {
    this.incidentsService.delete( id ).then( isDeleted => {
        var msg = isDeleted ? "Incident successfully deleted!" : "Delete failed";
        alert(msg);
        var i = this.incidents.findIndex( loc => loc.REPORT_ID === id );
        // remove 1 object at index i
        this.incidents.splice( i, 1 );
      });
  }

  ngOnInit() : void {
    this.getIncidents();
  }
  
}
