import { Component } from '@angular/core';
import { Incident } from '../model/incident';
import { IncidentsService } from '../service/incidents.service';

@Component( 
  {
    templateUrl: '../view/new-incident.component.html',
    styleUrls: ['../../assets/css/new-incident.component.css'],
    providers: [IncidentsService]
  }
)

export class NewIncidentComponent {
  incidents: Incident[];
  newIncident: Incident = new Incident();
  
  constructor( private incidentService: IncidentsService ){};
}
