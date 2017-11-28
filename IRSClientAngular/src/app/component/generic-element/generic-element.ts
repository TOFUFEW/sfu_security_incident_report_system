import { Config } from '../../util/config.service';
import { IncidentElement } from '../report/incident-element';

export class GenericElement implements IncidentElement {
    table: string;
    attributes: ElementAttributes;

    constructor() {
        this.attributes = new ElementAttributes();
        this.table = Config.GenericElementTable;
    }
}

export class ElementAttributes {
    GENERIC_ELEMENT_ID: number;
    TYPE: string;
    DESCRIPTION: string;
}