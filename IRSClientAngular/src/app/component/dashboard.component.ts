import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD:IRSClientAngular/src/app/dashboard/dashboard.component.ts
import { Location } from '../location/location';
import { LocationService } from '../location/location.service';
import { Incidents } from '../incidents/incidents';
import { IncidentsService } from '../incidents/incidents.service';
=======
<<<<<<< HEAD:IRSClientAngular/src/app/dashboard/dashboard.component.ts
import { Incidents } from '../incidents/incidents';
import { IncidentsService } from '../incidents/incidents.service';
import { Location } from '../location/location';
import { LocationService } from '../location/location.service';
=======
import { Location } from '../model/location';
import { LocationService } from '../service/location.service';
>>>>>>> b5301eba6cbc2d0c696cb488ca2b65833c81ab43:IRSClientAngular/src/app/component/dashboard.component.ts
>>>>>>> master:IRSClientAngular/src/app/component/dashboard.component.ts
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'dashboard',
<<<<<<< HEAD:IRSClientAngular/src/app/dashboard/dashboard.component.ts
  templateUrl: 'dashboard.component.html',
  providers: [LocationService, IncidentsService]
=======
  templateUrl: '../view/dashboard.component.html',
  providers: [LocationService]
>>>>>>> b5301eba6cbc2d0c696cb488ca2b65833c81ab43:IRSClientAngular/src/app/component/dashboard.component.ts
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
