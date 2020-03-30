import { Component,  OnInit } from '@angular/core';
import{ OfflinedataService} from '../services/offlinedata/offlinedata.service';
import{ LoggerService} from '../services/logger/logger.service';
import{Book } from '../intefaces/Book.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit {

  Books:any;


  constructor( public logger:LoggerService, public offlinedataService:OfflinedataService  ) {
 
 



  }

  public editBook1(){
    this.offlinedataService.editBook1({
      id: 0,
      nom: 'newBook',
      user_id:200 ,
      image_base64: 'https://c.pxhere.com/photos/30/d6/photographer_camera_lens_slr_photography_hands-1079029.jpg!d',
      Add_date: '10/03/2020',
    });
  }
  public removeBook1(){
    this.offlinedataService.removeBook1();

  }

  
ngOnInit(){

  this.offlinedataService.getBook().then(data=>{
    const Books= data;
    this.logger.log(data);
    alert(Books);
    this.Books=Books;

    });
 
}

onclick($event)     {

  // selement pour utiliser les notions de @output 
if($event===true){
  console.log(" Vous avez cliker sur  button (-_-)");

                  }
  

                      }
                      Book(index:number ,Book:Book ){
                        return Book.id ;
                      }

 
}
