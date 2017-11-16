import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Config } from '../util/config.service';
import 'rxjs/add/operator/toPromise';
import { Timer } from '../component/timer/timer';

@Injectable()
export class TimerService{
    private headers = new Headers({'Content-Type': 'application/json'});
    timerUrl = Config.TimerURI;
    tableName = Config.TimerTable;
    constructor( private http: Http ) {}

    createTimer(start : string, end : string) : Timer {
        var timer : Timer = new Timer();

        timer.START_TIME = this.stringToTime(start);
        timer.END_TIME = this.stringToTime(end);
        console.log(timer);
        return timer;
    }

    createTimerInt(start : number, end : number) : Timer {
        var timer : Timer = new Timer();

        timer.START_TIME = start;
        timer.END_TIME = end;
        console.log(timer);
        return timer;
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
        } else {
            var hour = this.fillZeros(numHour.toString());
            return hour + ":" + minute + " AM";
        }
    }

    durationToString(time : number) : string {
        var hour = this.fillZeros(Math.floor(time / 1000 / 60 / 60 % 24).toString());
        var minute = this.fillZeros(Math.floor(time / 1000 / 60 % 60).toString());
        var second = this.fillZeros(Math.floor(time / 1000 / 60 % 60).toString());

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