import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryCoachComponent } from './gallery-coach/gallery-coach.component';
import { GalleryTeamComponent } from './gallery-team/gallery-team.component';

import { TeamGuard } from './guards/team.guard';
import { GalleryComponent } from './gallery.component';
import { GalleryGuard } from './guards/gallery.guard';
import { CoachGuard } from './guards/coach.guard';

const routes: Routes = [
  { path: "", component: GalleryComponent, canActivate: [GalleryGuard], },
  { path: "team", component: GalleryTeamComponent, canActivate: [TeamGuard] }, 
  { path: "coach", component: GalleryCoachComponent, canActivate: [CoachGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }
