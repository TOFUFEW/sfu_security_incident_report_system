import { Component, Input, OnInit } from '@angular/core';
import { Config } from '../../util/config.service';
import { Incident } from '../report/incident';
import { IncidentService } from '../../service/incident.service';

@Component({
    selector: 'report-summary',
    templateUrl: './report-summary.component.html',
    styleUrls: ['../../../assets/css/report-summary.component.css']
})

export class ReportSummaryComponent implements OnInit {
    @Input() inputReport: Incident;
    report: Incident;

    constructor (
        private incidentService: IncidentService
    ) { 
        //this.report = new Incident();
        console.log(this.report);
    }

    removeFromWorkspace( id: number ): void {
        this.incidentService.removeFromWorkspace( id );
    }

    ngOnInit(): void {
        if ( this.inputReport != null) {
            this.report = this.inputReport;
        }
            
        console.log( this.report )
        console.log ( "report category ", this.report.category);                
    }
}
