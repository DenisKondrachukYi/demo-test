import { Component, OnInit } from '@angular/core';
import { Intercom } from 'ng-intercom';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(public intercom: Intercom) { }

  ngOnInit() {
    this.intercom.boot({
      custom_launcher_selector: '.intercom-custom',
      hide_default_launcher: true
    });
  }
}
