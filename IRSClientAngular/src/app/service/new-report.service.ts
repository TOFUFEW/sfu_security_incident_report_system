import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Location } from '../model/location';

@Injectable()
export class NewReportService {
    constructor() {}

    private locations = new BehaviorSubject<Location[]>([]);
    currentLocations = this.locations.asObservable();

    addLocation( obj: Location ) {
        console.log("In NewReportService addLocation");
        
        var arr = this.locations.getValue();
        console.log("Before push: ");
        console.log(arr);

        arr.push( obj );
        console.log("After push: ");
        console.log( arr);

        this.locations.next( arr );
        console.log("currentLocations: ") 
        console.log( this.locations.getValue());
    }
}
