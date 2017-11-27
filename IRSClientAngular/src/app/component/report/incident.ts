import { Staff } from '../staff/staff';
import { Location } from '../location/location';
import { Person } from '../person/person';
import { Timer } from '../timer/timer';
import { IncidentElement } from './incident-element';
import { Category } from '../category/category';
import { Observable } from 'rxjs/Observable';
import { Config } from '../../util/config.service';

export class Incident {
    table: string;
    incidentElements: Map<String, IncidentElement[]>;
    attributes: IncidentAttributes;
    searchString: string;

    category: Category;
    guard: Staff;

 
    inWorkspace: boolean;

    constructor() {
        this.incidentElements = new Map();
        this.attributes = new IncidentAttributes();
        this.category = new Category(null, null, null, null);
        this.inWorkspace = false;
        this.guard = new Staff();
    }

    insertIncidentElement( element: IncidentElement ) {
        var key = "";
        var table = element.table;
        if ( table === Config.CategoryTable )  {
            key = Config.IncidentCategoryKey;
            if ( this.incidentElements[key] != null ) {
                console.log(this.incidentElements[key]);
                // Remove existing category
                var i = this.incidentElements[key]
                    .indexOf( x => x.attributes.CATEGORY_ID == (element as Category).attributes.CATEGORY_ID );
                if ( i >= 0 ) {
                    this.incidentElements[key].splice(i, 1);
                }
            }
        }
        else if ( table === Config.LocationTable )
            key = Config.LocationKey;
        else if ( table === Config.StaffTable )
            key = Config.StaffKey
        else if ( table === Config.PersonTable )
            key = Config.PersonKey;
        else {
            console.log( "Table not found.");
            key = table;
        }

        if ( this.incidentElements[key] == null ) {
            this.incidentElements[key] = new Array;
        }

        this.incidentElements[key].push( element );
    }
}

export class IncidentAttributes {
    REPORT_ID: number;
    ACCOUNT_ID: number;
    DESCRIPTION: string;
    EXECUTIVE_SUMMARY: string;
    STATUS: number;
    CATEGORY_ID: number;
    TEMPORARY_REPORT: number;
    START_TIME: number;
    END_TIME: number;
    TIMER_START: number;
    TIMER_END: number;
}
