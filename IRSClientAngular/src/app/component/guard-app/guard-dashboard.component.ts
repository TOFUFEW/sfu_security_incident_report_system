import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

import { Incident } from '../report/incident';
import { IncidentService } from '../../service/incident.service';
import { Category } from '../category/category';
import { CategoryService } from '../../service/category.service';
import { Location } from '../location/location';
import { LocationService } from '../../service/location.service';
import { UserService } from '../../service/user.service';


@Component({
    selector: 'guard-dashboard',
    templateUrl: '../../view/guard-dashboard.component.html',
    providers: [ LocationService, IncidentService, CategoryService ],
    styleUrls: [ '../../../assets/css/guard-dashboard.component.css' ]    
})

export class GuardDashboardComponent {
    title = 'SFU Incident Reporting System';
    locationsList: Location[];
    incidentsList: Incident[];

  constructor(
      private router: Router,
      private http: HttpClient,
      private locationService: LocationService,
      private userService: UserService,
      private categoryService: CategoryService
  ) {

      if ( this.userService.isLoggedIn() == false ) {
          this.router.navigate([ 'login' ] );
    }
  }
}
