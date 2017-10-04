import { Injectable } from "@angular/core";
import { User } from '../model/user';

@Injectable()
export class UserService {
    private currentUser: string = 'currentUser';

    authUser(userString: string) {
        if (userString == null) {
            return;
        }
        console.log("local storage added user");
        sessionStorage.setItem(this.currentUser, JSON.stringify(userString));
    }

    isLoggedIn(): boolean {
        let currentUser = this.getCurrentUser();

        if (currentUser != null) {
            return true;
        }
        return false;
    }

    logout() {
      sessionStorage.setItem(this.currentUser, null);
    }

    getCurrentUser(): User {
        let jsonString = sessionStorage.getItem(this.currentUser);
        let currentUser = JSON.parse(jsonString) as User;

        if (currentUser != null) {
            return currentUser;
        }
        return null;
    }
}
