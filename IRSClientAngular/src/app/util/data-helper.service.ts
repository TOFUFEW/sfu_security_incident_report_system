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

    static toIncident( raw: IncidentRaw ): Incident {
        var incident = new Incident();
        if ( raw == null ) return incident;

        incident.ACCOUNT_ID = raw.attributes.ACCOUNT_ID;
        incident.CATEGORY_ID = raw.attributes.CATEGORY_ID;
        incident.CLOSED = raw.attributes.CLOSED;
        incident.DESCRIPTION = raw.attributes.DESCRIPTION;
        incident.EXECUTIVE_SUMMARY = raw.attributes.EXECUTIVE_SUMMARY;
        incident.REPORT_ID = raw.attributes.REPORT_ID;
        
        // incident.incidentElements = raw.incidentElements;
        raw.incidentElements.forEach( ie => {
            incident.incidentElements.push( ie );
        });

        return incident;
    }

    static toIncidentArray( rawArray: IncidentRaw[] ): Incident[] {
        var arr = [];
        if ( rawArray == null || rawArray.length == 0 ) return arr;

        rawArray.forEach( raw => {
            arr.push( this.toIncident( raw ) );
        });

        console.log(arr);
        return arr;
    }
}
