import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Location } from '../model/location';
import { IncidentElement } from '../model/incident-element';
import { DataHelperService } from '../util/data-helper.service';
import { Config } from '../util/config.service';

@Injectable()
export class NewReportService {
    incidentElements: IncidentElement[];
    private locations = new BehaviorSubject<Location[]>([]);
    currentLocations = this.locations.asObservable();

    constructor() {
        this.incidentElements = [];
    }
    
    addLocation( obj: Location ) {
        var arr = this.locations.getValue();
        arr.push( obj );
        this.locations.next( arr );
    }

    removeLocation( id: number ) {
        var arr = this.locations.getValue();
        var i = arr.findIndex( l => l.LOCATION_ID == id );
        arr.splice( i, 1 );
        this.locations.next( arr );
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
