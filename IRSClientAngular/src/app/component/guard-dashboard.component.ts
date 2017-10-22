import {Component, OnInit} from "@angular/core";
import {Incident} from "../model/incident";
import {IncidentService} from "../service/incident.service";
import {User} from "../model/user";
import {UserService} from "../service/user.service";


@Component({
  selector: 'guard-dashboard',
  templateUrl: '../view/guard-dashboard.component.html',
  styleUrls: ['../../assets/css/guard-dashboard.component.css'],
  providers: [ IncidentService ]
})

export class GuardDashboardComponent implements OnInit {
  incidents: Incident[];
  newIncident: Incident = new Incident();
  user: User;

  constructor( private incidentsService: IncidentService,
               private userService: UserService ) {
  };

  getIncidents(): void {
    this.user = this.userService.getCurrentUser();
    this.incidentsService.getGuardIncidents( this.user ).then( returnedIncidents => {
      this.incidents = returnedIncidents;
    } );
  }

  ngOnInit() : void {
    this.getIncidents();
  }
}
