import { Component } from '@angular/core';
import { UserService } from './service/user.service';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})

export class AppComponent {
  constructor( private router: Router,
               private userService: UserService ) {
  }

  showLogoutButton() {
    var button = document.getElementById("logout" );
    button.style.visibility = "visible";
  }

  onLogout() {
    var button = document.getElementById("logout" );
    button.style.visibility = "hidden";
    this.userService.logout();
    this.router.navigate([ 'login' ] );
  }

}
