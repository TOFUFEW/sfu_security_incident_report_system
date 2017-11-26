import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule, ActivatedRoute, ParamMap, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Incident } from '../report/incident';
import { IncidentElement} from '../report/incident-element';
import { IncidentService } from '../../service/incident.service';
import { IncidentElementService } from '../../service/incident-element.service';
import { UserService } from '../../service/user.service';
import { Location } from '../location/location';
import { LocationModalComponent } from '../location/location-modal.component';
import { CategoryComponent } from '../category/category.component';
import { CategoryService } from '../../service/category.service';
import { Config } from '../../util/config.service';
import { InlineEditComponent } from '../../component/report/inline-edit.component'
import { Output } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'guard-incident-component',
  templateUrl: './guard-incident.component.html',
  styleUrls: ['../../../assets/css/guard-app.css'],
})

export class GuardIncidentComponent implements OnInit {     
    @ViewChild ( LocationModalComponent ) locationModal: LocationModalComponent     
    @ViewChild ( CategoryComponent ) categoryModal: CategoryComponent  
    @ViewChild ( InlineEditComponent ) inlineEdit: InlineEditComponent
    title = 'SFU Incident Reporting System';     
    incident: Incident = new Incident();
    locationModalStr = "location-modal";

    isEditingDesc: boolean = false;
    newDescription: string = "";
    isEditingSummary: boolean = false;
    newSummary: string = "";
    alertMessage: string = "";
    showAlertDescription: boolean = false;
    showAlert: boolean = false;    
    alertClass: string = "";

    constructor (
        private incidentsService: IncidentService,
        private incidentElementService: IncidentElementService,
        private categoryService: CategoryService,
        private userService: UserService,
        private router: Router,
        private http: HttpClient,
        private route: ActivatedRoute
    ) {
        if ( this.userService.isLoggedIn() == false ) {
            this.router.navigate([ 'login' ] );
        }
    };

    viewAllReports() {
        this.router.navigate([ 'guard-app/reports-all' ] );
    }

    toggleEditMode( attribute: string ) {
        if ( attribute == null ) return;
        if ( attribute.toLowerCase() === "description" )
            this.isEditingDesc = !this.isEditingDesc;
        else if ( attribute.toLowerCase() === "summary" )
            this.isEditingSummary = !this.isEditingSummary;
    }

    revertChanges( attribute: string ) {
        if ( attribute == null ) return;
        if ( attribute.toLowerCase() === "description" )
            this.newDescription = this.incident.attributes.DESCRIPTION;
        else if ( attribute.toLowerCase() === "summary" )
            this.newSummary = this.incident.attributes.EXECUTIVE_SUMMARY;

        this.toggleEditMode( attribute );
    }

    toggleSuccessMessage() {
        this.showAlert = !this.showAlert;
    }

    incidentSavedAlert () {
        this.toggleSuccessMessage ();   
        this.alertMessage = "Successfully saved";
        this.alertClass = "alert alert-success top-alert";
        setTimeout ( () => {
            this.toggleSuccessMessage(); 
        }, 
            1800 
        );                        
    }

    incidentSavedErrorAlert () {
        this.toggleSuccessMessage ();                                                            
        this.alertMessage = "Edit failed" ;
        this.alertClass = "alert alert-danger top-alert";
        setTimeout ( () => {
            this.toggleSuccessMessage (); 
        }, 
            1800 
        );                        
    }

