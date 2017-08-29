import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { ContentHeadComponent } from './content-head/content-head.component';
import { ContentBidComponent } from './content-bid/content-bid.component';
import { ContentSummaryComponent } from './content-summary/content-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ContentComponent,
    ContentHeadComponent,
    ContentBidComponent,
    ContentSummaryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
