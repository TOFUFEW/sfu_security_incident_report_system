import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Config } from '../util/config.service';
import { DataHelperService } from '../util/data-helper.service';
import { User } from '../model/user';
import { IncidentElement } from '../model/incident-element';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class LoginService {
    private headers = new Headers( { 'Content-Type': 'application/json' } );
    loginUrl = Config.LoginURI;
    constructor( private http: Http ) { }

    doLogin( user: User ): Observable<User> {
        let options = new RequestOptions( { headers: this.headers } );
        var _user = DataHelperService.toIncidentElement ( Config.AccountTable, user );

        // HTTP RESPONSE
        return this.http
            .post(this.loginUrl, JSON.stringify( _user ), options)
            .map( ( response: Response ) =>
            DataHelperService.extractAttributes( <IncidentElement>response.json() ) as User );
    }
}
