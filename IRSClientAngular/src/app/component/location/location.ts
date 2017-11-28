import { Config } from '../../util/config.service';
import { IncidentElement } from '../report/incident-element';

export class Location implements IncidentElement {
    
    table: string;
    attributes: LocationAttributes;
    
    constructor() {
        this.attributes = new LocationAttributes();
        this.table = Config.LocationTable;
    }
}

export class LocationAttributes {
    LOCATION_ID: number;
    CAMPUS_ID: number;
    BUILDING_NAME: string;
    ROOM_NUMBER: string;
    DEPARTMENT: string;
        
    CITY: string;
}

export class LocationMapping {
    CAMPUS_ID: number;
    LOCATION_ID: number;    
    CITY: string;
    BUILDINGS: Building[];

    constructor() {
        this.BUILDINGS = [];
    }
}

export class Building {
    LOCATION_ID: number;    
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