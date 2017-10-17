import { Injectable } from '@angular/core';
import { Category, CategoryMapping } from '../model/category';
import { Incident } from '../model/incident';
import { IncidentElement } from '../model/incident-element';
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

    toCategoryDictionary( categories: Category[] ) : CategoryMapping[] {
        var mappings = [];
        if ( categories == null ) return mappings;

        // var currentMap = new CategoryMapping();
        // currentMap.MAIN_CATEGORY = "";

        // var currentSub = [];

        for ( var i = 0 ; i < categories.length ; i += 1) {
            // var newMain = categories[i].MAIN_CATEGORY;

            // if ( currentMap.MAIN_CATEGORY.toLowerCase() === newMain.toLowerCase() ) {
            //     var newSub = categories[i].SUB_CATEGORY;

            //     if ( currentSub.indexOf( newSub ) > 0 ) {

            //     }
            // }
        }

        return mappings;
    }
}
