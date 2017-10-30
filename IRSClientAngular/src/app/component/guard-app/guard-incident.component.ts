import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Incident } from '../report/incident';
import { IncidentService } from '../../service/incident.service';
import { UserService } from '../../service/user.service';


@Component ({
  selector: 'guard-incident-component',
  templateUrl: './guard-incident.component.html',
})

export class GuardIncidentComponent implements OnInit {
    title = 'SFU Incident Reporting System';
    incident: Incident;  

  constructor ( 
        private incidentsService: IncidentService, 
        private router: Router,
        private http: HttpClient,
        private userService: UserService,
        private route: ActivatedRoute
    ) {
  
        if ( this.userService.isLoggedIn() == false ) {
            this.router.navigate([ 'login' ] );
        }
    }; 
  
//   getIncident( params ): void {
//     this.incidentsService.getIncidents().then( returnedIncidents => {
//       this.incidents = returnedIncidents;
//     } );    
//   }


//   addIncident(): void {
//     this.incidentsService.create( this.newIncident )
//         .then( returnedIncident => {
//             if ( returnedIncident != null  ) {
//               this.incidents.push( returnedIncident );
//               alert( "Incident successfully added!" );
//             }
//             else alert( "Add failed." );
//         } );
//     delete this.newIncident;
//     this.newIncident = new Incident();
//   }

//   updateIncident( incident: Incident ): void {
//     this.incidentsService.update( incident )
//         .then( returnedIncident => {
//             if ( returnedIncident != null  ) {
//               var i = this.incidents.findIndex( inc => inc.REPORT_ID === returnedIncident.REPORT_ID );
//               // remove 1 object at index i, replace it with returnedLocation
//               this.incidents.splice( i, 1, returnedIncident );
//               alert( "Incident successfully edited!" );
//             }
//             else alert( "Edit failed." );
//         } );
//   }

<<<<<<< HEAD
    ngOnInit() : void {
        console.log("in guard incident on init");
        this.route.paramMap
        .switchMap (( params: ParamMap ) => 
            this.incidentsService.getIncident ( +params.get ( 'id' )))
        .subscribe ( returnedIncident => {
            this.incident = returnedIncident;
        });
    }
}
=======
  ngOnInit() : void {
    this.getIncidents();
  }
}

>>>>>>> origin/master
