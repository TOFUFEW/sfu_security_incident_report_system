import { Injectable } from '@angular/core';
import { DataHelperService } from '../util/data-helper.service';
import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Config } from '../util/config.service';
import 'rxjs/add/operator/toPromise';
import { Incident } from '../component/report/incident';
import { Category } from '../component/category/category';
import { Location } from '../component/location/location';
import {User} from "../component/login/user";
import {UserService} from "./user.service";




@Injectable()
export class IncidentService
{
    private headers = new Headers({'Content-Type': 'application/json'});
    incidentsUrl = Config.IncidentsURI;
    guardIncidentsUrl = Config.GuardIncidentsURI;
    private userService = new UserService;
    tableName = "";
    constructor( private http: Http ) {}

    getIncidents(): Promise<Incident[]> {
        console.log ("get incidents");
        var incidents = this.http.get( this.incidentsUrl )
            .toPromise()
            .then( response => this.initIncidents( response.json() as Incident[] ) as Incident[] )
            .catch( this.handleError );
        return Promise.resolve( incidents );
    };

    private initIncidents( incidents: Incident[] ): Incident[] {
        incidents.forEach(i => {
            i.locationList = [];
            i.incidentElements.forEach( e => {
                if ( e.table === Config.CategoryTable ) {
                    i.category = e.attributes as Category;
                }
                else if ( e.table === Config.LocationTable ) {
                    
                    i.locationList.push( e as Location )
                }

            });
        });
        console.log( incidents[incidents.length-1] );
        return incidents;
    }

    getGuardIncidents(): Promise<Incident[]> {
        var user = this.userService.getCurrentUser();
        // ** remove this after user authentication is set up that fetches user ID from database
        // user.ACCOUNT_ID = 5;
        console.log("guard", user);
        var _user = DataHelperService.toIncidentElement ( Config.AccountTable, user );
        var incidents = this.http
            .post( this.guardIncidentsUrl, JSON.stringify( _user ), { headers: this.headers } )
            .toPromise()
            .then( response => response.json() as Incident[] )
            .catch( this.handleError );
        console.log("got incidents");            
        return Promise.resolve( incidents );
    }

    getIncident( id: number ): Promise<Incident> {
        var incident = new Incident;
        console.log("report id: ", id);
        incident.attributes.REPORT_ID = id ;
        var returnIncident = this.http
            .post( Config.GetIncidentURI, JSON.stringify( incident ), { headers: this.headers } )
            .toPromise()
            .then( response => this.initIncidents( response.json() as Incident[] ) as Incident[] )
            .catch( this.handleError );
        console.log("got one incident");
        return Promise.resolve( returnIncident );
    }

    create( incident: Incident ): Promise<Incident> {
        incident.table = Config.IncidentTable;
        console.log("table name " + Config.IncidentTable);
        incident.attributes.ACCOUNT_ID = this.userService.getCurrentUser().ACCOUNT_ID;
        var promise = this.http
                .post( this.incidentsUrl, JSON.stringify( incident ), { headers: this.headers } )
                .toPromise()
                .then( response => {
                    return ( response.json() as boolean ) ? incident : null
                })
                .catch( this.handleError );
        console.log("created");                
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
