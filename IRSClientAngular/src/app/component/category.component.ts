import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../model/category';
import { MainCategory } from '../model/category-main';
import { SubCategory } from '../model/category-sub';
import { CategoryType } from '../model/category-type';
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
    selectedMainCategory: Category = new Category ( 0, "", "", "" );
    selectedSubCategory: SubCategory = new SubCategory ( 0, 0, "" );
    categories: Category[] = [];
    mainCategories: Category[] = [];
    subCategories: SubCategory[] = [];
    categoryTypes: CategoryType[] = [];
    filteredCtgries: Category[] = [];
    filteredSubCtgries: SubCategory[] = [];
    filteredCtgryTypes: CategoryType[] = [];
  
    constructor ( private categoryService: CategoryService, private dataHelper: DataHelperService ) {};

    filterCategories ( returnedCategories ) {
        console.log ( "CATEGORIES IN FUNCTION " + this.categories );
        var attributeToCompare: string = "";
        var categoryArray: Category[] = returnedCategories;
        categoryArray.forEach ( category => {
            if ( attributeToCompare != category.MAIN_CATEGORY )
            {
                attributeToCompare = category.MAIN_CATEGORY;
                console.log ( "adding " + category.MAIN_CATEGORY + "to mainCategories" );
            }       
        } );
        console.log ( "main categories " + this.mainCategories );         
    }

    getCategories(): void {

        var mainCtgryIndex: 1;
        var subCtgryIndex: 1;
        var newMainCategory: MainCategory = new MainCategory ( 0, "" );
        var newSubCategory: SubCategory = new SubCategory ( 0, 0, "" );
        var newCategoryType: CategoryType = new CategoryType ( 0, 0, "" );        

        this.categoryService.getCategories().then ( returnedCategories => {
            this.categories = returnedCategories;
            console.log ( "RETURNED CATEGORIES " + returnedCategories );
            console.log ( "CATEGORIES " + this.categories );            
            this.filterCategories( returnedCategories );               

            this.dataHelper.toCategoryDictionary( returnedCategories); 
            // console.log ( "returned categories " + returnedCategories ) ;   
            // console.log ( this.categories ) ;
            // var index = 0;
                        //     // make a list of unique main categories
                        //     if ( newMainCategory.NAME == "" ||  
                        //          newMainCategory.NAME != category.MAIN_CATEGORY )
                        //     {
                        //         console.log ( "adding main category " );
                        //         newMainCategory.ID = mainCtgryIndex;
                        //         newMainCategory.NAME = category.MAIN_CATEGORY;
                        //         this.mainCategories.push ( newMainCategory );
                        //         mainCtgryIndex++;
                        //         console.log ( "name" + newMainCategory.NAME );                                
                        //     } 
                
                        //     // make a list of unique subcategories corresponding to main categories
                        //     if ( newSubCategory.NAME == null ||
                        //               newSubCategory.NAME != category.SUB_CATEGORY )
                        //     {
                        //         newSubCategory.ID = subCtgryIndex;
                        //         newSubCategory.MAIN_CATEGORY = mainCtgryIndex;
                        //         newSubCategory.NAME = category.SUB_CATEGORY;
                        //         this.subCategories.push ( newSubCategory );
                        //         subCtgryIndex++;
                        //     }
                
                        //     // make a list of category types corresponding to main and subcategories
                        //     newCategoryType.CATEGORY_ID = category.CATEGORY_ID;
                        //     newCategoryType.SUB_CATEGORY = subCtgryIndex;            
                        //     newCategoryType.NAME = category.INCIDENT_TYPE;
                        // console.log ( "main categories: " + this.mainCategories );  
                // }            
        } );
    }
    // List of categorys ( {id, mC, sC, T}, ..., ...)
    // filter subcategory and type lists according to selection of previous dropdown
    onSelectMainCtgry ( mainCategoryName ) {
        this.filteredCtgries = this.categories.filter ( item => 
            item.MAIN_CATEGORY == mainCategoryName );
        console.log( this.filteredCtgries );
        // for each category in categories
        // if (mc == mcCategoryString) { l.add(category)};
        //return l;
    }

    onSelectSubCtgry ( subCategoryid ) {            
        this.filteredCtgryTypes = this.categoryTypes.filter ( item => 
                item.SUB_CATEGORY == subCategoryid );
    }

  ngOnInit(): void {
    this.getCategories();
  }
}
