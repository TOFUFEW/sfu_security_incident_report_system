import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../model/category';
import { MainCategory } from '../model/category-main';
import { SubCategory } from '../model/category-sub';
import { CategoryType } from '../model/category-type';
import { CategoryService } from '../service/category.service';

@Component( 
  {
  selector: 'category-component',
  templateUrl: '../view/category-menu.component.html',
  providers: [ CategoryService ]
  }
)

export class CategoryComponent implements OnInit {
    categories: Category[];
    mainCategories: MainCategory[];
    subCategories: SubCategory[];
    categoryTypes: CategoryType[];
  
    constructor ( private categoryService: CategoryService ) {};

    getCategories(): void {

        var mainCtgryIndex: 0;
        var subCtgryIndex: 0;

        this.categoryService.getCategories().then( returnedCategories => {
            this.categories = returnedCategories;
        } );

        this.categories.forEach ( item => {

            var newMainCategory: MainCategory;
            var newSubCategory: SubCategory;
            var newCategoryType: CategoryType;

            // make a list of unique main categories
            if ( newMainCategory.NAME == null ||  
                 newMainCategory.NAME != item.MAIN_CATEGORY )
            {
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
            }

            // make a list of category types corresponding to main and subcategories
            CategoryType.
        });
    }

    onSelect ( mainCategoryid ) {
        this.categoryService.getSubCategories().then( returnedSubCategories => {
            this.subCategories = returnedSubCategories.filter ( ( item ) => item.MAIN_CATEGORY == mainCategoryid );
        } );
    }

  ngOnInit() : void {
    this.getCategories();
  }
}
