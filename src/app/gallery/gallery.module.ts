import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { TuiInputModule, TuiIslandModule } from '@taiga-ui/kit';
import { GalleryJoinTeamComponent } from './gallery-join-team/gallery-join-team.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GalleryTeamComponent } from './gallery-team/gallery-team.component';
import { GalleryCoachComponent } from './gallery-coach/gallery-coach.component';
import { WeeklyDashboardComponent } from './weekly-dashboard/weekly-dashboard.component';

@NgModule({
  entryComponents: [
    GalleryJoinTeamComponent
  ],
  declarations: [
    GalleryComponent,
    GalleryJoinTeamComponent,
    GalleryTeamComponent,
    GalleryCoachComponent,
    WeeklyDashboardComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule, 
    TuiIslandModule,
    TuiButtonModule, 
    ReactiveFormsModule, 
    TuiInputModule, 
    TuiGroupModule,
    TuiErrorModule, 
    TuiTableModule
  ]
})
export class GalleryModule { }
