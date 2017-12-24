import { Component, OnInit } from "@angular/core";
import { FlickrService } from "../flickr.service";
import { Observable } from "rxjs/Observable";
import { Post } from "../model/post";
@Component({
  selector: "app-feed",
  templateUrl: "./feed.component.html",
  styleUrls: ["./feed.component.scss"]
})
export class FeedComponent implements OnInit {
  feed = new Array();
  constructor(private flickrService: FlickrService) {}

  ngOnInit() {
    this.flickrService.getFlickrFeed().subscribe(data => {
      console.log(data);
      this.feed = data && data['items'].length ? data['items'] : [];
    });
  }
}
