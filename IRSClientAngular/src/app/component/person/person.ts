import { Config } from '../../util/config.service';
import { IncidentElement } from '../report/incident-element';

export class Person implements IncidentElement {
    table: string;
    attributes: PersonAttributes;

    constructor() {
        this.attributes = new PersonAttributes();
        this.table = Config.PersonTable;
    }
}

export class PersonAttributes {
    PERSON_ID: number;
    FIRST_NAME: string;
    LAST_NAME: string;
    PHONE_NUMBER:string;
}