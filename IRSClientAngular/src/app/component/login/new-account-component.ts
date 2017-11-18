import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from '../../service/login.service';
import { LocationService } from '../../service/location.service';
import { StaffService } from '../../service/staff.service';
import { NewAccount } from './new-account';
import { Staff } from '../staff/staff';
import { Validation } from '../../util/validation.service';
import { Router } from '@angular/router';
import { Campus } from '../location/campus';

@Component({
    templateUrl: './new-account.component.html',
})

export class NewAccountComponent {
    newAccount: NewAccount;
    password: string = "";
    confirmPassword: string = "";

    staffArr: Staff[];
    campusArr: Array<Campus>;
    accTypes: Array<any>; // TEMP

    firstnameStatus: string = Validation.Empty;
    lastnameStatus: string = Validation.Empty;
    usernameStatus: string = Validation.Empty;
    passwordStatus: string = Validation.Empty;
    
    constructor( private loginService: LoginService, 
            private staffService: StaffService,
            private locationService: LocationService, 
            private router: Router ) {
        this.newAccount = new NewAccount();
        this.loginService.getAccountTypes()
            .then( arr =>  { 
                this.accTypes = arr as Array<any>; 
            } );
        this.locationService.getCampus().then(
            response => { 
                this.campusArr = response as Campus[]; 
            }
        );
    }

    createAccount() {
        if ( this.password === this.confirmPassword ) {
            this.newAccount.user.attributes.PASSWORD = this.confirmPassword;
            this.loginService.createAccount(this.newAccount)
            .then( response => {
                if ( response )
                    this.router.navigate(['dashboard']);
                else
                    alert("Create account failed");
            });
        }
        
    }

    validateForm( attr: string ) {
        if ( attr === 'firstname' || attr === 'lastname' ) {
            this.validateName(attr );
        }
        else if ( attr === 'username' ) {

        }
        else if ( attr === 'password' ) {

        }
            
    }

    private validateName( name: string ) {
        var re = /\W/;

        if ( name.length == 0 ) {
            if ( name === 'firstname' )
                this.firstnameStatus = Validation.Invalid;
            else this.lastnameStatus = Validation.Invalid;
        }
    }
}
