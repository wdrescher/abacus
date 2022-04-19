import { Inject, Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, RouterPreloader } from '@angular/router';
import { Observable } from 'rxjs';
import { Role } from 'src/app/app.interface';
import { UserStateService } from 'src/app/services/user-state.service';

@Injectable({
  providedIn: 'root'
})
export class CoachGuard implements CanActivate {
  constructor(
    @Inject(UserStateService) private readonly userStateService: UserStateService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.userStateService.role === Role.COACH || this.userStateService.role === Role.EBOARD;
  }
  
}
