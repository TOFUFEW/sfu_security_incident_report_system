export class Location {
    LOCATION_ID: number;
    CAMPUS_ID: number;
    BUILDING_NAME: string;
    ROOM_NUMBER: number;
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
    ROOM_NUMBER: number;
    LOCATION_ID: number;

    constructor( locationId: number, roomNumber: number ) {
        this.ROOM_NUMBER = roomNumber;
        this.LOCATION_ID = locationId;
    }
}