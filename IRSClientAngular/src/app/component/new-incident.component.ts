import { Component } from '@angular/core';
import { Incident } from '../model/incident';
import { IncidentsService } from '../service/incidents.service';

@Component( 
  {
    selector: "new-incident-form",
    templateUrl: '../view/new-incident.component.html',
    styleUrls: ['../../assets/css/new-incident.component.css'],
    providers: [IncidentsService]
  }
)

export class NewIncidentComponent {
  incidents: Incident[];
  newIncident: Incident = new Incident();
  
  constructor( private incidentService: IncidentsService ){};

  addIncident(): void {
    console.log(this.newIncident);
    this.incidentService.create( this.newIncident )
        .then( returnedIncident => {
            if ( returnedIncident != null  ) {
              location.reload();
            }
            else alert( "Add failed." );
        } );
    delete this.newIncident;
    this.newIncident = new Incident();
  }
}
