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
import { IncidentComponent } from './component/incident.component';
import { LoginComponent } from './component/login.component';
import { GuardDashboardComponent } from './component/guard-app/guard-dashboard.component';
import { GuardIncidentComponent } from './component/guard-app/guard-incident.component';
import { CategoryComponent } from './component/category.component'
import { NewReportComponent } from './component/new-report.component';
import { DynamicFormComponent } from './component/dynamic-form.component';
import { VehicleComponent } from './component/vehicle.component';

/* Services */
import { UserService } from './service/user.service';
import { LoginService } from './service/login.service';
import { CategoryService } from './service/category.service';
import { DomService } from './service/dom.service';
import { LocationService } from './service/location.service'
import { IncidentService } from './service/incident.service'
import { StaffService } from './service/staff.service'
import { NewReportService } from './service/new-report.service';
import { DataHelperService } from './util/data-helper.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    routes, 
  ],

  declarations: [
    AppComponent,
    DashboardComponent,
    LocationComponent,
    StaffComponent,
    IncidentComponent,
    LoginComponent,
    GuardDashboardComponent,
    GuardIncidentComponent,
    CategoryComponent,
    NewReportComponent,
    DynamicFormComponent,
    VehicleComponent,
  ],
  

  providers: [UserService, LoginService, DomService, DataHelperService, LocationService, IncidentService, StaffService, NewReportService],
  bootstrap: [AppComponent],
  entryComponents: [ LocationComponent, VehicleComponent ]
})

export class AppModule { }
