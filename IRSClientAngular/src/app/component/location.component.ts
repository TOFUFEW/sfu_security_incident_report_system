import { Component, Input, OnInit } from '@angular/core';
import { IncidentElement } from '../model/incidentElement';
import { Location } from '../model/location';
import { LocationService } from '../service/location.service';
import {UserService} from "../service/user.service";
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'location-component',
  templateUrl: '../view/location.component.html'
})

export class LocationComponent implements OnInit {
  locations: Location[] = [];
  newLocation: Location = new Location();

  constructor (
    private locationService: LocationService,
    private router: Router,
    private userService: UserService
  ) {

  };

  getLocations(): void {
    this.locationService.getLocations().then(returnedLocations => {
      this.locations = returnedLocations;
    });
  }

  addLocation(): void {
    if (this.newLocation.CITY != null && this.newLocation.CITY.length == 0)
      return;
    this.locationService.create(this.newLocation)
      .then(returnedLocation => {
        if (returnedLocation != null) {
          this.locations.push(returnedLocation);
          alert("Location successfully added!");
        }
        else alert("Add failed.");
      });
    delete this.newLocation;
    this.newLocation = new Location();
  }

  updateLocation(location: Location): void {
    if (this.newLocation.CITY != null && this.newLocation.CITY.length == 0)
      return;
    this.locationService.update(location)
      .then(returnedLocation => {
        if (returnedLocation != null) {
          var i = this.locations.findIndex(loc => loc.LOCATION_ID === returnedLocation.LOCATION_ID);
          // remove 1 object at index i, replace it with returnedLocation
          this.locations.splice(i, 1, returnedLocation);
          alert("Location successfully edited!");
        }
        else alert("Edit failed.");
      });
  }

  deleteLocation(id: number): void {
    this.locationService.delete(id).then(isDeleted => {
      var msg = isDeleted ? "Location successfully deleted!" : "Delete failed";
      alert(msg);
      var i = this.locations.findIndex(loc => loc.LOCATION_ID === id);
      console.log("delete successful");
      // remove 1 object at index i
      this.locations.splice(i, 1);
    });
  }

  ngOnInit(): void {
    this.getLocations();
  }

}
