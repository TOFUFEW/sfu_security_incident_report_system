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
    statuses: String[] = ['Created', 'En Route', 'Working', 'Resolved', 'Closed', 'Sealed'];

    constructor(
        private incidentService: IncidentService,
        private userService: UserService,
        private router: Router
    ) {
        if ( !this.userService.isLoggedIn() ) {
            this.router.navigate( [ 'login' ] );
        } 
    };

    onSearch() {
        this.showSpinner = true;
        if (this.queryString == "" || this.queryString == undefined) {
            this.getAllReports();
            return;
        } else {
            this.incidentService.doSearch(this.constructBodyRequest(), this.isCTSearch)
            .subscribe(
                (responseData) => {
                    this.incidents = responseData;
                },
                (errors) => {
                    if (errors.status == 400) {
                        var formatString: String = "Search failed, Reason: bad format; " 
                        + "\nFormat should be: \"Search Term\" AND/OR \"Search Term\" " 
                        + "\nExample: \"Vancouver\" AND \"En Route\" "
                        + "\nNotes: Bracket are allowed for prioritizing of search terms";
                        alert(formatString);
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
        if ( id > 0 ) {
            this.incidentService.removeFromWorkspace( id );
            var index = this.incidents.findIndex( i => i.attributes.REPORT_ID == id );
            if ( index >= 0 ) {
                this.incidents[index].inWorkspace = false;
            }          
        }
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
        this.incidentService.getIncidentsObs()
        .subscribe(
            (responseData) => {
                this.incidents = responseData;
            },
            (errors) => {
                alert(Config.FailedToRetrieveMsg);
            },
            () => {
                this.showSpinner = false;
            }
        );
    }
}
