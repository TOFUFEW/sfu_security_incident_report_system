import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FilterPipe } from '../../util/filter.pipe';
import { IncidentService } from '../../service/incident.service';
import { Config } from '../../util/config.service';
import { IncidentElement } from '../report/incident-element';
import { Incident } from '../report/incident';
import { Location, LocationAttributes } from '../location/location';
import { Staff, StaffAttributes } from '../staff/staff';

@Component({
    templateUrl: './search.component.html',
})

export class SearchComponent implements OnInit {
    
    constructor(
        private incidentService: IncidentService,
    ) {
    };

    incidents : Incident[];
    searchText : any;

      ngOnInit(): void {
        this.incidentService.getIncidents().then(returnedIncidents => {
            this.incidents = returnedIncidents;
            this.reconstructElements();
            console.log(this.incidents);
        }); 
    }

    /* TEMP CODE */
    private reconstructElements() {
        this.incidents.forEach(incident => {

            this.initArrays(incident);

            for (var i = 0; i < incident.incidentElements.length; i++){

                this.toConreteClass(incident, incident.incidentElements[i]);
            }

            this.setSearchString(incident);
        });
    }

    private toConreteClass(incident: Incident, element: IncidentElement) {

        if (element.table == Config.LocationTable) {

            let newLoc = new Location();
            newLoc.table = element.table;
            newLoc.attributes = element.attributes as LocationAttributes;
            this.setLocationSearchString(newLoc);
            incident.locationList.push(newLoc);

        } else if (element.table == Config.StaffTable) {

            let newStaff = new Staff();
            newStaff.table = element.table;
            newStaff.attributes = element.attributes as StaffAttributes;
            this.setStaffSearchString(newStaff);
            incident.staffList.push(newStaff);
            
        }
    }

    private initArrays(incident: Incident) {

        if (incident.locationList === undefined) {
            incident.locationList = new Array;
        }

        if (incident.staffList === undefined) {
            incident.staffList = new Array;
        }
    }
    

    setSearchString(incident: Incident) {
        incident.searchString = 
        incident.attributes.REPORT_ID 
        + " " + incident.attributes.DESCRIPTION 
        + " " + incident.attributes.EXECUTIVE_SUMMARY
        + " " + incident.attributes.CLOSED;
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
    /* END OF TEMP CODE */
}
