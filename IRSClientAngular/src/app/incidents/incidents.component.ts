import { Component, Input } from '@angular/core';
import { Incidents } from './incidents';
@Component({
  selector: 'incidents-component',
  templateUrl: 'incidents.component.html'
})

export class IncidentComponent {
  @Input() incidents: Incidents[];
}
