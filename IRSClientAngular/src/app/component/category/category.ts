import { Config } from '../../util/config.service';
import { IncidentElement } from '../report/incident-element';

export class Category implements IncidentElement {
    table: string;
    attributes: CategoryAttributes;

    constructor( id, mainCategory, subCategory, type ) {
        this.attributes = new CategoryAttributes();
        this.table = Config.CategoryTable;
        this.attributes.CATEGORY_ID = id;
        this.attributes.MAIN_CATEGORY = mainCategory;
        this.attributes.SUB_CATEGORY = subCategory;
        this.attributes.INCIDENT_TYPE = type;
    }

    toSearchString(): string {
        if (this.attributes.INCIDENT_TYPE == null || undefined) {
            this.attributes.INCIDENT_TYPE = "";
        }
        return this.attributes.MAIN_CATEGORY 
        + " " + this.attributes.SUB_CATEGORY 
        + " " + this.attributes.INCIDENT_TYPE
    };
}

export class CategoryAttributes {
    CATEGORY_ID: number;
    MAIN_CATEGORY: string;
    SUB_CATEGORY: string;
    INCIDENT_TYPE: string;
}

export class CategoryDictionary {
    ID: number;
    MAIN_CATEGORY: string;
    SUBCATEGORIES: SubCategory[] ;

    constructor () {
        this.ID = 0;
        this.MAIN_CATEGORY = "";
        this.SUBCATEGORIES = [];
    }
}

export class SubCategory {
    CATEGORY_ID: number;
    SUB_CATEGORY: string;
    TYPES: CategoryType[];

    constructor () {
        this.SUB_CATEGORY = "";
        this.TYPES = [];
    }
}

export class CategoryType {
    CATEGORY_ID: number;
    INCIDENT_TYPE: string;

    constructor () {
        this.INCIDENT_TYPE = "";
    }
}
