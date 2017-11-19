import { Component, Input, OnInit } from '@angular/core';
import { Config } from '../../util/config.service';
import { Incident } from '../report/incident';
import { IncidentService } from '../../service/incident.service';
import {UserService} from "../../service/user.service";

@Component({
    selector: 'report-summary',
    templateUrl: './report-summary.component.html',
    styleUrls: ['../../../assets/css/report-summary.component.css']
})

export class ReportSummaryComponent implements OnInit {
    @Input() inputReport: Incident;
    report: Incident;
    isAccepted : boolean = false;

    constructor (
        private incidentService: IncidentService,
        private userService: UserService
    ) {
        //this.report = new Incident();
        console.log(this.report);
    }

    removeFromWorkspace( id: number ): void {
        this.incidentService.removeFromWorkspace( id );
    }

    acceptTemp(): void {
        var newIncident = new Incident();
        newIncident = this.report;
        var reportID = this.report.attributes.REPORT_ID;
        console.log("new incident report id = " + newIncident.attributes.REPORT_ID);
        console.log("new incident creator id = " + newIncident.attributes.ACCOUNT_ID);
        if( !this.isAccepted ) {
            console.log("accept temp");
            newIncident.attributes.ACCOUNT_ID = this.userService.getAccountID();
            newIncident.attributes.REPORT_ID = null;
            console.log("new incident report id = " + newIncident.attributes.REPORT_ID);
            console.log("new incident creator id = " + newIncident.attributes.ACCOUNT_ID);
            this.incidentService.create( newIncident )
              .then( returnedIncident => {
                if ( returnedIncident != null  ) {
                  alert("Report successfully created!");
                  setTimeout(function(){location.reload()}, 300);
                }
                else alert( "Add failed." );
              } );
            this.isAccepted = true;
        }
        this.report.attributes.REPORT_ID = reportID;
        this.removeFromWorkspace( reportID );
    }

    ngOnInit(): void {
        if ( this.inputReport != null) {
            this.report = this.inputReport;
        }

        console.log( this.report )
        console.log ( "report category ", this.report.category);
    }
}
