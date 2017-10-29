import {Component, OnInit} from '@angular/core';
import { UserService } from './service/user.service';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {

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

  ngOnInit(): void {
      var button = document.getElementById("logout" );
      if( this.userService.isLoggedIn() ) {
          button.style.visibility = "visible";
      } else {
          button.style.visibility = "hidden";
      }
  }
}
