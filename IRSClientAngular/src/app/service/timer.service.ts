import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Config } from '../util/config.service';
import 'rxjs/add/operator/toPromise';
import { Timer } from '../component/timer/timer';
import { DataHelperService } from '../util/data-helper.service';

@Injectable()
export class TimerService{
    private headers = new Headers({'Content-Type': 'application/json'});
    timerUrl = Config.TimerURI;
    tableName = Config.TimerTable;
    constructor( private http: Http ) {}

    getTimers(): Promise<Timer[]> {
        var timerList : Promise<Timer[]>;
        // timerList = this.http.get( this.timerUrl )
        //     .toPromise()
        //     .then( response => response.json() as Timer[] )
        //     .catch( this.handleError );
        return Promise.resolve( timerList );
    };

    update( timer : Timer ) : Promise<Timer> {
        var promise :Promise<Timer>;
        // promise = this.http
        //         .put( this.timerUrl, JSON.stringify( this.tableName, timer), { headers: this.headers } )
        //         .toPromise()
        //         .then( response => response.json() as Timer )
        //         .catch( this.handleError );
        return Promise.resolve( promise );

    }



    private handleError() : void {
        alert("An error has occured");
    }
}