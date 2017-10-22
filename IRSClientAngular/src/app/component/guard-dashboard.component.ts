import {Component, OnInit} from "@angular/core";
import {Incident} from "../model/incident";
import {Location} from "../model/location";
import {IncidentsService} from "../service/incidents.service";
import {LocationService} from "../service/location.service";


@Component({
  selector: 'guard-dashboard',
  templateUrl: '../view/guard-dashboard.component.html',
  styleUrls: ['../../assets/css/guard-dashboard.component.css'],
  providers: [ IncidentsService]
})

export class GuardDashboardComponent implements OnInit {
  incidents: Incident[];
  newIncident: Incident = new Incident();

  constructor( private incidentsService: IncidentsService){};

  getIncidents(): void {
    this.incidentsService.getIncidents().then( returnedIncidents => {
      this.incidents = returnedIncidents;
    } );
  }

  deleteIncident( id: number ): void {
    this.incidentsService.delete( id ).then( isDeleted => {
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
