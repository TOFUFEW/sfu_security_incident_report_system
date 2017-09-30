import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LocationComponent } from './location/location.component';
import { IncidentsComponent } from './incidents/incidents.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    LocationComponent, 
    IncidentsComponent
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
