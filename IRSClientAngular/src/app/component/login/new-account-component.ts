import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../../service/user.service';
import { LoginService } from '../../service/login.service';
import { LocationService } from '../../service/location.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { StaffService } from '../../service/staff.service';
import { NewAccount } from './new-account';
import { Staff } from '../staff/staff';
import { Validation } from '../../util/validation.service';
import { Router } from '@angular/router';
import { Campus } from '../location/campus';

@Component({
    templateUrl: './new-account.component.html',
    styleUrls: ['../../../assets/css/new-account.css']
})

export class NewAccountComponent {
    newAccount: NewAccount;
    password: string = "";
    confirmPassword: string = "";

    campusArr: Array<Campus>;
    accTypes: Array<any>; // TEMP

    firstnameStatus: string = Validation.Empty;
    lastnameStatus: string = Validation.Empty;
    usernameStatus: string = Validation.Empty;
    passwordStatus: string = Validation.Empty;
    
    constructor( 
        private userService: UserService,
        private loginService: LoginService, 
        private staffService: StaffService,
        private locationService: LocationService, 
        private router: Router ) {
            if ( !this.userService.isLoggedIn() || !this.userService.isAdmin ) 
                this.router.navigate( [ 'login' ] );
            
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
        if ( this.isFilledOut() && this.isValid() ) {
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

    private isValid(): boolean {
        var valid = this.firstnameStatus === Validation.Valid
            && this.lastnameStatus === Validation.Valid
            && this.usernameStatus === Validation.Valid
            && this.passwordStatus === Validation.Valid
            && this.newAccount.staff.attributes.CAMPUS_ID != null 
            && this.newAccount.user.attributes.ACCOUNT_TYPE != null;
        if ( !valid )
            alert("Some fields have invalid values.");
        return valid;
    }

    private isFilledOut(): boolean {
        var valid = this.firstnameStatus != Validation.Empty
            && this.lastnameStatus != Validation.Empty
            && this.usernameStatus != Validation.Empty
            && this.passwordStatus != Validation.Empty
            && this.newAccount.staff.attributes.CAMPUS_ID != null 
            && this.newAccount.user.attributes.ACCOUNT_TYPE != null

        if ( !valid )
            alert("Please fill out all required fields.");
        return valid;
    }


    validateForm( attr: string ) {
        if ( attr === 'firstname' ) {
            this.validateName( this.newAccount.staff.attributes.FIRST_NAME, attr );
        }
        else if ( attr === 'lastname' ) {
            this.validateName( this.newAccount.staff.attributes.LAST_NAME, attr );            
        }
        else if ( attr === 'username' ) {
            var username = this.newAccount.user.attributes.USERNAME;
            this.loginService.validateUsername( username )
                .then( usernameTaken => {
                    if ( usernameTaken ) {
                        this.usernameStatus = Validation.Taken;
                    }
                    else {
                        this.validateName( username, attr );
                    }
                }
            );
        }
        else if ( attr === 'password' ) {
            this.validatePassword( this.confirmPassword ) ;
        }
            
    }

    private validateName( name: string, attr: string ) {
        var re = "^[A-Za-z]+[ -']*[A-Za-z'-]*$";
        if ( attr === 'username' )
            re = "^[A-Za-z]+[a-zA-Z0-9._]*$"; // no spaces
        var status;

        if ( name.length == 0 ) 
            status = Validation.Empty;
        else if ( !name.match( re ) || name.length > 20 || ( attr ==='username' && name.length < 6 ) )
            status = Validation.Invalid;
        else 
            status = Validation.Valid;

        if ( attr === 'firstname' )
            this.firstnameStatus = status;
        else if ( attr === 'lastname' )
            this.lastnameStatus = status;
        else if ( attr === 'username' )
            this.usernameStatus = status;
    }

    private validatePassword( password: string ): boolean {
        var pass = this.confirmPassword;
        var status;
        
        if ( this.password != pass ) 
            this.passwordStatus = Validation.PasswordNotMatching;
        else if ( pass.length == 0 )
            this.passwordStatus = Validation.Empty;
        else if ( pass.length < 6 || pass.length > 20 )
            this.passwordStatus = Validation.Invalid;
        else {
            this.passwordStatus = Validation.Valid;
            return true;            
        }
        return false;
    }
}
