import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { FlickrService  } from './flickr.service';
import {  HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FeedComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    RouterModule
  ],
  providers: [FlickrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
