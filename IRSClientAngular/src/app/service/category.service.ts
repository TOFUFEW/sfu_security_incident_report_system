import { Injectable } from '@angular/core';
import { MainCategory } from '../model/category-main';
import { SubCategory } from '../model/category-sub';
import { CategoryType } from '../model/category-type';
import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Config } from '../util/config.service';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CategoryService 
{
    private headers = new Headers({'Content-Type': 'application/json'});
    mainCategoriesUrl = Config.MainCategoriesURI;
    subCategoriesUrl = Config.SubCategoriesURI;
    categoryTypesUrl = Config.CategoryTypesURI;
    
    constructor( private http: Http ) {}

    getMainCategories(): Promise<MainCategory[]> {
        var mainCategories = this.http.get ( this.mainCategoriesUrl )
            .toPromise()
            .then ( response => response.json() as MainCategory[] )
            .catch ( this.handleError );
        return Promise.resolve ( mainCategories );
    };

    getSubCategories(): Promise<SubCategory[]> {
        var subCategories =  this.http.get ( this.subCategoriesUrl )
        .toPromise()
        .then ( response => response.json() as SubCategory[] )
        .catch ( this.handleError );
    return Promise.resolve ( subCategories );
    }

    getCategoryTypes(): Promise<CategoryType[]> {
        var categoryTypes =  this.http.get ( this.categoryTypesUrl )
        .toPromise()
        .then ( response => response.json() as CategoryType[] )
        .catch ( this.handleError );
    return Promise.resolve ( categoryTypes );
    }

    private handleError( error: any ) : Promise<any> 
    {
        alert( "An error occurred." );
        console.error( 'An error occurred' , error ); // for demo purposes only
        return Promise.reject( error.message || error );
    }
}