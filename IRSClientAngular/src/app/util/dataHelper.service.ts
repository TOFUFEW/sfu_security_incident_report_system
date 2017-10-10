import { Injectable } from '@angular/core';
import { IncidentElement } from '../model/incidentElement';
import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Config } from '../util/config.service';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataHelperService
{
    constructor() {}

    extractColumnValue( incidentElement: IncidentElement ): Object {
        return incidentElement.columnValue;
    }

    extractColumnValues( incidentElements: IncidentElement[] ): Object[] {
        var arr = [];
        incidentElements.forEach( iE => {
            arr.push( iE.columnValue );
        });
        return arr;
    }
}
