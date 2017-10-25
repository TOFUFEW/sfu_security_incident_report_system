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
    currentLocations = this.locations.asObservable();
    
    private persons = new BehaviorSubject<Person[]> ([]);
    currentPersons = this.persons.asObservable();

    constructor() {
        this.incidentElements = [];
    }

    addIncidentElement( obj: any, table: string ) {
        if ( obj == null ) return;

        var behaviorSubject = null;
        var arr = [];
        if ( table === Config.LocationTable ) {
            behaviorSubject = this.locations;
            arr = behaviorSubject.getValue() as Location[];
        }
        else if ( table === Config.PersonTable ) {
            behaviorSubject = this.persons;
            arr = behaviorSubject.getValue() as Person[];
        }

        arr.push( obj );
        behaviorSubject.next( arr );
    }

    removeLocation( id: number ) {
        var arr = this.locations.getValue();
        var i = arr.findIndex( l => l.LOCATION_ID == id );
        arr.splice( i, 1 );
        this.locations.next( arr );
    }

    collectIncidentElements() {
        this.unwrapObservable( this.locations, Config.LocationTable );
        this.unwrapObservable( this.persons, Config.PersonTable );
        return this.incidentElements;
    }

    private unwrapObservable( behaviorSubject: any, table: string ) {
        var arr = behaviorSubject.getValue();
        arr.forEach( elem => {
            var _elem = DataHelperService.toIncidentElement( table, elem );
            this.incidentElements.push( _elem );
        });
    }
}
