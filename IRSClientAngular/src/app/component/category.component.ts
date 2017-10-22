import { Component, Input, OnInit } from '@angular/core';
import { CategoryDictionary, Category, SubCategory, CategoryType } from '../model/category';
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
    selectedMainCategory: CategoryDictionary = new CategoryDictionary();
    selectedSubCategory: SubCategory = new SubCategory();
    selectedType: CategoryType = new CategoryType();    
    categories: CategoryDictionary[] = [];
    filteredSubcategories: SubCategory[] = [];
    filteredTypes: CategoryType[] = [];
    categoryID: number =  -1;

    constructor ( private categoryService: CategoryService, private dataHelper: DataHelperService ) {};
    
    getCategories(): void {     

        this.categoryService.getCategories().then ( returnedCategories => {             
            this.categories = this.categoryService.toCategoryDictionary( returnedCategories );
            console.log ( this.categories[0].SUBCATEGORIES[0].SUB_CATEGORY );
        } );
    }

    // filter subcategory and type lists according to selection of previous dropdown
    onSelectCategory ( categoryName ) {
    console.log ( "selected category: " + categoryName );
    var index = this.categories.findIndex( item => 
        item.MAIN_CATEGORY === categoryName);
    this.filteredSubcategories = this.categories[index].SUBCATEGORIES;
    console.log( "list of corresponding subcategories " + this.filteredSubcategories );
    }

    onSelectSubCategory ( subCategoryName ) {
        var index = this.filteredSubcategories.findIndex( item => 
            item.SUB_CATEGORY == subCategoryName);
        this.filteredTypes = this.filteredSubcategories[index].TYPES;
        console.log("subcategory" + subCategoryName);
    }

    onSelectTypeCategory ( typeName ) {
        console.log ( "category type " + typeName );
        this.categoryID = typeName;
    }

    submitCategory () {
        console.log( "submitting category" );
        if ( this.categoryID == -1 ) {
            if ( this.filteredTypes.length == 0 ) {
                this.categoryID = this.filteredSubcategories[0].CATEGORY_ID;
                console.log ( "retrieved category id: " + this.categoryID );                
            }
            else
            {
                console.log("Please select an incident type");
            }
        }
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
