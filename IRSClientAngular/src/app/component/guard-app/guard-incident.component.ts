import { Component, OnInit, ViewChild } from '@angular/core';
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
    @ViewChild(LocationModalComponent) locationModal: LocationModalComponent
    @ViewChild(CategoryComponent) categoryModal: CategoryComponent
    @ViewChild(InlineEditComponent) inlineEdit: InlineEditComponent
    title = 'SFU Incident Reporting System';
    incident: Incident = new Incident();
    locationModalStr = "location-modal";

    isEditingDesc: boolean = false;
    newDescription: string = "";
    isEditingSummary: boolean = false;
    newSummary: string = "";
    alertMessage: string = "";
    showAlertDescription: boolean = false;
    showAlertSummary: boolean = false;
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

    toggleSuccessMessage( attribute: string ) {
        if ( attribute == "description" ) {
            this.showAlertDescription = !this.showAlertDescription;
        }
        else if ( attribute == "summary" ) {
            this.showAlertSummary = !this.showAlertSummary;
        }
    }

    saveReport ( attribute: string ): void {
        this.incident.attributes.DESCRIPTION = this.newDescription;
        this.incident.attributes.EXECUTIVE_SUMMARY = this.newSummary;
        this.incidentsService.update ( this.incident )
            .then( returnedIncident => {
                if ( returnedIncident != null  ) {
                    this.toggleSuccessMessage ( attribute );
                    this.alertMessage = "Successfully saved";
                    this.alertClass = "alert alert-success topAlert";
                }
                else {
                    this.alertMessage = "Edit failed" ;
                    this.alertClass = "alert alert-danger topAlert";
                    this.toggleSuccessMessage ( attribute );
                }
            } );
        setTimeout ( () => {
            this.toggleSuccessMessage ( attribute );
        },
            1500
        );
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

    changeLocation() {
        var locationToAdd = this.locationModal.locationComponent.newLocation;
        var locationToRemove = -1;
        locationToRemove = this.locationModal.button_id;

        if ( locationToRemove == -1 ) {
            // Add new location
            this.incidentElementService.addElement ( this.incident, locationToAdd );
        }
        else {
            // Change existing location
            this.incidentElementService.changeElement ( this.incident, locationToRemove, locationToAdd );
        }

        this.locationModal.locationComponent.newLocation = new Location(); // reset
        var locationToInsert: Location = new Location();
    }

    changeCategory ( newCategoryID ) {
        this.incident.attributes.CATEGORY_ID = newCategoryID;
        this.changeIncidentCategory ( this.incident, newCategoryID, this.categoryModal.selectedCategory );
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

