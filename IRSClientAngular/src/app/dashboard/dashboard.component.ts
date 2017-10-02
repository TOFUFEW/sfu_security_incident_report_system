import { Component, OnInit } from '@angular/core';
import { Location } from '../location/location';
import { LocationService } from '../location/location.service';
import { Staff } from '../staff/staff';
import { StaffService } from '../staff/staff.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html',
  providers: [LocationService, StaffService]
})


export class DashboardComponent implements OnInit {
  title = 'SFU Incident Reporting System';
  locationsList: Location[];
  staffList: Staff[];

  constructor( private http: HttpClient , private locationService: LocationService, private staffService:StaffService){}

  getStaffs(): void {
}
  
  ngOnInit() : void {
  }
}
