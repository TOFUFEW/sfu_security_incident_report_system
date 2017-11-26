import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../../service/user.service';
import { LoginService } from '../../service/login.service';
import { Incident } from '../report/incident';
import { User } from './user';
import { AppComponent } from "../../app.component";
import { Config } from "../../util/config.service";

@Component({
    templateUrl: './login.component.html',
})

export class LoginComponent {
    user: User = new User();
    constructor(
        private router: Router,
        private userService: UserService,
        private loginService: LoginService,
        private appComponent: AppComponent
    ) {
        this.checkLogin();
    }

    onLogin() {
        this.user.attributes.ACCOUNT_TYPE = 0;
        this.user.attributes.ACCOUNT_ID = 0;
        this.loginService.doLogin ( this.user )
        .subscribe(
            ( responseData ) => {
                this.userService.authUser( responseData );

                if ( this.userService.isLoggedIn() ) {
                    //this.appComponent.showLogoutButton();
                    if( this.userService.isAdmin() ) {
                      this.router.navigate([ 'dashboard' ] );
                    } else if( this.userService.isGuard() ) {
                      this.router.navigate([ 'guard-app/dashboard' ] );
                      //alert( "welcome guard" );
                    } else {
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
        console.log("You are already logged in!");
        if( this.userService.isAdmin() ) {
          this.router.navigate([ 'dashboard' ] );
        } else if( this.userService.isGuard() ) {
          this.router.navigate( [ 'guard' ] );
        }
      }
    }

    listener ( data ): void 
    {
      var messageObj = data;
      console.log ( "Received data from websocket: " , messageObj) ;
      // If an object exists with callback_id in our callbacks object, resolve it
      //if(callbacks.hasOwnProperty(messageObj.callback_id)) {
      //  console.log(callbacks[messageObj.callback_id]);
      //  $rootScope.$apply(callbacks[messageObj.callback_id].cb.resolve(messageObj.data));
      // delete callbacks[messageObj.callbackID];
      //}
      //ngOnInit ();
    }
}
