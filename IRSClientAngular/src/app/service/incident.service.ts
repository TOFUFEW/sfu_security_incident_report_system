import { Injectable } from '@angular/core';
import { plainToClass } from "class-transformer";
import { Observable } from 'rxjs';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Config } from '../util/config.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Incident } from '../component/report/incident';
import { IncidentElement } from '../component/report/incident-element';
import { Category } from '../component/category/category';
import { Location } from '../component/location/location';
import { Campus } from '../component/location/campus';
import { Person } from '../component/person/person';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { User } from "../component/login/user";
import { UserService } from "./user.service";
import { Staff } from '../component/staff/staff';
import { StaffService } from '../service/staff.service';
import { LocationService } from '../service/location.service';

@Injectable()
export class IncidentService
{
    private headers = new Headers({'Content-Type': 'application/json'});
    incidentsUrl = Config.IncidentsURI;
    updateIncidentsUrl = Config.UpdateIncidentsURI;
    guardIncidentsUrl = Config.GuardIncidentsURI;
    private userService = new UserService;

    private bs_reportsToAddToWorkspace = new BehaviorSubject<Incident[]>( [] );
    reportsToAddToWorkspace = this.bs_reportsToAddToWorkspace.asObservable();

    private bs_lastRemovedId = new BehaviorSubject<number>( 0 );
    lastRemovedId = this.bs_lastRemovedId.asObservable();

    staffArr: Staff[] = [];
    campusArr: Campus[] = [];

    constructor( private http: Http, 
        private staffService: StaffService,
        private locationService: LocationService) 
    {
        this.staffService.getStaffs().then( returnedArr => {
            this.staffArr = returnedArr;
        });
        this.locationService.getCampus().then( response => {
            this.campusArr = response as Campus[];
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

    /*
    getIncidents(): Promise<Incident[]> {
        var incidents = this.http.get( this.incidentsUrl )
            .toPromise()
            .then( response => this.initIncidents( response.json() as Incident[] ) as Incident[] )
            .catch( this.handleError );
        return Promise.resolve( incidents );
    };
    */

    getIncidents(): Observable<Incident[]> {
        let options = new RequestOptions({headers: this.headers});
        
        return this.http
            .get(this.incidentsUrl, options)
            .map((response: Response) => 
            this.initIncidents(plainToClass(Incident, response.json()))
        )
    }

    doSearch(query: String): Observable<Incident[]> {
        let options = new RequestOptions({headers: this.headers});

        return this.http
            .post(Config.SearchIncidentsURI, query, options)
            .map((response: Response) => 
            this.initIncidents(plainToClass(Incident, response.json()))
        )
    }

    getGuardIncidents(): Promise<Incident[]> {
        var user = this.userService.getCurrentUser();
        // var _user = IncidentElementService.toIncidentElement ( Config.AccountTable, user );
        var incidents = this.http
            .post( this.guardIncidentsUrl, JSON.stringify( user ), { headers: this.headers } )
            .toPromise()
            .then( response => this.initIncidents( response.json() as Incident[] )as Incident[] )
            .catch( this.handleError );
        return Promise.resolve( incidents );
    }

    getIncident( id: number ): Promise<Incident> {
        var incidentToGet = new Incident();
        incidentToGet.attributes.REPORT_ID = id ;
        var returnedIncident = this.http
            .post( Config.GetIncidentURI, JSON.stringify( incidentToGet ), { headers: this.headers } )
            .toPromise()
            .then( response => this.initializeIncident( response.json() as Incident ) as Incident )
            .catch( this.handleError );
        return Promise.resolve( returnedIncident );
    }

    create( incident: Incident ): Promise<Incident> {
        // TEMPORARY
        if ( incident.attributes.ACCOUNT_ID == null ) {
            if ( this.staffArr.length > 0 ) 
                incident.attributes.ACCOUNT_ID = this.staffArr[0].attributes.ACCOUNT_ID;
        }
        this.toSearchString(incident);
        incident.table = Config.IncidentTable;
        /*
        var promise = this.http
                .post( this.incidentsUrl, JSON.stringify(incident), { headers: this.headers } )
                .toPromise()
                .then( response => {
                    return ( response.json() as boolean ) ? incident : null
                })
                .catch( this.handleError );
                */
        return Promise.resolve( null );
    }

    update( incident: Incident ): Promise<Incident> {        
        if ( incident.attributes.ACCOUNT_ID == null ) {
            incident.attributes.ACCOUNT_ID = this.userService.getCurrentUser().attributes.ACCOUNT_ID;
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

    delete( id: number ) : Promise<boolean> {
        var url = `${this.incidentsUrl}/${id}`;
        var promise = this.http
                .delete( url, { headers: this.headers } )
                .toPromise()
                .then( response => response.json() as boolean )
                .catch( this.handleError );
        return Promise.resolve( promise );
    };

    private initIncidents( incidents: Incident[] ): Incident[] {
        incidents.forEach(i => {
            this.initializeIncident(i);
        });
        return incidents;
    }

    private initializeIncident( incident: Incident ): Incident {
        incident.category = incident.incidentElements[Config.IncidentCategoryKey][0] as Category;
        incident.guard = incident.incidentElements[Config.StaffKey][0] as Staff;
        incident.incidentElements[Config.LocationKey]
            .forEach( element => {
                var index = this.campusArr.findIndex( 
                    c => c.attributes.CAMPUS_ID == (element as Location).attributes.CAMPUS_ID 
                );
                if ( index >= 0 )
                    (element as Location).attributes.CITY = this.campusArr[index].attributes.CITY;
            });
        return incident;
    }

    private handleError( error: any ) : Promise<any>
    {
        alert( "An error occurred." );
        console.error( 'An error occurred' , error ); // for demo purposes only
        return Promise.reject( error.message || error );
    }

    // SEARCH TEXT FOR SEARCHING IN THE DATABASE
    private toSearchString(incident: Incident) {
        incident.searchString = incident.attributes.REPORT_ID
        + " " + incident.attributes.DESCRIPTION 
        + " " + incident.attributes.EXECUTIVE_SUMMARY;

        var map = incident.incidentElements;

        // iterate through each incident element and add them to the search string
        map.forEach((value: IncidentElement[], key: String) => {
            var elementArray = value;
            elementArray.forEach(element => {
                console.log("This element's search string is: " + element.toSearchString());
                incident.searchString = incident.searchString + " " + element.toSearchString();
            });
        });

        debugger;
        incident.attributes.SEARCH_TEXT = incident.searchString;
        console.log(incident.attributes.SEARCH_TEXT);
    }
}
