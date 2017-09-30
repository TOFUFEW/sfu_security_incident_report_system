import { Component, OnInit } from '@angular/core';
import { Location } from '../location/location';
import { LocationService } from '../location/location.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html',
  providers: [LocationService]
})


export class DashboardComponent implements OnInit {
  title = 'SFU Incident Reporting System';
  locationsList: Location[];

  constructor( private http: HttpClient , private locationService: LocationService ){}
  
  ngOnInit() : void {
  }
}
