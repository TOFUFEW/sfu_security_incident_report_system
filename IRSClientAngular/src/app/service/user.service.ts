import { Injectable } from "@angular/core";
import { User } from '../model/user';

@Injectable()
export class UserService {
    private currentUser: string = 'currentUser';

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
      return 0;
    }

    logout() {
      sessionStorage.setItem( this.currentUser , null );
    }

    getCurrentUser(): User {
        let jsonString = sessionStorage.getItem( this.currentUser );
        console.log("getCurrentUser jsonString = " + jsonString)
        let currentUser = JSON.parse( jsonString ) as User;
        console.log("getCurrentUser currentUser = " + currentUser);

        if ( currentUser != null ) {
            return currentUser;
        }
        return null;
    }
}
