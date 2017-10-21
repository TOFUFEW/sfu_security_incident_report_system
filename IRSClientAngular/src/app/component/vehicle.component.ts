import { Component, ComponentRef, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'vehicle-component',
    templateUrl: '../view/vehicle.component.html'
})

export class VehicleComponent {

    public reference : any;

    constructor(
    ) {}

    removeComp() {
       this.reference.destroy();
    }
 }