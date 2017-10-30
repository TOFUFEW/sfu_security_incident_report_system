import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from "@angular/core";
import {Incident} from "../report/incident";
import {IncidentService} from "../../service/incident.service";
import { ActivatedRoute , ParamMap } from "@angular/router";

@Component({
  selector: 'report',
  templateUrl: './guard-test-view-report.html'
})

export class GuardTestViewReportComponent implements OnInit {
  incident: Incident;

  constructor( private incidentsService: IncidentService,
               private router: ActivatedRoute ) {
  };

  ngOnInit(): void {
      this.router.paramMap
        .switchMap((params: ParamMap) => this.incidentsService.getIncident(+params.get('id')))
        .subscribe(incident => {
          console.log(incident);
          this.incident = incident;
        });
      
  }
}
