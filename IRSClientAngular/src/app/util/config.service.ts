export class Config {

     private static protocol: string = "https://";
    // private static serverURL: string = "localhost:4567/";
    private static serverURL: string = "cmpt373-1177a.cmpt.sfu.ca:4567/";
    
    static LocationsURI: string = Config.protocol + Config.serverURL + "locations";
    static IncidentsURI: string = Config.protocol + Config.serverURL + "incidents";
    static FTSearchURI: string = Config.protocol + Config.serverURL + "ftsearch-incident";
    static CTSearchURI: string = Config.protocol + Config.serverURL + "ctsearch-incident";
    static StaffURI: string = Config.protocol + Config.serverURL + "staff";
    static LoginURI: string = Config.protocol + Config.serverURL + "login";
    static PersonURI: string = Config.protocol + Config.serverURL + "person";

    static GetIncidentsURI: string = Config.protocol + Config.serverURL + "get-incidents";
    static GetIncidentURI: string = Config.protocol + Config.serverURL + "get-incident";
    static CreatedIncidentsURI: string = Config.protocol + Config.serverURL + "created-incidents";
    static CategoriesURI: string = Config.protocol + Config.serverURL + "categories";
    static UpdateIncidentURI: string = Config.protocol + Config.serverURL + "update-incident";
    static UploadURI: string = Config.protocol + Config.serverURL + "upload";
    static TimerURI: string = Config.protocol + Config.serverURL + "timer";
    static UploadsURI: string = Config.protocol + Config.serverURL + "uploads";
    static GetFileURI: string = Config.protocol + Config.serverURL + "upload/get/";
    static NewAccountURI: string = Config.protocol + Config.serverURL + "create-account";
    static GetAccountTypesURI: string = Config.protocol + Config.serverURL + "get-account-types";
    static GetCampusURI: string = Config.protocol + Config.serverURL + "campus";
    static ValidateUsernameURI: string = Config.protocol + Config.serverURL + "validate-username";
    static PersonExistsURI: string = Config.protocol + Config.serverURL + "person-exists";
    static WSURI: string = "ws://" + Config.serverURL + "ws";

    static IncidentsWebSocketURI: string = "wss://" + Config.serverURL + "incidentsWebSocket";
    static LogInWebSocketURI: string = "wss://" + Config.serverURL + "loginWebSocket";

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
