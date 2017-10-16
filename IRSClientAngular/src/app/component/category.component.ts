import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../model/category';
import { MainCategory } from '../model/category-main';
import { SubCategory } from '../model/category-sub';
import { CategoryType } from '../model/category-type';
import { CategoryService } from '../service/category.service';

@Component( 
  {
  selector: 'category-component',
  templateUrl: '../view/category.component.html',
  providers: [ CategoryService ]
  }
)

export class CategoryComponent implements OnInit {
    selectedMainCategory: MainCategory = new MainCategory ( 0, 'IncidentCategory' );
    categories: Category[] = [];
    mainCategories: MainCategory[];
    subCategories: SubCategory[];
    categoryTypes: CategoryType[];
    filteredSubCtgries: SubCategory[];
    filteredCtgryTypes: CategoryType[];
  
    constructor ( private categoryService: CategoryService ) {};

    getCategories(): void {

        var categoryToAdd: Category;
        var mainCtgryIndex: 1;
        var subCtgryIndex: 1;

        this.categoryService.getCategories().then ( returnedCategories => {
            this.categories = returnedCategories;
            console.log ( "returned categories " + returnedCategories ) ;   
            console.log ( this.categories ) ;               
        } );
        
        this.categories.forEach ( item => {

            var newMainCategory: MainCategory;
            console.log ( "name" + newMainCategory.NAME );
            var newSubCategory: SubCategory;
            var newCategoryType: CategoryType;

            // make a list of unique main categories
            if ( newMainCategory.NAME == undefined ||  
                 newMainCategory.NAME != item.MAIN_CATEGORY )
            {
                console.log ( "adding main category " );
                newMainCategory.ID = mainCtgryIndex;
                newMainCategory.NAME = item.MAIN_CATEGORY;
                this.mainCategories.push ( newMainCategory );
                mainCtgryIndex++;
            } 

            // make a list of unique subcategories corresponding to main categories
            if ( newSubCategory.NAME == null ||
                      newSubCategory.NAME != item.SUB_CATEGORY )
            {
                newSubCategory.ID = subCtgryIndex;
                newSubCategory.MAIN_CATEGORY = mainCtgryIndex;
                newSubCategory.NAME = item.SUB_CATEGORY;
                this.subCategories.push ( newSubCategory );
                subCtgryIndex++;
            }

            // make a list of category types corresponding to main and subcategories
            newCategoryType.CATEGORY_ID = item.CATEGORY_ID;
            newCategoryType.SUB_CATEGORY = subCtgryIndex;            
            newCategoryType.NAME = item.INCIDENT_TYPE;
        } );
        console.log ( "main categories: " + this.mainCategories );
        
    }

    // filter subcategory and type lists according to selection of previous dropdown
    onSelectMainCtgry ( mainCategoryid ) {
        this.filteredSubCtgries = this.subCategories.filter ( item => 
            item.MAIN_CATEGORY == mainCategoryid );
        console.log( this.filteredSubCtgries );
    }

    onSelectSubCtgry ( subCategoryid ) {            
        this.filteredCtgryTypes = this.categoryTypes.filter ( item => 
                item.SUB_CATEGORY == subCategoryid );
    }

  ngOnInit() : void {
    this.getCategories();
  }
}
