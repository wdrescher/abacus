import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Inject, Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppState, Role } from 'src/app/app.interface';
import { UserStateService } from 'src/app/services/user-state.service';

@Injectable({
  providedIn: 'root'
})
export class GalleryGuard implements CanActivate {
  constructor(
    @Inject(UserStateService) private readonly userStateService: UserStateService, 
    @Inject(Router) private readonly router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.userStateService.teamId) {
        this.router.navigateByUrl(this.userStateService.role === Role.COACH || this.userStateService.role === Role.EBOARD ? AppState.GALLERY__COACH : AppState.GALLERY__TEAM)
      }
      else {
        return true;
      }
  }
  
}
