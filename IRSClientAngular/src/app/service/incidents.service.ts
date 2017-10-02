import { Injectable } from '@angular/core';
import { Incidents } from './incidents';
import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class IncidentsService 
{
    private headers = new Headers({'Content-Type': 'application/json'});
    incidentsUrl = "http://localhost:4567/incidents";
    
    constructor( private http: Http ) {}

    getIncidents(): Promise<Incidents[]> 
    {
        var incidents = this.http.get( this.incidentsUrl )
            .toPromise()
            .then( response => response.json() as Incidents[] )
            .catch( this.handleError );
        return Promise.resolve( incidents );
    };

    private handleError(error: any): Promise<any> 
    {
        alert( "An error occurred." );
        console.error( 'An error occurred' , error ); // for demo purposes only
        return Promise.reject( error.message || error );
    }
}