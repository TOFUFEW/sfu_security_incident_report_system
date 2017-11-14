import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

import { IncidentService } from "../../service/incident.service";
import { UserService } from "../../service/user.service";
import { Incident } from "../report/incident";
import { User } from "../login/user";

@Component({
  selector: 'guard-all-reports',
  templateUrl: './guard-all-reports.component.html',
  styleUrls: ['../../../assets/css/guard-app.css'],
  providers: [ IncidentService ]
})

export class GuardAllReportsComponent implements OnInit {
  incidents: Incident[];
  user: User;

  constructor( private incidentsService: IncidentService,
               private userService: UserService,
               private http: HttpClient,
               private router: Router) {
  };

  getIncidents(): void {
    this.user = this.userService.getCurrentUser();
    this.incidentsService.getIncidents( ).then( returnedIncidents => {
        console.log("returned incidents: ", returnedIncidents);
      this.incidents = returnedIncidents;
    } );
  }

  viewReport( incident: Incident ) : void {
    console.log("view report id = " + incident.attributes.REPORT_ID );
    this.router.navigate([ 'guard-app/report', incident.attributes.REPORT_ID ] );
  }

  ngOnInit() : void {
    this.getIncidents();
  }
}
