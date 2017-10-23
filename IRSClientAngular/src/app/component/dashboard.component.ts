import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { Incident } from '../model/incident';
import { Staff } from '../model/staff';
import { IncidentService } from '../service/incident.service';
import { UserService } from '../service/user.service';
import { Config } from '../util/config.service';
import { DataHelperService } from '../util/data-helper.service';

@Component({
    selector: 'dashboard',
    templateUrl: '../view/dashboard.component.html',
    styleUrls: ['../../assets/css/dashboard.component.css'],
})

export class DashboardComponent implements OnInit {
    title = 'SFU Incident Reporting System';
    staffList: Staff[];
    reportsInWorkspace: Incident[];

    constructor(
        private router: Router,
        private http: HttpClient,
        private userService: UserService,
        private incidentService: IncidentService,
    ) {

        if ( this.userService.isLoggedIn() == false ) {
            this.router.navigate( [ 'login' ] );
        }
    }

    newReport(): void {
        window.open("new-report", "_blank");
    }

    ngOnInit() {
        this.incidentService.reportsToAddToWorkspace
            .subscribe( reports => {
                this.reportsInWorkspace = reports as Incident[];
                console.log(reports );
                console.log(this.reportsInWorkspace );
            });
    }
}
