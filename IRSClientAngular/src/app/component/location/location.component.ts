import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LocationService } from '../../service/location.service';
import { NewReportService } from '../../service/new-report.service';
import { IncidentElement } from '../report/incident-element';
import { Location, LocationMapping, Building, Room } from './location';
import { Config } from '../../util/config.service';

@Component({
    selector: 'location-component',
    templateUrl: './location.component.html'
})

export class LocationComponent implements OnInit {
    public reference : any;
    locations: Location[] = [];
    locationMap: LocationMapping[] = [];
    buildings: Building[] = [];
    rooms: Room[] = [];
    selectedCampus: LocationMapping = new LocationMapping();
    newLocation: Location = new Location();

    constructor (
        private locationService: LocationService,
        private reportService: NewReportService
    ) { 
    }

    addLocationToReport(): void {
        this.reportService.addIncidentElement( this.newLocation, Config.LocationTable );
    }

    removeLocationFromReport(): void {
        if ( this.reference == null ) {
            console.log("must have a location!");
            return;
        }
            
        //if ( this.newLocation != null && this.newLocation.attributes.LOCATION_ID > 0 ) 
        this.reportService.removeIncidentElement( this.newLocation, Config.LocationTable );
        this.reference.destroy();
    }

    getLocations(): void {
        this.locationService.getLocations().then(returnedLocations => {
            this.locations = returnedLocations;
            this.locationMap = this.locationService.toLocationMapping( this.locations );
        });
    }

    onSelectCampus(): void {
        this.locationMap.forEach( campus => {
            if ( campus.CAMPUS_ID == this.newLocation.attributes.CAMPUS_ID ) 
                this.buildings = campus.BUILDINGS;
        } );
    }

    onSelectBuilding(): void {
        this.buildings.forEach( bldg => {
            if ( bldg.BUILDING_NAME === this.newLocation.attributes.BUILDING_NAME )
                this.rooms = bldg.ROOMS;
        });
    }

    onSelectRoom(): void {
        var index = this.locations.findIndex( loc => loc.attributes.LOCATION_ID == this.newLocation.attributes.LOCATION_ID);
        this.newLocation.attributes.ROOM_NUMBER = this.locations[index].attributes.ROOM_NUMBER;
    }


    addLocation(): void {
        // if (this.newLocation.CITY != null && this.newLocation.CITY.length == 0)
        //   return;
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
        // if (this.newLocation.CITY != null && this.newLocation.CITY.length == 0)
        //   return;
        this.locationService.update(location)
            .then(returnedLocation => {
                if (returnedLocation != null) {
                    var i = this.locations.findIndex(loc => loc.attributes.LOCATION_ID === returnedLocation.attributes.LOCATION_ID);
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
            var i = this.locations.findIndex(loc => loc.attributes.LOCATION_ID === id);
            console.log("delete successful");
            // remove 1 object at index i
            this.locations.splice(i, 1);
        });
    }

    ngOnInit() {
        this.getLocations();
        this.addLocationToReport();
    }
}
