import { Component, Input, OnInit } from '@angular/core';
import { IncidentElement } from '../model/incidentElement';
import { Staff } from '../model/staff';
import { StaffService } from '../service/staff.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'staff-component',
  templateUrl: '../view/staff.component.html'
})

export class StaffComponent implements OnInit {
  staffList: Staff[];
  newStaff: Staff = new Staff();
  
  constructor( private staffService: StaffService ){};


  getStaffs(): void {
    this.staffService.getStaffs().then( returnedStaffs => {
      this.staffList = returnedStaffs;
    } );    
  }

  // addStaff(): void {

  //   this.staffService.create( this.newStaff )
  //       .then( returnedStaff => {
  //           if ( returnedStaff != null  ) {
  //             this.staffList.push( returnedStaff );
  //             alert( returnedStaff.FIRST_NAME + " successfully added!" );            
  //           }
  //           else alert( "Add failed." );  
  //       } );
  //   delete this.newStaff;
  //   this.newStaff = new Staff();
  // }

  updateStaff( staff:Staff ): void {
    this.staffService.update( staff )
        .then( returnedStaff => {
            if ( returnedStaff != null  ) {
              var i = this.staffList.findIndex( staff => staff.accountId === returnedStaff.accountId );
              // remove 1 object at index i, replace it with returnedStaff
              this.staffList.splice( i, 1, returnedStaff );
              alert( returnedStaff.firstName + " successfully edited!" );            
            }
            else alert( "Edit failed." );  
        } );
  }

  deleteStaff( id: number ): void {
    this.staffService.delete( id ).then( isDeleted => {
        var msg = isDeleted ? "Staff successfully deleted!" : "Delete failed";
        alert(msg);
        var i = this.staffList.findIndex( staff => staff.accountId === id );
        // remove 1 object at index i
        this.staffList.splice( i, 1 );
      });
  }

  ngOnInit() : void {
    this.getStaffs();
  }
  
}
