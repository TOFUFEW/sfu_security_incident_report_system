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
    categories: CategoryMapping[] = [];
    filteredSubcategories: SubCategory[] = [];
    filteredTypes: CategoryType[] = [];
  
    constructor ( private categoryService: CategoryService, private dataHelper: DataHelperService ) {};
    
    getCategories(): void {     

        this.categoryService.getCategories().then ( returnedCategories => {             
            this.categories = this.dataHelper.toCategoryDictionary( returnedCategories );
            console.log ( this.categories[0].SUBCATEGORIES[0].SUB_CATEGORY );
        } );
    }

    // filter subcategory and type lists according to selection of previous dropdown
    onSelect ( mainCategoryName ) {
        console.log ( mainCategoryName );
        // if ( mainCategoryName.MAIN_CATEGORY != "" ) {
        //     console.log ( "selected category: " + mainCategoryName );
        //     var index = this.categories.findIndex( item => 
        //         item.MAIN_CATEGORY == mainCategoryName);
        //     this.filteredSubcategories = this.categories[index].SUBCATEGORIES;
        //     console.log( "list of corresponding subcategories " + this.filteredSubcategories );
        //     }
        //     else if ( mainCategoryName.SUB_CATEGORY != "" ) {
        //         var index = this.filteredSubcategories.findIndex( item => 
        //             item.SUB_CATEGORY == mainCategoryName);
        //         this.filteredTypes = this.filteredSubcategories[index].TYPES;
        //         console.log("subcategory" + mainCategoryName);
        //     }
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
