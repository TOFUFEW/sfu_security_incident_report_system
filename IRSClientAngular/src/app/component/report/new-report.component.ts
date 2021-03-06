import { Component, OnInit, Input } from '@angular/core';
import { IncidentService } from '../../service/incident.service';
import { DomService } from '../../util/dom.service';
import { NewReportService } from '../../service/new-report.service';
import { CategoryService } from '../../service/category.service';
import { IncidentElementService } from '../../service/incident-element.service';
import { StaffService } from '../../service/staff.service';
import { TimerService } from '../../service/timer.service';
import { Location } from '../location/location';
import { Person } from '../person/person';
import { Incident } from '../report/incident';
import { Staff } from '../staff/staff';
import { Timer } from '../timer/timer';
import { Category, SubCategory, CategoryType, CategoryDictionary } from '../category/category';
import { NavbarComponent } from '../navbar/navbar.component';
import { LocationComponent } from '../location/location.component';
import { VehicleComponent } from '../vehicle/vehicle.component';
import { PersonComponent } from '../person/person.component';
import { AttachmentComponent } from '../attachment/attachment.component';
import { Config } from '../../util/config.service';
import { UserService } from "../../service/user.service";
import { Router } from "@angular/router";
import { GenericElementComponent } from '../generic-element/generic-element.component';

@Component(
    {
        selector: 'new-report-component',
        templateUrl: './new-report.component.html',
        styleUrls: ['../../../assets/css/new-report.component.css'],
    }
)

export class NewReportComponent implements OnInit {
    locationStr: string = LocationComponent.name;
    personStr: string = PersonComponent.name;
    attachmentStr: string = AttachmentComponent.name;
    genericStr: string = GenericElementComponent.name;

    newIncident: Incident = new Incident();

    categories: CategoryDictionary[] = [];
    subCategories: SubCategory[] = [];
    categoryTypes: CategoryType[] = [];

    staffList: Staff[];
    selectedStaff: Staff;
    selectedStaffId: number = -1;
    reportReady: boolean = false;

    tempTimerStart: string;
    tempTimerEnd: string;
    timerValid: boolean = true;
    timerInReport: boolean = false;


    date = new Date();

    constructor(
      private incidentService: IncidentService,
      private domService: DomService,
      private newReportService: NewReportService,
      private categoryService: CategoryService,
      private staffService: StaffService,
      private timerService: TimerService,
      private userService: UserService,
      private router: Router
    ) {
        this.staffService.getStaffs().then(returnedStaffs => {
            this.staffList = returnedStaffs.sort(
                function (a, b) {
                    return a.attributes.FIRST_NAME < b.attributes.FIRST_NAME ? -1 : 1;
                });
        });
    }

    /*
    getAllStaff() {
        this.staffService.getStaffsObs()
            .subscribe(
                (responseData) => {
                    this.staffList = responseData;
                },
                (error) => {
                    alert("failed to retrieve staff list");
                },
                () => {
                   // sort it
                }
            )
    }
    */

    ngOnInit() {
        this.newReportService.resetLocations();
        this.newReportService.currentLocations
            .subscribe(locations => {
                this.newIncident.incidentElements[Config.LocationKey] = locations;
            });
        this.newReportService.currentPersons
            .subscribe(persons => {
                this.newIncident.incidentElements[Config.PersonKey] = persons;
            } );
        this.newReportService.currentGenericElements
            .subscribe( elements => {
                this.newIncident.incidentElements[Config.GenericElementKey] = elements;
            });

        this.newReportService.currentAttachments
            .subscribe( attachments =>  {
                this.newIncident.incidentElements[Config.AttachmentKey] = attachments;
            } );

        this.categoryService.categoryDictionary
            .subscribe(categories => {
                this.categories = categories;
            });
        if (this.userService.isGuard()) {
            var assignDiv = document.getElementById("assignGuardDiv");
            var assignPreviewDiv = document.getElementById("assignGuardPreviewDiv");
            assignDiv.style.visibility = "hidden";
            assignPreviewDiv.style.visibility = "hidden";
        }
    }

    //filter subcategory and type lists according to selection of previous dropdown
    onSelectCategory() {
        var index = this.categories.findIndex(item => item.MAIN_CATEGORY === this.newIncident.category.attributes.MAIN_CATEGORY);
        if (index < 0) return;
        this.subCategories = this.categories[index].SUBCATEGORIES;
        this.categoryTypes = [];
        this.newIncident.category.attributes.MAIN_CATEGORY = this.categories[index].MAIN_CATEGORY; // for report summary

        //IF CATEGORY == SOME TIMER THEN SHOW TIMER
    }

