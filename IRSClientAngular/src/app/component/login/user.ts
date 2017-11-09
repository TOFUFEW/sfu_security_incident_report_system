import { Config } from '../../util/config.service';
import { IncidentElement } from '../report/incident-element';

export class User implements IncidentElement {
    table: string;
    attributes: UserAttributes;

    constructor() {
        this.attributes = new UserAttributes();
        this.table = Config.AccountTable;
    }
}

export class UserAttributes {
    ACCOUNT_ID: number;
    USERNAME: string;
    PASSWORD: string;
    ACCOUNT_TYPE: number;
}
