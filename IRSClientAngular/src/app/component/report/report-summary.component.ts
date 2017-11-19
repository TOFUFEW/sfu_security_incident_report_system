import { Component, Input, OnInit } from '@angular/core';
import { Config } from '../../util/config.service';
import { Incident } from '../report/incident';
import { IncidentService } from '../../service/incident.service';
import { LocationService } from '../../service/location.service';
import { map } from 'rxjs/operators/map';

@Component({
    selector: 'report-summary',
    templateUrl: './report-summary.component.html',
    styleUrls: ['../../../assets/css/report-summary.component.css']
})

export class ReportSummaryComponent implements OnInit {
    @Input() inputReport: Incident;
    report: Incident;
    report_edit: Incident;
    editMode: boolean = false;
    constructor (
        private incidentService: IncidentService,
        private locationService: LocationService
    ) { 
    }

    removeFromWorkspace( id: number ): void {
        this.incidentService.removeFromWorkspace( id );
    }

    toggleEditMode(){
        this.editMode = !this.editMode;
    }

    cancelUpdate() {
        this.report_edit = this.copyReportUnbounded( this.report );
        this.editMode = false;
    }

    updateReport() {
        this.report = this.report_edit;
        this.editMode = false;
        this.incidentService.update( this.report );
    }

    addIncidentElement( type: string ) {
        if ( type == 'location' ) {

        }
    }

    ngOnInit(): void {
        if ( this.inputReport != null) {
            this.report = this.inputReport;
            this.cancelUpdate();
        }          
    }

    private copyReportUnbounded( source: Incident ): Incident {
        var incident = new Incident();
        incident.attributes.ACCOUNT_ID = source.attributes.ACCOUNT_ID;
        incident.attributes.CATEGORY_ID = source.attributes.CATEGORY_ID;
        incident.attributes.DESCRIPTION = source.attributes.DESCRIPTION;
        incident.attributes.EXECUTIVE_SUMMARY = source.attributes.EXECUTIVE_SUMMARY;
        incident.attributes.REPORT_ID = source.attributes.REPORT_ID;
        incident.attributes.STATUS = source.attributes.STATUS;
        incident.incidentElements = source.incidentElements;
        incident.category = source.category;
        incident.guard = source.guard;
        incident.inWorkspace = source.inWorkspace;
        incident.searchString = source.searchString;
        incident.table = source.table;

        return incident;
    }
}
