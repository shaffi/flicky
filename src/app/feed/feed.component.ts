import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy
} from '@angular/core';
import { FlickrService } from '../flickr.service';
import { Post } from '../model/post';

import { Observable } from 'rxjs/Observable';

import { Subscription } from 'rxjs/Subscription';

import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit, AfterViewInit, OnDestroy {
  feed = new Array();
  searchSubscription: Subscription;
  @ViewChild('searchinput') searchInput: ElementRef;

  constructor(public flickrService: FlickrService) {}

  ngOnInit() {
    this.flickrService.getFlickrFeed().subscribe(data => {
      this.feed = data && data['items'].length ? data['items'] : [];
    });
  }
  ngAfterViewInit() {
    this.searchSubscription = Observable.fromEvent(
      this.searchInput.nativeElement,'keyup')
      .map((e: any) => e.target.value)
      .debounceTime(400)
      .concat()
      .distinctUntilChanged()
      .filter((query: string) => query.length > 0)
      .switchMap((query: string) => {
        this.flickrService.searchQuery = query;
        return this.flickrService.getFlickrFeed();
      })
      .subscribe(results => {
        this.feed = results && results['items'].length ? results['items'] : [];
      });
  }
  ngOnDestroy() {
    this.searchSubscription.unsubscribe();
  }
}
