import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../service/user.service';
import { AppComponent} from "../app.component";
import { LoginService } from '../service/login.service';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { Incident } from '../model/incident';
import {DataHelperService} from "../util/data-helper.service";

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
        private dataHelper: DataHelperService
    ) {
        if (this.userService.isLoggedIn()){
            alert("You are already logged in!");
            this.router.navigate([ 'dashboard' ] );
        }
    }

    onLogin() {
      this.user.ACCOUNT_TYPE = 0;
      console.log(this.user);
        this.loginService.doLogin( this.user )
        .subscribe(
            (responseData) => {
                this.data = responseData;
                console.log("response data:");
                console.log(this.data);
                this.userService.authUser( this.data );
                if ( this.userService.isLoggedIn() ) {
                    if( this.userService.isAdmin() ) {
                      this.router.navigate([ 'dashboard' ] );
                    } else if( this.userService.isGuard() ) {
                      //this will be routed to guard view later on
                      this.router.navigate([ 'dashboard' ] );
                    } else {
                      alert("who are you and how did you get here?!?!");
                    }
                } else {
                    alert("Invalid login credentials!");
                    console.log("Invalid login credentials!");
                }
            },
        );
    }
}
