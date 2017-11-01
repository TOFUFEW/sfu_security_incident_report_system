import { Component, OnInit } from '@angular/core';
import { Incident } from '../report/incident';
import { IncidentService } from '../../service/incident.service';


@Component({
  selector: 'guard-incident-component',
  templateUrl: './guard-incident.component.html',
})

export class GuardIncidentComponent implements OnInit {
  incidents: Incident[];
  newIncident: Incident = new Incident();

  constructor ( private incidentsService: IncidentService ) {};

  getIncidents(): void {
    this.incidentsService.getIncidents().then( returnedIncidents => {
      this.incidents = returnedIncidents;
    } );
  }

//   addIncident(): void {
//     this.incidentsService.create( this.newIncident )
//         .then( returnedIncident => {
//             if ( returnedIncident != null  ) {
//               this.incidents.push( returnedIncident );
//               alert( "Incident successfully added!" );
//             }
//             else alert( "Add failed." );
//         } );
//     delete this.newIncident;
//     this.newIncident = new Incident();
//   }

<<<<<<< HEAD
    saveReport(): void {
        this.incidentsService.update( this.incident )
            .then( returnedIncident => {
                if ( returnedIncident != null  ) {
                alert( "Incident successfully edited!" );
                }
                else alert( "Edit failed." );
            } );
    }
      
    public show() : void {
        var locationModal: HTMLElement = document.getElementById("modalLocation");
        locationModal.style.visibility = "true";
        // setTimeout(() => locationModal.visibleAnimate = true, 100);
    }

    public hide() : void {
        var locationModal: HTMLElement = document.getElementById("modalLocation");
        setTimeout(() => locationModal.style.visibility = "false", 300);
    }

    public onContainerClicked ( event: MouseEvent ) : void {
        if ((<HTMLElement>event.target).classList.contains('modal')) {
        this.hide();
        }
    }

    changeLocation( edit ) : void {
        // this.reportService.addElementsFromIncident ( this.incident.incidentElements, this.incident.locationList );
        var locationToRemoveIndex : number;
        var locationToRemoveLocally : number;
        var locationToAdd = this.locationModal.locationComponent.newLocation;
        var locationToRemove : Location;
                
        // Add new location
        if ( this.locationModal.button_id == -1 ) {
            this.incident.locationList.push ( locationToAdd );
            this.incident.incidentElements.push ( locationToAdd );            
        }
        else { 
            this.incident.locationList.forEach( location => {
                if ( location.attributes.LOCATION_ID == this.locationModal.button_id ) {
                    locationToRemoveLocally = this.incident.locationList.indexOf(location);     
                } 
            });
            this.incident.locationList.splice(locationToRemoveIndex, 1, locationToAdd);
            
            console.log ( "location index ", locationToRemoveIndex );

            // this.reportService.removeIncidentElement( locationToRemove, Config.LocationTable);        
            this.incident.incidentElements.forEach( element => {
                console.log(Config.LocationTable);
                console.log("element table", element.table);
                var locationElement = element as Location;
                if (( element.table == Config.LocationTable ) && 
                    ( locationElement.attributes.LOCATION_ID == this.locationModal.button_id )) {
                        locationToRemoveIndex = this.incident.incidentElements.indexOf(element);
                }
            }); 
            this.incident.incidentElements.splice(locationToRemoveIndex, 1, locationToAdd);
        }
        this.incidentsService.update(this.incident);
        console.log( "new location list", this.incident.incidentElements );
        // this.incidentsService.update( this.incident );
        console.log(this.incident);
    }

    changeCategory( newCategoryID ) : void {
        console.log("change category in incident", newCategoryID);
        this.incident.category.CATEGORY_ID = newCategoryID;
    }
=======
//   updateIncident( incident: Incident ): void {
//     this.incidentsService.update( incident )
//         .then( returnedIncident => {
//             if ( returnedIncident != null  ) {
//               var i = this.incidents.findIndex( inc => inc.REPORT_ID === returnedIncident.REPORT_ID );
//               // remove 1 object at index i, replace it with returnedLocation
//               this.incidents.splice( i, 1, returnedIncident );
//               alert( "Incident successfully edited!" );
//             }
//             else alert( "Edit failed." );
//         } );
//   }
>>>>>>> origin/master

  ngOnInit() : void {
    this.getIncidents();
  }
}

