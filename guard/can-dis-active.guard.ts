import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import{ AuthService}from '../services/auth/auth.service';
 
@Injectable({
  providedIn: 'root'
})
export class CanDisActiveGuard implements CanActivate {

  constructor( public authService:AuthService  ){
    
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


      if(!this.authService.isAuth_no_secure_way()){

        return true;

      }

      else{
       // navigate to no login page
        return false ;
        
      }
  }
  
}
