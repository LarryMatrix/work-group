import { Component, OnInit } from '@angular/core';
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {Dhis2Service} from "../../../../shared/services/dhis2.service";

@Component({
  selector: 'app-org-units',
  templateUrl: './org-units.component.html',
  styleUrls: ['./org-units.component.scss']
})
export class OrgUnitsComponent implements OnInit {

  destroy$ : Subject<boolean> = new Subject<boolean>();
  organisationUnits : any[] = [];

  constructor(private dhisService: Dhis2Service) { }

  ngOnInit(): void {
    this.getOrgUnits()
  }

  getOrgUnits() {
    this.dhisService.getOrgUnits()
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        response => {
          this.organisationUnits = response.organisationUnits
          console.log('response:: ', response);
        }, error => {
          console.log('error:: ', error);
        }
      )
  }

}
