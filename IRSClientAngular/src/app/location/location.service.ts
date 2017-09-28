import { Injectable } from '@angular/core';
import { Location } from './location';
//import { LOCATIONS } from '../mock-locations';
import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LocationService {
    private headers = new Headers({'Content-Type': 'application/json'});
    locationsUrl = "http://localhost:4567/locations";
    constructor(private http: Http) {}

    getLocations(): Promise<Location[]> {
        var locations = this.http.get(this.locationsUrl)
            .toPromise()
            .then(response => response.json() as Location[])
            .catch(this.handleError);
        return Promise.resolve(locations);
    };

    saveLocation(location: Location) : Promise<string> {
        var promise = this.http
                .post(this.locationsUrl, 
                    JSON.stringify({campus: location.campus, building_num: location.building_num, room_num: location.room_num, department: location.department}), { headers: this.headers })
                .toPromise()
                .then(response => response.json() as string)
                .catch(this.handleError);
        this.getLocations();
        return promise;
    };

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}