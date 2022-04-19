import { Component, Inject, OnInit } from '@angular/core';

import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';
import { TuiDialogContext } from '@taiga-ui/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { GalleryService } from '../gallery.service';
import { Router } from '@angular/router';
import { AppState } from 'src/app/app.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { TuiValidationError } from '@taiga-ui/cdk';

@Component({
  selector: 'tatoo-gallery-join-team',
  templateUrl: './gallery-join-team.component.html',
  styleUrls: ['./gallery-join-team.component.scss']
})
export class GalleryJoinTeamComponent implements OnInit {
  formGroup: FormGroup;

  constructor(
    @Inject(POLYMORPHEUS_CONTEXT) private readonly context: TuiDialogContext<boolean>,
    @Inject(GalleryService) private readonly galleryService: GalleryService,
    private readonly formBuilder: FormBuilder, 
    private readonly router: Router
  ) { }

  joinError = new TuiValidationError("Could not join team");
  hitError: boolean = false;
  isLoading: boolean = false; 

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      'referral': ["", [Validators.required, Validators.min(1)]]
    });
  }

  ok() {
    this.context.completeWith(true);
  }

  cancel() {
    this.context.completeWith(false);
  }

  error(): void {
    this.hitError = true; 
    setTimeout(() => this.hitError = false, 500)
  }

  submit(): void {
    if (this.formGroup.valid) {
      this.isLoading = true;
      const teamId: number = this.formGroup.controls['referral'].value;
      this.galleryService.attemptJoinTeam(teamId).subscribe(
        (res) => {
          this.context.completeWith(true);
          this.router.navigateByUrl(AppState.GALLERY);
        },
        (err: HttpErrorResponse) => {
          this.error();
          this.isLoading = false;
        }, 
        () => {
          this.isLoading = false;
        }
      )
    }
  } 

  get computedError(): TuiValidationError | null {
    return this.hitError ? this.joinError : null;
  }
}
