import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Config } from '../util/config.service';
import 'rxjs/add/operator/map';

@Injectable()
export class WSService {


    private webSocket: WebSocket;
    private recievedMsg: string;

    constructor(){

    }

    public GetInstanceStatus(): Observable<any> {
        this.webSocket = new WebSocket(Config.WSURI);

        this.webSocket.onopen = (event) => {
            this.webSocket.send("Hello Server");
        };

        /*
        let observer: any

        this.webSocket.onmessage = (event) => {
            return observer.next(event).share()
        }
        */

        return Observable.create( observer => {
            this.webSocket.onmessage = (event) => { 
                observer.next(event);
            };
        }).share();
    }

}
