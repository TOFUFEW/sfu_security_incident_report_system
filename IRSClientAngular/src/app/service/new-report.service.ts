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

    removeIncidentElement( obj: any, table: string) {
        var behaviorSubject = null;
        var arr = [];
        var index = -1;

        if ( table === Config.LocationTable ) {
            var id = ( obj as Location ).LOCATION_ID;
            behaviorSubject = this.locations;
            arr = behaviorSubject.getValue() as Location[];
            index = arr.findIndex( x => x.LOCATION_ID == id );
        }
        else if ( table === Config.PersonTable ) {
            var person = obj as Person;
            behaviorSubject = this.persons;
            arr = behaviorSubject.getValue() as Person[];
            index = arr.findIndex( x => x.FIRST_NAME === person.FIRST_NAME
                                        && x.LAST_NAME === person.LAST_NAME 
                                        && x.PHONE_NUMBER === person.PHONE_NUMBER ) ;
        }

        if ( index >= 0 ) {
            arr.splice( index, 1 );
            behaviorSubject.next( arr );
        }
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
