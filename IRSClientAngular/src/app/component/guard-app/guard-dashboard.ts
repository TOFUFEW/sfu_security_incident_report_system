import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

import { NavbarComponent } from "../navbar/navbar.component";
import { IncidentService } from "../../service/incident.service";
import { UserService } from "../../service/user.service";
import { Incident } from "../report/incident";
import { User } from "../login/user";

@Component({
  selector: 'guard-dashboard',
  templateUrl: './guard-dashboard.html',
  styleUrls: ['../../../assets/css/guard-app.css'],
  providers: [ IncidentService ]
})

export class GuardDashboardComponent implements OnInit {
    assignedIncidents: Incident[];
    createdIncidents: Incident[];
    user: User;

    constructor( private incidentsService: IncidentService,
                 private userService: UserService,
                 private http: HttpClient,
                 private router: Router) {
    };

    getAssignedIncidents(): void {
        this.user = this.userService.getCurrentUser();
        this.incidentsService.getGuardIncidents( ).then( returnedIncidents => {
            console.log("returned incidents: ", returnedIncidents);
            this.assignedIncidents = returnedIncidents;
        } );
    }

    getCreatedIncidents(): void {
        this.incidentsService.getCreatedByIncidents().then( returnedIncidents => {
            this.createdIncidents = returnedIncidents;
        } );
    }

    viewReport( incident: Incident ) : void {
        console.log("view report id = " + incident.attributes.REPORT_ID );
        this.router.navigate([ 'guard-app/report', incident.attributes.REPORT_ID ] );
    }

    newReport(): void {
        console.log("new report");
        this.router.navigate([ 'new-report' ] );
    }

    ngOnInit() : void {
        this.getAssignedIncidents();
        this.getCreatedIncidents();
    }
}
