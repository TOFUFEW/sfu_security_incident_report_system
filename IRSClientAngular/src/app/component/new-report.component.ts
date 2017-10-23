import { Component, OnInit } from '@angular/core';
import { Location } from '../model/location';
import { Incident } from '../model/incident';
import { IncidentService } from '../service/incident.service';
import { DomService } from '../service/dom.service';
import { NewReportService } from '../service/new-report.service';
import { LocationComponent } from './location.component';
import { VehicleComponent } from './vehicle.component';

@Component( 
  {
    templateUrl: '../view/new-report.component.html',
    styleUrls: ['../../assets/css/new-report.component.css'],
  }
)

export class NewReportComponent implements OnInit {
    locationStr: string = LocationComponent.name;
    newIncident: Incident = new Incident();
    locations: Location[] = [];

    constructor( 
      private incidentService: IncidentService,
      private domService: DomService,
      private newReportService: NewReportService
    ) {}

    ngOnInit() {
        this.newReportService.currentLocations
            .subscribe( locations => this.locations = locations);
    }
    
    
    // TEST CODE //
    categories = ['Access Control', 'Alarms', 'Suspicious Activity'];
    subCategories = ['Person', 'Vehicle' /*, 'Location'*/];
    dynamicTest = "";

    onSelectChangeEvent(){
        if(this.dynamicTest == 'Vehicle') {
            setTimeout(() => {
              this.domService.addComponent(VehicleComponent.name, "vehicles");
            }, 100);
        }
    }

    addComponent( componentName: string ) {
        if ( this.dynamicTest == 'Vehicle' )
            this.domService.addComponent( VehicleComponent.name, "vehicles" );
        else if ( componentName === this.locationStr ) {
            console.log("in addComponent: location");
            this.domService.addComponent( LocationComponent.name, "locations" );            
        }
    }
    // END OF TEST CODE //
    

    // HOLD OFF ON THIS
    createIncident(): void {
        this.newIncident.incidentElements = this.newReportService.collectIncidentElements();
        console.log(this.newIncident);
        this.incidentService.create( this.newIncident )
            .then( returnedIncident => {
                if ( returnedIncident != null  ) {
                    alert("Report successfully created!");
                    setTimeout(function(){location.reload()}, 300);
                }
                else alert( "Add failed." );
            } );
        delete this.newIncident;
        this.newIncident = new Incident();
    }

    getLocations() {
        console.log(this.locations);
    }
}
