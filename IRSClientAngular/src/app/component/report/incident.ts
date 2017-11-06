import { Staff } from '../staff/staff';
import { Location } from '../location/location';
import { Person } from '../person/person';
import { IncidentElement} from './incident-element';
import { Category } from '../category/category';
import { Observable } from 'rxjs/Observable';

export class Incident {
    table: string;
    incidentElements: Map<String, IncidentElement[]>;
    attributes: IncidentAttributes;
    searchString: string;

    // TEMP CODE
    personList: Person[];
    category: Category;
    guard: Staff;
    // END OF TEMP CODE

    inWorkspace: boolean;
    
    constructor() {
        this.incidentElements = new Map;
        this.personList = [];
        this.attributes = new IncidentAttributes();
        this.category = new Category(null, null, null, null);
        this.inWorkspace = false;
        this.guard = new Staff();
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