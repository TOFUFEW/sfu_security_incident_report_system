import { Component, OnInit } from '@angular/core';
import { IncidentService } from '../../service/incident.service';
import { DomService } from '../../util/dom.service';
import { NewReportService } from '../../service/new-report.service';
import { CategoryService } from '../../service/category.service';
import { DataHelperService } from '../../util/data-helper.service';
import { Location } from '../location/location';
import { Person } from '../person/person';
import { Incident } from '../report/incident';
import { Category, SubCategory, CategoryType, CategoryDictionary } from '../category/category';
import { LocationComponent } from '../location/location.component';
import { VehicleComponent } from '../vehicle/vehicle.component';
import { PersonComponent } from '../person/person.component';
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
    locations: Location[] = [];
    persons: Person[] = [];
    categories: CategoryDictionary[] = [];
    subCategories: SubCategory[] = [];
    categoryTypes: CategoryType[] = [];
    selectedCategory: Category;
    reportReady: boolean = true;
    

    constructor( 
      private incidentService: IncidentService,
      private domService: DomService,
      private newReportService: NewReportService,
      private categoryService: CategoryService
    ) {
        this.selectedCategory = new Category(null, null, null, null);
    }

    ngOnInit() {
        this.newReportService.currentLocations
            .subscribe( locations => this.locations = locations);
        this.newReportService.currentPersons
            .subscribe( persons => this.persons = persons );

        this.categoryService.getCategories().then ( returnedCategories => {             
            this.categories = this.categoryService.toCategoryDictionary( returnedCategories );
        });
    }
    
    //filter subcategory and type lists according to selection of previous dropdown
    onSelectCategory () {
        var index = this.categories.findIndex( item => item.MAIN_CATEGORY === this.selectedCategory.MAIN_CATEGORY );
        if ( index < 0 ) return ;
        this.subCategories = this.categories[index].SUBCATEGORIES;
        this.categoryTypes = [];
    }

    onSelectSubCategory () {
        var index = this.subCategories.findIndex( item => item.SUB_CATEGORY == this.selectedCategory.SUB_CATEGORY );
        if ( index < 0 ) return ;
        var subcategories = this.subCategories[index];
        if ( subcategories.TYPES.length == 0 ) {
            this.selectedCategory.CATEGORY_ID = subcategories.CATEGORY_ID;
            this.newIncident.attributes.CATEGORY_ID = this.selectedCategory.CATEGORY_ID;
            this.selectedCategory.INCIDENT_TYPE = null;
        }
        this.categoryTypes = subcategories.TYPES;
    }

    onSelectType() {
        if ( this.selectedCategory.INCIDENT_TYPE != null ) {
            var index = this.categoryTypes.findIndex( item => item.INCIDENT_TYPE === this.selectedCategory.INCIDENT_TYPE );

            if ( index >= 0 ) {
                var type = this.categoryTypes[index];
                this.selectedCategory.CATEGORY_ID = type.CATEGORY_ID;
                this.selectedCategory.INCIDENT_TYPE = type.INCIDENT_TYPE;
                this.newIncident.attributes.CATEGORY_ID = this.selectedCategory.CATEGORY_ID;
            }
        }
    }








    addComponent( componentName: string ) {
        //if ( this.dynamicTest == 'Vehicle' )
          //  this.domService.addComponent( VehicleComponent, "vehicles" );
        /*else*/ if ( componentName === this.locationStr ) {
            console.log("in addComponent: location");
            this.domService.addComponent( LocationComponent.name, "locations" );            
        } else if ( componentName === this.personStr){
            this.domService.addComponent( PersonComponent.name, "persons" );
        }
    }
    

    createIncident(): void {
        if(this.reportReady){
            this.newIncident.incidentElements = this.newReportService.collectIncidentElements( this.selectedCategory );
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

    review() {
        this.reportReady = true;
        console.log(this.locations);
        console.log(this.persons);
    }

    reportNotReady() {
        this.reportReady = false;
    }
}
