import { Component } from '@angular/core';
import { UserService } from './service/user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    providers: [UserService]
})

export class AppComponent {
    
}
