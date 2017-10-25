import {Component, OnInit} from "@angular/core";
import {Incident} from "../model/incident";
import {IncidentService} from "../service/incident.service";
import {User} from "../model/user";
import {UserService} from "../service/user.service";
import { Router, RouterModule } from '@angular/router';

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
               private userService: UserService,
               private router: Router) {
  };

  getIncidents(): void {
    this.user = this.userService.getCurrentUser();
    this.incidentsService.getGuardIncidents( this.user ).then( returnedIncidents => {
      this.incidents = returnedIncidents;
    } );
  }

  viewReport( id: number ) : void {
    console.log("view report");
    console.log(id);
    var i = 0;
    for(i;i<this.incidents.length; i++) {
      console.log(this.incidents[i]);
      if(this.incidents[i].attributes.REPORT_ID == id) {
        this.newIncident = this.incidents[i];
      }
    }
    console.log(this.newIncident.attributes.REPORT_ID);
    this.router.navigate(['guard']);
  }

  ngOnInit() : void {
    this.getIncidents();
  }
}
