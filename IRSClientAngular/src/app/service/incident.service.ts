import { Injectable } from '@angular/core';
import { DataHelperService } from '../util/data-helper.service';
import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Config } from '../util/config.service';
import 'rxjs/add/operator/toPromise';
import { Incident } from '../component/report/incident';
import { Category } from '../component/category/category';

@Injectable()
export class IncidentService 
{
    private headers = new Headers({'Content-Type': 'application/json'});
    incidentsUrl = Config.IncidentsURI;
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
            i.incidentElements.forEach( e => {
                if ( e.table == Config.CategoryTable ) {
                    i.category = e.attributes as Category;
                }
            });
        });
        return incidents;
    }

    create( incident: Incident ): Promise<Incident> {
        incident.table = Config.IncidentTable;
        incident.attributes.ACCOUNT_ID = 1;
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