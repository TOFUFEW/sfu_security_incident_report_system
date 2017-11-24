import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FilterPipe } from '../../util/filter.pipe';
import { IncidentService } from '../../service/incident.service';
import { Config } from '../../util/config.service';
import { IncidentElement } from '../report/incident-element';
import { Incident } from '../report/incident';
import { Location, LocationAttributes } from '../location/location';
import { Staff, StaffAttributes } from '../staff/staff';
import { SpinnerComponent } from '../loading-spinner/spinner.component';

@Component({
    templateUrl: './search.component.html',
})

export class SearchComponent implements OnInit {
    
    constructor(
        private incidentService: IncidentService,
    ) {};

    showSpinner: boolean = true;
    queryString: string;
    incidents: Incident[];


    ngOnInit(): void {
        this.incidentService.getIncidents()
            .subscribe(
                (responseData) => {
                    setTimeout( () => {
                        this.incidents = responseData;
                        this.showSpinner = false;
                     } , 4000);
                },
                (errors) => {
                    alert(Config.FailedToRetrieveMsg);
                },
                () => {
                    console.log("Done before data is finished");
                }
        )
    }

    /*
    private reconstructElements() {
        this.incidents.forEach(incident => {
            this.toSearchStrings(incident);
        });
    }

    private toSearchStrings(incident: Incident) {

        incident.incidentElements[Config.LocationKey].forEach(loc => {
            this.setLocationSearchString(loc);
        })

        incident.incidentElements[Config.StaffKey].forEach(staff => {
            this.setStaffSearchString(staff);
        })

        this.setSearchString(incident);
    }

    
    setSearchString(incident: Incident) {
        incident.searchString = 
        incident.attributes.REPORT_ID 
        + " " + incident.attributes.DESCRIPTION 
        + " " + incident.attributes.EXECUTIVE_SUMMARY
        + " " + incident.attributes.STATUS;
    };

    setStaffSearchString(staff: Staff) {
        staff.searchString = 
        + " " + staff.attributes.FIRST_NAME 
        + " " + staff.attributes.LAST_NAME;
    };

    setLocationSearchString(loc: Location) {
        loc.searchString = 
        + " " + loc.attributes.BUILDING_NAME 
        + " " + loc.attributes.ROOM_NUMBER 
        + " " + loc.attributes.DEPARTMENT;
    }
    */
}
