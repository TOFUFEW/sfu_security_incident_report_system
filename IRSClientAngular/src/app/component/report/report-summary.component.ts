import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Config } from '../../util/config.service';
import { Incident } from '../report/incident';
import { Staff } from '../staff/staff';
import { Location } from '../location/location';
import { Person } from '../person/person';
import { LocationComponent } from '../location/location.component';
import { PersonComponent } from '../person/person.component';
import { GenericElementComponent } from '../generic-element/generic-element.component';
import { Category, SubCategory, CategoryType, CategoryDictionary } from '../category/category';
import { IncidentService } from '../../service/incident.service';
import { LocationService } from '../../service/location.service';
import { CategoryService } from '../../service/category.service';
// import { map } from 'rxjs/operators/map';
import { UserService } from "../../service/user.service";
import { NewReportService } from '../../service/new-report.service';
import { IncidentElementService } from '../../service/incident-element.service';
import { TimerService } from '../../service/timer.service';
import { PACKAGE_ROOT_URL } from '@angular/core/src/application_tokens';

@Component({
    selector: 'report-summary',
    templateUrl: './report-summary.component.html',
    styleUrls: ['../../../assets/css/report-summary.component.css']
})

export class ReportSummaryComponent implements OnInit {
    @Input() inputReport: Incident;
    @ViewChild(LocationComponent) locationComponent: LocationComponent;
    @ViewChild(PersonComponent) personComponent: PersonComponent;
    @ViewChild(GenericElementComponent) genericElementComponent: GenericElementComponent;    
    report: Incident;
    isAccepted : boolean = false;

    report_edit: Incident = new Incident();

    categories: CategoryDictionary[] = [];
    subCategories: SubCategory[] = [];
    categoryTypes: CategoryType[] = [];

    selectedStaffId: number = -1;
    staffArr: Staff[] = [];

    itemToRemove: string = "";
    itemIdToRemove: number = -1;

    tempStartTime: string;
    tempEndTime: string;
    validTimer: boolean = true;

    isPersonAdded: boolean = true;
    editMode: Map<string, boolean>;
    allFieldsValid: boolean = true;

    constructor (
        private incidentService: IncidentService,
        private incidentElementService: IncidentElementService,
        private categoryService: CategoryService,
        private newReportService: NewReportService,
        private locationService: LocationService,
        private userService: UserService,
        private timerService: TimerService
    ) {
        this.initializeEditableComponents();
    }

    initializeEditableComponents() {
        this.editMode = new Map<string, boolean>();
        this.editMode["Incident"] = false;   
        this.editMode[Config.StaffKey] = false;          
        this.editMode[Config.LocationKey] = false;  
        this.editMode[Config.PersonKey] = false;  
        this.editMode[Config.GenericElementKey] = false;  
        console.log(this.editMode);        
    }

    removeFromWorkspace( id: number ): void {
        this.incidentService.removeFromWorkspace( id );
    }

    toggleEditMode( type: string ){
        console.log( type);
        this.editMode[type] = !this.editMode[type];
        console.log(this.editMode[type]);
        
        if ( this.editMode[type] ) {
            if ( type === Config.PersonKey ) {
                this.isPersonAdded = false;
            }
            else if ( type === "Incident" ) {
                this.onSelectCategory();
                this.onSelectSubCategory();
                this.onSelectType();
            }
        }
        
    }

    cancelUpdate( type: string) {
        //this.report_edit = this.copyReportUnbounded( this.report );
        this.report_edit = JSON.parse(JSON.stringify(this.report)) as Incident;
        this.editMode[type] = false;
    }

    updateReport() {
        this.allFieldsValid = this.newReportService.validateReport(this.report_edit) && this.validateTimer();

        if ( this.allFieldsValid ) {
            this.report_edit.attributes.TIMER_START = this.timerService.stringToTime(this.tempStartTime); 
            this.report_edit.attributes.TIMER_END = this.timerService.stringToTime(this.tempEndTime);            
            this.report = this.report_edit;
            this.assignToGuard();
            this.initializeEditableComponents();
            this.incidentService.update( this.report )
                .then( response => {
                    this.report = response;
                    this.incidentService.updateIncidentList( this.report );
                    alert("Success! Report was updated.");
                });
        }
        else
            this.alertReportInvalid();
    }

    validateTimer() : boolean {
        if( this.tempStartTime != null && this.tempEndTime != null ){
            if ( this.timerService.stringToTime(this.tempEndTime) < this.timerService.stringToTime(this.tempStartTime) ){
                this.validTimer = false;
                return false;
            }
            return true;
        } else if ((this.tempStartTime != null && this.tempEndTime == null) || (this.tempStartTime == null && this.tempEndTime != null )){
            this.validTimer = false;
            return false;
        } else {
            this.validTimer = true;
            return true;
        }
    }


    addIncidentElement( type: string ) {
        var element;
        if ( type === 'location' ) {
            element = this.locationComponent.newLocation;
        }
        else if ( type === 'person' ) {
            element = this.personComponent.newPerson;
        }
        else if ( type === 'generic-element' ) {
            element = this.genericElementComponent.newElement;
        }

        if ( this.newReportService.validateIncidentElement( element ) ) {
            if ( this.incidentElementService.addElementNoUpdate( this.report_edit, element ) ) {
                this.updateReport();
                this.flushComponents();
            }   
        }
        else {
            this.alertReportInvalid();
            this.allFieldsValid = false;
        }
    }

