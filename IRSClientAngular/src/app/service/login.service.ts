import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Config } from '../util/config.service';
import { IncidentElementService } from '../service/incident-element.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { User } from '../component/login/user';
import { IncidentElement } from '../component/report/incident-element';
import { NewAccount } from '../component/login/new-account';


@Injectable()
export class LoginService {
    private headers = new Headers( { 'Content-Type': 'application/json' } );
    loginUrl = Config.LoginURI;
    constructor( private http: Http ) { }

    doLogin( user: User ): Observable<User> {
        console.log( "user logging in", user );
        let options = new RequestOptions( { headers: this.headers } );
        console.log (" options ", options );
        console.log ( "user posting ", user );        
        // var _user = IncidentElementService.toIncidentElement ( Config.AccountTable, user );

        // HTTP RESPONSE
        return this.http
            .post(this.loginUrl, JSON.stringify( user ), options)
            .map ( response => response.json() as User );
    }

    createAccount( newAccount: NewAccount ) {
        var promise = this.http
            .post( Config.NewAccountURI, JSON.stringify( newAccount ), { headers: this.headers } )
            .toPromise()
            .then( response => {
                return response.json() as boolean; 
            })
            .catch( this.handleError );
        return Promise.resolve( promise );
    }

    validateNewAccount( newAccount: NewAccount ) {
        
    }

    private handleError( error: any ) : Promise<any>
    {
        alert( "An error occurred in login service." );
        console.error( 'An error occurred in login service' , error ); // for demo purposes only
        return Promise.reject( error.message || error );
    }
}
