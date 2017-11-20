import { Injectable } from '@angular/core';
import { Person } from '../component/person/person';
import { IncidentElement } from '../component/report/incident-element';
import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Config } from '../util/config.service';
import { IncidentElementService } from '../service/incident-element.service';
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
    
    delete( id: number ) : Promise<boolean> {
        var url = `${this.personUrl}/${id}`;
        var promise = this.http
                .delete( url, { headers: this.headers } )
                .toPromise()
                .then( response => response.json() as boolean )
                .catch( this.handleError );
        return Promise.resolve( promise );
    };

    filter(personList : Person[], filter : Person) : Person[] {
        var filterList : Person [] = [];

        Object.assign(filterList , personList);
        // for(var i = 0; i < personList.length; i++){
        //     filterList.push(personList[i]);
        // }


        if (filter.attributes.FIRST_NAME != null){
            for (var i = 0; i < personList.length; i++) {
                if (!filterList[i].attributes.FIRST_NAME.toUpperCase().includes(filter.attributes.FIRST_NAME.toUpperCase())){
                    filterList.splice(i, 1);
                    i--;
                    console.log("removed element");  
                }
                // console.log(i);
                // console.log(filterList.length);
            }
        }
        if (filter.attributes.LAST_NAME != null){
            for (var i = 0; i < personList.length; i++){
                if (!filterList[i].attributes.LAST_NAME.toUpperCase().includes(filter.attributes.LAST_NAME.toUpperCase())){
                    filterList.splice(i, 1);
                    i--;
                }
            }
        }
        if(filter.attributes.PHONE_NUMBER != null){
            for (var i = 0; i < personList.length; i++){
                if (!filterList[i].attributes.PHONE_NUMBER.toString().includes(filter.attributes.PHONE_NUMBER.toString())){
                    filterList.splice(i, 1);
                    i--;
                }
            }
        }
        return filterList;
    }

    searchList( type: string, person: Person, personList : Person[] ) : void {
        var input, filter, ul, li;
        ul = document.getElementById("peopleDisplay");
        li = ul.getElementsByTagName('li');
    
        // Loop through all list items, and hide those who don't match the search query

        if ( type == "name" ) {
            for (var i = 0; i < personList.length; i++ ){
                if ((personList[i].attributes.FIRST_NAME.toUpperCase().indexOf(person.attributes.FIRST_NAME.toUpperCase()) > -1 && person.attributes.FIRST_NAME != "")
                    && (personList[i].attributes.LAST_NAME.toUpperCase().indexOf(person.attributes.LAST_NAME.toUpperCase()) > -1 && person.attributes.LAST_NAME != "")
                ){

                    li[i].style.display = "";
                
                } else {
                    li[i].style.display = "none";
                }
            }     
        } else if ( type == "number" ) {
            for (var i = 0; i < personList.length; i++ ){
                if (personList[i].attributes.PHONE_NUMBER.toString().indexOf(person.attributes.PHONE_NUMBER.toString()) > -1 ){
                    li[i].style.display = "";
                } else {
                    li[i].style.display = "none";
                }
            }
        }   
    }

    private handleError(error: any): Promise<any> {
        alert( "An error occurred." );
        console.error( 'An error occurred' , error ); // for demo purposes only
        return Promise.reject( error.message || error );
    }
}


