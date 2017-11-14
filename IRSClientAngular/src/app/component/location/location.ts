import { Config } from '../../util/config.service';
import { IncidentElement } from '../report/incident-element';

export class Location implements IncidentElement {
    
    table: string;
    attributes: LocationAttributes;
    searchString: string;

    constructor() {
        this.attributes = new LocationAttributes();
        this.table = Config.LocationTable;
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

export class LocationMapping {
    CAMPUS_ID: number;
    BUILDINGS: Building[];

    constructor() {
        this.BUILDINGS = [];
    }
}

export class Building {
    BUILDING_NAME: string;
    ROOMS: Room[];

    constructor() {
        this.ROOMS = [];
    }
}

export class Room {
    ROOM_NUMBER: string;
    LOCATION_ID: number;

    constructor( locationId: number, roomNumber: string ) {
        this.ROOM_NUMBER = roomNumber;
        this.LOCATION_ID = locationId;
    }

}