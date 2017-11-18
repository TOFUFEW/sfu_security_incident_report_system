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


    constructor(private timerService: TimerService){
        var nowDate = new Date (Date.now());
        var nowTime = nowDate.getHours() * 60 * 60 * 1000 + nowDate.getMinutes() * 60 * 1000;

        var timer1 : Timer = new Timer();
        timer1.TIMER_START = nowTime - 10 * 60 * 1000;
        timer1.TIMER_END = nowTime + 1.1 * 60 * 1000;
        timer1.TIME_REMAINING = timer1.TIMER_END - nowTime;

        var timer2 : Timer = new Timer();
        timer2.TIMER_START = nowTime - 15 * 60 * 1000;
        timer2.TIMER_END = nowTime + 20 * 60 * 1000;
        timer2.TIME_REMAINING = timer2.TIMER_END - nowTime;
        
        this.timerList.push(timer1);
        this.timerList.push(timer2);
        
    }

    getTimers(): void {
       this.timerService.getTimers().then(returnedTimers => {
           this.timerList = returnedTimers;
       })
    }

    checkInput() : void{
        if(this.tempStart > this.tempEnd){
            alert("End time cannot be before start time");
        } else {
            this.addTimer();
        }
    }

    addTimer(): void {

        this.newTimer.TIMER_START = this.timerService.stringToTime(this.tempStart);
        this.newTimer.TIMER_END = this.timerService.stringToTime(this.tempEnd);

        this.tempStart = "";
        this.tempEnd = "";

        this.newTimer.TIME_REMAINING = this.newTimer.TIMER_END - this.newTimer.TIMER_START;

        this.timerList.push(this.newTimer);        
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
        if(confirm("Repeat timer?")){
            var temp = timer.TIMER_END;
            timer.TIMER_END = timer.TIMER_END + ( timer.TIMER_END - timer.TIMER_START);
            timer.TIMER_START = temp;
            timer.TIME_REMAINING = timer.TIMER_END - timer.TIMER_START;
        } else {
            this.deleteTimer(timer);
        } 

    }

    deleteTimer(dtimer : Timer): void {
        this.timerService.deleteTimer(dtimer);
        var i = this.timerList.findIndex(timer => timer === dtimer)
        this.timerList.splice(i, 1);
    }
    

    timeToString(time : number) : string {
        return this.timerService.timeToString(time);
    }

    durationToString(time : number) : string {
        return this.timerService.durationToString(time);
    }



    pauseTimer(timer : Timer) : void {
        
    }

    ngOnInit(){
        //this.getTimers();
    }


    ngAfterViewInit(){
        this.start();
    }

}