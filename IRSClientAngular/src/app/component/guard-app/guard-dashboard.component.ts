import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

import { Incident } from '../../model/incident';
import { IncidentsService } from '../../service/incidents.service';
import { Category } from '../../model/category';
import { MainCategory } from '../../model/category-main';
import { SubCategory } from '../../model/category-sub';
import { CategoryType } from '../../model/category-type';
import { CategoryService } from '../../service/category.service';
import { Location } from '../../model/location';
import { LocationService } from '../../service/location.service';
import { UserService } from '../../service/user.service';


@Component({
    selector: 'guard-dashboard',
    templateUrl: '../../view/guard-dashboard.component.html',
    providers: [ LocationService, IncidentsService, CategoryService ]
})

export class GuardDashboard {
    title = 'SFU Incident Reporting System';
    locationsList: Location[];
    incidentsList: Incident[];
    mainCategoryList: MainCategory[];
    subCategoryList: SubCategory[];
    categoryTypeList: CategoryType[];

  constructor(
      private router: Router,
      private http: HttpClient,
      private locationService: LocationService,
      private userService: UserService,
      private categoryService: CategoryService
  ) {

      if ( this.userService.isLoggedIn() == false ) {
          this.router.navigate([ 'login' ] );
    }
  }
}
