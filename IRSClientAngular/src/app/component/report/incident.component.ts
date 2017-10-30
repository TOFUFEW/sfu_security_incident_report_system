import { Component, Input, OnInit } from '@angular/core';
import { IncidentService } from '../../service/incident.service';
import { Incident } from './incident';
import { Location } from '../location/location';
import {Staff} from "../staff/staff";
import {StaffService} from "../../service/staff.service";
import {User} from "../login/user";
import {DataHelperService} from "../../util/data-helper.service";
import {Config} from "../../util/config.service";
import {AssignGuardService} from "../../service/assign-guard.service";

@Component(
  {
    selector: 'incidents-component',
    templateUrl: './incidents.component.html',
    styleUrls: ['../../../assets/css/incidents.component.css',
                '../../../assets/css/panels.css']
  }
)

export class IncidentComponent implements OnInit {
  incidents: Incident[];
  staffs: Staff[];
  newIncident: Incident = new Incident();
  newUser: User = new User();

  constructor( private incidentService: IncidentService,
               private staffService: StaffService,
               private assignGuardService: AssignGuardService ) {};

  getIncidents(): void {
      this.incidentService.getIncidents().then( returnedIncidents => {
          this.incidents = returnedIncidents;
      } );
  }

  getStaff() : void {
      this.staffService.getStaffs().then( returnedStaffs => {
          this.staffs = returnedStaffs;
      } );
  }

  deleteIncident( id: number ): void {
      this.incidentService.delete( id ).then( isDeleted => {
          var msg = isDeleted ? "Incident successfully deleted!" : "Delete failed";
          alert(msg);
          var i = this.incidents.findIndex( loc => loc.attributes.REPORT_ID === id );
          // remove 1 object at index i
          this.incidents.splice( i, 1 );
      } );
  }

  setCurrentIncident( incident: Incident ) : void {
      this.newIncident = incident;
      console.log( "set incident id = " + this.newIncident.attributes.REPORT_ID);
  }

  assignGuard() {
      console.log("assign staff id = " + this.newUser.ACCOUNT_ID);
      console.log("assign staff incident id = " + this.newIncident.attributes.REPORT_ID);
      this.newIncident.attributes.ACCOUNT_ID = this.newUser.ACCOUNT_ID;
      this.assignGuardService.assignGuard( this.newIncident );
  }

  ngOnInit() : void {
      this.getIncidents();
      this.getStaff();
  }

}
