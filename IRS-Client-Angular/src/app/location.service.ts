import { Injectable } from '@angular/core';
import { Location } from './location';
import { LOCATIONS } from './mock-locations';

@Injectable()
export class LocationService {
    getLocations(): Promise<Location[]> {
        return Promise.resolve(LOCATIONS);
    };

    getLocationsSlowly(): Promise<Location[]> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getLocations()), 2000);
        });
    }
}