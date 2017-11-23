import { Pipe, PipeTransform } from '@angular/core';
import { Incident } from '../component/report/incident';
import { Config } from '../util/config.service';
@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

    transform(incidents:Incident[], searchText: any): any {

        // check if search term is undefined
        if (searchText === undefined || searchText == "") return incidents;

        // return updated items array
        return incidents.filter( incident => {

            // Incident
            if (incident.searchString
                .toLowerCase()
                .includes(searchText.toLowerCase())) {
                return incident;
            }

            // Staff
            for (var i = 0; i < incident.incidentElements[Config.StaffKey].length; i++) {
                if (incident.incidentElements[Config.StaffKey][i].searchString
                    .toLowerCase()
                    .includes(searchText.toLowerCase())) {
                    return incident;
                }
            }

            // Location
            for (var i = 0; i < incident.incidentElements[Config.LocationKey].length; i++) {
                if (incident.incidentElements[Config.LocationKey][i].searchString
                    .toLowerCase()
                    .includes(searchText.toLowerCase())) {
                    return incident;
                }
            }
        })
    }
}