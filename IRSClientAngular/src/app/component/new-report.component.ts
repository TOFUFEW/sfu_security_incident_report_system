import { Component } from '@angular/core';
import { Incident } from '../model/incident';
import { IncidentService } from '../service/incident.service';
import { DomService } from '../service/dom.service';
import { VehicleComponent } from './vehicle.component';

@Component( 
  {
    templateUrl: '../view/new-report.component.html',
    styleUrls: ['../../assets/css/new-report.component.css'],
  }
)

export class NewReportComponent {

  newIncident: Incident = new Incident();
  constructor( 
    private incidentService: IncidentService,
    private domService: DomService
  ) {}
  
  // TEST CODE //
  categories = ['Access Control', 'Alarms', 'Suspicious Activity'];
  subCategories = ['Person', 'Vehicle', 'Location'];
  dynamicTest = "";

  onSelectChangeEvent(){
    if(this.dynamicTest == 'Vehicle') {
      setTimeout(() => {
        this.domService.addVehicle("dynamic");
        console.log("hello world");
      }, 100);
    }
  }

  addVehicleComp() {
    this.domService.addVehicle("dynamic");
  }
  // END OF TEST CODE //
  

  // HOLD OFF ON THIS
  addIncident(): void {
    console.log(this.newIncident);
    this.incidentService.create( this.newIncident )
        .then( returnedIncident => {
            if ( returnedIncident != null  ) {
              location.reload();
            }
            else alert( "Add failed." );
        } );
    delete this.newIncident;
    this.newIncident = new Incident();
  }
}
