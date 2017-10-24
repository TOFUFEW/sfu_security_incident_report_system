import { IncidentElement } from '../model/incident-element';

export class Incident {
    table: string;
    incidentElements: IncidentElement[];
    attributes: IncidentAttributes;

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
