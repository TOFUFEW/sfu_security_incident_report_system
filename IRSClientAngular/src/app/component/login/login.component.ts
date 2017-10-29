import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { DataHelperService } from '../../util/data-helper.service';
import { UserService } from '../../service/user.service';
import { LoginService } from '../../service/login.service';
import { Incident } from '../report/incident';
import { User } from './user';

@Component({
    templateUrl: './login.component.html',
})

export class LoginComponent {
    user: User = new User();
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
        this.user.ACCOUNT_TYPE = 0;
        this.user.ACCOUNT_ID = 0;
        this.loginService.doLogin(this.user)
        .subscribe(
            (responseData) => {
                this.user = responseData;
                this.userService.authUser(this.user);

                if ( this.userService.isLoggedIn() ) {
                    this.router.navigate([ 'dashboard' ] );
                } else {
                    alert("Invalid login credentials!");
                    console.log("Invalid login credentials!");
                }
            },
        );
    }
}
