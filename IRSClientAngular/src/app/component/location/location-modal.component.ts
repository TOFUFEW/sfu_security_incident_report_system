/* *  Location Modal Component: 
*  displays the location component within a modal 
*  to add/change locations in a report */ 

import { Component, Input, Output, OnInit, Directive, ViewChild, EventEmitter } from '@angular/core'; 
import { Router, RouterModule } from '@angular/router'; 
import { LocationService } from '../../service/location.service'; 
import { LocationComponent } from './location.component'; 
import { Location } from './location'; 
import { NewReportService } from '../../service/new-report.service'; 
import { Config } from '../../util/config.service'; 

@Component({     
    selector: 'location-modal-component',     
    templateUrl: './location-modal.component.html',     
    styleUrls: ['../../../assets/css/guard-app.css']    
}) 

export class LocationModalComponent implements OnInit {     
    @ViewChild ( LocationComponent ) locationComponent: LocationComponent   
    @Output () locationSaved : EventEmitter<string> = new EventEmitter();     
    @Output () triggerLocationRemove : EventEmitter<string> = new EventEmitter();    
    
    public visible = false;     
    public button_id;     
    private visibleAnimate = false;     
    
    constructor (         
        private reportService: NewReportService,     
    ) {}     
    
    public show ( event ): void {         
        var target = event.target || event.srcElement || event.currentTarget;         
        if ( target.id ) {
            console.log("target ", target );          
            var idAttr = target.id;             
            this.button_id = idAttr;      
            console.log("target ", idAttr );                      
        }        
        else {             
            this.button_id = -1;         
        }   
        this.visible = true;
        this.locationComponent.updateCurrentLocation ( target.id );   
        setTimeout(() => this.visibleAnimate = true, 100);     
    }         
    
    public hide(): void {         
        this.visibleAnimate = false;         
        setTimeout(() => this.visible = false, 300);     
    }         
    public onContainerClicked(event: MouseEvent): void {         
        if ((<HTMLElement>event.target).classList.contains('modal')) {           
            this.hide();         
        }     
    }     
    public submitChanges ( id ) : void {       
        this.locationComponent.newLocation.table = Config.LocationTable;  
        console.log(this.locationComponent.newLocation);
        this.locationSaved.emit('complete');
        this.hide();      
    }

    public removeLocation ( id ) : void {
        console.log("id ", id);
        this.triggerLocationRemove.emit(id);
        this.hide();   
    }

    ngOnInit() {         
        document.getElementById("removeLocation").style.visibility = "hidden";     
    } 
}
