import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

import { IncidentService } from "../../service/incident.service";
import { UserService } from "../../service/user.service";
import { Incident } from "../report/incident";
import { User } from "../login/user";

@Component({
  selector: 'guard-dashboard',
  templateUrl: './guard-dashboard.component.html',
  styleUrls: ['../../../assets/css/guard-app.css'],
  providers: [ IncidentService ]
})

export class GuardDashboardComponent implements OnInit {
    assignedIncidents: Incident[];
    createdIncidents: Incident[];
    user: User;

    constructor( private incidentService: IncidentService,
                 private userService: UserService,
                 private http: HttpClient,
                 private router: Router) {
    };

    getAssignedIncidents(): void {
        this.user = this.userService.getCurrentUser();
        this.incidentService.getIncidents( ).then( returnedIncidents => {
            console.log("returned incidents: ", returnedIncidents);
        } );
    }

    getCreatedIncidents(): void {
        this.incidentService.getCreatedByIncidents().then( returnedIncidents => {
            var userAccountID = this.userService.getAccountID ();
            this.createdIncidents = returnedIncidents.filter ( i => i.attributes.REPORT_ID == userAccountID ) as Incident [];
        } );
    }



    viewReport ( incident: Incident ) : void {
        console.log("view report id = " + incident.attributes.REPORT_ID );
        this.router.navigate([ 'guard-app/report', incident.attributes.REPORT_ID ] );
    }

    newReport(): void {
        console.log ( "new report" );
        this.router.navigate ( [ 'new-report' ] );
    }

    ngOnInit() : void {
        this.getAssignedIncidents ();
        this.getCreatedIncidents ();

        this.incidentService.reportsInList
          .subscribe ( reports => {
              this.createdIncidents = ( reports as Incident [] )
                .filter ( i => this.incidentService.userCreatedReport ( i ) );

              this.assignedIncidents = ( reports as Incident [] )
                .filter ( i => this.incidentService.reportAssignedToThisUserTest ( i as Incident ) ) as Incident [];
        } );
    }
}
