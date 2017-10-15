import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { Http, HttpModule, Headers } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './app.router';

/* Components */
import { AppComponent } from './app.component';

import { DashboardComponent } from './component/dashboard.component';
import { LocationComponent } from './component/location.component';
import { StaffComponent } from './component/staff.component';
import { IncidentsComponent } from './component/incidents.component';
import { LoginComponent } from './component/login.component';
import { GuardDashboard } from './component/guard-app/guard-dashboard.component';
import { GuardIncidentComponent } from './component/guard-app/guard-incident.component';
import { CategoryComponent } from './component/category-menu.component'

/* Services */
import { UserService } from './service/user.service';
import { LoginService } from './service/login.service';
import { CategoryService } from './service/category.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    routes
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    LocationComponent,
    StaffComponent,
    IncidentsComponent,
    LoginComponent,
    GuardDashboard,
    GuardIncidentComponent,
    CategoryComponent
  ],

  providers: [ UserService, LoginService, CategoryService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
