import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Incident } from '../report/incident';
import { IncidentService } from '../../service/incident.service';
import { UserService } from '../../service/user.service';
import { NewReportService } from '../../service/new-report.service';
import { Location } from '../location/location';
import { LocationModalComponent } from '../location/location-modal.component';
import { Config } from '../../util/config.service';

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
        // this.reportService.addElementsFromIncident ( this.incident.incidentElements, this.incident.locationList );
        var locationToRemoveIndex : number;
        var locationToRemoveLocally : number;
        var locationToAdd = this.locationModal.locationComponent.newLocation;
        var locationToRemove : Location;
        
        // console.log("report service incident elements", this.reportService.incidentElements);        
     
        this.incident.locationList.forEach( location => {
            if ( location.attributes.LOCATION_ID == this.locationModal.button_id ) {
                locationToRemoveLocally = this.incident.locationList.indexOf(location);     
            } 
        });
        this.incident.locationList.splice(locationToRemoveIndex, 1, locationToAdd);
        
        console.log ( "location index ", locationToRemoveIndex );

        // this.reportService.removeIncidentElement( locationToRemove, Config.LocationTable);        
        this.incident.incidentElements.forEach( element => {
            console.log(Config.LocationTable);
            console.log("element table", element.table);
            var locationElement = element as Location;
            if (( element.table == Config.LocationTable ) && 
                ( locationElement.attributes.LOCATION_ID == this.locationModal.button_id )) {
                    locationToRemoveIndex = this.incident.incidentElements.indexOf(element);
            }
        }); 
        this.incident.incidentElements.splice(locationToRemoveIndex, 1, locationToAdd);
        console.log( "new location list", this.incident.incidentElements );
        // this.incidentsService.update( this.incident );
        console.log(this.incident);
    }

    initializeReportService () : void {
        this.reportService.addElementsFromIncident ( this.incident.incidentElements, this.incident.locationList );
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
        })
    }
}