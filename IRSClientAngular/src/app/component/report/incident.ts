import { Staff } from '../staff/staff';
import { Location } from '../location/location';
import { Person } from '../person/person';
import { IncidentElement } from './incident-element';
import { Category } from '../category/category';
import { Observable } from 'rxjs/Observable';

export class Incident {
    table: string;
    incidentElements: IncidentElement[];
    attributes: IncidentAttributes;
    searchString: string;

    // TEMP CODE
    locationList: Location[];
    staffList: Staff[];

    personList: Person[];
    category: Category;
    // END OF TEMP CODE

    inWorkspace: boolean;
    
    constructor() {
        this.incidentElements = [];
        this.locationList = [];
        this.staffList = [];
        this.personList = [];
        this.attributes = new IncidentAttributes();
        this.category = new Category(null, null, null, null);
        this.inWorkspace = false;
    }
}

export class IncidentAttributes {
    REPORT_ID: number;
    ACCOUNT_ID: number;
    DESCRIPTION: string;
    EXECUTIVE_SUMMARY: string;
    CLOSED: number;
    CATEGORY_ID: number;
}