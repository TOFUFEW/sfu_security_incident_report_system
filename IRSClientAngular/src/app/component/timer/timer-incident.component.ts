import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Timer } from './timer';
import { TimerService } from '../../service/timer.service';

@Component({
    selector: "timer-incident-component",
    templateUrl: './timer-incident.component.html',
})

export class TimerIncidentComponent {
    newTimer : Timer = new Timer();

    tempStart : string;
    tempEnd : string;

    constructor( private timerService : TimerService){

    }
}