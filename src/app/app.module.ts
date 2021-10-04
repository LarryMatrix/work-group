import {CommonModule} from "@angular/common";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import { HomeComponent } from './components/home/home.component';
import { IndicatorsComponent } from './components/home/tabs/indicators/indicators.component';
import { DataElementsComponent } from './components/home/tabs/data-elements/data-elements.component';
import { OrgUnitsComponent } from './components/home/tabs/org-units/org-units.component';
import {HttpInterceptorService} from "./shared/interceptors/http.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IndicatorsComponent,
    DataElementsComponent,
    OrgUnitsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
