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
                .post(this.locationsUrl, JSON.stringify(location), { headers: this.headers })
                .toPromise()
                .then(response => {
                    alert(response.json() as string);
                    window.location.reload(); // temporary
                })
                .catch(this.handleError);
        return Promise.resolve(promise);
    };

    updateLocation(location: Location) : Promise<string> {
        var promise = this.http
                .put(this.locationsUrl, JSON.stringify(location), { headers: this.headers })
                .toPromise()
                .then(response => {
                    alert(response.json() as string);
                    window.location.reload(); // temporary
                })
                .catch(this.handleError);
        return Promise.resolve(promise);
    };

    private handleError(error: any): Promise<any> {
        alert("An error occurred.");
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}