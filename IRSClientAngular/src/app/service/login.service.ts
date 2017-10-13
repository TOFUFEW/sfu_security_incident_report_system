import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Config } from '../util/config.service';
import { DataHelperService } from '../util/data-helper.service';
import { User } from '../model/user';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class LoginService {
    private headers = new Headers( { 'Content-Type': 'application/json' } );
    loginUrl = Config.LoginURI;
    constructor( private http: Http, private dataHelper: DataHelperService ) { }

    doLogin( user: User ): Observable<string> {
        let options = new RequestOptions( { headers: this.headers } );
        var _user = this.dataHelper.toStorageObject ( Config.AccountTable, user );
        return this.http.post( this.loginUrl, 
            JSON.stringify( _user ), 
            options )
                // response becomes a string
                .map( ( response: Response ) => <string> response.json() );
    }
}
