import { Injectable } from '@angular/core';
import { Incident } from '../model/incident';
import { IncidentElement } from '../model/incident-element';
import { IncidentJson } from '../model/incident-json';
import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Config } from '../util/config.service';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataHelperService
{
    constructor() {}

    extractAttribute( incidentElement: IncidentElement ): Object {
        return incidentElement.attributes;
    }

    extractAttributes( incidentElements: IncidentElement[] ): Object[] {
        var arr = [];
        incidentElements.forEach( so => {
            arr.push( so.attributes );
        });
        return arr;
    }

    toIncidentElement( table: string, object: Object): IncidentElement {
        var incidentElement: IncidentElement = new IncidentElement();
     
        incidentElement.table = table;
        incidentElement.attributes = object;
        return incidentElement;
    }

    toIncidentJson( incident: Incident ): IncidentJson {
        var incidentJson = new IncidentJson();
        incidentJson.table = Config.IncidentTable;
        incidentJson.attributes = incident;
        incidentJson.incidentElements = [];
        return incidentJson;
    }
}