    onSelectSubCategory() {
        var index = this.subCategories.findIndex(item => item.SUB_CATEGORY == this.newIncident.category.attributes.SUB_CATEGORY);
        if (index < 0) return;
        var subcategories = this.subCategories[index];
        if (subcategories.TYPES.length == 0) {
            this.newIncident.category.attributes.CATEGORY_ID = subcategories.CATEGORY_ID;
            this.newIncident.attributes.CATEGORY_ID = this.newIncident.category.attributes.CATEGORY_ID;
            this.newIncident.category.attributes.INCIDENT_TYPE = null;
            this.newIncident.insertIncidentElement(this.newIncident.category);
        }
        this.categoryTypes = subcategories.TYPES;
    }

    onSelectType() {
        if (this.newIncident.category.attributes.INCIDENT_TYPE != null) {
            var index = this.categoryTypes.findIndex(item => item.INCIDENT_TYPE === this.newIncident.category.attributes.INCIDENT_TYPE);

            if (index >= 0) {
                var type = this.categoryTypes[index];
                this.newIncident.category.attributes.CATEGORY_ID = type.CATEGORY_ID;
                this.newIncident.category.attributes.INCIDENT_TYPE = type.INCIDENT_TYPE; // for report summary
                this.newIncident.attributes.CATEGORY_ID = this.newIncident.category.attributes.CATEGORY_ID;
                this.newIncident.insertIncidentElement(this.newIncident.category);
            }
        }
    }

    onSelectStaff(): void {
        var index = this.staffList.findIndex(x => x.attributes.ACCOUNT_ID == this.selectedStaffId);
        if (index >= 0) {
            this.selectedStaff = this.staffList[index];
            this.newIncident.insertIncidentElement(this.selectedStaff);
        }
        else {
            this.selectedStaff = null;
            if (this.newIncident.incidentElements[Config.StaffKey] != null) {
                this.newIncident.incidentElements[Config.StaffKey].splice(0, this.newIncident.incidentElements[Config.StaffKey].length);
            }
        }
    }

    onChangeTimer(): void {
        this.newIncident.attributes.TIMER_START = this.timerService.stringToTime(this.tempTimerStart);
        this.newIncident.attributes.TIMER_END = this.timerService.stringToTime(this.tempTimerEnd);

        if( (this.newIncident.attributes.TIMER_START && !this.newIncident.attributes.TIMER_END) ||
            (!this.newIncident.attributes.TIMER_START && this.newIncident.attributes.TIMER_END) ||
            (this.newIncident.attributes.TIMER_START > this.newIncident.attributes.TIMER_END)
        ) {
            this.timerValid = false;
        } else {
            this.timerValid = true;
        }
    }

    removeTimerFromReport() : void {
        this.timerInReport = false;
        this.tempTimerStart = null;
        this.tempTimerEnd = null;
        this.onChangeTimer();
    }


    cancelReview() {

    }

    prepareReport(): void {
        console.log(this.newIncident);
        this.reportReady = this.isReportValid();
    }

    createReport(): void {
        if (this.reportReady) {
            var currentID = this.userService.getAccountID();
            this.newIncident.attributes.ACCOUNT_ID = currentID;

            if ( this.tempTimerStart != null && this.tempTimerEnd != null ) {
                this.newIncident.attributes.TIMER_START = this.timerService.stringToTime(this.tempTimerStart);
                this.newIncident.attributes.TIMER_END = this.timerService.stringToTime(this.tempTimerEnd);
            }

            console.log( this.newIncident);
            if ( this.userService.isGuard() )
                this.convertToTempReport();

            this.incidentService.create(this.newIncident)
                .then(returnedIncident => {
                    if (returnedIncident != null) {
                        alert("Report successfully created!");
                        setTimeout(function () { location.reload() }, 300);
                        if (this.userService.isGuard()) {
                            this.router.navigate(['guard-app/dashboard']);
                        }
                    }
                    else alert( "Add failed." );
                } );


            this.tempTimerStart = null;
            this.tempTimerEnd = null;
            // delete this.newIncident;
            // this.newIncident = new Incident();
        } else {
            alert("Please fill in the required fields");
        }
    }

    private convertToTempReport() {
        this.newIncident.attributes.TEMPORARY_REPORT = 0;
        if (this.selectedStaffId < 0) {
            var self = new Staff();
            self.attributes.ACCOUNT_ID = this.userService.getAccountID();
            this.newIncident.insertIncidentElement(self);
        }
    }

    formatTime(num : number): string{
        return this.timerService.timeToString(num);
    }

    addComponent( componentName: string ) {
        if ( componentName === this.locationStr ) {
            this.domService.addComponent( LocationComponent.name, "locations" );
        }
        else if ( componentName === this.personStr) {
            this.domService.addComponent( PersonComponent.name, "persons" );
        } else if ( componentName === this.attachmentStr){
            this.domService.addComponent( AttachmentComponent.name, "attachments" );
        }
        else if ( componentName === this.genericStr ) {
            this.domService.addComponent ( GenericElementComponent.name, "generic-elements");
        }
    }

    private isReportValid(): boolean {
        return this.newReportService.validateReport(this.newIncident) && this.timerValid;
    }
}
