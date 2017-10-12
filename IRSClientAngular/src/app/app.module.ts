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

/* Services */
import { DataHelperService } from './util/data-helper.service';
import { UserService } from './service/user.service';
import { LoginService } from './service/login.service';

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
  ],

  providers: [ UserService, LoginService, DataHelperService ],
  bootstrap: [AppComponent]
})

export class AppModule { }
