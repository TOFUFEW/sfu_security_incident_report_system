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
  user: User;

  constructor( private incidentsService: IncidentService,
               private userService: UserService,
               private router: Router) {
    if ( this.userService.isLoggedIn() == false ) {
      this.router.navigate([ 'login' ] );
    }
  };

  getIncidents(): void {
    this.user = this.userService.getCurrentUser();
    this.incidentsService.getIncidents( ).then( returnedIncidents => {
      this.incidents = returnedIncidents;
    } );
  }

  viewReport( incident: Incident ) : void {
    //TO BE CHANGED
    //change to actually view report when feature is added
    console.log("view report id = " + incident.attributes.REPORT_ID );
    this.router.navigate([ 'report', incident.attributes.REPORT_ID ] );
  }

  ngOnInit() : void {
    this.getIncidents();
  }
}
