import { Incident } from '../model/incident';
import { IncidentElement } from '../model/incident-element';

export class IncidentJson {
    table: string;
    attributes: Incident;
    incidentElements: IncidentElement[];

    constructor() {
        this.incidentElements = [];
    }
}