    removeIncidentElement() {
        var type = this.itemToRemove;
        if ( type === 'location' ) {
            this.incidentElementService
                .removeElementNoUpdate( this.report_edit, Config.LocationTable, this.itemIdToRemove );
        }
        else if ( type === 'person' ) {
            this.incidentElementService
                .removeElementNoUpdate( this.report_edit, Config.PersonTable, this.itemIdToRemove );
        }
        else if ( type === 'generic-element') {
            this.incidentElementService
                .removeElementNoUpdate ( this.report_edit, Config.GenericElementTable, this.itemIdToRemove );
        }
        else {
            console.log("Incident element is unrecognized.");
            return;
        }
        this.itemIdToRemove = -1;
        this.itemToRemove = "";
        this.updateReport();
    }

    setItemIdToRemove( type: string, id: number ) {
        this.itemIdToRemove = id;
        this.itemToRemove = type;
    }

    private flushComponents() {
        if ( this.locationComponent != null )
            this.locationComponent.newLocation = new Location();
        if ( this.personComponent != null )
            this.personComponent.newPerson = new Person();
    }

    timerStringToInt( str : string ) : number {
        return this.timerService.stringToTime( str );
    }

    timerIntToString( time : number ) : string {
        return this.timerService.timeToString( time );
    }

    clearTimer() : void {
        this.tempStartTime = null;
        this.tempEndTime = null;
    }

    onAddPerson( event ) {
        this.isPersonAdded = event;
    }

    assignToGuard (): void {
        this.report = this.incidentService.updateAssignedStaff( this.report, this.selectedStaffId );
        if ( this.report.guard != null )
            this.selectedStaffId = this.report.guard.attributes.ACCOUNT_ID;
    }

    //filter subcategory and type lists according to selection of previous dropdown
    onSelectCategory () {
        this.subCategories = this.categoryService
            .getSubCategories( this.report_edit.category.attributes.MAIN_CATEGORY );
        this.categoryTypes = [];
        this.report_edit.attributes.CATEGORY_ID = null;
    }

    onSelectSubCategory () {
        var index = this.subCategories.findIndex( item => item.SUB_CATEGORY == this.report_edit.category.attributes.SUB_CATEGORY );
        if ( index < 0 ) return ;
        var subcategory = this.subCategories[index];

        if ( subcategory.TYPES.length == 0 ) {
            this.report_edit.category.attributes.CATEGORY_ID = subcategory.CATEGORY_ID;
            this.report_edit.attributes.CATEGORY_ID = this.report_edit.category.attributes.CATEGORY_ID;
            this.report_edit.category.attributes.INCIDENT_TYPE = null;
        }
        else if ( subcategory.TYPES.length == 1 ) {
            var type = subcategory.TYPES[0];
            this.report_edit.category.attributes.INCIDENT_TYPE = type.INCIDENT_TYPE;
            this.report_edit.attributes.CATEGORY_ID = type.CATEGORY_ID;
        }
        else {
            this.report_edit.attributes.CATEGORY_ID = null;
        }
        this.categoryTypes = subcategory.TYPES;
    }

    onSelectType() {
        if ( this.report_edit.category.attributes.INCIDENT_TYPE != null ) {
            var index = this.categoryTypes.findIndex( item => item.INCIDENT_TYPE ===this.report_edit.category.attributes.INCIDENT_TYPE );

            if ( index >= 0 ) {
                var type = this.categoryTypes[index];
                this.report_edit.attributes.CATEGORY_ID = type.CATEGORY_ID;
                this.report_edit.category.attributes.CATEGORY_ID = type.CATEGORY_ID;
                this.report_edit.category.attributes.INCIDENT_TYPE = type.INCIDENT_TYPE; // for report summary
                console.log(this.report_edit);
                console.log( type.CATEGORY_ID);
                console.log(this.report_edit.attributes.CATEGORY_ID);
            }
        }
    }

    acceptTemp(): void {
        var newIncident = new Incident();
        newIncident = this.report;
        var reportID = this.report.attributes.REPORT_ID;
        this.report.attributes.STATUS = 4;
        this.incidentService.update( this.report )
            .then( returnedIncident => {
                if( returnedIncident != null ) {
                    alert("Report successfully updated");
                    newIncident.attributes.ACCOUNT_ID = this.userService.getAccountID();
                    newIncident.attributes.REPORT_ID = null;
                    this.incidentService.create( newIncident )
                      .then( returnedNewIncident => {
                        if ( returnedNewIncident != null  ) {
                          alert("Report successfully created!");
                          setTimeout(function(){location.reload()}, 300);
                        }
                        else alert( "Add failed." );
                      } );
                } else {
                    alert("update failed");
                }
            } );
        this.report.attributes.REPORT_ID = reportID;
        this.removeFromWorkspace( reportID );
    }

    ngOnInit(): void {
        if ( this.inputReport != null) {
            this.report = this.inputReport;
            this.report_edit = this.deepCopyReport(this.report);
            if ( this.report.guard != null )
                this.selectedStaffId = this.report.guard.attributes.ACCOUNT_ID;
        }
        this.categoryService.categoryDictionary.subscribe(
            categories => {
                this.categories = categories;
                console.log( this.categories );
            }
        );
        this.incidentService.staffArr.subscribe(
            staffArr => {
                this.staffArr = staffArr;
            }
        );
    }

    private alertReportInvalid() {
        alert("Please fill in all required fields.");
    }

    private deepCopyReport( source: Incident ): Incident {
        return JSON.parse(JSON.stringify(source)) as Incident;
    }
}
