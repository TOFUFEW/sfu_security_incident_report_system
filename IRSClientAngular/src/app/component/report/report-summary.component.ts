import { Component, Input, OnInit } from '@angular/core';
import { Config } from '../../util/config.service';
import { Incident } from '../report/incident';
import { Category, SubCategory, CategoryType, CategoryDictionary } from '../category/category';
import { IncidentService } from '../../service/incident.service';
import { LocationService } from '../../service/location.service';
import { map } from 'rxjs/operators/map';

@Component({
    selector: 'report-summary',
    templateUrl: './report-summary.component.html',
    styleUrls: ['../../../assets/css/report-summary.component.css']
})

export class ReportSummaryComponent implements OnInit {
    @Input() inputReport: Incident;
    report: Incident;

    report_edit: Incident = new Incident();

    categories: CategoryDictionary[] = [];
    subCategories: SubCategory[] = [];
    categoryTypes: CategoryType[] = [];   

    editMode: boolean = false;
    constructor (
        private incidentService: IncidentService,
        private locationService: LocationService,
    ) { 
    }

    removeFromWorkspace( id: number ): void {
        this.incidentService.removeFromWorkspace( id );
    }

    toggleEditMode(){
        this.editMode = !this.editMode;
    }

    cancelUpdate() {
        //this.report_edit = this.copyReportUnbounded( this.report );
        this.report_edit = JSON.parse(JSON.stringify(this.report)) as Incident;
        this.editMode = false;
    }

    updateReport() {
        this.report = this.report_edit;
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
            this.report_edit.insertIncidentElement( this.report_edit.category );
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
                this.report_edit.insertIncidentElement( this.report_edit.category );
            }
        }
    }

    ngOnInit(): void {
        if ( this.inputReport != null) {
            this.report = this.inputReport;
            this.report_edit = this.deepCopyReport(this.report);
        } 
        this.incidentService.categoryDictionary.subscribe(
            categories => {
                this.categories = categories;
                console.log( this.categories );
            }
        );        
    }

    private deepCopyReport( source: Incident ): Incident {
        return JSON.parse(JSON.stringify(source)) as Incident;
    }
}
