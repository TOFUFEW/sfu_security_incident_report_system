import { Staff } from '../staff/staff';
import { Location } from '../location/location';
import { IncidentElement } from './incident-element';

export class Incident {
    table: string;
    incidentElements: IncidentElement[];
    attributes: IncidentAttributes;
    searchString: string;

    // TEMP CODE
    locationList: Location[];
    staffList: Staff[];
    // END OF TEMP CODE

    constructor() {
      this.incidentElements = [];
      this.attributes = new IncidentAttributes();
    }

    
}

export class IncidentAttributes {
    REPORT_ID: number;
    ACCOUNT_ID: number;
    CATEGORY_ID: number;
    DESCRIPTION: string;
    EXECUTIVE_SUMMARY: string;
    CLOSED: number;
}