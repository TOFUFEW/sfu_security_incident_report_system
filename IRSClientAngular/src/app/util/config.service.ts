export class Config {

    private static serverURL: string = "https://localhost:4567/";
    
    //private static serverURL: string = "https://cmpt373-1177a.cmpt.sfu.ca:4567/";
    
    static LocationsURI: string = Config.serverURL + "locations";
    static IncidentsURI: string = Config.serverURL + "incidents";
    static FTSearchURI: string = Config.serverURL + "ftsearch-incident";
    static CTSearchURI: string = Config.serverURL + "ctsearch-incident";
    static StaffURI: string = Config.serverURL + "staff";
    static LoginURI: string = Config.serverURL + "login";
    static PersonURI: string = Config.serverURL + "person";

    static GetIncidentsURI: string = Config.serverURL + "get-incidents";
    static GetIncidentURI: string = Config.serverURL + "get-incident";
    static CreatedIncidentsURI: string = Config.serverURL + "created-incidents";
    static CategoriesURI: string = Config.serverURL + "categories";
    static UpdateIncidentURI: string = Config.serverURL + "update-incident";
    static UploadURI: string = Config.serverURL + "upload";
    static TimerURI: string = Config.serverURL + "timer";
    static UploadsURI: string = Config.serverURL + "uploads";
    static GetFileURI: string = Config.serverURL + "upload/get/";
    static NewAccountURI: string = Config.serverURL + "create-account";
    static GetAccountTypesURI: string = Config.serverURL + "get-account-types";
    static GetCampusURI: string = Config.serverURL + "campus";
    static ValidateUsernameURI: string = Config.serverURL + "validate-username";
    static PersonExistsURI: string = Config.serverURL + "person-exists";
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
    static AttachmentTable: string = "ATTACHMENT";
    static GenericElementTable: string = "GENERIC_ELEMENT";

    static IncidentCategoryKey: string = "IncidentCategory" ;
    static LocationKey: string = "Location";
    static PersonKey: string = "Person";
    static StaffKey: string = "Staff";
    static CampusKey: string = "Campus";
    static AttachmentKey: string = "Attachment";
    static GenericElementKey: string = "GenericElement";

    static FailedToRetrieveMsg: string = "Failed to retrieve data from server";
}
