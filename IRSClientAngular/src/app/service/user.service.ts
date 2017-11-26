import { Injectable } from "@angular/core";
import { User } from '../component/login/user';
import { IncidentElement } from "../component/report/incident-element";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UserService {
    private currentUser: string = 'currentUser';

    private bs_currentUser = new BehaviorSubject<User>(null);
    user = this.bs_currentUser.asObservable();

    private bs_isLoggedIn = new BehaviorSubject<boolean>(false);
    loggedIn = this.bs_isLoggedIn.asObservable();

    GUARD: number = 1;
    ADMIN: number = 2;
    SUPERVISOR: number = 3;

    authUser(user: User) {
        if (user == null) {
            this.bs_isLoggedIn.next(false);            
            return;
        }
        sessionStorage.setItem(this.currentUser, JSON.stringify(user));
        this.bs_isLoggedIn.next(true);
    }

    isLoggedIn(): boolean {
        let currentUser = this.getCurrentUser();
        return currentUser != null;
    }

    getAccountType() : number {
        return this.getCurrentUser().attributes.ACCOUNT_TYPE;
    }

    logout() {
        sessionStorage.setItem( this.currentUser , null );
    }

    getCurrentUser(): User {
        let jsonString = sessionStorage.getItem( this.currentUser );
        let currentUser = JSON.parse( jsonString ) as User;
        this.bs_currentUser.next(currentUser);
        if ( currentUser != null ) {
            return currentUser;
        }
        return null;
    }

    getAccountID() : number {
        return this.getCurrentUser().attributes.ACCOUNT_ID;
    }

    isGuard() : boolean {
        return this.getAccountType() == this.GUARD;
    }

    isAdmin() : boolean {
        return this.getAccountType() == this.ADMIN;
    }

    isSupervisor() : boolean {
        return this.getAccountType() == this.SUPERVISOR;
    }
}
