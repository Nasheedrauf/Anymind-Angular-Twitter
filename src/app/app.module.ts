import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TweetConatinerComponent } from './tweetcontainer/tweetcontainer.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SearchPipe } from './pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { TweetsComponent } from './tweets/tweets.component';
@NgModule({
  declarations: [
    AppComponent,
    TweetConatinerComponent,
    SearchPipe,
    TweetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: crossOriginInterceptor, multi: true }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