    saveReport ( attribute: string ): void {
        this.incident.attributes.DESCRIPTION = this.newDescription;
        this.incident.attributes.EXECUTIVE_SUMMARY = this.newSummary;
        this.incidentsService.update ( this.incident )
            .then( returnedIncident => {
                if ( returnedIncident != null  ) {
                    this.incidentSavedAlert ();
                }
                else {
                    this.incidentSavedErrorAlert ();
                }
            } );                      
        this.toggleEditMode ( attribute );            
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

    incidents = [{ editing:false }];

    editContent = function ( incident ) {
        incident.editing = true;
    }

    doneEditing = function ( incident ) {
        incident.editing = false;
    }


    public hideEditContent() {
        var contentToEdit: HTMLElement = document.getElementById("contentToEdit");
        contentToEdit.style.visibility = "true";

        var editor: HTMLElement = document.getElementById("editor");
        editor.style.visibility = "false";
    }

    public onContainerClicked ( event: MouseEvent ) : void {
        if ((<HTMLElement>event.target).classList.contains('modal')) {
        this.hideModal();
        }
    }

    changeLocation ( event ) {
        console.log("event emitted ", event);
        var locationToAdd = this.locationModal.locationComponent.newLocation;
        var locationToRemove = -1;
        locationToRemove = this.locationModal.button_id;

        if ( locationToRemove == -1 ) {
            // Add new location 
            var incident = this.incidentElementService.addElement ( this.incident, locationToAdd )
                .then ( incident => {
                    return incident;
                });
        }
        else {
            // Change existing location
            var incident = this.incidentElementService.changeElement ( this.incident, locationToRemove, locationToAdd )
                .then ( incident => {
                    return incident;
                });
            }
        if ( Promise.resolve ( incident ) == null ) {
            this.incidentSavedErrorAlert ();            
        }
        else {
            this.incidentSavedAlert ();            
        }

        this.locationModal.locationComponent.newLocation = new Location(); // reset
        var locationToInsert: Location = new Location();
    }

    removeLocation() {
        var locationToRemove = -1;
        locationToRemove = this.locationModal.button_id;

        var incident = this.incidentElementService.removeElement ( this.incident, locationToRemove, Config.LocationTable )
                .then ( incident => {
                    return incident;
                });


        if ( Promise.resolve ( incident ) == null ) {
            this.incidentSavedErrorAlert ();            
        }
        else {
            this.incidentSavedAlert ();            
        }

        this.locationModal.locationComponent.newLocation = new Location(); // reset
        var locationToInsert: Location = new Location();
    }

    changeCategory ( newCategoryID ) {
        this.incident.attributes.CATEGORY_ID = newCategoryID;
        var incident = this.incidentsService.changeIncidentCategory ( this.incident, newCategoryID, this.categoryModal.selectedCategory )
            .then ( incident => {
                return incident;
            });
        if ( Promise.resolve(incident) == null ) {
            this.incidentSavedErrorAlert ();            
        }
        else {
            this.incidentSavedAlert ();  
        }
    }

    changeDescription() {
        var description = this.inlineEdit.value;
        this.incident.attributes.DESCRIPTION = description;
    }

    changeSummary() {
        var summary = this.inlineEdit.value;
        this.incident.attributes.EXECUTIVE_SUMMARY = summary;
    }

    changeIncidentCategory ( incident, newCategoryID, selectedCategory ) {
        incident.category.CATEGORY_ID = newCategoryID;
        incident.attributes.CATEGORY_ID = newCategoryID;
        incident.category.attributes.MAIN_CATEGORY = selectedCategory.attributes.MAIN_CATEGORY;
        incident.category.attributes.SUB_CATEGORY = selectedCategory.attributes.SUB_CATEGORY;
        incident.category.attributes.INCIDENT_TYPE = selectedCategory.attributes.INCIDENT_TYPE;      
        incident.incidentElements[Config.IncidentCategoryKey]
            .splice(0, incident.incidentElements[Config.IncidentCategoryKey].length,
                    incident.category);
        this.incidentsService.update ( incident );            
    }
       
    newReport() {
        this.router.navigate( [ 'new-report' ] );
    }

    ngOnInit() : void {
        this.route.paramMap
        .switchMap (( params: ParamMap ) =>
            this.incidentsService.getIncident ( +params.get ( 'id' )))
        .subscribe ( returnedIncident => {
            this.incident = returnedIncident;
            console.log("returned incident" , this.incident);
            this.newDescription = this.incident.attributes.DESCRIPTION;
            this.newSummary = this.incident.attributes.EXECUTIVE_SUMMARY;
        });
    }
}

    
