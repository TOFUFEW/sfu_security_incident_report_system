import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
    templateUrl: '../view/login.component.html',
})

export class LoginComponent {
    data = < any > {};
    constructor(
        private router: Router,
        private userService: UserService ) {

        console.log( userService.getUserName() );
        if ( this.userService.isLoggedIn() == true ) {
            alert( "You are already logged in!" );
            this.router.navigate([ 'dashboard' ]);
        }
    }

    onLogin() {
        if ( this.data.username == "admin" && this.data.password == "admin" ) {
            this.userService.setUserName( "admin" );
            this.userService.signIn();
            this.router.navigate([ 'dashboard' ]);
        } else {
            console.log( "not admin" );
        }
    }
}
