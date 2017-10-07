import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../service/user.service';
import { AppComponent} from "../app.component";
import { LoginService } from '../service/login.service';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { Incident } from '../model/incident';

@Component({
    templateUrl: '../view/login.component.html',
})

export class LoginComponent {
    user: User = new User();
    data: string = '';
    constructor(
        private router: Router,
        private userService: UserService,
        private loginService: LoginService,
        private app: AppComponent
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
                this.data = responseData;
                console.log(this.data);
                this.userService.authUser(this.data);
                
                if ( this.userService.isLoggedIn() ) {
                    console.log("login success! Welcome " + this.userService.getCurrentUser().username);
                    // this.app.showLogoutButton();
                    this.router.navigate([ 'dashboard' ] );
                } else {
                    alert("Invalid login credentials!");
                    console.log("Invalid login credentials!");
                }
            },
        );
    }
}
