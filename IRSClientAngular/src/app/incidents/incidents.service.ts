import { Injectable } from '@angular/core';
import { Incidents } from './incidents';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class IncidentService {
    constructor(private http: HttpClient) {}
    getIncidents(): Promise<Incidents[]> {
        const incidentsUrl = "http://localhost:4567/incidents";
        var incidents = this.http.get(incidentsUrl)
            .toPromise()
            .then(response => response as Incidents[]);
        return Promise.resolve(incidents);
    };
}