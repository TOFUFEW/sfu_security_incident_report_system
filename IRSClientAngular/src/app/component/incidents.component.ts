import { Component, Input, OnInit } from '@angular/core';
import { Incidents } from '../model/incidents';
import { IncidentsService } from '../service/incidents.service';

@Component( 
  {
  selector: 'incidents-component',
  templateUrl: '../view/incidents.component.html'
  }
)

export class IncidentsComponent implements OnInit {
  incidents: Incidents[];
  newIncident: Incidents = new Incidents();
  
  constructor( private incidentsService: IncidentsService ){};

  getIncidents(): void {
    this.incidentsService.getIncidents().then( returnedIncidents => {
      this.incidents = returnedIncidents;
    } );    
  }

  ngOnInit() : void {
    this.getIncidents();
  }
  
}
