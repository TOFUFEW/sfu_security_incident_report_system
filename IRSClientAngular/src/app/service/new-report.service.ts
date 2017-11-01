import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DataHelperService } from '../util/data-helper.service';
import { Config } from '../util/config.service';
import { Location, LocationAttributes } from '../component/location/location';
import { Person } from '../component/person/person';
import { Category } from '../component/category/category';
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

    addElementsFromIncident( incidentElements, locations ) {
        this.incidentElements = incidentElements;
        this.currentLocations = locations;
    }

    addIncidentElement( obj: any, table: string ) {
        if ( obj == null ) {
            console.log("ERROR: " + table + " is undefined and cannot be added.");
            return;
        }

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
        console.log("new report service array", arr);
        behaviorSubject.next( arr );
    }

    removeIncidentElement( obj: any, table: string) {
        var behaviorSubject = null;
        var arr = [];
        var index = -1;

        if ( table === Config.LocationTable ) {
            behaviorSubject = this.locations;
            arr = behaviorSubject.getValue() as Location[];
            var id = ( obj as Location ).attributes.LOCATION_ID;
            console.log("report service array ", arr);
            console.log("location id", id);
            index = arr.findIndex( x => x.attributes.LOCATION_ID == id );
        }
        else if ( table === Config.PersonTable ) {
            behaviorSubject = this.persons;
            arr = behaviorSubject.getValue() as Person[];
            var person = obj as Person;
            index = arr.findIndex( x => x.FIRST_NAME === person.FIRST_NAME
                                        && x.LAST_NAME === person.LAST_NAME 
                                        && x.PHONE_NUMBER === person.PHONE_NUMBER ) ;
        }

        if ( index >= 0 ) {
            arr.splice( index, 1 );
            behaviorSubject.next( arr );
        }
        else {
            console.log("ERROR: index < 0. Element not found in array");
        }
    }

    collectIncidentElements( category: Category ) {
        this.unwrapObservable( this.locations, Config.LocationTable );
        this.unwrapObservable( this.persons, Config.PersonTable );
        this.incidentElements.push( DataHelperService.toIncidentElement( Config.CategoryTable, category ) );
        console.log( this.incidentElements) ;
        
        return this.incidentElements;
    }

    private unwrapObservable( behaviorSubject: any, table: string ) {
        var arr = behaviorSubject.getValue();
        if ( arr == null ) {
            console.log("ERROR: Array is undefined");
        }

        if ( table === Config.LocationTable ) {
            arr = DataHelperService.extractAttributesArray( arr ) as LocationAttributes[];
        }

        arr.forEach( element => {
            var _elem = DataHelperService.toIncidentElement( table, element );
            this.incidentElements.push( _elem );
        });
    }
}
