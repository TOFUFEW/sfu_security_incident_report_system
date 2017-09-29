import { Component, Input } from '@angular/core';
import { Location } from './location';
import { LocationService } from './location.service';
@Component({
  selector: 'location-component',
  templateUrl: 'location.component.html'
})

export class LocationComponent {
  @Input() locations: Location[];
  newLocation: Location = new Location();
  
  constructor(private locationService: LocationService){};

  addLocation(): void {
    if (this.newLocation.campus != null && this.newLocation.campus.length == 0)
      return;
    this.locationService.create(this.newLocation);
    delete this.newLocation;
    this.newLocation = new Location();
  }

  updateLocation(location: Location): void {
    if (this.newLocation.campus != null && this.newLocation.campus.length == 0)
      return;
    this.locationService.update(location);
  }

  deleteLocation(id: number): void {
    this.locationService.delete(id);
  }
}
