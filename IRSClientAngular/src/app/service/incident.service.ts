import { Injectable } from '@angular/core';
import { DataHelperService } from '../util/data-helper.service';
import { Incident } from '../model/incident';
import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Config } from '../util/config.service';
import 'rxjs/add/operator/toPromise';
import {User} from "../model/user";

@Injectable()
export class IncidentService
{
    private headers = new Headers({'Content-Type': 'application/json'});
    incidentsUrl = Config.IncidentsURI;
    guardIncidentsUrl = Config.GuardIncidentsURI;
    tableName = "";
    constructor( private http: Http ) {}

    getIncidents(): Promise<Incident[]> {
        console.log ("get incidents");
        var incidents = this.http.get( this.incidentsUrl )
            .toPromise()
            .then( response => response.json() as Incident[] )
            .catch( this.handleError );
        return Promise.resolve( incidents );
    };

    getGuardIncidents( user: User ): Promise<Incident[]> {
        var _user = DataHelperService.toIncidentElement ( Config.AccountTable, user );
        var incidents = this.http
            .post( this.guardIncidentsUrl, JSON.stringify( _user ), { headers: this.headers } )
            .toPromise()
            .then( response => response.json() as Incident[] )
            .catch( this.handleError );
        return Promise.resolve( incidents );
    }

    create( incident: Incident ): Promise<Incident> {
        incident.table = Config.IncidentTable;
        incident.attributes.ACCOUNT_ID = 1;
        incident.attributes.CATEGORY_ID = 1;
        var promise = this.http
                .post( this.incidentsUrl, JSON.stringify( incident ), { headers: this.headers } )
                .toPromise()
                .then( response => {
                    return ( response.json() as boolean ) ? incident : null
                })
                .catch( this.handleError );
        return Promise.resolve( promise );
    }

    update( incident: Incident ): Promise<Incident> {
        return this.create( incident );
    }

    delete( id: number ) : Promise<boolean> {
        var url = `${this.incidentsUrl}/${id}`;
        var promise = this.http
                .delete( url, { headers: this.headers } )
                .toPromise()
                .then( response => response.json() as boolean )
                .catch( this.handleError );
        return Promise.resolve( promise );
    };

    private handleError( error: any ) : Promise<any>
    {
        alert( "An error occurred." );
        console.error( 'An error occurred' , error ); // for demo purposes only
        return Promise.reject( error.message || error );
    }
}
