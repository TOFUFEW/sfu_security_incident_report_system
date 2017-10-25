import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Config } from '../util/config.service';
import { Incident } from '../component/report/incident';
import { IncidentElement } from '../component/report/incident-element';
import 'rxjs/add/operator/toPromise';

export class DataHelperService
{
    constructor() {}

    static extractAttributes( incidentElement: IncidentElement ): Object {
        return incidentElement.attributes;
    }

    static extractAttributesArray( incidentElements: IncidentElement[] ): Object[] {
        var arr = [];
        incidentElements.forEach( so => {
            arr.push( so.attributes );
        });
        return arr;
    }

    static toIncidentElement( table: string, object: Object): IncidentElement {
        var incidentElement: IncidentElement = new IncidentElement();

        incidentElement.table = table;
        incidentElement.attributes = object;
        return incidentElement;
    }
}
