import { Component, OnInit } from '@angular/core';
import { IncidentService } from '../../service/incident.service';
import { DomService } from '../../util/dom.service';
import { NewReportService } from '../../service/new-report.service';
import { Location } from '../location/location';
import { Person } from '../person/person';
import { Incident } from '../report/incident';
import { LocationComponent } from '../location/location.component';
import { VehicleComponent } from '../vehicle/vehicle.component';
import { PersonComponent } from '../person/person.component';

@Component( 
  {
    templateUrl: './new-report.component.html',
    styleUrls: ['../../../assets/css/new-report.component.css'],
  }
)

export class NewReportComponent implements OnInit {
    locationStr: string = LocationComponent.name;
    personStr: string = PersonComponent.name;
    newIncident: Incident = new Incident();
    locations: Location[] = [];
    persons: Person[] = [];

    constructor( 
      private incidentService: IncidentService,
      private domService: DomService,
      private newReportService: NewReportService
    ) {}

    ngOnInit() {
        this.newReportService.currentLocations
            .subscribe( locations => this.locations = locations);
        this.newReportService.currentPersons
            .subscribe( persons => this.persons = persons );
    }
    
    
    // TEST CODE //
    categories = ['Access Control', 'Alarms', 'Suspicious Activity'];
    subCategories = ['Person', 'Vehicle' /*, 'Location'*/];
    dynamicTest = "";

    onSelectChangeEvent(){
        if(this.dynamicTest == 'Vehicle') {
            setTimeout(() => {
              this.domService.addComponent(VehicleComponent, "vehicles");
            }, 100);
        } else if ( this.dynamicTest == 'Person') {
            setTimeout(() => {
                this.domService.addComponent(PersonComponent.name, "person" );
            }, 100);
        }
    }
    // END OF TEST CODE //

    addComponent( componentName: string ) {
        if ( this.dynamicTest == 'Vehicle' )
            this.domService.addComponent( VehicleComponent, "vehicles" );
        else if ( componentName === this.locationStr ) {
            console.log("in addComponent: location");
            this.domService.addComponent( LocationComponent.name, "locations" );            
        } else if ( componentName === this.personStr){
            this.domService.addComponent( PersonComponent.name, "persons" );
        }
    }
    

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
}
