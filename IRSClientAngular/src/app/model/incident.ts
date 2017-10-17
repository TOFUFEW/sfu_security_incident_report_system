import { IncidentElement } from '../model/incident-element';

export class Incident {
    REPORT_ID: number;
    ACCOUNT_ID: number;
    CATEGORY_ID: number;
    DESCRIPTION: string;
    EXECUTIVE_SUMMARY: string;
    CLOSED: number;
    incidentElements: IncidentElement[];

    constructor() {
      this.incidentElements = [];
    }
}

export class IncidentRaw {
    table: string;
    incidentElements: IncidentElement[];
    attributes: Incident;

    constructor() {
      this.incidentElements = [];
    }
}