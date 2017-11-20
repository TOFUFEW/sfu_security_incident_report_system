import { Component, OnInit } from '@angular/core';
import { UserService } from './service/user.service';
import { Router, RouterModule } from '@angular/router';
import { User } from '../app/component/login/user';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {

    user: User;
    userAccType: number;
    isAdmin: boolean = false;

    constructor( 
        private router: Router,
        private userService: UserService ) {
            this.user = this.userService.getCurrentUser();
    }

    onLogout() {
        this.userService.logout();
        this.router.navigate([ 'login' ] );
    }

    redirect( component: string ) {
        this.router.navigate([component]);
    }

    ngOnInit(): void {
        this.userService.user.subscribe( u => {
            this.user = u;
            if ( u != null ) {
                this.userAccType = u.attributes.ACCOUNT_TYPE;   
            }
            this.isAdmin = this.userAccType == this.userService.ADMIN;         
        });
    }
}
