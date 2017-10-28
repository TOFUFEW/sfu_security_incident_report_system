import { Component, Input } from '@angular/core';
import { Config } from '../../util/config.service';
import { Incident } from '../report/incident';
import { IncidentService } from '../../service/incident.service';

@Component({
    selector: 'report-summary',
    templateUrl: './report-summary.component.html'
})

export class ReportSummaryComponent {
    @Input() report: Incident;

    constructor (
        private incidentService: IncidentService
    ) { 
    }

    removeFromWorkspace( id: number ): void {
        this.incidentService.removeFromWorkspace( id );
    }
}
