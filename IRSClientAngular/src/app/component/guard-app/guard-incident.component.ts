import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule, ActivatedRoute, ParamMap, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { DataHelperService } from '../../util/data-helper.service';
import { Incident } from '../report/incident';
import { IncidentService } from '../../service/incident.service';
import { IncidentElementService } from '../../service/incident-element.service';
import { UserService } from '../../service/user.service'; 
import { NewReportService } from '../../service/new-report.service'; 
import { Location } from '../location/location'; 
import { LocationModalComponent } from '../location/location-modal.component'; 
import { CategoryComponent } from '../category/category.component'; 
import { Config } from '../../util/config.service';


@Component({
  selector: 'guard-incident-component',
  templateUrl: './guard-incident.component.html',
  styleUrls: ['../../../assets/css/guard-app.css'],  
})

export class GuardIncidentComponent implements OnInit {     
    @ViewChild(LocationModalComponent) locationModal: LocationModalComponent     
    @ViewChild(CategoryComponent) categoryModal: CategoryComponent        
    title = 'SFU Incident Reporting System';     
    incident: Incident = new Incident();
    
    constructor (         
        private incidentsService: IncidentService,
        private incidentElementService: IncidentElementService,  
        private activatedRoute: ActivatedRoute,       
        private reportService: NewReportService,         
        private userService: UserService,                
        private router: Router,         
        private http: HttpClient,         
        private route: ActivatedRoute  
    ) {

        if ( this.userService.isLoggedIn() == false ) 
        {             
            this.router.navigate([ 'login' ] );         
        }     
    }; 


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
      
    public showModal() : void {
        var locationModal: HTMLElement = document.getElementById("modalLocation");
        locationModal.style.visibility = "true";
        // setTimeout(() => locationModal.visibleAnimate = true, 100);
    }

    public hideModal() : void {
        var locationModal: HTMLElement = document.getElementById("modalLocation");
        setTimeout(() => locationModal.style.visibility = "false", 300);
    }

    public onContainerClicked ( event: MouseEvent ) : void {
        if ((<HTMLElement>event.target).classList.contains('modal')) {
        this.hideModal();
        }
    }

    changeLocation() {
        var locationToAdd = this.locationModal.locationComponent.newLocation;
        console.log( "locations to add ", locationToAdd.attributes.LOCATION_ID );
        var locationToRemove = -1;
        locationToRemove = this.locationModal.button_id;
        console.log ( "location to remove ", locationToRemove );

        if ( locationToRemove == -1 ) {
            // Add new location 
            console.log("adding location " );
            this.incidentElementService.addElement ( this.incident, locationToAdd );
        }
        else {
            console.log("change location " );
            // Change existing location
            this.incidentElementService.changeElement ( this.incident, locationToRemove, locationToAdd );
        }
    }

    changeCategory( newCategoryID ) : void {
        console.log("change category in incident", newCategoryID);
        this.incident.category.CATEGORY_ID = newCategoryID;
        this.incident.attributes.CATEGORY_ID = newCategoryID;
        this.incident.category.MAIN_CATEGORY = this.categoryModal.selectedCategory.MAIN_CATEGORY;
        this.incident.category.SUB_CATEGORY = this.categoryModal.selectedCategory.SUB_CATEGORY;
        this.incident.category.INCIDENT_TYPE = this.categoryModal.selectedCategory.INCIDENT_TYPE;
        this.incident.incidentElements[Config.IncidentCategoryKey]
            .splice(0, this.incident.incidentElements[Config.IncidentCategoryKey].length,
                    this.incident.category);

        this.incidentsService.update ( this.incident );
    }

    ngOnInit() : void {         
        console.log ( "in guard incident on init" );         
        this.route.paramMap         
        .switchMap (( params: ParamMap ) =>             
            this.incidentsService.getIncident ( +params.get ( 'id' )))         
        .subscribe ( returnedIncident => {             
            this.incident = returnedIncident;       
            console.log("returned incident" , this.incident);           
        });
    }
}

