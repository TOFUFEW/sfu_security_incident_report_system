import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IncidentElement } from '../report/incident-element';
import { Staff } from './staff';
import { StaffService } from '../../service/staff.service';

@Component({
  selector: 'staff-component',
  templateUrl: './staff.component.html',
  styleUrls: ['../../../assets/css/staff.component.css',
              '../../../assets/css/panels.css']
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
