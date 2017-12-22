import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { Post } from "../../model/post";
import { FlickrService } from "../../flickr.service";
@Component({
  selector: "app-postdetail",
  templateUrl: "./postdetail.component.html",
  styleUrls: ["./postdetail.component.scss"]
})
export class PostdetailComponent implements OnInit {
  post: Post = {};
  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private flickrService: FlickrService
  ) {}

  ngOnInit() {
    this.getPost();
  }
  getPost() {
    this.flickrService.getFlickrFeed().subscribe(data => {
      console.log(data);
      const feed = data && data["items"].length ? data["items"] : [];
      const index = this.route.snapshot.paramMap.get("idx");
      console.log(index);
      this.post = feed[index];
    });
  }
  goBack(): void {
    this.location.back();
  }
}
