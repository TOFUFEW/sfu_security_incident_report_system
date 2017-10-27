import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { StaffService } from '../../service/staff.service';
import { UserService } from '../../service/user.service';
import { Config } from '../../util/config.service';
import { DataHelperService } from '../../util/data-helper.service';
import { Staff } from '../staff/staff';


@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['../../../assets/css/dashboard.component.css'],
})

export class DashboardComponent {
    title = 'SFU Incident Reporting System';
    staffList: Staff[];

    constructor(
        private router: Router,
        private http: HttpClient,
        private userService: UserService,
        private staffService: StaffService,
    ) {

        if ( this.userService.isLoggedIn() == false ) {
            this.router.navigate( [ 'login' ] );
        }
    }

    newReport(): void {
        window.open("new-report", "_blank");
    }
}
