import { Inject, Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserStateService } from 'src/app/services/user-state.service';

@Injectable({
  providedIn: 'root'
})
export class TeamGuard implements CanActivate {
  constructor(
    @Inject(UserStateService) private readonly userStateService: UserStateService
  ){ }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return !!this.userStateService.teamId;
  }
  
}
