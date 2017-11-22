import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Config } from '../util/config.service';
// import { IncidentElementService } from '../service/incident-element.service';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { Staff } from '../component/staff/staff';
import { IncidentElement } from '../component/report/incident-element';
import { plainToClass } from "class-transformer";

@Injectable()
export class StaffService {
    private headers = new Headers({'Content-Type': 'application/json'});
    staffUrl = Config.StaffURI;
    tableName = Config.StaffTable;
    constructor(private http: Http ) {}

    
    getStaffs(): Promise<Staff[]> {
        var staffList = this.http.get( this.staffUrl )
            .toPromise()
            .then( response => plainToClass(Staff, response.json()) )
            .catch( this.handleError );
        return Promise.resolve( staffList );
    };
    
    /*
    getStaffsObs(): Observable<Staff[]> {
        let options = new RequestOptions( {headers: this.headers} );
        
        return this.http
            .get(this.staffUrl, options)
            .map((response: Response) =>
            staffList = plainToClass(Staff, response.json() ));
    }
    */


    update( staff: Staff ) : Promise<Staff> {
        var promise = this.http
                .put( this.staffUrl, JSON.stringify( staff ), { headers: this.headers } )
                .toPromise()
                .then( response => response.json() as Staff )
                .catch( this.handleError );
        return Promise.resolve( promise );
    };


    delete( id: number ) : Promise<boolean> {
        var url = `${this.staffUrl}/${id}`;
        var promise = this.http
                .delete( url, { headers: this.headers } )
                .toPromise()
                .then( response => response.json() as boolean )
                .catch( this.handleError );
        return Promise.resolve( promise );
    };

    private handleError(error: any): Promise<any> {
        console.error( 'An error occurred in staff service' , error ); // for demo purposes only
        return Promise.reject( error.message || error );
    }
}