import {Injectable} from "@angular/core";
import { Config } from '../util/config.service';
import {Http, Headers} from "@angular/http";
import {Incident} from "../component/report/incident";

@Injectable()
export class AssignGuardService {
    private headers = new Headers({'Content-Type': 'application/json'});
    updateIncidentUrl = Config.UpdateIncidentURI;

    constructor( private http: Http ) {}

    assignGuard( incident: Incident ) : Promise<Incident> {
        console.log("service assignGuard staff id = " + incident.attributes.ACCOUNT_ID);
        var promise = this.http
          .post( this.updateIncidentUrl, JSON.stringify( incident ), { headers: this.headers } )
          .toPromise()
          .then( response => {
              return( response.json() as boolean ) ? incident : null
          })
          .catch( this.handleError );
        return Promise.resolve( promise );
    }

    private handleError( error: any ) : Promise<any>
    {
      alert( "An error occurred." );
      console.error( 'An error occurred' , error ); // for demo purposes only
      return Promise.reject( error.message || error );
    }
}
