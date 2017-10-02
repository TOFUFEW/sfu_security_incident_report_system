import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { Http, HttpModule, Headers } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LocationComponent } from './location/location.component';
import { StaffComponent } from './staff/staff.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    LocationComponent,
    StaffComponent
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
