import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Timer } from './timer';
import { TimerService } from '../../service/timer.service';


@Component({
    selector: 'timer-component',
    templateUrl: './timer.component.html',
})

export class TimerComponent implements OnInit {
    timerList: Timer[] = new Array<Timer>();
    newTimer: Timer = new Timer;
    timerFormShowing: boolean = false;

    constructor(private timerService: TimerService){
        var timer1 : Timer = new Timer();
        timer1.TIMER_NAME = "Hello"
        timer1.START_TIME = 10000;
        timer1.END_TIME = 120000;
        timer1.timeRemaining = 1;

        var timer2 : Timer = new Timer();
        timer2.TIMER_NAME = "Goodbye"
        timer2.START_TIME = 1234;
        timer2.END_TIME = 12345;
        timer2.timeRemaining = 0;
        
        this.timerList.push(timer1);
        this.timerList.push(timer2);
    }

    getTimers(): void {
        // this.timerService.getTimers().then( returnedTimers => {
        //     this.timerList = returnedTimers;
        // } );
    }

    addTimer(): void {
        // this.timerService.update(timer).then( returnedTimer => {
        //     this.timerList.push(timer);
        // } );
        this.timerList.push(this.newTimer);
        var timerForm = document.getElementById("timerForm");
        timerForm.style.display = "none";
    }

    deleteTimer(dtimer : Timer): void {
        var i = this.timerList.findIndex(timer => timer === dtimer)
        this.timerList.splice(i, 1);
    }
    
    toggleAddTimerForm() : void {
        var timerForm = document.getElementById("timerForm");
        if (this.timerFormShowing){
            timerForm.style.display = "none";
            this.timerFormShowing = false;
       } else {
            timerForm.style.display = "";
            this.timerFormShowing = true;

       }
    }

    setStartTimePlaceholder() : void {
            
    }
    
    start(): void {
        var x = setInterval(() => {this.countDown();}, 1000);
    }
    countDown() : void {
        var now = new Date().getTime();
        this.timerList.forEach(timer => {
            timer.timeRemaining = timer.END_TIME - timer.START_TIME;
        });

    }


    ngOnInit(){
        this.getTimers();
    }

}