import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { IncidentElementService } from '../service/incident-element.service';
import { Config } from '../util/config.service';
import { Location, LocationAttributes } from '../component/location/location';
import { Person } from '../component/person/person';
import { Category } from '../component/category/category';
import { Incident } from '../component/report/incident';
import { IncidentElement } from '../component/report/incident-element';

@Injectable()
export class NewReportService {
    incidentElements: Map<String, IncidentElement[]>;
    
    private locations = new BehaviorSubject<Location[]>([]);
    currentLocations = this.locations.asObservable();
    
    private persons = new BehaviorSubject<Person[]> ([]);
    currentPersons = this.persons.asObservable();

    constructor() {
        this.incidentElements = new Map<String, IncidentElement[]>();
    }

    addIncidentElement( obj: IncidentElement ) {
        if ( obj == null ) {
            console.log("ERROR: " + obj.table + " is undefined and cannot be added.");
            return;
        }

        var behaviorSubject = null;
        var arr = [];
        if ( obj.table === Config.LocationTable ) {
            behaviorSubject = this.locations;
            arr = behaviorSubject.getValue() as Location[];
        }
        else if ( obj.table === Config.PersonTable ) {
            behaviorSubject = this.persons;
            arr = behaviorSubject.getValue() as Person[];
            // obj = IncidentElementService.toIncidentElement( table, obj );
        }

        arr.push( obj );
        behaviorSubject.next( arr );
    }

    removeIncidentElement( obj: any, table: string) {
        console.log( "object table", obj.table );
        var behaviorSubject = null;
        var arr = [];
        var index = -1;

        if ( table === Config.LocationTable ) {
            behaviorSubject = this.locations;
            arr = behaviorSubject.getValue() as Location[];
            var loc = obj as Location ;
            index = arr.findIndex( x => x.attributes.CAMPUS_ID == obj.attributes.CAMPUS_ID
                && x.attributes.LOCATION_ID == obj.attributes.LOCATION_ID
                && x.attributes.BUILDING_NAME == obj.attributes.BUILDING_NAME
                && x.attributes.ROOM_NUMBER == obj.attributes.ROOM_NUMBER );
        }
        else if ( table === Config.PersonTable ) {
            behaviorSubject = this.persons;
            arr = behaviorSubject.getValue() as Person[];
            var person = obj as Person;
            index = arr.findIndex( x => x.attributes.FIRST_NAME === person.attributes.FIRST_NAME
                                        && x.attributes.LAST_NAME === person.attributes.LAST_NAME 
                                        && x.attributes.PHONE_NUMBER === person.attributes.PHONE_NUMBER ) ;
        }

        if ( index >= 0 ) {
            arr.splice( index, 1 );
            behaviorSubject.next( arr );
        }
        else {
            console.log("ERROR: index < 0. Element not found in array");
        }
    }

    validateReport( report: Incident ): boolean {
        var isValid = true;

        isValid = this.validateReportAttributes( report ) && isValid ;
        isValid = this.validateIncidentElements( report.incidentElements ) && isValid ;

        return isValid;
    }

    private validateReportAttributes( report: Incident ): boolean {
        var isValid = true;
        if ( report.attributes.CATEGORY_ID == null ) {
            this.debug_printErrorMsg( "CATEGORY_ID" );
            isValid = false;
        }
        if ( report.attributes.DESCRIPTION == null || report.attributes.DESCRIPTION.length == 0 ) {
            this.debug_printErrorMsg( "DESCRIPTION" );
            isValid = false;
        }
        if ( report.attributes.EXECUTIVE_SUMMARY == null || report.attributes.EXECUTIVE_SUMMARY.length == 0 ) {
            this.debug_printErrorMsg( "EXECUTIVE_SUMMARY" );
            isValid = false;
        }
        return isValid;
    }

    private validateIncidentElements( incidentElements: Map<String, IncidentElement[]> ): boolean {
        var isValid = true;

        // Iteriate through hash map and check if its valid input
        incidentElements.forEach((value: IncidentElement[], key: String) => {
            var elementArray = value;
            elementArray.forEach(element => {
                if (element.table.toLowerCase() === Config.LocationTable.toLowerCase()) {
                    isValid = this.validateLocation( element as Location ) && isValid ;
                } else if (element.table.toLowerCase() === Config.PersonTable.toLowerCase()) {
                    isValid = this.validatePerson( element as Person ) && isValid ;
                }
            });
        });
        
        return isValid;
    }

    private validateLocation( location: Location ): boolean {
        var attr = location.attributes;
        if ( attr.LOCATION_ID == null ) {
            this.debug_printErrorMsg( "LOCATION_ID" );
            return false;
        }

        return true;
    }

    private validatePerson( person: Person ): boolean {
        var isValid = true ; 
        if ( person.attributes.FIRST_NAME == null || person.attributes.FIRST_NAME.length == 0 ) {
            this.debug_printErrorMsg( "FIRST_NAME");
            isValid = false;
        }
        if ( person.attributes.LAST_NAME == null || person.attributes.LAST_NAME.length == 0 ) {
            this.debug_printErrorMsg( "LAST_NAME");
            isValid = false;
        }
        if ( person.attributes.PHONE_NUMBER == null || person.attributes.PHONE_NUMBER.length == 0 ) {
            this.debug_printErrorMsg( "PHONE_NUMBER");
            isValid = false;
        }
        return isValid;
    }

    private debug_printErrorMsg( field: String ) {
        console.log( "***** REPORT INVALID ERROR: " + field + " cannot be null or empty " );        
    }
}
