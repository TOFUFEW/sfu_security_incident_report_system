import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from '../../service/login.service';
import { NewAccount } from './new-account';

@Component({
    templateUrl: './new-account.component.html',
})

export class NewAccountComponent {
    newAccount: NewAccount;
    
    constructor() {
        this.newAccount = new NewAccount();
    }

    createAccount() {
        console.log(this.newAccount);
    }
}
