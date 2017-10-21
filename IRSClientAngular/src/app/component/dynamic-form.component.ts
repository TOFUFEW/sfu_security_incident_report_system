import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DomService } from '../service/dom.service';
import { LocationComponent } from './location.component';

@Component({
    selector: 'dynamic-form',
    templateUrl: '../view/dynamic-form.component.html',
})

export class DynamicFormComponent {

    constructor(
        private domService: DomService,
    ) {}

    addToDiv() {
        //this.domService.appendComponentToDiv(LocationComponent,"dynamic");
    }
 }