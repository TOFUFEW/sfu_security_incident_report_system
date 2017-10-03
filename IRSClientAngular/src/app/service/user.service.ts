import { Injectable } from "@angular/core";

@Injectable()
export class UserService {
    private userName: string = '';
    private loggedIn = false;

    getUserName(): string {
        return this.userName;
    }

    isLoggedIn() {
        return this.loggedIn;
    }

    setUserName( credentials: string ) {
        this.userName = credentials;
    }

    signIn() {
        this.loggedIn = true;
    }
}
