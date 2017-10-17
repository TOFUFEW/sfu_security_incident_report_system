import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { Incident } from '../model/incident';
import { IncidentsService } from '../service/incidents.service';
import { Location } from '../model/location';
import { LocationService } from '../service/location.service';
import { Staff } from '../model/staff';
import { StaffService } from '../service/staff.service';
import { UserService } from '../service/user.service';
import { Config } from '../util/config.service';
import { DataHelperService } from '../util/data-helper.service';

@Component({
  selector: 'dashboard',
  templateUrl: '../view/dashboard.component.html',
  styleUrls: ['../../assets/css/dashboard.component.css'],
  providers: [LocationService, StaffService, IncidentsService]
})

export class DashboardComponent {
  title = 'SFU Incident Reporting System';
  locationsList: Location[];
  staffList: Staff[];
  incidentsList: Incident[];
  newIncident = new Incident();

  constructor(
    private router: Router,
    private http: HttpClient,
    private incidentService: IncidentsService,
    private locationService: LocationService,
    private userService: UserService,
    private staffService: StaffService,
  ) {

    if ( this.userService.isLoggedIn() == false ) {
      this.router.navigate( [ 'login' ] );
    }
  }

  addIncident(): void {
    var loc1 = new Location();
    loc1.BUILDING_NAME = "TEST1";
    loc1.CAMPUS_ID = 1;
    loc1.DEPARTMENT  = "SOSY";
    loc1.ROOM_NUMBER = 4080;
    var _loc1 = DataHelperService.toIncidentElement( Config.LocationTable, loc1);

    var loc2 = new Location();
    loc2.BUILDING_NAME = "TEST2";
    loc2.CAMPUS_ID = 1;
    loc2.DEPARTMENT  = "SOSY";
    loc2.ROOM_NUMBER = 4080;
    var _loc2 = DataHelperService.toIncidentElement( Config.LocationTable, loc2);

    var inc = this.newIncident;
    inc.ACCOUNT_ID = 1;
    inc.CATEGORY_ID = 1;
    inc.CLOSED = 0;
    inc.DESCRIPTION = "TESTTTTTT";
    inc.EXECUTIVE_SUMMARY = "SAMPLE EXECUTIVE SUMMARY";
    inc.incidentElements.push( _loc1 );
    inc.incidentElements.push( _loc2 );

    this.incidentService.create( inc )
        .then( returnedIncident => {
            if ( returnedIncident != null  ) {
              location.reload();
            }
            else alert( "Add failed." );
        } );
    delete this.newIncident;
    this.newIncident = new Incident();
  }
}
