export class Config {

    static LocationsURI: string = "https://localhost:4567/locations";
    static IncidentsURI: string = "https://localhost:4567/incidents";
    static StaffURI: string = "https://localhost:4567/staff";
    static LoginURI: string = "https://localhost:4567/login";
    static PersonURI: string = "https://localhost:4567/person";

    static GetIncidentsURI: string = "https://localhost:4567/get-incidents";
    static GetIncidentURI: string = "https://localhost:4567/get-incident";
    static CreatedIncidentsURI: string = "https://localhost:4567/created-incidents";
    static CategoriesURI: string = "https://localhost:4567/categories";
    static UpdateIncidentURI: string = "https://localhost:4567/update-incident";
    static UploadURI: string = "https://localhost:4567/upload";
    static TimerURI: string = "http://localhost:4567/timer";
    static NewAccountURI: string = "https://localhost:4567/create-account";
    static GetAccountTypesURI: string = "https://localhost:4567/get-account-types";
    static GetCampusURI: string = "https://localhost:4567/campus";
    static ValidateUsernameURI: string = "https://localhost:4567/validate-username";
    static PersonExistsURI: string = "https://localhost:4567/person-exists";
    static WSURI: string = "ws://localhost:4567/ws";

    static IncidentsWebSocketURI: string = "wss://localhost:4567/incidentsWebSocket";
    static LogInWebSocketURI: string = "wss://localhost:4567/loginWebSocket";

    static StaffTable: string = "STAFF";
    static LocationTable: string = "LOCATION";
    static AccountTable: string = "ACCOUNT";
    static IncidentTable: string = "INCIDENT";
    static PersonTable: string = "PERSON";
    static CategoryTable: string = "INCIDENT_CATEGORY";
    static TimerTable: string = "TIMER";
    static CampusTable: string = "CAMPUS";

    static IncidentCategoryKey: string = "IncidentCategory" ;
    static LocationKey: string = "Location";
    static PersonKey: string = "Person";
    static StaffKey: string = "Staff";
    static CampusKey: string = "Campus";
}
