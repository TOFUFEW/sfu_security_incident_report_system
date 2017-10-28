import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DataHelperService } from '../util/data-helper.service';
import { Config } from '../util/config.service';
import { Location } from '../component/location/location';
import { Person } from '../component/person/person';
import { IncidentElement } from '../component/report/incident-element';

@Injectable()
export class NewReportService {
    incidentElements: IncidentElement[];
    private locations = new BehaviorSubject<Location[]>([]);
    private persons = new BehaviorSubject<Person[]> ([]);
    currentLocations = this.locations.asObservable();

    constructor() {
        this.incidentElements = [];
    }
    
    addLocation( obj: Location ) {
        var arr = this.locations.getValue();

        /* HARDCODED */
        // obj.LOCATION_ID = 1 ;
        // obj.CAMPUS_ID = 1;
        
        arr.push( obj );
        this.locations.next( arr );
    }

    addPerson( obj: Person){
        var arr = this.persons.getValue();

        arr.push( obj );
        this.persons.next( arr );

    }

    collectIncidentElements() {
        var locations = this.locations.getValue();
        locations.forEach( loc => {
            var locIE = DataHelperService.toIncidentElement( Config.LocationTable, loc );
            this.incidentElements.push( locIE );
        });

        return this.incidentElements;
    }
}
