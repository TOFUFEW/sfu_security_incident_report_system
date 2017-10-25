import { Injectable } from "@angular/core";
import { User } from '../component/login/user';

@Injectable()
export class UserService {
    private currentUser: string = 'currentUser';

    authUser(user: User) {
        if (user == null) {
            return;
        }
        console.log("local storage added user" + JSON.stringify(user));
        sessionStorage.setItem(this.currentUser, JSON.stringify(user));
    }

    isLoggedIn(): boolean {
        let currentUser = this.getCurrentUser();

        if (currentUser != null) {
            return true;
        }
        return false;
    }

    getCurrentUser(): User {
        let jsonString = sessionStorage.getItem(this.currentUser);
        let currentUser = JSON.parse(jsonString) as User;

        console.log(jsonString);

        if (currentUser != null) {
            return currentUser;
        }
        return null;
    }
}
//
