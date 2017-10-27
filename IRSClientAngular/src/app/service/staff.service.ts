import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Config } from '../util/config.service';
import { DataHelperService } from '../util/data-helper.service';
import 'rxjs/add/operator/toPromise';
import { Staff } from '../component/staff/staff';
import { IncidentElement } from '../component/report/incident-element';

@Injectable()
export class StaffService {
    private headers = new Headers({'Content-Type': 'application/json'});
    staffUrl = Config.StaffURI;
    tableName = Config.StaffTable;
    constructor(private http: Http ) {}

    getStaffs(): Promise<Staff[]> {
        var staffList = this.http.get( this.staffUrl )
            .toPromise()
            .then( response => DataHelperService.extractAttributesArray( response.json() ) as Staff[] )
            .catch( this.handleError );
        return Promise.resolve( staffList );
    };



    update( staff: Staff ) : Promise<Staff> {
        var promise = this.http
                .put( this.staffUrl, JSON.stringify( DataHelperService.toIncidentElement(this.tableName, staff) ), { headers: this.headers } )
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
        alert( "An error occurred." );
        console.error( 'An error occurred' , error ); // for demo purposes only
        return Promise.reject( error.message || error );
    }
}