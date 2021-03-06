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
    currentLocation: Location = new Location();

    showCampusAlert: boolean = false;
    showBuildingAlert: boolean = false;

    constructor (
        private locationService: LocationService,
        private reportService: NewReportService
    ) {
    }

    validateNewLocation(): boolean {
        if ( this.newLocation.attributes.CAMPUS_ID == null ) {
            if ( this.currentLocation.attributes.CAMPUS_ID != null ) {
                this.newLocation.attributes.CAMPUS_ID = this.currentLocation.attributes.CAMPUS_ID;
            }
            else {
                this.showCampusAlert = true;
                return false;
            }
        }
        if ( this.newLocation.attributes.CITY == null || this.newLocation.attributes.CITY == "" ) {
            if ( this.currentLocation.attributes.CITY != "") {
                this.newLocation.attributes.CITY = this.currentLocation.attributes.CITY;
            }
        }
        if ( this.newLocation.attributes.BUILDING_NAME == null || this.newLocation.attributes.BUILDING_NAME == "" ) {
            if ( this.currentLocation.attributes.BUILDING_NAME != "") {
                this.newLocation.attributes.BUILDING_NAME = this.currentLocation.attributes.BUILDING_NAME;
            }
            else {
                this.showBuildingAlert = true;
                return false;
            }
        }
        if ( this.newLocation.attributes.ROOM_NUMBER == null && this.currentLocation.attributes.ROOM_NUMBER != "" ) {
            this.newLocation.attributes.ROOM_NUMBER = this.currentLocation.attributes.ROOM_NUMBER;
        }
        return true;
    }

    updateCurrentLocation ( locationID: number ) {
        if ( locationID != -1 ) {
            this.locations.forEach ( location => {
                if ( location.attributes.LOCATION_ID == locationID ) {
                    this.currentLocation.attributes.CAMPUS_ID = locationID;
                    this.currentLocation.attributes.CITY = location.attributes.CITY;
                    this.currentLocation.attributes.BUILDING_NAME = location.attributes.BUILDING_NAME;
                    this.currentLocation.attributes.ROOM_NUMBER = location.attributes.ROOM_NUMBER;
                }
            });
        }
        else {
            this.currentLocation.attributes.CAMPUS_ID = null;
            this.currentLocation.attributes.CITY = "";
            this.currentLocation.attributes.BUILDING_NAME = "";
            this.currentLocation.attributes.ROOM_NUMBER = "";
        }
    }

    resetLists() {
        this.buildings = [];
        this.rooms = [];
        this.showCampusAlert = false;
        this.showBuildingAlert = false;
    }

    addLocationToReport(): void {
        this.reportService.addIncidentElement ( this.newLocation );
    }

    removeLocationFromReport(): void {
        if ( this.reference == null ) {
            return;
        }

        //if ( this.newLocation != null && this.newLocation.attributes.LOCATION_ID > 0 )
        this.reportService.removeIncidentElement ( this.newLocation, Config.LocationTable );
        this.reference.destroy();
    }

    getLocations(): void {
        this.locationService.locations.subscribe( locations => {
            this.locations = locations;
        });
        this.locationService.locationMap.subscribe( map => {
            this.locationMap = map;
        });
    }

    onSelectCampus(): void {
        this.showCampusAlert = false;
        this.currentLocation.attributes.BUILDING_NAME = "";
        this.locationMap.forEach( campus => {
            if ( campus.CAMPUS_ID == this.newLocation.attributes.CAMPUS_ID ) {
                this.buildings = campus.BUILDINGS;   
                this.newLocation.attributes.CITY = campus.CITY;
                this.newLocation.attributes.LOCATION_ID = null;       
                this.newLocation.attributes.BUILDING_NAME = "";
                this.newLocation.attributes.ROOM_NUMBER = "";          
            }
        } );
    }

    onSelectBuilding(): void {
        this.showBuildingAlert = false;
        this.currentLocation.attributes.ROOM_NUMBER = "";
        this.buildings.forEach( bldg => {
            if ( bldg.BUILDING_NAME === this.newLocation.attributes.BUILDING_NAME ) {
                this.rooms = bldg.ROOMS;
                this.newLocation.attributes.LOCATION_ID = null; 
                this.newLocation.attributes.ROOM_NUMBER = "";
            }
        });
    }

    onSelectRoom(): void {
        var index = this.locations.findIndex( loc =>
            loc.attributes.LOCATION_ID == this.newLocation.attributes.LOCATION_ID);
        // if ( index > 0 ) {
            this.newLocation.attributes.ROOM_NUMBER = this.locations[index].attributes.ROOM_NUMBER;
        // }
        // else {
            // this.newLocation.attributes.ROOM_NUMBER = "";
        // }
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
            // remove 1 object at index i
            this.locations.splice(i, 1);
        });
    }

    ngOnInit() {
        this.getLocations();
        this.addLocationToReport();
    }
}
