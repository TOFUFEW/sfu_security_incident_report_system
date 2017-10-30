import { Injectable } from "@angular/core";
import { User } from '../component/login/user';
import {IncidentElement} from "../component/report/incident-element";

@Injectable()
export class UserService {
    private currentUser: string = 'currentUser';

    authUser(user: User) {
        if (user == null) {
            return;
        }
        sessionStorage.setItem(this.currentUser, JSON.stringify(user));
    }

    isLoggedIn(): boolean {
        let currentUser = this.getCurrentUser();

        if (currentUser != null) {
            return true;
        }
        return false;
    }

    getAccountType() : number {
        return this.getCurrentUser().ACCOUNT_TYPE;
    }

    logout() {
        sessionStorage.setItem( this.currentUser , null );
    }

    getCurrentUser(): User {
        let jsonString = sessionStorage.getItem( this.currentUser );
        let currentUser = JSON.parse( jsonString ) as User;

        if ( currentUser != null ) {
            return currentUser;
        }
        return null;
    }

    isGuard() : boolean {
        return this.getAccountType() == 2;
    }

    isAdmin() : boolean {
        return this.getAccountType() == 1;
    }
}
<<<<<<< HEAD
//
=======
>>>>>>> origin/master
