import { Injectable } from '@angular/core';
import { Person } from '../model/person';
import { IncidentElement } from '../model/incident-element';
import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Config } from '../util/config.service';
import { DataHelperService } from '../util/data-helper.service';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PersonService {
    private headers = new Headers({'Content-Type': 'application/json'});
    personUrl = Config.PersonURI;
    tableName = Config.PersonTable;
    constructor(private http: Http) {}

    getPersons(): Promise<Person[]> {
        var personList = this.http.get( this.personUrl )
            .toPromise()
            .then( response => DataHelperService.extractAttributesArray( response.json() ) as Person[] )
            .catch( this.handleError );
        return Promise.resolve( personList );
    }

    search( person: Person ) : Promise<Person[]> {
        var personList = this.http.get( this.personUrl )
            .toPromise()
            .then( response => DataHelperService.extractAttributes( response.json() ) as Person[] )
            .catch(this.handleError );
        return Promise.resolve( personList );
    }

    create( person: Person ) : Promise<Person> {
        var promise = this.http
                .put( this.personUrl, JSON.stringify( DataHelperService.toIncidentElement( this.tableName, person ) ), { headers: this.headers } )
                .toPromise()
                .then( response => response.json() as Person )
                .catch( this.handleError );
        return Promise.resolve( promise );
    };

    update( person: Person ) : Promise<Person> {
        var promise = this.http
            .put( this.personUrl, JSON.stringify( DataHelperService.toIncidentElement(this.tableName, person) ), { headers: this.headers } )
            .toPromise()
            .then( response => response.json() as Person )
            .catch( this.handleError );
        return Promise.resolve( promise );
    };


    addToIncident( person: Person ) : void {
    }

    
    delete( id: number ) : Promise<boolean> {
        var url = `${this.personUrl}/${id}`;
        var promise = this.http
                .delete( url, { headers: this.headers } )
                .toPromise()
                .then( response => response.json() as boolean )
                .catch( this.handleError );
        return Promise.resolve( promise );
    };

    searchList(personList : Person[]) : void {

        // Declare variables
        //apparently document.getElementbyId() does not work
        
        // var input, filter, ul, li;
        // input = document.getElementById('personInput');
        // filter = input.value.toUpperCase();
        // ul = document.getElementById("peopleDisplay");
        // li = ul.getElementsByTagName('li');
        
        // // Loop through all list items, and hide those who don't match the search query
        // for (var i = 0; i < personList.length; i++ ){
        //     if (personList[i].FIRST_NAME.toUpperCase().indexOf(filter) > -1 ){
        //         li[i].style.display = "";
        //     } else {
        //         li[i].style.display = "none";
        //     }
        // }        
    }

    private handleError(error: any): Promise<any> {
        alert( "An error occurred." );
        console.error( 'An error occurred' , error ); // for demo purposes only
        return Promise.reject( error.message || error );
    }
}


