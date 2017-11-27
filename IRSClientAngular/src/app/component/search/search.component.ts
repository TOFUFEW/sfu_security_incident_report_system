import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FilterPipe } from '../../util/filter.pipe';
import { IncidentService } from '../../service/incident.service';
import { UserService } from '../../service/user.service';
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
    isCTSearch: boolean = false;
    incidents: Incident[];

    constructor(
        private incidentService: IncidentService,
        private userService: UserService,
    ) {
    };

    onSearch() {
        if (this.queryString == "" || this.queryString == undefined) {
            this.getAllReports();
            return;
        } else {
            this.showSpinner = true;
            this.incidentService.doSearch(this.constructBodyRequest(), this.isCTSearch)
            .subscribe(
                (responseData) => {
                    this.incidents = responseData;
                },
                (errors) => {
                    if (errors.status == 400) {
                        alert("Search failed, Reason: bad format");
                    }
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
        this.getAllReports();
    }

    private constructBodyRequest(): string {
        let body = new URLSearchParams();
        let user = this.userService.getCurrentUser();
        body.append('query', this.queryString);
        body.append('userId', user.attributes.ACCOUNT_ID.toString());
        console.log(body.toString());
        return body.toString();
    }

    private getAllReports() {
        this.incidentService.allReports
        .subscribe(
            (responseData) => {
                this.incidents = responseData;                
                this.showSpinner = false;
            },
            (errors) => {
                alert(Config.FailedToRetrieveMsg);
            },
            () => {
                
            }
        );
    }
}
