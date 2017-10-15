import { Component, Input, OnInit } from '@angular/core';
import { MainCategory } from '../model/category-main';
import { SubCategory } from '../model/category-sub';
import { CategoryType } from '../model/category-type';
import { CategoryService } from '../service/category.service';

@Component( 
  {
  selector: 'category-component',
  templateUrl: '../view/category-menu.component.html'
  }
)

export class CategoryComponent implements OnInit {
  mainCategories: MainCategory[];
  subCategories: SubCategory[];
  categoryTypes: CategoryType[];
  
  constructor ( private categoryService: CategoryService ) {};

  getMainCategories(): void {
    this.categoryService.getMainCategories().then( returnedMainCategories => {
      this.mainCategories = returnedMainCategories;
    } );    
  }

  ngOnInit() : void {
    this.getMainCategories();
  }
}
