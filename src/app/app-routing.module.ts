import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FeedComponent } from "./feed/feed.component";

const routes: Routes = [
  { path: 'feed', component: FeedComponent },
  { path: '', pathMatch: 'full', redirectTo: 'feed' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
