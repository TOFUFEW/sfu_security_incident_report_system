import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
    templateUrl: '../view/login.component.html'
})

export class LoginComponent {
    data = < any > {};
    constructor( private router : Router ) {}
    onLogin () {
      if( this.data.username == "admin" && this.data.password == "admin" ) {
          this.router.navigate ([ 'dashboard' ] );
      }
      else {
          console.log ( "hi random" );
      }
    }
}
