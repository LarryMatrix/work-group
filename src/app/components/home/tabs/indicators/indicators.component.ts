import { Component, OnInit } from '@angular/core';
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {Dhis2Service} from "../../../../shared/services/dhis2.service";

@Component({
  selector: 'app-indicators',
  templateUrl: './indicators.component.html',
  styleUrls: ['./indicators.component.scss']
})
export class IndicatorsComponent implements OnInit {
  destroy$ : Subject<boolean> = new Subject<boolean>();
  indicators : any[] = [];

  constructor(private dhisService: Dhis2Service) { }

  ngOnInit(): void {
    this.getIndicator()
  }

  getIndicator() {
    this.dhisService.getIndicators()
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        response => {
          this.indicators = response.indicators
          console.log('response:: ', response);
        }, error => {
          console.log('error:: ', error);
        }
      )
  }

}
