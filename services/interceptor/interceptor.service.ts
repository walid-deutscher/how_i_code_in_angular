import { Injectable } from '@angular/core';
import { HttpInterceptor ,HttpRequest  ,HttpHandler } from '@angular/common/http';
 import{ AuthService} from'../auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor( public authService:AuthService) { }

  intercept(req:HttpRequest<any>, next:HttpHandler){
    const token=this.authService.getToken();
    const newRequest=req.clone({

  headers:req.headers.set('Athorization','Bearer '+token)

    });
    return next.handle(newRequest);

  }
}
