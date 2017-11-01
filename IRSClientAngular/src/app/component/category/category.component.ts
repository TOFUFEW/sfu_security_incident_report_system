import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { CategoryDictionary, Category, SubCategory, CategoryType } from './category';
import { CategoryService } from '../../service/category.service';
import { DataHelperService } from '../../util/data-helper.service';

@Component( 
  {
    selector: 'category-component',
    templateUrl: './category.component.html',
    styleUrls: ['../../../assets/css/guard-app.css'],  
    providers: [ CategoryService ]
  }
)

export class CategoryComponent implements OnInit {
    @Output()
    categorySaved: EventEmitter<string> = new EventEmitter();        
    selectedMainCategory: CategoryDictionary = new CategoryDictionary();
    selectedSubCategory: SubCategory = new SubCategory();
    selectedType: CategoryType = new CategoryType();    
    categories: CategoryDictionary[] = [];
    filteredSubcategories: SubCategory[] = [];
    filteredTypes: CategoryType[] = [];
    categoryID: number =  -1;
    
    public visible = false;
    private visibleAnimate = false;

    constructor ( private categoryService: CategoryService, private dataHelper: DataHelperService ) {};
    
    getCategories(): void {     

        this.categoryService.getCategories().then ( returnedCategories => {             
            this.categories = this.categoryService.toCategoryDictionary( returnedCategories );
        } );
    }
  
    public show(): void {
      this.visible = true;
      setTimeout(() => this.visibleAnimate = true, 100);
    }
  
    public hide(): void {
      this.visibleAnimate = false;
      setTimeout(() => this.visible = false, 300);
    }
  
    public onContainerClicked(event: MouseEvent): void {
      if ((<HTMLElement>event.target).classList.contains('modal')) {
        this.hide();
      }
    }

    // filter subcategory and type lists according to selection of previous dropdown
    onSelectCategory ( categoryName ) {
    console.log ( "selected category: " + categoryName );
    var index = this.categories.findIndex( item => 
        item.MAIN_CATEGORY === categoryName);
    this.filteredSubcategories = this.categories[index].SUBCATEGORIES;
    console.log ( "list of corresponding subcategories " + this.filteredSubcategories );
    }

    onSelectSubCategory ( subCategoryName ) {
        var index = this.filteredSubcategories.findIndex( item => 
            item.SUB_CATEGORY == subCategoryName );
        this.filteredTypes = this.filteredSubcategories[index].TYPES;
        console.log ( "subcategory" + subCategoryName );
    }

    onSelectTypeCategory ( typeName ) {
        console.log ( "category type " + typeName );
        this.categoryID = typeName;
    }

    submitCategory () {
        console.log ( "submitting category" );
        if ( this.categoryID == -1 ) {
            console.log("no types");
            if ( this.filteredTypes.length == 0 ) {
                console.log("filtered subcategories", this.filteredSubcategories);
                this.categoryID = this.filteredSubcategories[0].CATEGORY_ID;
                console.log ( "retrieved category id: " + this.categoryID );
                var id = this.categoryID.toString();                
                this.categorySaved.emit(id);
                this.hide();              
            }
            else
            {
                console.log ( "Please select an incident type" );
            }
        }
        if ( this.categoryID != -1 ) {
            console.log ( "category id: " + this.categoryID );
            var id = this.categoryID.toString();
            this.categorySaved.emit(id);            
            this.hide();
        }
    }

    ngOnInit(): void {
        this.getCategories();
    }
}
