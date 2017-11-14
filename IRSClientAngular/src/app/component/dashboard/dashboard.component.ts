import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { Incident } from '../report/incident';
import { IncidentService } from '../../service/incident.service';
import { StaffService } from '../../service/staff.service';
import { UserService } from '../../service/user.service';
import { Config } from '../../util/config.service';
import { Staff } from '../staff/staff';


@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['../../../assets/css/dashboard.component.css'],
})

export class DashboardComponent implements OnInit {
    title = 'SFU Incident Reporting System';
    staffList: Staff[];
    reportsInWorkspace: Incident[];

    constructor(
        private router: Router,
        private http: HttpClient,
        private userService: UserService,
        private incidentService: IncidentService,
    ) {

        if ( this.userService.isLoggedIn() == false ) {
            this.router.navigate( [ 'login' ] );
        }
    
        /*
        var ws = new WebSocket ( Config.WebSocketURI );
        ws.onopen = function ()
        {  
            console.log ( "Socket has been opened!" );  
        };
        
        ws.onmessage = function ( message ) 
        {
            var messageObj = JSON.parse ( message.data );
            console.log("Received data from websocket: ", messageObj);
            //this.listener ( JSON.parse ( message.data ) );
        };
        */
    }

    sendRequest(request) : void {
      //var defer = $q.defer ();
      //var callbackId = getCallbackId ();
      //callbacks [ callbackId ] = {
      //  time: new Date (),
      //  cb:defer
      //};
      //request.callback_id = callbackId;
      //console.log('Sending request', request);
      //ws.send(JSON.stringify(request));
      //return defer.promise;
    }

    listener(data): void {
      var messageObj = data;
      console.log("Received data from websocket: ", messageObj);
      // If an object exists with callback_id in our callbacks object, resolve it
      //if(callbacks.hasOwnProperty(messageObj.callback_id)) {
      //  console.log(callbacks[messageObj.callback_id]);
      //  $rootScope.$apply(callbacks[messageObj.callback_id].cb.resolve(messageObj.data));
      // delete callbacks[messageObj.callbackID];
      //}
      //ngOnInit ();
    }

    newReport(): void {
        window.open("new-report", "_blank");
    }

    ngOnInit() {
        this.incidentService.reportsToAddToWorkspace
            .subscribe( reports => {
                this.reportsInWorkspace = reports as Incident[];
            });
    }
}
