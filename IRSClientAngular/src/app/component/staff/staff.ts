import { Config } from '../../util/config.service';
import { IncidentElement } from '../report/incident-element';

export class Staff implements IncidentElement {
    table: string;
    attributes: StaffAttributes;

    constructor() {
        this.attributes = new StaffAttributes();
        this.table = Config.StaffTable;
    }

    toConsole(): string {
        return "hi i'm working!";
    }
    toSearchString(): string {
        return this.attributes.FIRST_NAME 
        + " " + this.attributes.LAST_NAME 
    };
}

export class StaffAttributes {
    ACCOUNT_ID: number;
    CAMPUS_ID: number;
    FIRST_NAME: string;
    LAST_NAME: string;
}