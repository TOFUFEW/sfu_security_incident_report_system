import { Component, OnInit } from '@angular/core';
import { Location } from './location';
import { LocationService } from './location.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html',
  providers: [LocationService]
})


export class DashboardComponent implements OnInit {
  title = 'SFU Incident Reporting System';
  locations: Location[];

  //constructor(private locationService: LocationService) { }
  constructor(private http: HttpClient, private locationService: LocationService){}
  getLocations(): void {
    this.locationService.getLocations().then(locations => this.locations = locations);
  }

  ngOnInit() : void {
    this.getLocations();
  }
}
