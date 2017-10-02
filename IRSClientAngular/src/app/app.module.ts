import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { Http, HttpModule, Headers } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { routes } from './app.router';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { DashboardComponent } from './dashboard/dashboard.component';
import { IncidentsComponent } from './incidents/incidents.component';
<<<<<<< HEAD
import { LocationComponent } from './location/location.component';
=======
=======
import { DashboardComponent } from './component/dashboard.component';
import { LocationComponent } from './component/location.component';
import { LoginComponent } from './component/login.component';
>>>>>>> b5301eba6cbc2d0c696cb488ca2b65833c81ab43
>>>>>>> master

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
<<<<<<< HEAD
    IncidentsComponent,    
    LocationComponent 
=======
<<<<<<< HEAD
    LocationComponent, 
    IncidentsComponent
=======
    LocationComponent,
    LoginComponent,
>>>>>>> b5301eba6cbc2d0c696cb488ca2b65833c81ab43
>>>>>>> master
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
