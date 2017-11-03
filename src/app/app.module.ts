import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IntercomModule } from 'ng-intercom';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { ContentHeadComponent } from './content-head/content-head.component';
import { ContentBidComponent } from './content-bid/content-bid.component';
import { ContentSummaryComponent } from './content-summary/content-summary.component';
import { SidebarNavComponent } from './sidebar-nav/sidebar-nav.component';
import { SidebarUserComponent } from './sidebar-user/sidebar-user.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ContentComponent,
    ContentHeadComponent,
    ContentBidComponent,
    ContentSummaryComponent,
    SidebarNavComponent,
    SidebarUserComponent
  ],
  imports: [
    BrowserModule,
    IntercomModule.forRoot({ appId: 'c0p69llg' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
