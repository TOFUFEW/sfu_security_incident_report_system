import { Injectable } from '@angular/core';
import { Category, CategoryMapping, SubCategory, CategoryType } from '../model/category';
import { Incident } from '../model/incident';
import { IncidentElement } from '../model/incident-element';
import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Config } from '../util/config.service';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataHelperService
{
    constructor() {}

    extractAttribute( incidentElement: IncidentElement ): Object {
        return incidentElement.attributes;
    }

    extractAttributes( incidentElements: IncidentElement[] ): Object[] {
        var arr = [];
        incidentElements.forEach( so => {
            arr.push( so.attributes );
        });
        return arr;
    }

    toIncidentElement( table: string, object: Object): IncidentElement {
        var incidentElement: IncidentElement = new IncidentElement();
     
        incidentElement.table = table;
        incidentElement.attributes = object;
        return incidentElement;
    }

    toCategoryDictionary( categories: Category[] ) : CategoryMapping[] {
        // Assuming categories is unsorted by Main Category
        // Some SubCategories do not have Types
        var mappings: CategoryMapping[] ;
        mappings = [];
        if ( categories == null ) return mappings;

        var currentMap = new CategoryMapping();
        currentMap.MAIN_CATEGORY = "";

        var mainCategories = [];

        categories.forEach( cat => {
            if ( mainCategories.indexOf( cat.MAIN_CATEGORY ) < 0 ) {
                mainCategories.push( cat.MAIN_CATEGORY );
                mappings.push( this.insertMainCategory( cat.MAIN_CATEGORY, categories ));
            }
        });

        console.log("mappings: ");
        console.log( mappings );
        return mappings;
    }

    insertMainCategory( mainCategory: string, categories: Category[] ): CategoryMapping {
        var grouping = new CategoryMapping();
        if ( categories == null || categories.length == 0 ) return grouping;
        grouping.MAIN_CATEGORY = mainCategory;

        var subCategories = [];
        categories.forEach( cat => {
            var subCategory = cat.SUB_CATEGORY;
            if ( subCategories.indexOf( subCategory ) < 0 ) {
                subCategories.push( subCategory );
                grouping.SUBCATEGORIES.push( this.insertSubCategory( grouping.MAIN_CATEGORY, subCategory, categories) );
            }
        });

        return grouping;
    }

    insertSubCategory( mainCategory: string, subCategory: string, categories: Category[] ): SubCategory {
        var grouping = new SubCategory();
        grouping.SUB_CATEGORY = subCategory;

        var types = [];
        categories.forEach( cat => {
            if ( cat.MAIN_CATEGORY === mainCategory && cat.SUB_CATEGORY === grouping.SUB_CATEGORY ) {
                if ( cat.INCIDENT_TYPE == null || cat.INCIDENT_TYPE.length == 0 ) {
                    console.log( "No Type: " + cat.CATEGORY_ID);
                    grouping.CATEGORY_ID = cat.CATEGORY_ID;
                    grouping.TYPES = [];
                    return grouping;
                }

                if ( types.indexOf( cat.INCIDENT_TYPE ) < 0 ) {
                    types.push ( cat.INCIDENT_TYPE ); 
                    var type = new CategoryType();
                    type.CATEGORY_ID = cat.CATEGORY_ID;
                    type.INCIDENT_TYPE = cat.INCIDENT_TYPE;
                    grouping.TYPES.push( type );
                }
            }
        });

        return grouping;
    }
}
