import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { Http, HttpModule, Headers } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './app.router';

/* Components */
import { AppComponent } from './app.component';

import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LocationComponent } from './component/location/location.component';
import { StaffComponent } from './component/staff/staff.component';
import { IncidentComponent } from './component/report/incident.component';
import { LoginComponent } from './component/login/login.component';
import { NewReportComponent } from './component/report/new-report.component';
import { VehicleComponent } from './component/vehicle/vehicle.component';

/* Services */
import { UserService } from './service/user.service';
import { LoginService } from './service/login.service';
import { DomService } from './util/dom.service';
import { LocationService } from './service/location.service'
import { IncidentService } from './service/incident.service'
import { StaffService } from './service/staff.service'
import { NewReportService } from './service/new-report.service';
import {GuardDashboardComponent} from "./component/guard/guard-dashboard.component";
import {GuardTestViewReportComponent} from "./component/guard/guard-test-view-report.component";

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
    IncidentComponent,
    LoginComponent,
    NewReportComponent,
    VehicleComponent,
    GuardDashboardComponent,
    GuardTestViewReportComponent
  ],

  providers: [ UserService, LoginService, DomService, LocationService, IncidentService, StaffService, NewReportService ],
  bootstrap: [ AppComponent ],
  entryComponents: [ LocationComponent, VehicleComponent ]
})

export class AppModule { }
