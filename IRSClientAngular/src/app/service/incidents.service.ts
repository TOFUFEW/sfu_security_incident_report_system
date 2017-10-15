import { Injectable } from '@angular/core';
import { DataHelperService } from '../util/data-helper.service';
import { Incident } from '../model/incident';
import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Config } from '../util/config.service';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class IncidentsService
{
    private headers = new Headers({'Content-Type': 'application/json'});
    incidentsUrl = Config.IncidentsURI;
    tableName = "";
    constructor( private http: Http, private dataHelper: DataHelperService ) {}

    getIncidents(): Promise<Incident[]> {
        var incidents = this.http.get( this.incidentsUrl )
            .toPromise()
            .then( response => this.dataHelper.extractAttributes( response.json() ) as Incident[] )
            .catch( this.handleError );
        return Promise.resolve( incidents );
    };

    create( incident: Incident ): Promise<Incident> {
        console.log(incident);
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
