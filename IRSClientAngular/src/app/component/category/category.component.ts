import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { CategoryDictionary, Category, SubCategory, CategoryType } from './category';
import { CategoryService } from '../../service/category.service';

@Component( 
  {
    selector: 'category-component',
    templateUrl: './category.component.html',
    styleUrls: ['../../../assets/css/guard-app.css'],  
    providers: [ CategoryService ]
  }
)

export class CategoryComponent implements OnInit {
    @Input() currentMainCategory: string;
    @Input() currentSubCategory: string;
    @Input() currentType: string;
    @Output()
    categorySaved: EventEmitter<string> = new EventEmitter();
    selectedCategory: Category = new Category(null, null, null, null);      
    selectedMainCategory: CategoryDictionary = new CategoryDictionary();
    selectedSubCategory: SubCategory = new SubCategory();
    selectedType: CategoryType = new CategoryType();
    categories: CategoryDictionary[] = [];
    filteredSubcategories: SubCategory[] = [];
    filteredTypes: CategoryType[] = [];
    categoryID: number =  -1;

    showMainCategoryAlert: boolean = false;  
    showSubcategoryAlert: boolean = false;
    showTypeAlert: boolean = false;  
    // currentCategory: Category;

    public visible = false;
    private visibleAnimate = false;

    constructor ( 
        private categoryService: CategoryService, 
    ) {};
    
    getCategories(): void {     

        this.categoryService.getCategories().then ( returnedCategories => {             
            this.categories = this.categoryService.toCategoryDictionary( returnedCategories );
        } );
    }
  
    public show(): void {
      this.visible = true;
      this.selectedCategory = new Category(null, null, null, null);
      this.filteredSubcategories = [];
      this.filteredTypes = [];
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
    this.showMainCategoryAlert = false;        
    console.log ( "selected category: " + categoryName );
    this.selectedCategory.attributes.MAIN_CATEGORY = categoryName;
    var index = this.categories.findIndex( item => 
        item.MAIN_CATEGORY === categoryName);
    this.filteredSubcategories = this.categories[index].SUBCATEGORIES;
    }

    onSelectSubCategory ( subCategoryName ) {
        this.showSubcategoryAlert = false;        
        this.selectedCategory.attributes.SUB_CATEGORY = subCategoryName;
        var index = this.filteredSubcategories.findIndex( item => 
            item.SUB_CATEGORY == subCategoryName );
        this.filteredTypes = this.filteredSubcategories[index].TYPES;
    }

    onSelectTypeCategory ( type ) {
        this.showTypeAlert = false;        
        type = type.split(",,");
        this.selectedCategory.attributes.INCIDENT_TYPE = type[0];
        this.categoryID = type[1];
    }

    submitCategory () {
        console.log ( "submitting category" );
        console.log ( this.selectedCategory );
        if ( this.selectedCategory.attributes.MAIN_CATEGORY == null ) {
            this.showMainCategoryAlert = true;            
            console.log("please select a category");
        }
        else if ( this.selectedCategory.attributes.SUB_CATEGORY == null ) {
            this.showSubcategoryAlert = true;                        
            console.log("please select a subcategory");
        }
        else if ( this.categoryID == -1 || this.categoryID == null ) {
            console.log(this.filteredTypes);
            if ( this.filteredTypes.length == 0 ) {
                this.selectedCategory.attributes.INCIDENT_TYPE = null;
                this.categoryID = this.filteredSubcategories[0].CATEGORY_ID;
                console.log ( "retrieved category id: " + this.categoryID );
                var id = this.categoryID.toString();                
                this.categorySaved.emit(id);
                this.hide();              
            }
            else
            {
                this.showTypeAlert = true;                            
                console.log ( "Please select an incident type" );
            }
        }
        else if ( this.categoryID != -1 ) {
            if ( this.filteredTypes.length == 0 ) {
                this.selectedCategory.attributes.INCIDENT_TYPE = null;          
            }
            else if ( this.selectedCategory.attributes.INCIDENT_TYPE == null ) {
                this.showTypeAlert = true;                                            
            }
            else {
                console.log ( "category id: " + this.categoryID );
                var id = this.categoryID.toString();
                this.categorySaved.emit(id);
                this.hide();
            }
        }
    }

    ngOnInit(): void {
        this.getCategories();
    }
}
