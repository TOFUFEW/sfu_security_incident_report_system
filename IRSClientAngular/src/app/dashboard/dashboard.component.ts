import { Component, OnInit } from '@angular/core';
import { Location } from '../location/location';
import { LocationService } from '../location/location.service';
import { Incidents } from '../incidents/incidents';
import { IncidentsService } from '../incidents/incidents.service';
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
  incidentList: Incidents[];

  constructor( private http: HttpClient , private locationService: LocationService, private incidentsService: IncidentsService  ){}
  
  ngOnInit() : void {
  }
}
