import { Component, OnInit } from '@angular/core';
import { Incident } from '../../model/incident';
import { IncidentsService } from '../../service/incidents.service';
import { Location } from '../../model/location';
import { LocationService } from '../../service/location.service';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'guard-incident',
  templateUrl: '../../view/guardApp/incident.component.html',
  providers: [LocationService, IncidentsService]
})

export class GuardIncidentComponent {
  title = 'SFU Incident Reporting System';
  locationsList: Location[];
  incident: Incident;

  constructor(
    private router: Router,
    private http: HttpClient,
    private locationService: LocationService,
    private userService: UserService,
  ) {

    if ( this.userService.isLoggedIn() == false ) {
      this.router.navigate([ 'login' ] );
    }
  }
}