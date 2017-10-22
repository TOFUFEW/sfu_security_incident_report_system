import { Injectable } from '@angular/core';
import { Category, CategoryDictionary, SubCategory, CategoryType } from '../model/category';
import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Config } from '../util/config.service';
import { DataHelperService } from '../util/data-helper.service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CategoryService 
{
    private headers = new Headers({ 'Content-Type': 'application/json' });
    categoriesUrl = Config.CategoriesURI;
    constructor( private http: Http, private dataHelper: DataHelperService ) {}
    
    getCategories(): Promise < Category[] > {
        var categories = this.http.get( this.categoriesUrl )
        .toPromise()
        .then( response => this.dataHelper.extractAttributes( response.json() ) as Category[] )
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
            if ( mainCategories.indexOf( category.MAIN_CATEGORY ) < 0 ) {
                mainCategories.push( category.MAIN_CATEGORY );
                categoryMap.push( this.getMainCategory( category.MAIN_CATEGORY, categories ));
            }
        });

        console.log("mappings: ");
        console.log( categoryMap );
        return categoryMap;
    }

    private getMainCategory( mainCategory: string, categories: Category[] ): CategoryDictionary {
        var grouping = new CategoryDictionary();
        if ( categories == null || categories.length == 0 ) return grouping;
        grouping.MAIN_CATEGORY = mainCategory;

        var subCategories = [];
        categories.forEach( category => {
            if ( category.MAIN_CATEGORY == grouping.MAIN_CATEGORY ) {
                var subCategory = category.SUB_CATEGORY;
                if ( subCategories.indexOf( subCategory ) < 0 ) {
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

    private handleError( error: any ) : Promise<any> 
    {
        alert( "An error occurred." );
        console.error( 'An error occurred' , error ); // for demo purposes only
        return Promise.reject( error.message || error );
    }
}