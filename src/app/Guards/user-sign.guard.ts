import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../Components/user/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserSignGuard implements CanActivate {
  constructor(private route :Router , private user:UserService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.user.userValue == null)
      return true;
      else{
        this.route.navigate(["/Home"])
        return false;
      }
  }

}
