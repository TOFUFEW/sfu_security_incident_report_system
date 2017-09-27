import { Component, OnInit } from '@angular/core';
import { Location } from './location';
import { LocationService } from './locations.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LocationService]
})
export class AppComponent implements OnInit {
  title = 'SFU Incident Reporting System';

  // --- Added to test location.service.ts
  locations: Location[];

  constructor(private locationService: LocationService) {}

  getLocations(): void {
    this.locationService.getLocations().then(locations => this.locations = locations);
  }

  ngOnInit(): void {
    this.getLocations();
  }
  // -----
}
