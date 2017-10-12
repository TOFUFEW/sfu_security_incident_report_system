import { Component, OnInit } from '@angular/core';
import { Incident } from '../model/incident';
import { IncidentsService } from '../service/incidents.service';
import { Location } from '../model/location';
import { LocationService } from '../service/location.service';
import { Staff } from '../model/staff';
import { StaffService } from '../service/staff.service';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'dashboard',
  templateUrl: '../view/dashboard.component.html',
  providers: [LocationService, StaffService, IncidentsService]
})

export class DashboardComponent implements OnInit {
  title = 'SFU Incident Reporting System';
  locationsList: Location[];
  staffList: Staff[];
  incidentsList: Incident[];

  constructor(
    private router: Router,
    private http: HttpClient,
    private locationService: LocationService,
    private userService: UserService,
    private staffService:StaffService
  ) {

    if ( this.userService.isLoggedIn() == false ) {
      //this.router.navigate([ 'login' ] );
    }
  }

  onLogout() {
      console.log("logging out");
      this.userService.logout();
      this.router.navigate([ 'login' ] );
  }

  ngOnInit(): void {
    if( this.userService.getCurrentUser().accType == 2 ) {
      var staffComp = document.getElementById("staffComponent" );
      var locationComp = document.getElementById("locationComponent" );
      staffComp.style.visibility = "hidden";
      locationComp.style.visibility = "hidden";
    }
  }
}
