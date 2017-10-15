import { Injectable } from '@angular/core';
import { Person } from '../model/person';
import { IncidentElement } from '../model/incident-element';
import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Config } from '../util/config.service';
import { DataHelperService } from '../util/data-helper.service';
import 'rxjs/add/operator/toPromise';

@Injectable ()
export class PersonService {
    private headers = new Headers({'Content-Type': 'application/json'});
    personUrl = Config.PersonURI;
    tableName = Config.PersonTable;
    constructor(private http: Http, private dataHelper : DataHelperService) {}

    getPersons(): Promise<Person[]> {
        var personList = this.http.get( this.personUrl )
            .toPromise()
            .then( response => this.dataHelper.extractAttributes( response.json() ) as Person[] )
            .catch( this.handleError );
        return Promise.resolve( personList );
    }

    update( person: Person ) : Promise<Person> {
        var promise = this.http
            .put( this.personUrl, JSON.stringify( this.dataHelper.toIncidentElement(this.tableName, person) ), { headers: this.headers } )
            .toPromise()
            .then( response => response.json() as Person )
            .catch( this.handleError );
        return Promise.resolve( promise );
    };

    
    delete( id: number ) : Promise<boolean> {
        var url = `${this.personUrl}/${id}`;
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


