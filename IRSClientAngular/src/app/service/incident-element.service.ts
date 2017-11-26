import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Config } from '../util/config.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Incident } from '../component/report/incident';
import { IncidentElement} from '../component/report/incident-element';
import { IncidentService } from '../service/incident.service';
import { Category } from '../component/category/category';
import { Location } from '../component/location/location';
import { Person } from '../component/person/person';
import 'rxjs/add/operator/toPromise';
import { User } from "../component/login/user";
import { UserService } from "./user.service";
import { Staff } from '../component/staff/staff';
import { StaffService } from '../service/staff.service';

@Injectable()
export class IncidentElementService
{
    constructor ( private incidentService: IncidentService ) {}

    static extractAttributes( incidentElement: IncidentElement ): Object {
        if( incidentElement == null ) {
            return null;
        }
        return incidentElement.attributes;
    }

    static extractAttributesArray( incidentElements: IncidentElement[] ): Object[] {
        var arr = [];
        //debugger;
        incidentElements.forEach( so => {
            //console.log(so);
            arr.push( so.attributes );
        });
        return arr;
    }

    // static toIncidentElement ( table: string, object: IncidentElement ): IncidentElement {
    //     var incidentElement: IncidentElement = new IncidentElement();
    //     incidentElement.attributes = object.attributes;
    //     return incidentElement;
    // }

    getElementKey ( table: string ) {
        var key = "";
        if ( table === Config.CategoryTable )
            key = Config.IncidentCategoryKey;
        else if ( table === Config.LocationTable )
            key = Config.LocationKey;
        else if ( table === Config.StaffTable )
            key = Config.StaffKey;
        else if ( table === Config.PersonTable )
            key = Config.PersonKey;
        else if ( table === Config.AttachmentTable )
            key = Config.AttachmentKey;
        else {
            console.log( "Table not found.");
            key = table;
        }
        return key;
    }

    getElementIndexByID ( incident: Incident, idToSearch: number, table: string ) {
        var key = this.getElementKey ( table );
        var elementIndex = -1;
        if ( table === Config.LocationTable ) {
            elementIndex = incident.incidentElements[key].findIndex( i =>
                i.attributes.LOCATION_ID == idToSearch)
        }
        else if ( table === Config.StaffTable ) {
            elementIndex = incident.incidentElements[key].findIndex( i =>
                i.attributes.ACCOUNT_ID == idToSearch)
        }
        else if ( table === Config.PersonTable ) {
            elementIndex = incident.incidentElements[key].findIndex( i =>
                i.attributes.PERSON_ID == idToSearch)
        }
        else if ( table === Config.AttachmentTable ) {
            elementIndex = incident.incidentElements[key].findIndex( i =>
                i.attributes.FILE_NAME == idToSearch)
        }
        return elementIndex;
    }

    changeElement( incident: Incident, idToRemove: number, element: IncidentElement ): Promise<Incident> {
        var table = element.table;
        var key = this.getElementKey ( table );
        var index = -1;
        index = this.getElementIndexByID ( incident, idToRemove, table );

        if ( incident.incidentElements[key] != null && index != -1 ) {
            incident.incidentElements[key].splice( index, 1, element );
            var promise = this.incidentService.update ( incident )
                .then ( incident => {
                    return incident;
                });
        }
        return Promise.resolve(promise);
    }

    addElement ( incident: Incident, element: IncidentElement ): Promise<Incident> {
        var key = this.getElementKey( element.table );
        incident.incidentElements[key].push ( element );
        var promise = this.incidentService.update ( incident )
            .then ( incident => {
                return incident;
            });
        return Promise.resolve(promise);
    }

    // Dont call incidentService.update()
    addElementNoUpdate ( incident: Incident, element: IncidentElement ) {
        var key = this.getElementKey( element.table );
        incident.incidentElements[key].push ( element );
    }

    // Dont call incidentService.update()
    removeElementNoUpdate ( incident: Incident, table: string, id: number ) {
        var key = this.getElementKey( table );
        var index = this.getElementIndexByID( incident, id, table );
        if ( index >= 0 )
            incident.incidentElements[key].splice ( index, 1 );
    }

    removeElement ( incident: Incident, idToRemove: number, table: string ) : Promise<Incident> {
        var key = this.getElementKey( table );
        var index = -1;
        index = this.getElementIndexByID ( incident, idToRemove, table );

        if ( incident.incidentElements[key] != null && index != -1 ) {
            incident.incidentElements[key].splice( index, 1 );
            var promise = this.incidentService.update ( incident )
                .then ( incident => {
                    return incident;
                });
        }
        return Promise.resolve(promise);
    }
}
