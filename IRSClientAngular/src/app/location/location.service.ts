import { Injectable } from '@angular/core';
import { Location } from './location';
//import { LOCATIONS } from '../mock-locations';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LocationService {
    constructor(private http: HttpClient) {}
    getLocations(): Promise<Location[]> {
        const locationsUrl = "http://localhost:4567/locations";
        var locations = this.http.get(locationsUrl)
            .toPromise()
            .then(response => response as Location[]);
        return Promise.resolve(locations);
    };
}