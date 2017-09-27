import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { LocationComponent } from './location.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    LocationComponent
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
