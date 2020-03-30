import { Injectable } from '@angular/core';
import{ environment }  from '../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }
  log(msg:any){

    if(!environment.production){
  console.log(msg);

    }
  }
  logError(msg:any){
    if(!environment.production){
      console.log(msg);

    }

  }
  
}




