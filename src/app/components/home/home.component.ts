import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tabId: any = 'indicator';

  constructor() { }
  ngOnInit(): void {
  }

  clickURI(uri: string) {
    this.tabId = uri
  }

}
