import { Component, OnInit } from '@angular/core';
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {Dhis2Service} from "../../../../shared/services/dhis2.service";

@Component({
  selector: 'app-data-elements',
  templateUrl: './data-elements.component.html',
  styleUrls: ['./data-elements.component.scss']
})
export class DataElementsComponent implements OnInit {

  destroy$ : Subject<boolean> = new Subject<boolean>();
  dataElements : any[] = [];

  constructor(private dhisService: Dhis2Service) { }

  ngOnInit(): void {
    this.getElements()
  }

  getElements() {
    this.dhisService.getDataElements()
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        response => {
          this.dataElements = response.dataElements
          console.log('response:: ', response);
        }, error => {
          console.log('error:: ', error);
        }
      )
  }

}
