import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Incident } from '../report/incident';
import { IncidentService } from '../../service/incident.service';
import { UserService } from '../../service/user.service';
import { NewReportService } from '../../service/new-report.service';
import { LocationModalComponent } from '../location/location-modal.component';


@Component ({
  selector: 'guard-incident-component',
  templateUrl: './guard-incident.component.html',
  styleUrls: ['../../../assets/css/guard-app.css'],  
})

export class GuardIncidentComponent implements OnInit {
    @ViewChild(LocationModalComponent) locationModal: LocationModalComponent
    title = 'SFU Incident Reporting System';
    incident: Incident; 

  constructor ( 
        private incidentsService: IncidentService, 
        private reportService: NewReportService,
        private userService: UserService,        
        private router: Router,
        private http: HttpClient,
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

    saveReport(): void {
        this.incidentsService.update( this.incident )
            .then( returnedIncident => {
                if ( returnedIncident != null  ) {
                alert( "Incident successfully edited!" );
                }
                else alert( "Edit failed." );
            } );
    }
      
    public show() : void {
        var locationModal: HTMLElement = document.getElementById("modalLocation");
        locationModal.style.visibility = "true";
        // setTimeout(() => locationModal.visibleAnimate = true, 100);
    }

    public hide() : void {
        var locationModal: HTMLElement = document.getElementById("modalLocation");
        setTimeout(() => locationModal.style.visibility = "false", 300);
    }

    public onContainerClicked ( event: MouseEvent ) : void {
        if ((<HTMLElement>event.target).classList.contains('modal')) {
        this.hide();
        }
    }

    changeLocation( edit ) : void {
        var locationToRemoveIndex : number;
        this.incident.locationList.map( (location, key) => {
            if ( location.attributes.LOCATION_ID == this.locationModal.button_id ) {
                locationToRemoveIndex = this.incident.locationList.indexOf(location);     
            } 
        });
        console.log(locationToRemoveIndex);
        var locationToAdd = this.locationModal.locationComponent.newLocation;        
        this.incident.locationList.splice(locationToRemoveIndex, 1, locationToAdd);
        // this.incident.locationList.push(locationToAdd);
        console.log( this.incident.locationList );
    }

    initializeReportService () : void {
        this.incident.incidentElements = this.reportService.collectIncidentElements( this.incident.category );              
        console.log(this.incident.category);          
        this.reportService.currentLocations
        .subscribe ( locations => {
            this.incident.locationList = locations;
            console.log( "locations in new service ", this.incident.locationList);            
        });   
    }

    ngOnInit() : void {
        console.log ( "in guard incident on init" );
        this.route.paramMap
        .switchMap (( params: ParamMap ) => 
            this.incidentsService.getIncident ( +params.get ( 'id' )))
        .subscribe ( returnedIncident => {
            this.incident = returnedIncident;
            console.log("returned incident" , this.incident);        
        }, 
        () => {
            this.initializeReportService();
        });
    }
}