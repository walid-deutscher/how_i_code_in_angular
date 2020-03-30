import { Injectable, Optional } from '@angular/core';
import{ User } from'../../intefaces/User.interface' ;
import{ HttpClient} from'@angular/common/http' ;
import{InjectService} from'../inject/inject.service';
import{ LoggerService} from'../logger/logger.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl="http://localhost:3000";
  constructor(   public injectService:InjectService ,private http :HttpClient ,  @Optional() public logger?:LoggerService ) {

 

   }


   
  public  singup(New_user:User){

    return new Promise((resolve,reject)=>{

      this.http.post(this.baseUrl+'/singup',New_user).subscribe(response=>{

       resolve(response)

      },Errors=>{
        reject(Errors)
      } ).unsubscribe()



    })



  }




  public login(  userlogin:User){

    return new Promise ((resolve,reject)=>{

   this.http.post<any>(this.baseUrl+'/login',userlogin).subscribe(response=>{
      this.injectService.getStorage().setItem('token',response.token);
      this.injectService.getStorage().setItem('userId',response.token);

      this.logger.log("Connected !") ;
    resolve(true)
    
   },Errors=>{

    reject(Errors)
   }).unsubscribe()
    })

  }

  public logout(){

  return new Promise((resolve,reject)=>{

 this.http.post(this.baseUrl+'/logout',null).subscribe(
   Response=>{
     this.injectService.getStorage().clear();
     this.logger.log("Diconnected !") ;
     resolve(true)
   },
   Errors=>{
     reject(Errors)
   }



 ).unsubscribe()


  })   
  }

 public verfier_token( token:string){
 return new Promise((resolve,reject)=>{
this.http.get<any>(this.baseUrl+"/token/"+token).subscribe(response=>{

  resolve(true)
}, Error=>{
   this.injectService.getStorage().clear();
   this.logger.logError("....What happen you want harck me !") ;
   resolve(false)

}).unsubscribe()

 })

 }
 /****deux methode pour  verfier authentification */

/******************start********** */
 isAuth_secure_way():boolean{

   this.verfier_token(this.getToken());
   if(this.getToken()!==null){return true;}
   else{return false  }

 }
 
 isAuth_no_secure_way():boolean{
  if(this.injectService.getStorage().getItem('token')){return true;}
  else{return false  }

}

/******************end********** */
/********************************************* */
 getToken():string{
 const token=this.injectService.getStorage().getItem('token');
 if(token){
  return token ;
 }

 else{
    return null;
 }
 }

 getUserId():string{
  const userId=this.injectService.getStorage().getItem('userId');
  if(userId){ return userId;}
  else{  return null;}
  }


}
