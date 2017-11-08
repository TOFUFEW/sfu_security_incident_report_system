import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Timer } from './timer';
import { TimerService } from '../../service/timer.service';


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
        console.log(nowDate.getHours());
        console.log(nowDate.getMinutes());
        var nowTime = nowDate.getHours() * 60 * 60 * 1000 + nowDate.getMinutes() * 60 * 1000;

        var timer1 : Timer = new Timer();
        timer1.TIMER_NAME = "Hello"
        timer1.START_TIME = nowTime - 10 * 60 * 1000;
        timer1.END_TIME = nowTime + 15 * 60 * 1000;
        timer1.timeRemaining = timer1.END_TIME - nowTime;

        var timer2 : Timer = new Timer();
        timer2.TIMER_NAME = "Goodbye"
        timer2.START_TIME = nowTime - 15 * 60 * 1000;
        timer2.END_TIME = nowTime + 15 * 60 * 1000;
        timer2.timeRemaining = timer2.END_TIME - nowTime;
        
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
        var splice: string[] = this.tempStart.split(":");
        this.newTimer.START_TIME = parseInt(splice[0])* 60 * 60 * 1000;
        this.newTimer.END_TIME = parseInt(splice[1]) * 60 * 1000;

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
    
    start(): void {
        var x = setInterval(() => this.countDown(), 1000);
        console.log("hi");
    }

    countDown() : void {
        
        this.timerList.forEach(timer => {
            timer.timeRemaining= timer.timeRemaining - 1000 ;
            console.log(timer.timeRemaining)
            if (timer.timeRemaining <= 0){
                alert(timer.TIMER_NAME + " Times up!");
                this.endTimer(timer);
            }
        });

    }
    endTimer(timer: Timer) : void {

    }

    timeToString(time : number ) : string {
        console.log(time);
        var hour = Math.floor(time/1000/60/60%24).toString();
        var minute = Math.floor(time/1000/60%60).toString();
        var second = (time/1000%60).toString();

        return hour + ":" + minute + ":" + second;
    }

    ngOnInit(){
        this.getTimers();
    }


    ngAfterViewInit(){
        this.start();
    }

}