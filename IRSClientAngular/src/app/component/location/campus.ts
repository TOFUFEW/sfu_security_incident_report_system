import { Config } from '../../util/config.service';
export class Campus {
    table: string;
    attributes: CampusAttributes;

    constructor() {
        this.table = Config.CampusTable;
        this.attributes = new CampusAttributes();
    }

    toSearchString(): string {
        return this.attributes.CITY 
        + " " + this.attributes.ADDRESS 
    };
}

export class CampusAttributes {
    CAMPUS_ID: number;
    CITY: string;
    ADDRESS: string;
}