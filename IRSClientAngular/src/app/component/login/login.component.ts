import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { DataHelperService } from '../../util/data-helper.service';
import { UserService } from '../../service/user.service';
import { LoginService } from '../../service/login.service';
import { Incident } from '../report/incident';
import { User } from './user';
import {AppComponent} from "../../app.component";

@Component({
    templateUrl: './login.component.html',
})

export class LoginComponent {
    user: User = new User();
    constructor(
        private router: Router,
        private userService: UserService,
        private loginService: LoginService,
        private dataHelper: DataHelperService,
        private appComponent: AppComponent
    ) {
        this.checkLogin();
    }

    onLogin() {
        this.user.ACCOUNT_TYPE = 0;
        this.user.ACCOUNT_ID = 0;
        this.loginService.doLogin ( this.user )
        .subscribe(
            (responseData) => {
                this.user = responseData;
                this.userService.authUser( this.user );

                if ( this.userService.isLoggedIn() ) {
                    this.appComponent.showLogoutButton();
                    if( this.userService.isAdmin() ) {
                      this.router.navigate([ 'dashboard' ] );
                      //alert( "welcome dispatcher" );
                    } else if( this.userService.isGuard() ) {
                      this.router.navigate([ 'guard-app/reports-all' ] );
                    //   alert( "welcome guard" );
                    } else {
                      //alert( "unknown person" );
                      this.userService.logout();
                    }
                } else {
                    alert("Invalid login credentials!");
                    console.log("Invalid login credentials!");
                }
            },
        );
    }

    checkLogin() {
      if ( this.userService.isLoggedIn() ) {
        alert("You are already logged in!");
        if( this.userService.isAdmin() ) {
          this.router.navigate([ 'dashboard' ] );
        } else if( this.userService.isGuard() ) {
          this.router.navigate( [ 'guard' ] );
        }
      }
    }
}
