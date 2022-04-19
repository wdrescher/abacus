import { Component, Inject, Injector, OnInit } from '@angular/core';
import { TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { GalleryJoinTeamComponent } from './gallery-join-team/gallery-join-team.component';

@Component({
  selector: 'tattoo-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  private readonly dialog = this.dialogService.open<number>(
    new PolymorpheusComponent(GalleryJoinTeamComponent, this.injector),
    {
        data: 237,
        dismissible: true,
        label: 'Join Team',
    },
);
  constructor(
    @Inject(Injector) private injector: Injector,
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
  ) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.dialog.subscribe();
  }
}
