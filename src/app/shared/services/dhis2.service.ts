import {HttpClient} from "@angular/common/http";
import { Injectable } from '@angular/core';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class Dhis2Service {

  constructor(private http: HttpClient) {

  }

  public getIndicators() {
    return this.http.get<any>('/api/indicators.json').pipe(
      map(
        (response: any) => {
          return response
        }
      )
    )
  }

  public getDataElements() {
    return this.http.get<any>('/api/dataElements.json').pipe(
      map(
        (response: any) => {
          return response
        }
      )
    )
  }

  public getOrgUnits() {
    return this.http.get<any>('/api/organisationUnits.json').pipe(
      map(
        (response: any) => {
          return response
        }
      )
    )
  }


}
