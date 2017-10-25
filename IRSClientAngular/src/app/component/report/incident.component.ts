import { Component, Input, OnInit } from '@angular/core';
import { IncidentService } from '../../service/incident.service';
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
  newIncident: Incident = new Incident();

  constructor( private incidentsService: IncidentsService ){};

  getIncidents(): void {
      this.incidentService.getIncidents().then( returnedIncidents => {
          this.incidents = returnedIncidents;
      } );
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

}
