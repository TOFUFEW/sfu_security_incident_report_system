import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { DataHelperService } from '../../util/data-helper.service';
import { Incident } from '../report/incident';
import { IncidentService } from '../../service/incident.service';
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

    export getElementIndexByID ( idToSearch: number, table: string ) {
        var key = "";
        var idToReference = -1;
        if ( table === Config.CategoryTable ) {
            key = Config.IncidentCategoryKey;
            idToReference = this.incidentElements[key].attributes.CATEGORY_ID;
        }
        else if ( table === Config.LocationTable ) {
            key = Config.LocationKey;
            idToReference = this.incidentElements[key].attributes.LOCATION_ID;   
        }         
        else if ( table === Config.StaffTable ) {
            key = Config.StaffKey
            idToReference = this.incidentElements[key].attributes.ACCOUNT_ID;
        }
        else if ( table === Config.PersonTable ) {
            key = Config.PersonKey;
            idToReference = this.incidentElements[key].attributes.PERSON_ID;            
        }
        else {
            console.log( "Table not found.");
            key = table;
        }

        this.incidentElements[key].forEach( element => {
            console.log(Config.LocationTable);
            if ( idToReference == idToSearch ) {
                return this.incidentElements[key].indexof(element);
            }
        })
        return -1;
    }
    
    swapElement( idToRemove: number, element: IncidentElement ) {
        var key = "";
        var table = element.table;
        var index = -1;
        if ( table === Config.CategoryTable ) 
            key = Config.IncidentCategoryKey;
        else if ( table === Config.LocationTable ) {
            key = Config.LocationKey;
            index = this.getElementIndexByID ( idToRemove, "Location" );
        }
        else if ( table === Config.StaffTable )
            key = Config.StaffKey
        else if ( table === Config.PersonTable ) 
            key = Config.PersonKey;
        else {
            console.log( "Table not found.");
            key = table;
        }
    
        if ( this.incidentElements[key] != null && index != -1 ) {
            this.incidentElements[key].splice( index, 1, element );
        }
    }

    changeLocation ( edit ) : void {
        var locationToRemoveIndex : number;
        var locationToRemoveLocally : number;
        var locationToAdd = this.locationModal.locationComponent.newLocation;
        var locationToRemove : Location;
                
        // Add new location
        if ( this.locationModal.button_id == -1 ) {
            this.incident.insertIncidentElement(locationToAdd);
        }
        else { 
            // this.incident.locationList.forEach( location => {
            //     if ( location.attributes.LOCATION_ID == this.locationModal.button_id ) {
            //         locationToRemoveLocally = this.incident.locationList.indexOf(location);     
            //     } 
            // });
            // this.incident.locationList.splice(locationToRemoveIndex, 1, locationToAdd);
            
            // console.log ( "location index ", locationToRemoveIndex );

            // this.incident.incidentElements['Location'].forEach( location => {
            //     console.log(Config.LocationTable);
            //     if ( location.attributes.LOCATION_ID == this.locationModal.button_id ) {
            //             locationToRemoveIndex = this.incident.incidentElements['Location'].indexOf(location);
            //     }
            // }); 
            this.incident.swapElement( locationToRemoveIndex, DataHelperService.toIncidentElement( Config.LocationTable, locationToAdd ));                
        }
        this.incidentsService.update ( this.incident );
        console.log( "new location list", this.incident.incidentElements['Location'] );
        // this.incidentsService.update( this.incident );
        console.log(this.incident);
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
     })     
    }
}

