import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";

@Injectable()
export class FlickrService {
  _searchQuery = 'potato';
  constructor(private httpClient: HttpClient) {}
  getFlickrFeed() {
    return this.httpClient.jsonp(
      `https://api.flickr.com/services/feeds/photos_public.gne?tags=${this._searchQuery}&tagmode=all&format=json`,
      "jsoncallback"
    );
  }

  public get searchQuery(): string {
    return this._searchQuery;
  }

  public set searchQuery(query: string) {
    this._searchQuery = query || 'potato';
  }
}
