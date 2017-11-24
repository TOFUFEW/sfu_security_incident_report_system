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
    styleUrls: ['../../../assets/css/search.component.css']
})

export class SearchComponent implements OnInit {
    
    showSpinner: boolean = true;
    queryString: string;
    incidents: Incident[];

    constructor(
        private incidentService: IncidentService,
    ) {
    };

    onSearch() {
        if (this.queryString == "" || undefined) {
            alert ("You must enter something!");
            return;
        } else {
            this.showSpinner = true;
            this.incidentService.doSearch(this.queryString)
            .subscribe(
                (responseData) => {
                    this.incidents = responseData;
                },
                (errors) => {
                    alert("Search failed");
                    this.showSpinner = false;
                },
                () => {
                    alert("Found " + this.incidents.length + " records.");
                    this.showSpinner = false;
                }
            )
        }
    }

    addToWorkspace( incident: Incident ): void {
        this.incidentService.addToWorkspace( incident );
    }

    removeFromWorkspace( id: number ): void {
        if ( id > 0 )
            this.incidentService.removeFromWorkspace( id );
    }

    ngOnInit() {
        this.incidentService.allReports
        .subscribe(
            (responseData) => {
                setTimeout( () => {
                    this.incidents = responseData;
                    this.showSpinner = false;
                    } , 1000);
            },
            (errors) => {
                alert(Config.FailedToRetrieveMsg);
            },
            () => {
                console.log("Done before data is finished");
            }
        );
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
