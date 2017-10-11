import { Injectable } from '@angular/core';
import { Staff } from '../model/staff';
import { IncidentElement } from '../model/incidentElement';
import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Config } from '../util/config.service';
import { DataHelperService } from '../util/dataHelper.service';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class StaffService {
    private headers = new Headers({'Content-Type': 'application/json'});
    staffUrl = Config.StaffURI;
    table = Config.StaffTable;
    constructor(private http: Http, private dataHelper : DataHelperService) {}

    getStaffs(): Promise<Staff[]> {
        var staffList = this.http.get( this.staffUrl )
            .toPromise()
            .then( response => this.dataHelper.extractColumnValues( response.json() ) as Staff[] )
            .catch( this.handleError );
        return Promise.resolve( staffList );
    };


    // create( staff: Staff ) : Promise<Staff> {
    //     var promise = this.http
    //             .post( this.staffUrl, JSON.stringify( staff ), { headers: this.headers } )
    //             .toPromise()
    //             .then( response => response.json() as Staff )
    //             .catch( this.handleError );
    //     return Promise.resolve( promise );
    // };

    update( staff: Staff ) : Promise<Staff> {
        var promise = this.http
                .put( this.staffUrl, JSON.stringify( this.dataHelper.toIncidentElement(this.table, staff) ), { headers: this.headers } )
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