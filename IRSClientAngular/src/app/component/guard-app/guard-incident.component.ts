import { Component, OnInit } from '@angular/core';
import { Incident } from '../report/incident';
import { IncidentService } from '../../service/incident.service';


@Component({
  selector: 'guard-incident-component',
  templateUrl: '../../view/guard-incident.component.html',
})

export class GuardIncidentComponent implements OnInit {
  incidents: Incident[];  
  newIncident: Incident = new Incident();  

  constructor ( private incidentsService: IncidentService ) {};  
  
  getIncidents(): void {
    this.incidentsService.getIncidents().then( returnedIncidents => {
      this.incidents = returnedIncidents;
    } );    
  }

//   addIncident(): void {
//     this.incidentsService.create( this.newIncident )
//         .then( returnedIncident => {
//             if ( returnedIncident != null  ) {
//               this.incidents.push( returnedIncident );
//               alert( "Incident successfully added!" );
//             }
//             else alert( "Add failed." );
//         } );
//     delete this.newIncident;
//     this.newIncident = new Incident();
//   }

//   updateIncident( incident: Incident ): void {
//     this.incidentsService.update( incident )
//         .then( returnedIncident => {
//             if ( returnedIncident != null  ) {
//               var i = this.incidents.findIndex( inc => inc.REPORT_ID === returnedIncident.REPORT_ID );
//               // remove 1 object at index i, replace it with returnedLocation
//               this.incidents.splice( i, 1, returnedIncident );
//               alert( "Incident successfully edited!" );
//             }
//             else alert( "Edit failed." );
//         } );
//   }

  ngOnInit() : void {
    this.getIncidents();
  }
}

  