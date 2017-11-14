import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from '../../service/login.service';
import { StaffService } from '../../service/staff.service';
import { NewAccount } from './new-account';
import { Staff } from '../staff/staff';

@Component({
    templateUrl: './new-account.component.html',
})

export class NewAccountComponent {
    newAccount: NewAccount;
    password: String = "";
    confirmPassword: String = "";

    staffArr: Staff[];
    accTypes: any; // TEMP

    constructor( private loginService: LoginService, private staffService: StaffService ) {
        this.newAccount = new NewAccount();
        this.staffService.getStaffs().then( arr => this.staffArr = arr );
        this.accTypes = this.loginService.getAccountTypes().then( arr =>  { console.log( arr) ;this.accTypes = arr; } );
    }

    createAccount() {
        
    }
}
