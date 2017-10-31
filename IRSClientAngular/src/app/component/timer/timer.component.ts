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

    constructor(private timerService: TimerService){
        var timer1 : Timer = new Timer();
        timer1.TIMER_NAME = "Hello"
        timer1.START_TIME = new Date("2016-01-05T09:05:05");
        timer1.END_TIME = new Date("2017-10-31T17:05:05");
        timer1.timeRemaining = 1;

        var timer2 : Timer = new Timer();
        timer2.TIMER_NAME = "Goodbye"
        timer2.START_TIME = new Date("2016-01-05T09:05:05");
        timer2.END_TIME = new Date("2017-10-31T17:05:05");
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
    
    showAddTimer() : void {
        var timerForm = document.getElementById("timerForm");
        timerForm.style.display = "";
    }
    
    start(): void {
        //var x = setInterval(this.countDown(), 1000);
    }
    countDown() : void {
        
        // var now = new Date().getTime();
        // this.timerList.forEach(timer => {
        //     timer.timeRemaining = timer.END_TIME.getDate() - now;
        //     var time = Math.floor((timer.timeRemaining % (1000 * 60 * 60)) / (1000 * 60))
        //     document.getElementById("timerDisplay").innerHTML = time.toString();
        // });

    }


    ngOnInit(){
        this.getTimers();
    }

}