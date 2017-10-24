import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Config } from '../util/config.service';
import { DataHelperService } from '../util/data-helper.service';
import 'rxjs/add/operator/toPromise';
import { IncidentElement } from '../component/report/incident-element';
import { Location, LocationMapping, Building, Room } from '../component/location/location';

@Injectable()
export class LocationService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    locationsUrl = Config.LocationsURI;
    tableName = Config.LocationTable;
    constructor( private http: Http ) {}

    getLocations(): Promise<Location[]> {
        var locations = this.http.get( this.locationsUrl )
            .toPromise()
            .then( response => DataHelperService.extractAttributesArray( response.json() ) as Location[] )
            .catch( this.handleError );
        return Promise.resolve( locations );
    };

    create( location: Location ) : Promise<Location> {
        var promise = this.http
                .post( this.locationsUrl, JSON.stringify( DataHelperService.toIncidentElement( this.tableName, location ) ), { headers: this.headers } )
                .toPromise()
                .then( response => response.json() as Location )
                .catch( this.handleError );
        return Promise.resolve( promise );
    };

    update( location: Location ) : Promise<Location> {
        var promise = this.http
                .post( this.locationsUrl, JSON.stringify( DataHelperService.toIncidentElement( this.tableName, location ) ), { headers: this.headers } )
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
            if ( campusArr.indexOf( loc.CAMPUS_ID ) < 0 ) {
                campusArr.push( loc.CAMPUS_ID );
                locationMap.push( this.createCampusMap( loc.CAMPUS_ID, locations ) );
            }
        } );
        return locationMap;
    }

    private createCampusMap( campusId: number, locations: Location[] ): LocationMapping {
        var map = new LocationMapping();
        map.CAMPUS_ID = campusId;
        var buildings = [];
        locations.forEach( loc => {
            if ( loc.CAMPUS_ID == campusId && buildings.indexOf( loc.BUILDING_NAME ) < 0 ) {
                buildings.push( loc.BUILDING_NAME );
                map.BUILDINGS.push( this.createBuildingMap( loc.BUILDING_NAME, locations ) );
            }
        });

        return map;
    }

    private createBuildingMap( buildingName: string, locations: Location[] ): Building {
        var building = new Building();
        building.BUILDING_NAME = buildingName;

        var rooms = []
        locations.forEach ( loc => {
            if ( rooms.indexOf( loc.ROOM_NUMBER ) < 0 && loc.BUILDING_NAME === buildingName ) {
                rooms.push( loc.ROOM_NUMBER );
                building.ROOMS.push( new Room( loc.LOCATION_ID, loc.ROOM_NUMBER ) ) ;
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
