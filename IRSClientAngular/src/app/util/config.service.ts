export class Config {
    static LocationsURI: string = "http://localhost:4567/locations";
    static IncidentsURI: string = "http://localhost:4567/incidents";
    static StaffURI: string = "http://localhost:4567/staff";
    static LoginURI: string = "http://localhost:4567/login";
    static PersonURI: string = "http://localhost:4567/person";

    static GuardIncidentsURI: string = "http://localhost:4567/guardIncidents";
    static GetIncidentURI: string = "http://localhost:4567/getIncident"

    static CategoriesURI: string = "http://localhost:4567/categories";
    static StaffTable: string = "STAFF";
    static LocationTable: string = "LOCATION";
    static AccountTable: string = "ACCOUNT";
    static IncidentTable: string = "INCIDENT";
    static PersonTable: string = "PERSON";
    static CategoryTable: string = "INCIDENT_CATEGORY";

    static WebSocketURI: string = "ws://localhost:4567/login";
}
