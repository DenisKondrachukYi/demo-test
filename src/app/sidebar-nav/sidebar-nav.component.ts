import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Intercom } from 'ng-intercom';

@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.scss']
})

export class SidebarNavComponent implements OnInit {
  public counter = 0;
  public counterLoader;

  constructor(public intercom: Intercom, private ref: ChangeDetectorRef) {}

  ngOnInit() {
    this.counterLoader = false;
    this.intercom.onUnreadCountChange((count) => {
      this.counter = count;
      this.counterLoader = true;
      this.ref.detectChanges();
    });
  }
}
