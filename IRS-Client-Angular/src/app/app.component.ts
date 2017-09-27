import { Component, OnInit } from '@angular/core';
import { Location } from './location';

/* Dummy data */
const Locations: Location[] = [
  {
    campus: 'Vancouver',
    building_num: 'HC',
    room_num: 1,
    department: 'SOSY'
  },
  {
    campus: 'Vancouver',
    building_num: 'HC',
    room_num: 2,
    department: 'SOSY'
  },
  {
    campus: 'Vancouver',
    building_num: 'HC',
    room_num: 3,
    department: 'SOSY'
  }

];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'SFU Incident Reporting System';
  locations = Locations;
}
