export class Location {
    
    table: string;
    attributes: LocationAttributes;
    searchString: string;

    constructor() {
        this.attributes = new LocationAttributes();
    }

    setSearchString() {
        this.searchString = 
        this.attributes.LOCATION_ID 
        + " " + this.attributes.CAMPUS_ID 
        + " " + this.attributes.BUILDING_NAME 
        + " " + this.attributes.ROOM_NUMBER 
        + " " + this.attributes.DEPARTMENT;
    };
}

export class LocationAttributes {
    LOCATION_ID: number;
    CAMPUS_ID: number;
    BUILDING_NAME: string;
    ROOM_NUMBER: string;
    DEPARTMENT: string;
        // CITY: string;
    // ADDRESS: string;

}