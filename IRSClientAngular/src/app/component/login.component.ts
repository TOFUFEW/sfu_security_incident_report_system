import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../service/user.service';
import { LoginService } from '../service/login.service';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { Incidents } from '../model/incidents';

@Component({
    templateUrl: '../view/login.component.html',
})

export class LoginComponent {
    user: User = new User();
    retVal: string = '';
    constructor(
        private router: Router,
        private userService: UserService,
        private loginService: LoginService,
    ) {
        if (this.userService.isLoggedIn()){
            alert("You are already logged in!");
            this.router.navigate([ 'dashboard' ] );
        }
    }

    onLogin() {
        this.loginService.doLogin(this.user)
        .subscribe( 
            (responseData) => {
                this.retVal = responseData;
                console.log(this.retVal);
                this.userService.authUser(this.retVal);
                if ( this.userService.isLoggedIn() ) {
                    console.log("login success! Welcome " + this.userService.getCurrentUser().username);
                    this.router.navigate([ 'dashboard' ] );
                } else {
                    alert("Invalid login credentials!");
                    console.log("Invalid login credentials!");
                }
            }, 
        );
    }
}
