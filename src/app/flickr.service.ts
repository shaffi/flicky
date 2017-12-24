import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class FlickrService {
  constructor(private httpClient: HttpClient) {

  }
  getFlickrFeed() {
    return this.httpClient.jsonp(
      'https://api.flickr.com/services/feeds/photos_public.gne?tags=christmas&tagmode=all&format=json',
      'jsoncallback'
    );
  }

}
