import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Timer } from './timer';
import { TimerService } from '../../service/timer.service';
import { IncidentComponent } from '../report/incident.component'


@Component({
    selector: 'timer-component',
    templateUrl: './timer.component.html',
})

export class TimerComponent implements OnInit {
    tempStart: string;
    tempEnd: string;
    timerList: Timer[] = new Array<Timer>();
    newTimer: Timer = new Timer;
    timerFormShowing: boolean = false;

    constructor(private timerService: TimerService){
        var nowDate = new Date (Date.now());
        var nowTime = nowDate.getHours() * 60 * 60 * 1000 + nowDate.getMinutes() * 60 * 1000;

        var timer1 : Timer = new Timer();
        timer1.TIMER_NAME = "Hello"
        timer1.START_TIME = nowTime - 10 * 60 * 1000;
        timer1.END_TIME = nowTime + 15 * 60 * 1000;
        timer1.TIME_REMAINING = timer1.END_TIME - nowTime;

        var timer2 : Timer = new Timer();
        timer2.TIMER_NAME = "Goodbye"
        timer2.START_TIME = nowTime - 15 * 60 * 1000;
        timer2.END_TIME = nowTime + 20 * 60 * 1000;
        timer2.TIME_REMAINING = timer2.END_TIME - nowTime;
        
        this.timerList.push(timer1);
        this.timerList.push(timer2);
        
    }

    getTimers(): void {
        // this.timerService.getTimers().then( returnedTimers => {
        //     this.timerList = returnedTimers;
        // } );
    }

    checkInput() : void{
        if(this.tempStart > this.tempEnd){
            alert("End time cannot be before start time");
        } else {
            this.addTimer();
        }
    }

    addTimer(): void {
        // this.timerService.update(timer).then( returnedTimer => {
        //     this.timerList.push(timer);
        // } );
        this.newTimer.START_TIME = this.timerService.stringToTime(this.tempStart);
        this.newTimer.END_TIME = this.timerService.stringToTime(this.tempEnd);

        this.tempStart = "";
        this.tempEnd = "";

        this.newTimer.TIME_REMAINING = this.newTimer.END_TIME - this.newTimer.START_TIME;

        this.timerList.push(this.newTimer);
        var timerForm = document.getElementById("timerForm");
        timerForm.style.display = "none";
        this.timerFormShowing = false;
        
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
    
    start(): void {
        var x = setInterval(() => this.countDown(), 1000);
    }

    countDown() : void {
        this.timerList.forEach(timer => {
            timer.TIME_REMAINING= timer.TIME_REMAINING - 1000 ;
            if (timer.TIME_REMAINING <= 0){
                this.timeUp(timer);
            }
        });

    }

    timeUp(timer : Timer) : void{
        alert(timer.TIMER_NAME + " times up!");
        this.deleteTimer(timer);

    }

    endTimer(timer: Timer) : void {

    }

    deleteTimer(dtimer : Timer): void {
        var i = this.timerList.findIndex(timer => timer === dtimer)
        this.timerList.splice(i, 1);
    }
    

    timeToString(time : number ) : string {
        return this.timerService.timeToString(time);
    }



    pauseTimer(timer : Timer) : void {

    }

    ngOnInit(){
        this.getTimers();
    }


    ngAfterViewInit(){
        this.start();
    }

}