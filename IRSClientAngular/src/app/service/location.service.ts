import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Config } from '../util/config.service';
import { IncidentElementService } from '../service/incident-element.service';
import { IncidentElement } from '../component/report/incident-element';
import { Location, LocationMapping, Building, Room } from '../component/location/location';
import { Campus } from '../component/location/campus';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LocationService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    locationsUrl = Config.LocationsURI;
    tableName = Config.LocationTable;
    campusArr: Campus[] = new Array;

    constructor( private http: Http ) {
        this.getCampus().then(
            response => { 
                this.campusArr = response as Campus[]; 
            }
        );
    }

    getLocations(): Promise<Location[]> {
        var locations = this.http.get( this.locationsUrl )
            .toPromise()
            .then( response => this.initLocations( response.json() as Location[] ) as Location[] )
            .catch( this.handleError );
        return Promise.resolve( locations );
    };

    initLocations( locations: Location[] ): Location[] {
        locations.forEach( element => {
            var index = this.campusArr.findIndex( c => c.attributes.CAMPUS_ID == element.attributes.CAMPUS_ID );
            if ( index >= 0 ) {
                element.attributes.CITY = this.campusArr[index].attributes.CITY;
            }
        });
        return locations;
    }
 
    getCampus(): Promise<any> {
        var promise = this.http
            .get(Config.GetCampusURI)
            .toPromise()
            .then( response => { return response.json() } )
            .catch( this.handleError );
        return Promise.resolve( promise );
    }

    create( location: Location ) : Promise<Location> {
        var promise = this.http
                .post( this.locationsUrl, JSON.stringify ( location ), { headers: this.headers } )
                .toPromise()
                .then( response => response.json() as Location )
                .catch( this.handleError );
        return Promise.resolve( promise );
    };

    update( location: Location ) : Promise<Location> {
        var promise = this.http
                .post( this.locationsUrl, JSON.stringify ( location ), { headers: this.headers } )
                .toPromise()
                .then( response => response.json() as Location )
                .catch( this.handleError );
        return Promise.resolve( promise );
    };

    delete( id: number ) : Promise<boolean> {
        var url = `${this.locationsUrl}/${id}`;
        var promise = this.http
                .delete( url, { headers: this.headers } )
                .toPromise()
                .then( response => response.json() as boolean )
                .catch( this.handleError );
        return Promise.resolve( promise );
    };

    toLocationMapping( locations: Location[] ) : LocationMapping[] {
        // Assuming 'locations' is not sorted
        let locationMap: LocationMapping[] = [];
        if ( locations == null ) return locationMap;

        var campusArr = [];
        locations.forEach( loc => {
            if ( campusArr.indexOf( loc.attributes.CAMPUS_ID ) < 0 ) {
                campusArr.push( loc.attributes.CAMPUS_ID );
                locationMap.push( this.createCampusMap( loc.attributes.CAMPUS_ID, loc.attributes.CITY, locations ) );
            }
        } );
        return locationMap;
    }

    private createCampusMap( campusId: number, city: string, locations: Location[] ): LocationMapping {
        var map = new LocationMapping();
        map.CAMPUS_ID = campusId;
        map.CITY = city;
        var buildings = [];
        locations.forEach( loc => {
            if ( loc.attributes.CAMPUS_ID == campusId && buildings.indexOf( loc.attributes.BUILDING_NAME ) < 0 ) {
                buildings.push( loc.attributes.BUILDING_NAME );
                map.BUILDINGS.push( this.createBuildingMap( loc.attributes.BUILDING_NAME, locations ) );
            }
        });

        return map;
    }

    private createBuildingMap( buildingName: string, locations: Location[] ): Building {
        var building = new Building();
        building.BUILDING_NAME = buildingName;

        var rooms = []
        locations.forEach ( loc => {
            if ( rooms.indexOf( loc.attributes.ROOM_NUMBER ) < 0 && loc.attributes.BUILDING_NAME === buildingName ) {
                rooms.push( loc.attributes.ROOM_NUMBER );
                building.ROOMS.push( new Room( loc.attributes.LOCATION_ID, loc.attributes.ROOM_NUMBER ) ) ;
            }
        } );
        return building;
    }

    private handleError(error: any): Promise<any> {
        alert( "An error occurred." );
        console.error( 'An error occurred' , error ); // for demo purposes only
        return Promise.reject( error.message || error );
    }
}
