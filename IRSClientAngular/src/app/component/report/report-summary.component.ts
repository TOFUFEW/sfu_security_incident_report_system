import { Component, Input, OnInit } from '@angular/core';
import { Config } from '../../util/config.service';
import { Incident } from '../report/incident';
import { Staff } from '../staff/staff';
import { Category, SubCategory, CategoryType, CategoryDictionary } from '../category/category';
import { IncidentService } from '../../service/incident.service';
import { LocationService } from '../../service/location.service';
import { map } from 'rxjs/operators/map';
import {UserService} from "../../service/user.service";

@Component({
    selector: 'report-summary',
    templateUrl: './report-summary.component.html',
    styleUrls: ['../../../assets/css/report-summary.component.css']
})

export class ReportSummaryComponent implements OnInit {
    @Input() inputReport: Incident;
    report: Incident;
    isAccepted : boolean = false;

    report_edit: Incident = new Incident();

    categories: CategoryDictionary[] = [];
    subCategories: SubCategory[] = [];
    categoryTypes: CategoryType[] = [];   

    selectedStaffId: number = -1;
    staffArr: Staff[] = [];

    editMode: boolean = false;
    constructor (
        private incidentService: IncidentService,
        private locationService: LocationService,
        private userService: UserService        
    ) {
        //this.report = new Incident();
        console.log(this.report);
    }

    removeFromWorkspace( id: number ): void {
        this.incidentService.removeFromWorkspace( id );
    }

    toggleEditMode(){
        this.editMode = !this.editMode;
        if ( this.editMode ) {
            console.log(this.report_edit);
            this.onSelectCategory();
            this.onSelectSubCategory();
            this.onSelectType();
        }
    }

    cancelUpdate() {
        //this.report_edit = this.copyReportUnbounded( this.report );
        this.report_edit = JSON.parse(JSON.stringify(this.report)) as Incident;
        this.editMode = false;
    }

    updateReport() {
        this.report = this.report_edit;
        this.assignToGuard();
        console.log(this.report);
        this.editMode = false;
        this.incidentService.update( this.report )
            .then( response => {
                this.report = response;
                this.incidentService.updateIncidentList( this.report );
                alert("Success! Report was updated.");
            });
    }

    addIncidentElement( type: string ) {
        if ( type == 'location' ) {

        }
    }

    assignToGuard (): void {
        this.report = this.incidentService.updateAssignedStaff( this.report, this.selectedStaffId );
        if ( this.report.guard != null )
            this.selectedStaffId = this.report.guard.attributes.ACCOUNT_ID;
    }

    //filter subcategory and type lists according to selection of previous dropdown
    onSelectCategory () {
        var index = this.categories.findIndex( item => item.MAIN_CATEGORY === this.report_edit.category.attributes.MAIN_CATEGORY );
        if ( index < 0 ) return ;
        this.subCategories = this.categories[index].SUBCATEGORIES;
        this.categoryTypes = [];
        this.report_edit.category.attributes.MAIN_CATEGORY = this.categories[index].MAIN_CATEGORY; // for report summary
    }

    onSelectSubCategory () {
        var index = this.subCategories.findIndex( item => item.SUB_CATEGORY == this.report_edit.category.attributes.SUB_CATEGORY );
        if ( index < 0 ) return ;
        var subcategories = this.subCategories[index];
        if ( subcategories.TYPES.length == 0 ) {
            this.report_edit.category.attributes.CATEGORY_ID = subcategories.CATEGORY_ID;
            this.report_edit.attributes.CATEGORY_ID = this.report_edit.category.attributes.CATEGORY_ID;
            this.report_edit.category.attributes.INCIDENT_TYPE = null;
        }
        this.categoryTypes = subcategories.TYPES;
    }

    onSelectType() {        
        if ( this.report_edit.category.attributes.INCIDENT_TYPE != null ) {
            var index = this.categoryTypes.findIndex( item => item.INCIDENT_TYPE ===this.report_edit.category.attributes.INCIDENT_TYPE );
            
            if ( index >= 0 ) {
                var type = this.categoryTypes[index];
                this.report_edit.category.attributes.CATEGORY_ID = type.CATEGORY_ID;
                this.report_edit.category.attributes.INCIDENT_TYPE = type.INCIDENT_TYPE; // for report summary                
                this.report_edit.attributes.CATEGORY_ID = this.report_edit.category.attributes.CATEGORY_ID;
            }
        }
    }

    acceptTemp(): void {
        var newIncident = new Incident();
        newIncident = this.report;
        var reportID = this.report.attributes.REPORT_ID;
        // console.log("new incident report id = " + newIncident.attributes.REPORT_ID);
        // console.log("new incident creator id = " + newIncident.attributes.ACCOUNT_ID);
        if( !this.isAccepted ) {
            // console.log("accept temp");
            newIncident.attributes.ACCOUNT_ID = this.userService.getAccountID();
            newIncident.attributes.REPORT_ID = null;
            // console.log("new incident report id = " + newIncident.attributes.REPORT_ID);
            // console.log("new incident creator id = " + newIncident.attributes.ACCOUNT_ID);
            this.incidentService.create( newIncident )
              .then( returnedIncident => {
                if ( returnedIncident != null  ) {
                  alert("Report successfully created!");
                  setTimeout(function(){location.reload()}, 300);
                }
                else alert( "Add failed." );
              } );
            this.isAccepted = true;
        }
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
        this.incidentService.categoryDictionary.subscribe(
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

    private deepCopyReport( source: Incident ): Incident {
        return JSON.parse(JSON.stringify(source)) as Incident;
    }
}
