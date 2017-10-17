import { Injectable } from '@angular/core';
import { IncidentElement } from '../model/incident-element';
import { Location } from '../model/location';
import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Config } from '../util/config.service';
import { DataHelperService } from '../util/data-helper.service';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LocationService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    locationsUrl = Config.LocationsURI;
    tableName = Config.LocationTable;
    constructor( private http: Http ) {}

    getLocations(): Promise<Location[]> {
        var locations = this.http.get( this.locationsUrl )
            .toPromise()
            .then( response => DataHelperService.extractAttributes( response.json() ) as Location[] )
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

    private handleError(error: any): Promise<any> {
        alert( "An error occurred." );
        console.error( 'An error occurred' , error ); // for demo purposes only
        return Promise.reject( error.message || error );
    }
}
