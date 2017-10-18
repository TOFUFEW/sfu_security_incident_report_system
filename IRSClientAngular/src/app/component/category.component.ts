import { Component, Input, OnInit } from '@angular/core';
import { CategoryMapping, Category, SubCategory, CategoryType } from '../model/category';
import { CategoryService } from '../service/category.service';
import { DataHelperService } from '../util/data-helper.service';

@Component( 
  {
  selector: 'category-component',
  templateUrl: '../view/category.component.html',
  providers: [ CategoryService ]
  }
)

export class CategoryComponent implements OnInit {
    selectedMainCategory: CategoryMapping = new CategoryMapping();
    selectedSubCategory: SubCategory = new SubCategory();
    selectedType: CategoryType = new CategoryType();    
    categories: CategoryMapping[] = [];
    filteredSubcategories: SubCategory[] = [];
    filteredTypes: CategoryType[] = [];
    categoryID: number =  -1;

    constructor ( private categoryService: CategoryService, private dataHelper: DataHelperService ) {};
    
    getCategories(): void {     

        this.categoryService.getCategories().then ( returnedCategories => {             
            this.categories = this.dataHelper.toCategoryDictionary( returnedCategories );
            console.log ( this.categories[0].SUBCATEGORIES[0].SUB_CATEGORY );
        } );
    }

    // filter subcategory and type lists according to selection of previous dropdown
    onSelect1 ( categoryName ) {
    console.log ( "selected category: " + categoryName );
    var index = this.categories.findIndex( item => 
        item.MAIN_CATEGORY == categoryName);
    this.filteredSubcategories = this.categories[index].SUBCATEGORIES;
    console.log( "list of corresponding subcategories " + this.filteredSubcategories );
    }

    onSelect2 ( subCategoryName ) {
        var index = this.filteredSubcategories.findIndex( item => 
            item.SUB_CATEGORY == subCategoryName);
        this.filteredTypes = this.filteredSubcategories[index].TYPES;
        console.log("subcategory" + subCategoryName);
    }

    onSelect3 ( typeName ) {
        console.log ( "category type " + typeName );
        var index = this.filteredTypes.findIndex( item => 
            item.INCIDENT_TYPE == typeName);
        this.categoryID = this.filteredTypes[index].CATEGORY_ID;
    }

    submitCategory () {
        if (this.categoryID != -1 ) {
            console.log ( "category id: " + this.categoryID );
        }
    }
    // onSelectSubCategory ( subCategoryName ) {            
    //     var index = this.filteredSubcategories.findIndex( item => 
    //         item.SUB_CATEGORY == subCategoryName);
    //     this.filteredTypes = this.filteredSubcategories[index].TYPES;
    //     console.log(subCategoryName);
    // }

  ngOnInit(): void {
    this.getCategories();
  }
}
