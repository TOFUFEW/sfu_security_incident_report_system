import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { Http, HttpModule, Headers } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './app.router';

/* Components */
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LocationComponent } from './component/location/location.component';
import { StaffComponent } from './component/staff/staff.component';
import { IncidentComponent } from './component/report/incident.component';
import { LoginComponent } from './component/login/login.component';
import { NewReportComponent } from './component/report/new-report.component';
import { GuardIncidentComponent } from './component/guard-app/guard-incident.component';
import { GuardDashboardComponent } from './component/guard-app/guard-dashboard.component';
import { VehicleComponent } from './component/vehicle/vehicle.component';
import { SearchComponent } from './component/search/search.component';
import { PersonComponent } from './component/person/person.component';
import { AttachmentComponent } from './component/attachment/attachment.component';
import { AttachmentViewComponent } from './component/attachment/attachmentView.component';
import { TimerComponent } from './component/timer/timer.component';
import { LocationModalComponent } from './component/location/location-modal.component';
import { CategoryComponent } from './component/category/category.component';
import { ReportSummaryComponent } from './component/report/report-summary.component';
import { InlineEditComponent } from './component/report/inline-edit.component';
import { NewAccountComponent } from './component/login/new-account-component';
import { GenericElementComponent } from './component/generic-element/generic-element.component';
import { SpinnerComponent } from './component/loading-spinner/spinner.component';
import { StatusComponent } from './component/status/status.component';

/* Services */
import { UserService } from './service/user.service';
import { LoginService } from './service/login.service';
import { CategoryService } from './service/category.service';
import { DomService } from './util/dom.service';
import { LocationService } from './service/location.service';
import { IncidentService } from './service/incident.service';
import { IncidentElementService } from './service/incident-element.service';
import { StaffService } from './service/staff.service'
import { PersonService } from './service/person.service';
import { NewReportService } from './service/new-report.service';
import { TimerService } from './service/timer.service';
import { FilterPipe } from './util/filter.pipe';


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
    AttachmentComponent,
    AttachmentViewComponent,
    NavbarComponent,
    StatusComponent,
    DashboardComponent,
    LocationComponent,
    LocationModalComponent,
    StaffComponent,
    IncidentComponent,
    LoginComponent,
    GuardIncidentComponent,
    GuardDashboardComponent,
    CategoryComponent,
    NewReportComponent,
    VehicleComponent,
    SearchComponent,
    PersonComponent,
    FilterPipe,
    ReportSummaryComponent,
    TimerComponent,
    NewAccountComponent,
    InlineEditComponent,
    GenericElementComponent,
    SpinnerComponent
  ],

  providers: [
    UserService,
    LoginService,
    DomService,
    LocationService,
    IncidentService,
    IncidentElementService,
    StaffService,
    PersonService,
    NewReportService,
    CategoryService,
    TimerService
  ],

  bootstrap: [AppComponent],
  entryComponents: [ LocationComponent, VehicleComponent, GenericElementComponent,
    PersonComponent, AttachmentComponent ]

})

export class AppModule { }
