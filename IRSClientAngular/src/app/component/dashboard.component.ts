import { Component, OnInit } from '@angular/core';
import { Incidents } from '../model/incidents';
import { IncidentsService } from '../service/incidents.service';
import { Location } from '../model/location';
import { LocationService } from '../service/location.service';
import { Staff } from '../model/staff';
import { StaffService } from '../service/staff.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'dashboard',
  templateUrl: '../view/dashboard.component.html',
  providers: [LocationService, StaffService, IncidentsService]
})


export class DashboardComponent implements OnInit 
{
  title = 'SFU Incident Reporting System';
  locationsList: Location[];
  staffList: Staff[];
  incidentsList: Incidents[];

  constructor( private http: HttpClient , private locationService: LocationService, private staffService:StaffService, private incidentsService: IncidentsService ){}

  getStaffs(): void {
}
  
  ngOnInit() : void {
  }
}
