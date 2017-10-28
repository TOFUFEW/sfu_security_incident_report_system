import { Pipe, PipeTransform } from '@angular/core';
import { Incident } from '../component/report/incident';

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
            for (var i = 0; i < incident.staffList.length; i++) {
                if (incident.staffList[i].searchString
                    .toLowerCase()
                    .includes(searchText.toLowerCase())) {
                    return incident;
                }
            }

            // Location
            for (var i = 0; i < incident.locationList.length; i++) {
                if (incident.locationList[i].searchString
                    .toLowerCase()
                    .includes(searchText.toLowerCase())) {
                    return incident;
                }
            }
        })
    }
}