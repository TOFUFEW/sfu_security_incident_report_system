import { Component } from '@angular/core';
import { UserService } from './service/user.service';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})

export class AppComponent {
  constructor(
    private router: Router
  ) {
    var button = document.getElementById("logout");
    button.style.visibility = "hidden";
  }

  showLogoutButton() {
    var button = document.getElementById("logout");
    button.style.visibility = "visible";
  }

  onLogout() {
    console.log("logging out");
    this.router.navigate(['login']);
  }

}
