import { Component } from '@angular/core';
import { FlickrService  } from './flickr.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  feed;
  constructor(private flickrService: FlickrService) {
    this.feed = this.flickrService.getFlickrFeed().subscribe(d => {
      console.log(d);
    });

  }
}
