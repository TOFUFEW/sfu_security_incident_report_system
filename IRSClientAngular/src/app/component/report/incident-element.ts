export interface IncidentElement {
    table: string;
    attributes: object;

    // OVERRIDE THIS WITH DERIVED CLASSES
    toSearchString(): string;
}