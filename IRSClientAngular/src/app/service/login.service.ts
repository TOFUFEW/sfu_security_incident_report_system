import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Config } from '../util/config.service';
import { IncidentElementService } from '../service/incident-element.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { User } from '../component/login/user';
import { IncidentElement } from '../component/report/incident-element';



@Injectable()
export class LoginService {
    private headers = new Headers( { 'Content-Type': 'application/json' } );
    loginUrl = Config.LoginURI;
    constructor( private http: Http ) { }

    doLogin( user: User ): Observable<User> {
        let options = new RequestOptions( { headers: this.headers } );
        var _user = IncidentElementService.toIncidentElement ( Config.AccountTable, user );

        // HTTP RESPONSE
        return this.http
            .post(this.loginUrl, JSON.stringify( _user ), options)
            .map( ( response: Response ) =>
            IncidentElementService.extractAttributes( <IncidentElement>response.json() ) as User );
    }
}
