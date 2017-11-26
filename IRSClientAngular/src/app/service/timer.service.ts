import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Config } from '../util/config.service';
import 'rxjs/add/operator/toPromise';
import { Timer } from '../component/timer/timer';
import { Incident } from '../component/report/incident';
import { IncidentService } from './incident.service';

@Injectable()
export class TimerService{
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor( private http: Http, private incidentService : IncidentService ) {}

    getTimers() : Promise<Timer[]> {
        var incidentList : Incident [];
        var timerList : Array<Timer> = new Array<Timer>();

        this.incidentService.getIncidents().then( returnedIncidents => {
            incidentList = returnedIncidents;
        })
        .then( () => {
            incidentList.forEach(incident =>{
                if (incident.attributes.TIMER_START != null && incident.attributes.TIMER_END != null && incident.attributes.TIMER_END > incident.attributes.TIMER_START) {
                    timerList.push(this.createTimerInt(incident, incident.attributes.TIMER_START, incident.attributes.TIMER_END));
                }
            });
        })
        .catch ( this.handleError );

        return Promise.resolve(timerList);
    }

    createTimer(start : string, end : string) : Timer {
        var nowDate = new Date (Date.now());
        var nowTime = nowDate.getHours() * 60 * 60 * 1000 + nowDate.getMinutes() * 60 * 1000;
        var timer : Timer = new Timer();

        timer.TIMER_START = this.stringToTime(start);
        timer.TIMER_END = this.stringToTime(end);
        timer.TIME_REMAINING = timer.TIMER_END - nowTime;
        
        return timer;
    }


    createTimerInt(incident: Incident, start : number, end : number) : Timer {
        var nowDate = new Date (Date.now());
        var nowTime = nowDate.getHours() * 60 * 60 * 1000 + nowDate.getMinutes() * 60 * 1000;
        var timer : Timer = new Timer();
        
        timer.incident = incident;

        timer.TIMER_START = start;
        timer.TIMER_END = end;
        timer.TIME_REMAINING = timer.TIMER_END - nowTime;
        return timer;
    }

    deleteTimer(timer : Timer) : void {
        timer.incident.attributes.TIMER_START = null;
        timer.incident.attributes.TIMER_END = null;
        this.incidentService.update(timer.incident);
    }

    //html time input is string "hh:mm" convert to time format
    stringToTime(input : string ) : number {
        var str: string[] = input.split(":");

        return parseInt(str[0]) * 60 * 60 * 1000 + parseInt(str[1]) * 60 * 1000;

    }

    timeToString(time : number) : string {
        var numHour = Math.floor(time / 1000 / 60 / 60 % 24);
        var minute = this.fillZeros(Math.floor(time / 1000 / 60 % 60).toString());

        if (numHour > 12){
            numHour = numHour % 12 ;
            var hour = this.fillZeros(numHour.toString());
            return hour + ":" + minute + " PM";
        } else if (numHour == 12 ){
            var hour = this.fillZeros(numHour.toString());
            return hour + ":" + minute + " PM";
        } else {
            var hour = this.fillZeros(numHour.toString());
            return hour + ":" + minute + " AM";
        }
    }

    durationToString(time : number) : string {
        var hour = this.fillZeros(Math.floor(time / 1000 / 60 / 60 % 24).toString());
        var minute = this.fillZeros(Math.floor(time / 1000 / 60 % 60).toString());
        var second = this.fillZeros(Math.floor(time / 1000 % 60).toString());

        return hour + ":" + minute + ":" + second;

    }

    fillZeros(str : string) : string{
        if (str.length < 2){
            str = "0" + str;
        }
        return str;
    }


    private handleError() : void {
        alert("An error has occured");
    }
}