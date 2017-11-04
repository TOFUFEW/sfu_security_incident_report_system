import { Component, OnInit } from '@angular/core';
import { IncidentService } from '../../service/incident.service';
import { DomService } from '../../util/dom.service';
import { NewReportService } from '../../service/new-report.service';
import { CategoryService } from '../../service/category.service';
import { DataHelperService } from '../../util/data-helper.service';
import { StaffService } from '../../service/staff.service';
import { Location } from '../location/location';
import { Person } from '../person/person';
import { Incident } from '../report/incident';
import { Staff } from '../staff/staff';
import { Category, SubCategory, CategoryType, CategoryDictionary } from '../category/category';
import { LocationComponent } from '../location/location.component';
import { VehicleComponent } from '../vehicle/vehicle.component';
import { PersonComponent } from '../person/person.component';
import { AttachmentComponent } from '../attachment/attachment.component';
import { Config } from '../../util/config.service';

@Component(
  {
    templateUrl: './new-report.component.html',
    styleUrls: ['../../../assets/css/new-report.component.css'],
  }
)

export class NewReportComponent implements OnInit {
    locationStr: string = LocationComponent.name;
    personStr: string = PersonComponent.name;
    newIncident: Incident = new Incident();
    
    categories: CategoryDictionary[] = [];
    subCategories: SubCategory[] = [];
    categoryTypes: CategoryType[] = [];    

    staffList: Staff[] = [];
    selectedStaff: Staff = null;
    selectedStaffId: number = -1;
    reportReady: boolean = false; 

    constructor( 
      private incidentService: IncidentService,
      private domService: DomService,
      private newReportService: NewReportService,
      private categoryService: CategoryService,
      private staffService: StaffService
    ) {
        this.staffService.getStaffs().then( returnedStaffs => {
            this.staffList = returnedStaffs.sort( 
                function( a, b ) {
                    return a.attributes.FIRST_NAME < b.attributes.FIRST_NAME ? -1 : 1;
                } );
          } ); 
    }

    ngOnInit() {
        this.newReportService.currentLocations
            .subscribe( locations =>  { 
                this.newIncident.locationList = locations;
             });
        this.newReportService.currentPersons
            .subscribe( persons =>  { 
                this.newIncident.personList = persons;
            } );

        this.categoryService.getCategories().then ( returnedCategories => {
            this.categories = this.categoryService.toCategoryDictionary( returnedCategories );
        });
    }

    //filter subcategory and type lists according to selection of previous dropdown
    onSelectCategory () {
        var index = this.categories.findIndex( item => item.MAIN_CATEGORY === this.newIncident.category.MAIN_CATEGORY );
        if ( index < 0 ) return ;
        this.subCategories = this.categories[index].SUBCATEGORIES;
        this.categoryTypes = [];
        this.newIncident.category.MAIN_CATEGORY = this.categories[index].MAIN_CATEGORY; // for report summary
    }

    onSelectSubCategory () {
        var index = this.subCategories.findIndex( item => item.SUB_CATEGORY == this.newIncident.category.SUB_CATEGORY );
        if ( index < 0 ) return ;
        var subcategories = this.subCategories[index];
        if ( subcategories.TYPES.length == 0 ) {
            this.newIncident.category.CATEGORY_ID = subcategories.CATEGORY_ID;
            this.newIncident.attributes.CATEGORY_ID = this.newIncident.category.CATEGORY_ID;
            this.newIncident.category.INCIDENT_TYPE = null;
        }
        this.categoryTypes = subcategories.TYPES;
    }

    onSelectType() {
        if ( this.newIncident.category.INCIDENT_TYPE != null ) {
            var index = this.categoryTypes.findIndex( item => item.INCIDENT_TYPE ===this.newIncident.category.INCIDENT_TYPE );

            if ( index >= 0 ) {
                var type = this.categoryTypes[index];
                this.newIncident.category.CATEGORY_ID = type.CATEGORY_ID;
                this.newIncident.attributes.CATEGORY_ID = this.newIncident.category.CATEGORY_ID;
                this.newIncident.category.INCIDENT_TYPE = type.INCIDENT_TYPE; // for report summary
            }
        }
    }

    onSelectStaff(): void {
        var index = this.staffList.findIndex( x => x.attributes.ACCOUNT_ID ==  this.selectedStaffId);
        if ( index >= 0 )
            this.selectedStaff = this.staffList[ index ];
        else 
            this.selectedStaff = null;
        console.log( this.selectedStaff );
    }

    addComponent( componentName: string ) {
        //if ( this.dynamicTest == 'Vehicle' )
          //  this.domService.addComponent( VehicleComponent, "vehicles" );
        /*else*/ if ( componentName === this.locationStr ) {
            this.domService.addComponent( LocationComponent.name, "locations" );
        } else if ( componentName === this.personStr){
            this.domService.addComponent( PersonComponent.name, "persons" );
        }
    }
    
    cancelReview() : void {
        this.newIncident.incidentElements = this.newReportService.removeAllIncidentElements();
    }

    prepareReport(): void {
        this.newIncident.incidentElements = this.newReportService.collectIncidentElements( this.newIncident.category );
        if ( this.selectedStaff != null ) {
            this.newIncident.incidentElements.push( this.selectedStaff );
        }
        this.reportReady = this.isReportValid();
    }

    createReport(): void {
        if( this.reportReady ){
            console.log( this.newIncident );
            this.incidentService.create( this.newIncident )
                .then( returnedIncident => {
                    if ( returnedIncident != null  ) {
                        alert("Report successfully created!");
                        setTimeout(function(){location.reload()}, 300);
                    }
                    else alert( "Add failed." );
                } );
            delete this.newIncident;
            this.newIncident = new Incident();
        } else {
            alert("Please fill in the required fields");
        }
    }

    // formatPhoneNumber( number: string ) {
    //     var str = "(";
    //     for (var i = 0 ; i < number.length ; i += 1) {
    //         str += number.charAt( i ) + "" ;
    //         if ( i == 2 )
    //             str += ")" + "" ;
    //         if ( i < 6 && (i+1) % 3 == 0 )
    //             str += " - " + "";
    //     }
    //     return str;
    // }

    private isReportValid(): boolean {
        return this.newReportService.validateReport( this.newIncident );
    }
}
