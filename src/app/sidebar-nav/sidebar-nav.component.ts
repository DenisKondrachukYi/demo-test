import { Component, OnInit } from '@angular/core';
import { Intercom } from 'ng-intercom';

@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.scss']
})

export class SidebarNavComponent implements OnInit {
  counter;

  constructor(public intercom: Intercom) {}

  ngOnInit() {
   this.intercom.onUnreadCountChange((count) => {
      this.counter = count;
      console.log('Unread Messages ' + this.counter);
    });
  }
}
