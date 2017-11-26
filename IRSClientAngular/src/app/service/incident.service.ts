import { Injectable } from '@angular/core';
import { plainToClass } from "class-transformer";
import { Observable } from 'rxjs';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Config } from '../util/config.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Incident } from '../component/report/incident';
import { IncidentElement } from '../component/report/incident-element';
import { Category } from '../component/category/category';
import { Location } from '../component/location/location';
import { Campus } from '../component/location/campus';
import { Person } from '../component/person/person';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { User } from "../component/login/user";
import { CategoryDictionary } from "../component/category/category";
import { UserService } from "./user.service";
import { Staff } from '../component/staff/staff';
import { StaffService } from '../service/staff.service';
import { LocationService } from '../service/location.service';
import { CategoryService } from '../service/category.service';

@Injectable()
export class IncidentService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    getIncidentsUrl = Config.GetIncidentsURI;
    insertIncidentUrl = Config.IncidentsURI;
    updateIncidentsUrl = Config.UpdateIncidentURI;
    incidentsUrl = Config.IncidentsURI;
    createdByIncidentsUrl = Config.CreatedIncidentsURI;

    private userService = new UserService;

    private bs_allReports = new BehaviorSubject<Incident[]>([]);
    allReports = this.bs_allReports.asObservable();

    private bs_reportsToAddToWorkspace = new BehaviorSubject<Incident[]>([]);
    reportsToAddToWorkspace = this.bs_reportsToAddToWorkspace.asObservable();

    private bs_lastRemovedId = new BehaviorSubject<number>(0);
    lastRemovedId = this.bs_lastRemovedId.asObservable();

    private bs_categories = new BehaviorSubject<CategoryDictionary[]>([]);
    categoryDictionary = this.bs_categories.asObservable();

    private bs_editedReport = new BehaviorSubject<Incident>(null);
    editedReport = this.bs_editedReport.asObservable();

    private bs_staffArr = new BehaviorSubject<Staff[]>([]);
    staffArr = this.bs_staffArr.asObservable();

    campusArr: Campus[] = [];

    constructor(private http: Http,
        private staffService: StaffService,
        private locationService: LocationService,
        private categoryService: CategoryService) {

        this.staffService.getStaffs().then(returnedArr => {
            this.bs_staffArr.next(returnedArr as Staff[]);
        });

        this.locationService.getCampus().then(response => {
            this.campusArr = response as Campus[];
        });

        this.categoryService.getCategories().then(response => {
            var cat = this.categoryService.toCategoryDictionary(response);
            this.bs_categories.next(cat);
        });

        this.getIncidents().then(response => {
            this.bs_allReports.next(response);
        });
    }

    addToWorkspace(incident: Incident): void {
        var arr = this.bs_reportsToAddToWorkspace.getValue();
        var index = arr.findIndex(i => i.attributes.REPORT_ID == incident.attributes.REPORT_ID);
        if (index < 0) {
            incident.inWorkspace = true;
            arr.splice(0, 0, incident);
            this.bs_reportsToAddToWorkspace.next(arr);
        }
    }

    removeFromWorkspace(id: number): void {
        if (id <= 0)
            return;
        var arr = this.bs_reportsToAddToWorkspace.getValue();
        var index = arr.findIndex(i => i.attributes.REPORT_ID == id);
        if (index >= 0) {
            arr[index].inWorkspace = false;
            arr.splice(index, 1);
            this.bs_reportsToAddToWorkspace.next(arr);
        }
    }

    updateIncidentList(report: Incident) {
        this.bs_editedReport.next(report);
    }

    getIncidents(): Promise<Incident[]> {
        var user = this.userService.getCurrentUser();
        var incidents = this.http.post(this.getIncidentsUrl, JSON.stringify(user), { headers: this.headers })
            .toPromise()
            .then(response => this.initIncidents(plainToClass(Incident, response.json())) /*as Incident[]*/)
            .catch(this.handleError);
        return Promise.resolve(incidents);
    };


    // getIncidents(): Observable<Incident[]> {
    //     let options = new RequestOptions({headers: this.headers});

    //     return this.http
    //         .get(this.incidentsUrl, options)
    //         .map((response: Response) => 
    //         this.initIncidents(plainToClass(Incident, response.json()))
    //     )
    // }

    doSearch(query: String, isCTSearch: boolean): Observable<Incident[]> {
        let formHeaders = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: formHeaders });

        let searchURI = Config.FTSearchURI;
        if (isCTSearch) {
            searchURI = Config.CTSearchURI;
        }

        return this.http
            .post(searchURI, query, options)
            .map((response: Response) =>
                this.initIncidents(plainToClass(Incident, response.json()))
            )
    }

    getCreatedByIncidents(): Promise<Incident[]> {
        var user = this.userService.getCurrentUser();
        var incidents = this.http
            .post(this.createdByIncidentsUrl, JSON.stringify(user), { headers: this.headers })
            .toPromise()
            .then(response => this.initIncidents(response.json() as Incident[]) as Incident[])
            .catch(this.handleError);
        return Promise.resolve(incidents);
    }

    getIncident(id: number): Promise<Incident> {
        var incidentToGet = new Incident();
        incidentToGet.attributes.REPORT_ID = id;
        var returnedIncident = this.http
            .post(Config.GetIncidentURI, JSON.stringify(incidentToGet), { headers: this.headers })
            .toPromise()
            .then(response => this.initializeIncident(response.json() as Incident) as Incident)
            .catch(this.handleError);
        return Promise.resolve(returnedIncident);
    }

    private initIncidents(incidents: Incident[]): Incident[] {
        incidents.forEach(i => {
            this.initializeIncident(i);
        });
        return incidents;
    }

    private initializeIncident(incident: Incident): Incident {
        incident.category = incident.incidentElements[Config.IncidentCategoryKey][0] as Category;
        incident.guard = incident.incidentElements[Config.StaffKey][0] as Staff;
        incident.incidentElements[Config.LocationKey]
            .forEach(element => {
                var index = this.campusArr.findIndex(
                    c => c.attributes.CAMPUS_ID == (element as Location).attributes.CAMPUS_ID
                );
                if (index >= 0)
                    (element as Location).attributes.CITY = this.campusArr[index].attributes.CITY;
            });
        return incident;
    }

    create(incident: Incident): Promise<Incident> {
        console.log(incident);
        if (incident.attributes.ACCOUNT_ID == null) {
            incident.attributes.ACCOUNT_ID = this.userService.getCurrentUser().attributes.ACCOUNT_ID;
        }
        this.toSearchString(incident);
        incident.table = Config.IncidentTable;

        var promise = this.http
            .post(this.insertIncidentUrl, JSON.stringify(incident), { headers: this.headers })
            .toPromise()
            .then(response => {
                return (response.json() as boolean) ? incident : null
            })
            .catch(this.handleError);

        return Promise.resolve(promise);
    }

    update(incident: Incident): Promise<Incident> {
        if (incident.attributes.ACCOUNT_ID == null) {
            incident.attributes.ACCOUNT_ID = this.userService.getCurrentUser().attributes.ACCOUNT_ID;
        }
        this.toSearchString(incident);
        incident.table = Config.IncidentTable;
        var promise = this.http
            .post(this.updateIncidentsUrl, JSON.stringify(incident), { headers: this.headers })
            .toPromise()
            .then(response => {
                return (response.json() as boolean) ? incident : null
            })
            .catch(this.handleError);
        return Promise.resolve(promise);
    }

    delete(id: number): Promise<boolean> {
        var url = `${this.incidentsUrl}/${id}`;
        var promise = this.http
            .delete(url, { headers: this.headers })
            .toPromise()
            .then(response => response.json() as boolean)
            .catch(this.handleError);
        return Promise.resolve(promise);
    };

    updateAssignedStaff(incidentToAssign: Incident, selectedStaffId: number): Incident {
        var staffArr = this.bs_staffArr.getValue();
        var index = staffArr.findIndex(x => x.attributes.ACCOUNT_ID == selectedStaffId);

        var existingStaffIndex = incidentToAssign.incidentElements[Config.StaffKey]
            .findIndex(e => e.table === Config.StaffTable);

        var staff = null;
        if (index >= 0) {
            staff = staffArr[index];
        }

        if (existingStaffIndex >= 0) {
            if (staff == null) { // de-assign
                incidentToAssign.incidentElements[Config.StaffKey].splice(existingStaffIndex, 1);
            }
            else { // replace
                incidentToAssign.incidentElements[Config.StaffKey].splice(existingStaffIndex, 1, staff);
            }
        }
        else {
            if (staff != null) { // assign
                incidentToAssign.incidentElements[Config.StaffKey].push(staff);
            }
        }

        incidentToAssign.guard = staff;
        return incidentToAssign;
    }

    changeIncidentCategory(incident, newCategoryID, selectedCategory): Promise<Incident> {
        incident.category.CATEGORY_ID = newCategoryID;
        incident.attributes.CATEGORY_ID = newCategoryID;
        incident.category.attributes.MAIN_CATEGORY = selectedCategory.attributes.MAIN_CATEGORY;
        incident.category.attributes.SUB_CATEGORY = selectedCategory.attributes.SUB_CATEGORY;
        incident.category.attributes.INCIDENT_TYPE = selectedCategory.attributes.INCIDENT_TYPE;
        incident.incidentElements[Config.IncidentCategoryKey]
            .splice(0, incident.incidentElements[Config.IncidentCategoryKey].length,
            incident.category);
        var promise = this.update(incident)
            .then(incident => {
                console.log("inserted incident", incident);
                return incident;
            })
        return Promise.resolve(promise);
    }

    private handleError(error: any): Promise<any> {
        alert("An error occurred.");
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    // SEARCH TEXT FOR SEARCHING IN THE DATABASE
    private toSearchString(incident: Incident) {
        incident.searchString = incident.attributes.DESCRIPTION
            + " " + incident.attributes.EXECUTIVE_SUMMARY;

        var map = incident.incidentElements;

        // iterate through each incident element and add them to the search string
        map.forEach((value: IncidentElement[], key: String) => {
            var elementArray = value;
            elementArray.forEach(element => {
                console.log("This element's search string is: " + element.toSearchString());
                incident.searchString = incident.searchString + " " + element.toSearchString();
            });
        });


        debugger;
        if (incident.attributes.REPORT_ID != undefined && incident.attributes.REPORT_ID != null) {
            incident.searchString = incident.searchString + " " + incident.attributes.REPORT_ID;
        }

        incident.attributes.SEARCH_TEXT = incident.searchString.replace('null', '');
        console.log(incident.attributes.SEARCH_TEXT);
    }

}
