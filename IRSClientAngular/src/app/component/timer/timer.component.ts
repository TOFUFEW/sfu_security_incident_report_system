import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Timer } from './timer';
import { TimerService } from '../../service/timer.service';
import { IncidentService } from '../../service/incident.service';



@Component({
    selector: 'timer-component',
    templateUrl: './timer.component.html',
    styleUrls: ['../../../assets/css/panels.css',
        '../../../assets/css/timer.component.css']
})

export class TimerComponent implements OnInit {
    timeNow: number;
    tempStart: string;
    tempEnd: string;
    timerList: Timer[] = new Array<Timer>();
    newTimer: Timer = new Timer;
    modify: boolean = false;


    constructor(private timerService: TimerService, private incidentService: IncidentService){
        var nowDate = new Date (Date.now());
        this.timeNow = nowDate.getHours() * 60 * 60 * 1000 + nowDate.getMinutes() * 60 * 1000;

        this.incidentService.editedReport
        .subscribe( value => {
            if ( value != null && this.timerList!= null && this.timerList.length > 0 && value.attributes.TIMER_START != null && value.attributes.TIMER_END!= null) {
                var index = this.timerList.findIndex( i => i.incident.attributes.REPORT_ID == value.attributes.REPORT_ID );
                if ( index >= 0 && value.attributes ) {
                    this.timerList.splice(index, 1, this.timerService.createTimerInt(value, value.attributes.TIMER_START, value.attributes.TIMER_END));
                } else {
                    this.timerList.push(this.timerService.createTimerInt(value, value.attributes.TIMER_START, value.attributes.TIMER_END));
                }
                this.sortTimers();
            }
        });

        //TEST TIMERS

        // var timer1 : Timer = new Timer();
        // timer1.TIMER_START = this.timeNow - 10 * 60 * 1000;
        // timer1.TIMER_END = this.timeNow + 15 * 60 * 1000;
        // timer1.TIME_REMAINING = timer1.TIMER_END - this.timeNow;

        // var timer2 : Timer = new Timer();
        // timer2.TIMER_START = this.timeNow - 15 * 60 * 1000;
        // timer2.TIMER_END = this.timeNow + 20 * 60 * 1000;
        // timer2.TIME_REMAINING = timer2.TIMER_END - this.timeNow;
        
        // this.timerList.push(timer1);
        // this.timerList.push(timer2);

        //END TEST TIMERS
        
    }

    getTimers(): void {
       this.timerService.getTimers().then(returnedTimers => {
           this.timerList = returnedTimers;
       }).then(()=> {this.sortTimers()});
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

        this.newTimer.TIME_REMAINING = this.newTimer.TIMER_END - this.timeNow;

        this.timerList.push(this.newTimer);        
    }

    sortTimers() : void {
        this.timerList.sort( (a , b) => {
            if (a.TIME_REMAINING < b.TIME_REMAINING){
                return -1
            } else if (a.TIME_REMAINING > b.TIME_REMAINING) {
                return 1;
            } else {
                return 0;
            }
        })
    }
    
    start(): void {
        var x = setInterval(() => this.countDown(), 1000);

    }

    countDown() : void {
        this.timerList.forEach(timer => {
            this.timeNow = this.timeNow - 1000;
            timer.TIME_REMAINING= timer.TIME_REMAINING - 1000 ;
            if (timer.TIME_REMAINING <= 0){
                this.timeUp(timer);
            }
        });

    }

    modifyTimer( timer : Timer ) : void {
        timer.TIMER_START = this.timerService.stringToTime(this.tempStart);
        timer.TIMER_END = this.timerService.stringToTime(this.tempEnd);
        timer.TIME_REMAINING = timer.TIMER_END - this.timeNow;

        timer.incident.attributes.TIMER_START = timer.TIMER_START;
        timer.incident.attributes.TIMER_END = timer.TIMER_END;
        this.incidentService.update(timer.incident);
        this.tempStart = "";
        this.tempEnd = "";
    }

    timeUp(timer : Timer) : void{
        if(confirm ("repeat timer?")){
            var temp = timer.TIMER_END;
            timer.TIMER_END = timer.TIMER_END + (timer.TIMER_END - timer.TIMER_START);
            timer.TIMER_START = temp;
            timer.TIME_REMAINING = timer.TIMER_END - timer.TIMER_START;
            timer.TIMER_END - timer.TIMER_START;
        } else {
            this.deleteTimer(timer);
        } 

    }

    removeTimer(timer : Timer) : void {
        if (confirm("delete timer?")){
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
        this.getTimers();
    }


    ngAfterViewInit(){
        this.start();
    }

}