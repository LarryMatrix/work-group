import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {DataElementsComponent} from "./components/home/tabs/data-elements/data-elements.component";
import {IndicatorsComponent} from "./components/home/tabs/indicators/indicators.component";
import {OrgUnitsComponent} from "./components/home/tabs/org-units/org-units.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'indicators',
        pathMatch: 'full',
      },
      {
        path: 'indicators',
        component: IndicatorsComponent,
        pathMatch: 'full',
      },
      {
        path: 'data-elements',
        component: DataElementsComponent,
        pathMatch: 'full',
      },
      {
        path: 'org-units',
        component: OrgUnitsComponent,
        pathMatch: 'full',
      }
    ]
  },
  {
    path: '*',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
