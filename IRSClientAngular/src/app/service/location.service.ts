import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Config } from '../util/config.service';
import { IncidentElementService } from '../service/incident-element.service';
import { IncidentElement } from '../component/report/incident-element';
import { Location, LocationMapping, Building, Room } from '../component/location/location';
import { Campus } from '../component/location/campus';
import 'rxjs/add/operator/toPromise';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LocationService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    locationsUrl = Config.LocationsURI;
    tableName = Config.LocationTable;
    campusArr: Campus[] = new Array;

    private bs_locations = new BehaviorSubject<Location[]>([]);
    locations = this.bs_locations.asObservable();

    private bs_locationMap = new BehaviorSubject<LocationMapping[]>([]);
    locationMap = this.bs_locationMap.asObservable();

    constructor( private http: Http ) {
        this.getCampus().then(
            response => { 
                this.campusArr = response as Campus[]; 
                this.getLocations().then(
                    response => { 
                        this.bs_locations.next(response); 
                        this.bs_locationMap.next(this.toLocationMapping(response));
                    });
            });
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

    findLocationId( location: Location ): number {
        var id = 0;
        var arr = this.bs_locations.getValue();
        var index = arr.findIndex( loc => 
            loc.attributes.CAMPUS_ID == location.attributes.CAMPUS_ID &&
            loc.attributes.BUILDING_NAME === location.attributes.BUILDING_NAME &&
            ( 
                (loc.attributes.ROOM_NUMBER === location.attributes.ROOM_NUMBER) || 
                (location.attributes.ROOM_NUMBER.length == 0 && loc.attributes.ROOM_NUMBER == '0')
            )
            );
        if ( index >= 0 ) {
            id = arr[index].attributes.LOCATION_ID;
        }
        return id;
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
        console.log(locationMap);
        locationMap.sort( function(a, b) { return a.CITY > b.CITY ? 1 : -1;});
        return locationMap;
    }

    private createCampusMap( campusId: number, city: string, locations: Location[] ): LocationMapping {
        var map = new LocationMapping();
        map.CAMPUS_ID = campusId;
        map.CITY = city;
        var buildings = [];
        locations.forEach( loc => {
            var buildingName = loc.attributes.BUILDING_NAME;
            if ( loc.attributes.CAMPUS_ID == campusId && buildings.indexOf( buildingName ) < 0 ) {
                buildings.push( buildingName );
                map.BUILDINGS.push( this.createBuildingMap( buildingName, locations ) );
            }
        });
        
        map.BUILDINGS.sort( function(a, b) { return a.BUILDING_NAME > b.BUILDING_NAME ? 1 : -1;});        
        
        return map;
    }

    private createBuildingMap( buildingName: string, locations: Location[] ): Building {
        var building = new Building();
        building.BUILDING_NAME = buildingName;

        var rooms = []
        locations.forEach ( loc => {
            if ( rooms.indexOf( loc.attributes.ROOM_NUMBER ) < 0 && loc.attributes.BUILDING_NAME === buildingName ) {
                rooms.push( loc.attributes.ROOM_NUMBER );

                var roomNum = "";
                if ( loc.attributes.ROOM_NUMBER != '0' )
                    roomNum = loc.attributes.ROOM_NUMBER;

                building.ROOMS.push( new Room( loc.attributes.LOCATION_ID, roomNum ) ) ;
            }
        } );

        building.ROOMS.sort( function(a, b) { return a.ROOM_NUMBER > b.ROOM_NUMBER ? 1 : -1;});        
        
        return building;
    }

    private handleError(error: any): Promise<any> {
        alert( "An error occurred." );
        console.error( 'An error occurred' , error ); // for demo purposes only
        return Promise.reject( error.message || error );
    }
}
