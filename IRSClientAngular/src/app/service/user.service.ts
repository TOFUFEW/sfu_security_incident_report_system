import { Injectable } from "@angular/core";
import { User } from '../model/user';
import { DataHelperService } from '../util/data-helper.service';
import { IncidentElement } from '../model/incident-element';

@Injectable()
export class UserService {
    private currentUser: string = 'currentUser';

    constructor( private dataHelper: DataHelperService ) {}

    authUser( userString: string ) {
        if ( userString == null ) {
            return;
        }
        console.log("local storage added user");
        console.log("authUser userString = " + userString);
        sessionStorage.setItem( this.currentUser, JSON.stringify( userString ) );
    }

    isLoggedIn(): boolean {
        let currentUser = this.getCurrentUser();

        if ( currentUser != null ) {
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
        let ie = JSON.parse( jsonString ) as IncidentElement ;
        var currentUser = this.dataHelper.extractAttribute( ie ) as User;

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
