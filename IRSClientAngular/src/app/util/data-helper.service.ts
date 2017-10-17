import { Injectable } from '@angular/core';
import { Incident, IncidentRaw } from '../model/incident';
import { IncidentElement } from '../model/incident-element';
import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Config } from '../util/config.service';
import 'rxjs/add/operator/toPromise';

export class DataHelperService
{
    constructor() {}

    static extractAttribute( incidentElement: IncidentElement ): Object {
        return incidentElement.attributes;
    }

    static extractAttributes( incidentElements: IncidentElement[] ): Object[] {
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

    static toIncidentRaw( incident: Incident): IncidentRaw {
        var raw = new IncidentRaw();
        if ( incident == null ) return raw;

        raw.table = Config.IncidentTable;
        raw.incidentElements = incident.incidentElements;
        raw.attributes = incident;
        raw.attributes.incidentElements = null;
        return raw;
    }
}
