import { Injectable } from '@angular/core';
import { Category, CategoryDictionary, SubCategory, CategoryType } from '../component/category/category';
import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Config } from '../util/config.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Incident } from '../component/report/incident';
import { IncidentService } from '../service/incident.service';
import { IncidentElementService } from '../service/incident-element.service';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CategoryService
{
    private headers = new Headers({ 'Content-Type': 'application/json' });
    categoriesUrl = Config.CategoriesURI;

    private bs_categories = new BehaviorSubject<CategoryDictionary[]>([]);
    categoryDictionary = this.bs_categories.asObservable();

    constructor (
        private http: Http ){
            this.getCategories().then( response => {
                var cat = this.toCategoryDictionary( response );
                this.bs_categories.next(cat);
            } );
    }

    getCategories(): Promise < Category[] > {
        var categories = this.http.get( this.categoriesUrl )
        .toPromise()
        .then( response => response.json() as Category[] )
        .catch( this.handleError );
        return Promise.resolve( categories );
    };

    toCategoryDictionary( categories: Category[] ) : CategoryDictionary[] {
        // Assuming categories is unsorted by Main Category
        // Some SubCategories do not have Types
        var categoryMap: CategoryDictionary[] ;
        categoryMap = [];
        if ( categories == null ) return categoryMap;

        var currentMap = new CategoryDictionary();
        currentMap.MAIN_CATEGORY = "";

        var mainCategories = [];
        categories.forEach( category => {
            if ( mainCategories.indexOf( category.attributes.MAIN_CATEGORY ) < 0 ) {
                mainCategories.push( category.attributes.MAIN_CATEGORY );
                categoryMap.push( this.getMainCategory( category.attributes.MAIN_CATEGORY, categories ));
            }
        });
        return categoryMap;
    }

    //filter subcategory and type lists according to selection of previous dropdown
    getSubCategories ( mainCategory: string ) {
        var categories = this.bs_categories.getValue();
        var index = categories.findIndex( item => item.MAIN_CATEGORY === mainCategory );
        if ( index < 0 ) return ;
        var subCategories = categories[index].SUBCATEGORIES;
        return subCategories;
    }

    getIncidentTypes( mainCategory: string, subCategory: string ) {
        var subCategories = this.getSubCategories( mainCategory );
        var index = subCategories.findIndex( item => item.SUB_CATEGORY == subCategory );
        if ( index < 0 ) return ;
        var subcategory = subCategories[index];
        return subcategory.TYPES;
    }

    private getMainCategory( mainCategory: string, categories: Category[] ): CategoryDictionary {
        var grouping = new CategoryDictionary();
        if ( categories == null || categories.length == 0 ) return grouping;
        grouping.MAIN_CATEGORY = mainCategory;

        var subCategories = [];
        categories.forEach( category => {
            if ( category.attributes.MAIN_CATEGORY == grouping.MAIN_CATEGORY ) {
                var subCategory = category.attributes.SUB_CATEGORY;
                if ( subCategories.indexOf( subCategory ) < 0 ) {
                    subCategories.push( subCategory );
                    grouping.SUBCATEGORIES.push( this.getSubCategory( grouping.MAIN_CATEGORY, subCategory, categories ) );
                }
            }
        });

        return grouping;
    }

    private getSubCategory( mainCategory: string, subCategory: string, categories: Category[] ): SubCategory {
        var grouping = new SubCategory();
        grouping.SUB_CATEGORY = subCategory;

        var types = [];
        categories.forEach( cat => {
            if ( cat.attributes.MAIN_CATEGORY === mainCategory && cat.attributes.SUB_CATEGORY === grouping.SUB_CATEGORY ) {
                if ( cat.attributes.INCIDENT_TYPE == null || cat.attributes.INCIDENT_TYPE.length == 0 ) {
                    grouping.CATEGORY_ID = cat.attributes.CATEGORY_ID;
                    grouping.TYPES = [];
                    return grouping;
                }

                if ( types.indexOf( cat.attributes.INCIDENT_TYPE ) < 0 ) {
                    types.push ( cat.attributes.INCIDENT_TYPE );
                    var type = new CategoryType();
                    type.CATEGORY_ID = cat.attributes.CATEGORY_ID;
                    type.INCIDENT_TYPE = cat.attributes.INCIDENT_TYPE;
                    grouping.TYPES.push( type );
                }
            }
        });

        return grouping;
    }
    private handleError( error: any ) : Promise<any>
    {
        alert( "An error occurred." );
        console.error( 'An error occurred' , error ); // for demo purposes only
        return Promise.reject( error.message || error );
    }
}
