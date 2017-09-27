import { Component, OnInit } from '@angular/core';
import { Location } from './location';
import { LocationService } from './location.service';


@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html',
  providers: [LocationService]
})


export class DashboardComponent implements OnInit {
  title = 'SFU Incident Reporting System';
  locations: Location[];

  constructor(private locationService: LocationService) { }

  getLocations(): void {
    this.locationService.getLocationsSlowly().then(locations => this.locations = locations);
  }

  ngOnInit() : void {
    this.getLocations();
  }
}
