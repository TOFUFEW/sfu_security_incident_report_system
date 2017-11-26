import { User } from './user';
import { Staff } from '../staff/staff';
import { NavbarComponent } from '../navbar/navbar.component';

export class NewAccount {
    user: User;
    staff: Staff;

    constructor() {
        this.user = new User();
        this.staff = new Staff();
    }
}