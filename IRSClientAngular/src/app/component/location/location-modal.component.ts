/* 
*  Location Modal Component: 
*  displays the location component within a modal 
*  to add/change locations in a report 
*/

import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LocationService } from '../../service/location.service';
import { LocationComponent } from './location.component';
import { Location } from './location';

@Component({
    selector: 'location-modal-component', 
    templateUrl: './location-modal.component.html',
    styleUrls: ['../../../assets/css/guard-app.css']    
})

export class LocationModalComponent implements OnInit {
    private currentLocationID: number;
    private location: LocationComponent;
    public visible = false;
    public button_id;
    private visibleAnimate = false;

    constructor () {}

    public show( event ): void {
        var target = event.target || event.srcElement || event.currentTarget;
        var idAttr = target.attributes.id;
        this.currentLocationID = idAttr.value;
        console.log(this.currentLocationID);
        this.button_id = this.currentLocationID;
        this.visible = true;
        setTimeout(() => this.visibleAnimate = true, 100);
    }
    
    public hide(): void {
        this.visibleAnimate = false;
        setTimeout(() => this.visible = false, 300);
    }
    
    public onContainerClicked(event: MouseEvent): void {
        if ((<HTMLElement>event.target).classList.contains('modal')) {
          this.hide();
        }
    }

    public submitChanges(id): void {
        console.log(id);
        this.location.addLocationToReport();
        this.hide();
    }
    
    ngOnInit() {
        // Hide the remove location button from the location component
        document.getElementById("removeLocation").style.visibility = "hidden";
    }
}