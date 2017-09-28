import { Injectable } from '@angular/core';
import { Location } from './location';
//import { LOCATIONS } from '../mock-locations';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LocationService {
    constructor(private http: HttpClient) {}
    locationsUrl = "http://localhost:4567/locations";

    getLocations(): Promise<Location[]> {
        var locations = this.http.get(this.locationsUrl)
            .toPromise()
            .then(response => response as Location[])
            .catch(this.handleError);
        return Promise.resolve(locations);
    };

    saveLocation(location: Location) : void {//Promise<any> {
        // var promise = this.http
        //         .post(this.locationsUrl, location)
        //         .toPromise()
        //         .then(response => response)
        //         .catch(this.handleError);
        // this.getLocations();
        // return promise;
    };

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}