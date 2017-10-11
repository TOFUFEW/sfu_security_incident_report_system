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


  updateStaff( staff:Staff ): void {
    this.staffService.update( staff )
        .then( returnedStaff => {
            if ( returnedStaff != null  ) {
              var i = this.staffList.findIndex( staff => staff.ACCOUNT_ID === returnedStaff.ACCOUNT_ID );
              // remove 1 object at index i, replace it with returnedStaff
              this.staffList.splice( i, 1, returnedStaff );
              alert( " successfully edited!" );            
            }
            else alert( "Edit failed." );  
        } );
  }

  deleteStaff( id: number ): void {
    this.staffService.delete( id ).then( isDeleted => {
        var msg = isDeleted ? "Staff successfully deleted!" : "Delete failed";
        alert(msg);
        var i = this.staffList.findIndex( staff => staff.ACCOUNT_ID === id );
        // remove 1 object at index i
        this.staffList.splice( i, 1 );
      });
  }

  ngOnInit() : void {
    this.getStaffs();
  }
  
}
