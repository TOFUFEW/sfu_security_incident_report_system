import { Injectable } from '@angular/core';
import { DataHelperService } from '../util/data-helper.service';
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
        else {
            console.log( "Table not found.");
            key = table;
        }
        return key;
    }

    getElementIndexByID ( incident: Incident, idToSearch: number, table: string ) {
        var key = this.getElementKey ( table );
        var elementIndex = -1;
        if ( table === Config.CategoryTable ) {
            elementIndex = incident.incidentElements[key].findIndex( i => 
                i.attributes.CATEGORY_ID == idToSearch)
        }
        else if ( table === Config.LocationTable ) {
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
        return elementIndex;
    }
    
    changeElement( incident: Incident, idToRemove: number, element: IncidentElement ) {
        
        var table = element.table;        
        var key = this.getElementKey ( table );
        var index = -1;
        console.log("incident before swap ", incident.incidentElements[key][0].attributes.LOCATION_ID, " ", idToRemove, " ", table );        
        index = this.getElementIndexByID ( incident, idToRemove, table );
        console.log("find index of element ", incident.incidentElements[key][0].attributes.LOCATION_ID, " ", idToRemove, " ", table );
        console.log("index of element ", index);
        console.log("location array ", incident.incidentElements[key] );
    
        if ( incident.incidentElements[key] != null && index != -1 ) {
            console.log("Splicing incident");
            incident.incidentElements[key].splice( index, 1, element );
            this.incidentService.update ( incident );            
        }
        console.log("Incident w/ changed location ", incident );
    }

    addElement ( incident: Incident, element: IncidentElement ) {
        var key = this.getElementKey( element.table );        
        incident.incidentElements[key].push ( element );
        this.incidentService.update ( incident );
    }

    // changeLocation ( edit ) : void {
    //     var locationToRemoveIndex : number;
    //     var locationToRemoveLocally : number;
    //     var locationToAdd = this.locationModal.locationComponent.newLocation;
    //     var locationToRemove : Location;
                
    //     // Add new location
    //     if ( this.locationModal.button_id == -1 ) {
    //         this.incident.insertIncidentElement(locationToAdd);
    //     }
    //     else { 
    //         // this.incident.locationList.forEach( location => {
    //         //     if ( location.attributes.LOCATION_ID == this.locationModal.button_id ) {
    //         //         locationToRemoveLocally = this.incident.locationList.indexOf(location);     
    //         //     } 
    //         // });
    //         // this.incident.locationList.splice(locationToRemoveIndex, 1, locationToAdd);
            
    //         // console.log ( "location index ", locationToRemoveIndex );

    //         // this.incident.incidentElements['Location'].forEach( location => {
    //         //     console.log(Config.LocationTable);
    //         //     if ( location.attributes.LOCATION_ID == this.locationModal.button_id ) {
    //         //             locationToRemoveIndex = this.incident.incidentElements['Location'].indexOf(location);
    //         //     }
    //         // }); 
    //         this.incident.swapElement( locationToRemoveIndex, DataHelperService.toIncidentElement( Config.LocationTable, locationToAdd ));                
    //     }
    // }
}