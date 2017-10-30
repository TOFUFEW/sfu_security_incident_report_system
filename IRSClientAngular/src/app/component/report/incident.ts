import { Staff } from '../staff/staff';
import { Location } from '../location/location';
import { IncidentElement } from './incident-element';
import { Category } from '../category/category';

export class Incident {
    table: string;
    incidentElements: IncidentElement[];
    attributes: IncidentAttributes;
    searchString: string;

    // TEMP CODE
    locationList: Location[];
    staffList: Staff[];
    category: Category;
    // END OF TEMP CODE

    constructor() {
        this.incidentElements = [];
        this.locationList = [];
        this.staffList = [];
        this.attributes = new IncidentAttributes();
    }
}

export class IncidentAttributes {
    REPORT_ID: number;
    ACCOUNT_ID: number;
    DESCRIPTION: string;
    EXECUTIVE_SUMMARY: string;
    CLOSED: number;
    CATEGORY_ID: number;
    // CATEGORY: Category;

    // constructor() {
    //     this.CATEGORY = new Category("", "", "", "");
    // }
}