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
import { NewIncidentComponent } from './component/new-incident.component';
import { DynamicFormComponent } from './component/dynamic-form.component';
import { AttachmentComponent } from './component/attachment.component';
import { MyTestComponent } from './component/myTest.component';

/* Services */
import { DataHelperService } from './util/data-helper.service';
import { UserService } from './service/user.service';
import { LoginService } from './service/login.service';
import { DomService } from './service/dom.service';
import { LocationService } from './service/location.service'

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
    NewIncidentComponent,
    LoginComponent,
    DynamicFormComponent,
    AttachmentComponent,
    MyTestComponent
  ],

  providers: [UserService, LoginService, DomService, DataHelperService, LocationService],
  bootstrap: [AppComponent],
  entryComponents: [ LocationComponent, MyTestComponent ]
})

export class AppModule { }
