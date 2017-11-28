import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NewReportService } from '../../service/new-report.service';
import { IncidentElement } from '../report/incident-element';
import { GenericElement } from '../generic-element/generic-element';
import { Config } from '../../util/config.service';

@Component({
    selector: 'generic-element-component',
    templateUrl: './generic-element.component.html'
})

export class GenericElementComponent implements OnInit {
    public reference : any;
    newElement: GenericElement = new GenericElement();

    constructor (
        private reportService: NewReportService
    ) {
    }

    addElementToReport(): void {
        this.reportService.addIncidentElement ( this.newElement );
    }

    removeElementFromReport(): void {
        this.reportService.removeIncidentElement ( this.newElement, Config.GenericElementTable );
        this.reference.destroy();
    }


    ngOnInit() {
        this.addElementToReport();
    }
}
