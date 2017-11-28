import { Injectable } from '@angular/core';
import { Person } from '../component/person/person';
import { IncidentElement } from '../component/report/incident-element';
import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Config } from '../util/config.service';
import { IncidentElementService } from '../service/incident-element.service';
import 'rxjs/add/operator/toPromise';
import { retry } from 'rxjs/operator/retry';

@Injectable()
export class PersonService {
    private headers = new Headers({'Content-Type': 'application/json'});
    personUrl = Config.PersonURI;
    tableName = Config.PersonTable;
    constructor(private http: Http) {}

    getPersons(): Promise<Person[]> {
        var personList = this.http.get( this.personUrl )
            .toPromise()
            .then( response => response.json() as Person[] )
            .catch( this.handleError );
        return Promise.resolve( personList );
    }

    search( person: Person ) : Promise<Person[]> {
        var personList = this.http.get( this.personUrl )
            .toPromise()
            .then( response => response.json() as Person[] )
            .catch(this.handleError );
        return Promise.resolve( personList );
    }

    create( person: Person ) : Promise<Person> {
        var promise : Promise<Person>= this.http
                .put( this.personUrl, JSON.stringify( person ), { headers: this.headers } )
                .toPromise()
                .then( response => response.json() as Person )
                .catch( this.handleError );
        return Promise.resolve( promise );
    };

    update( person: Person ) : Promise<Person> {
        var promise = this.http
            .put( this.personUrl, JSON.stringify( person ), { headers: this.headers } )
            .toPromise()
            .then( response => response.json() as Person )
            .catch( this.handleError );
        return Promise.resolve( promise );
    };

    personExists( person : Person ) : Promise<Person> {
        var promise = this.http
            .post( Config.PersonExistsURI, JSON.stringify( person ), { headers: this.headers } )
            .toPromise()
            .then( response => response.json() as Person )
            .catch( this.handleError );
        return Promise.resolve( promise );
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

    filter(filterList: Person[], personList : Person[], filter : Person) : void {

        Object.assign(filterList , personList);
        // for(var i = 0; i < personList.length; i++){
        //     filterList.push(personList[i]);
        // }
        if (filter.attributes.FIRST_NAME != null){
            for (var i = 0; i < personList.length; i++) {
                if( i >= filterList.length){
                    break;
                }
                if (!filterList[i].attributes.FIRST_NAME.toUpperCase().includes(filter.attributes.FIRST_NAME.toUpperCase())){
                    filterList.splice(i, 1);
                    i--;
                }
            }
        }
        if (filter.attributes.LAST_NAME != null){
            for (var i = 0; i < personList.length; i++){
                if( i >= filterList.length){
                    break;
                }
                if (!filterList[i].attributes.LAST_NAME.toUpperCase().includes(filter.attributes.LAST_NAME.toUpperCase())){
                    filterList.splice(i, 1);
                    i--;
                }
            }
        }
        if(filter.attributes.PHONE_NUMBER != null){
            for (var i = 0; i < personList.length; i++){
                if( i >= filterList.length){
                    break;
                }
                if (!filterList[i].attributes.PHONE_NUMBER.toString().includes(filter.attributes.PHONE_NUMBER.toString())){
                    filterList.splice(i, 1);
                    i--;
                }
            }
        }
        //return filterList;
    }


    private handleError(error: any): Promise<any> {
        alert( "An error occurred." );
        console.error( 'An error occurred' , error ); // for demo purposes only
        return Promise.reject( error.message || error );
    }
}


