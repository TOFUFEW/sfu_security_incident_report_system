import { Component, Input, OnInit } from '@angular/core';
import { Location } from '../model/location';
import { LocationService } from '../service/location.service';

@Component({
  selector: 'location-component',
  templateUrl: '../view/location.component.html'
})

export class LocationComponent implements OnInit {
  locations: Location[];
  newLocation: Location = new Location();

  constructor( private locationService: LocationService ){};

  getLocations(): void {
    this.locationService.getLocations().then( returnedLocations => {
      this.locations = returnedLocations;
    } );
  }

  addLocation(): void {
    if ( this.newLocation.campus != null && this.newLocation.campus.length == 0 )
      return;
    this.locationService.create( this.newLocation )
        .then( returnedLocation => {
            if ( returnedLocation != null  ) {
              this.locations.push( returnedLocation );
              alert( "Location successfully added!" );
            }
            else alert( "Add failed." );
        } );
    delete this.newLocation;
    this.newLocation = new Location();
  }

  updateLocation( location: Location ): void {
    if ( this.newLocation.campus != null && this.newLocation.campus.length == 0 )
      return;
    this.locationService.update( location )
        .then( returnedLocation => {
            if ( returnedLocation != null  ) {
              var i = this.locations.findIndex( loc => loc.id === returnedLocation.id );
              // remove 1 object at index i, replace it with returnedLocation
              this.locations.splice( i, 1, returnedLocation );
              alert( "Location successfully edited!" );
            }
            else alert( "Edit failed." );
        } );
  }

  deleteLocation( id: number ): void {
    this.locationService.delete( id ).then( isDeleted => {
        var msg = isDeleted ? "Location successfully deleted!" : "Delete failed";
        alert(msg);
        var i = this.locations.findIndex( loc => loc.id === id );
        // remove 1 object at index i
        this.locations.splice( i, 1 );
      });
  }

  ngOnInit() : void {
    this.getLocations();
  }

}
