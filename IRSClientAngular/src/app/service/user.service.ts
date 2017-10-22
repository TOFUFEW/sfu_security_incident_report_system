import { Injectable } from "@angular/core";
import { User } from '../model/user';

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

    getCurrentUser(): User {
        let jsonString = sessionStorage.getItem(this.currentUser);
        let currentUser = JSON.parse(jsonString) as User;

        if (currentUser != null) {
            return currentUser;
        }
        return null;
    }
}
//