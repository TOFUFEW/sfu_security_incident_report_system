import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Location } from './location';

@Component({
    selector: 'location-modal-component', 
    templateUrl: './location-modal.component.html',
    styleUrls: ['../../../assets/css/guard-app.css']    
})

export class LocationModalComponent implements OnInit {
    
    public visible = false;
    private visibleAnimate = false;

    constructor () {}

    public show(): void {
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

    ngOnInit() {
        document.getElementById("removeLocation").style.visibility = "hidden";
    }
}