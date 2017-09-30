import { Component, OnInit } from '@angular/core';
import { Incidents } from '../incidents/incidents';
import { IncidentsService } from '../incidents/incidents.service';
import { Location } from '../location/location';
import { LocationService } from '../location/location.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html',
  providers: [LocationService, IncidentsService]
})


export class DashboardComponent implements OnInit 
{
  title = 'SFU Incident Reporting System';
  locationsList: Location[];
  incidentsList: Incidents[];

  //constructor(private locationService: LocationService) { }
  constructor ( private http: HttpClient, private locationService: LocationService, private incidentsService: IncidentsService ) {}
  
  getIncidents () : void
  {
    this.incidentsService.getIncidents().then ( incidents => this.incidentsList = incidents );    
  }
  
  getLocations () : void 
  {
    this.locationService.getLocations().then ( locations => this.locationsList = locations );
  }

  ngOnInit () : void 
  {
    this.getIncidents();
    this.getLocations();
  }
}
