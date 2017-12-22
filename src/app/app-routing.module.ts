import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FeedComponent } from "./feed/feed.component";
import { PostdetailComponent } from "./feed/postdetail/postdetail.component";

const routes: Routes = [
  { path: 'feed', component: FeedComponent },
  { path: '', pathMatch: 'full', redirectTo: 'feed' },
  { path: 'postdetail/:idx', component: PostdetailComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
