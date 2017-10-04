import { Component, OnInit } from '@angular/core';
import { Incident } from '../model/incident';
import { IncidentsService } from '../service/incidents.service';
import { Location } from '../model/location';
import { LocationService } from '../service/location.service';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'dashboard',
  templateUrl: '../view/dashboard.component.html',
  providers: [ LocationService, IncidentsService ]
})

export class DashboardComponent {
  title = 'SFU Incident Reporting System';
  locationsList: Location[];
  incidentsList: Incident[];

  constructor(
    private router: Router,
    private http: HttpClient,
    private locationService: LocationService,
    private userService: UserService
  ) {

    console.log( userService.getUserName() );
    if ( this.userService.isLoggedIn() == false ) {
      this.router.navigate([ 'login' ] );
    }
  }
}
