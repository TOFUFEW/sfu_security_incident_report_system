export class Staff {
    table: string;
    attributes: StaffAttributes;
    searchString: string;

    constructor() {
        this.attributes = new StaffAttributes();
    }
}

export class StaffAttributes {
    ACCOUNT_ID: number;
    CAMPUS_ID: number;
    FIRST_NAME: string;
    LAST_NAME: string;
}