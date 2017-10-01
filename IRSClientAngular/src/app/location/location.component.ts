import { Component, Input } from '@angular/core';
import { Location } from './location';

@Component({
  selector: 'location-component',
  templateUrl: 'location.component.html'
})

export class LocationComponent {
  @Input() locations: Location[];
}
