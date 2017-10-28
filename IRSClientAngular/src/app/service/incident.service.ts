import { Injectable } from '@angular/core';
import { DataHelperService } from '../util/data-helper.service';
import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Config } from '../util/config.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/toPromise';
import { Incident } from '../component/report/incident';
import { Category } from '../component/category/category';
import { Location } from '../component/location/location';

@Injectable()
export class IncidentService 
{
    private headers = new Headers({'Content-Type': 'application/json'});
    incidentsUrl = Config.IncidentsURI;
    tableName = "";

    private bs_reportsToAddToWorkspace = new BehaviorSubject<Incident[]>( [] );
    reportsToAddToWorkspace = this.bs_reportsToAddToWorkspace.asObservable();

    private bs_lastRemovedId = new BehaviorSubject<number>( 0 );
    lastRemovedId = this.bs_lastRemovedId.asObservable();

    constructor( private http: Http ) {}

    addToWorkspace( incident: Incident ): void {
        var arr = this.bs_reportsToAddToWorkspace.getValue();
        arr.splice(0, 0, incident );
        this.bs_reportsToAddToWorkspace.next( arr );
    }

    removeFromWorkspace( id: number ) : void {
        this.bs_lastRemovedId.next( id );
        var arr = this.bs_reportsToAddToWorkspace.getValue();
        var index = arr.findIndex( i => i.attributes.REPORT_ID == id );
        arr.splice( index, 1 );
        this.bs_reportsToAddToWorkspace.next( arr );
    }
    
    getIncidents(): Promise<Incident[]> {
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