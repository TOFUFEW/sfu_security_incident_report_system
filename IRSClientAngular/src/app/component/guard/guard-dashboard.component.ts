import {Component, OnInit} from "@angular/core";
import {IncidentService} from "../../service/incident.service";
import {UserService} from "../../service/user.service";
import { Router, RouterModule } from '@angular/router';
import {Incident} from "../report/incident";
import {User} from "../login/user";

@Component({
  selector: 'guard-dashboard',
  templateUrl: './guard-dashboard.component.html',
  styleUrls: ['../../../assets/css/guard-dashboard.component.css'],
  providers: [ IncidentService ]
})

export class GuardDashboardComponent implements OnInit {
  incidents: Incident[];
  newIncident: Incident = new Incident();
  user: User;

  constructor( private incidentsService: IncidentService,
               private userService: UserService,
               private router: Router) {
  };

  getIncidents(): void {
    this.user = this.userService.getCurrentUser();
    this.incidentsService.getGuardIncidents( this.user ).then( returnedIncidents => {
      this.incidents = returnedIncidents;
    } );
  }

  viewReport( incident: Incident ) : void {
    //TO BE CHANGED
    //change to actually view report when feature is added
    console.log( incident.attributes.REPORT_ID );
    this.router.navigate([ 'guard' ] );
  }

  ngOnInit() : void {
    this.getIncidents();
  }
}
