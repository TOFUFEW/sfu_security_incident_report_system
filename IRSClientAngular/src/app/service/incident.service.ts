import { Injectable } from '@angular/core';
import { DataHelperService } from '../util/data-helper.service';
import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Config } from '../util/config.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Incident } from '../component/report/incident';
import { Category } from '../component/category/category';
import { Location } from '../component/location/location';
import { Person } from '../component/person/person'; 
import 'rxjs/add/operator/toPromise';
import { User } from "../component/login/user";
import { UserService } from "./user.service";
import { Staff } from '../component/staff/staff';
import { StaffService } from '../service/staff.service';

@Injectable()
export class IncidentService
{
    private headers = new Headers({'Content-Type': 'application/json'});
    incidentsUrl = Config.IncidentsURI;
    guardIncidentsUrl = Config.GuardIncidentsURI;
    private userService = new UserService;
    tableName = "";

    private bs_reportsToAddToWorkspace = new BehaviorSubject<Incident[]>( [] );
    reportsToAddToWorkspace = this.bs_reportsToAddToWorkspace.asObservable();

    private bs_lastRemovedId = new BehaviorSubject<number>( 0 );
    lastRemovedId = this.bs_lastRemovedId.asObservable();

    staffArr: Staff[] = [];
    constructor( private http: Http, private staffService: StaffService ) {
        this.staffService.getStaffs().then( returnedArr => {
            this.staffArr = returnedArr;
        });
    }

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
            var index = this.staffArr.findIndex( x => x.attributes.ACCOUNT_ID == i.attributes.ACCOUNT_ID );
            if ( index >= 0 ) {
                i.guard = this.staffArr[ index ];
            }

            i.locationList = [];
            i.personList = [];
            i.staffList = [];
            i.incidentElements.forEach( e => {
                if ( e.table === Config.CategoryTable ) {
                    i.category = e.attributes as Category;
                }
                else if ( e.table === Config.LocationTable ) {
                    i.locationList.push( e as Location );
                }
                else if ( e.table === Config.PersonTable ) {
                    i.personList.push ( e.attributes as Person );
                }
            });
        });
        console.log (incidents);
        return incidents;
    }

    getGuardIncidents(): Promise<Incident[]> {
        var user = this.userService.getCurrentUser();
        var _user = DataHelperService.toIncidentElement ( Config.AccountTable, user );
        var incidents = this.http
            .post( this.guardIncidentsUrl, JSON.stringify( _user ), { headers: this.headers } )
            .toPromise()
            .then( response => response.json() as Incident[] )
            .catch( this.handleError );
        return Promise.resolve( incidents );
    }

    getIncident( id: number ): Promise<Incident> {
        var incident = new Incident();
        incident.attributes.REPORT_ID = id ;
        var returnIncident = this.http
            .post( Config.GetIncidentURI, JSON.stringify( incident ), { headers: this.headers } )
            .toPromise()
            .then( response => response.json() as Incident )
            .catch( this.handleError );
        return Promise.resolve( returnIncident );
    }

    create( incident: Incident ): Promise<Incident> {
        if ( incident.attributes.ACCOUNT_ID == null ) {
            incident.attributes.ACCOUNT_ID = 7;
        }

        incident.table = Config.IncidentTable;
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
        if ( incident.attributes.ACCOUNT_ID == null ) {
            incident.attributes.ACCOUNT_ID = 7;
        }

        incident.table = Config.IncidentTable;
        var promise = this.http
                .post( Config.UpdateIncidentURI, JSON.stringify( incident ), { headers: this.headers } )
                .toPromise()
                .then( response => {
                    return ( response.json() as boolean ) ? incident : null
                })
                .catch( this.handleError );
        return Promise.resolve( promise );
    }

    assignToStaff( incident: Incident ): Promise<Incident> {
        if ( incident.attributes.ACCOUNT_ID == null ) {
            incident.attributes.ACCOUNT_ID = 7;
        }

        incident.table = Config.IncidentTable;
        var promise = this.http
                .post( Config.AssignIncidentURI, JSON.stringify( incident ), { headers: this.headers } )
                .toPromise()
                .then( response => {
                    console.log (response.json());
                    return ( response.json() as boolean ) ? incident : null
                })
                .catch( this.handleError );
        return Promise.resolve( promise );
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
