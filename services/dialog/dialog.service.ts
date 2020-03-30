import { Injectable, Optional } from '@angular/core';
import{LoadingController, ToastController} from'@ionic/angular';
import{ InjectService} from'../inject/inject.service'

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  LoadingControllerchild:any;

  constructor(public toastController:ToastController, public loadingController:LoadingController ,@Optional() public injectService:InjectService ) { }



  async Loadingcontroller(msg:string){
    this.LoadingControllerchild= await this.loadingController.create({

message:msg

    })

  }

  ShowloadingController(){
    this.LoadingControllerchild.present();
  }
  HideloadingController(){
    this.LoadingControllerchild.dismiss();
  }
  async ShowtoastController(msg:string , duration:number){
    const toast= await this.toastController.create({
      message:msg ,
      duration:duration ,
      position:"bottom"
    })
    toast.present();
  }
  Confirm(msg:string){
    return this.injectService.getWindows().confirm(msg);
  }
}
