import { Config } from '../../util/config.service';

export class Staff {
    table: string;
    attributes: StaffAttributes;
    searchString: string;

    constructor() {
        this.attributes = new StaffAttributes();
        this.table = Config.StaffTable;
    }
}

export class StaffAttributes {
    ACCOUNT_ID: number;
    CAMPUS_ID: number;
    FIRST_NAME: string;
    LAST_NAME: string;
}