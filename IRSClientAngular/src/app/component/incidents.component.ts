import { Component, Input, OnInit } from '@angular/core';
import { Incidents } from './incidents';
import { IncidentsService } from './incidents.service';

@Component( 
  {
  selector: 'incidents-component',
  templateUrl: 'incidents.component.html'
  }
)

export class IncidentsComponent implements OnInit {
  incidents: Incidents[];
  newIncidents: Incidents = new Incidents();
  
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
