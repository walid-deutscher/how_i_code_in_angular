import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OfflinedataService {

  // j ai fais selement pour   les pages 
 
  public Books = [
    {

      id: 1,
      nom: 'Book1',
      user_id:20 ,
      image_base64: 'https://c.pxhere.com/photos/30/d6/photographer_camera_lens_slr_photography_hands-1079029.jpg!d',
      Add_date: '10/03/2020',
    },
    {
     
      id: 2,
      nom: 'Book2',
      user_id:22 ,
      image_base64: 'https://c.pxhere.com/photos/30/d6/photographer_camera_lens_slr_photography_hands-1079029.jpg!d',
      Add_date: '12/03/2020',
    },
      {
    id: 3,
    nom: 'Book3',
    user_id:20 ,
    image_base64: 'https://c.pxhere.com/photos/30/d6/photographer_camera_lens_slr_photography_hands-1079029.jpg!d',
    Add_date: '11/03/2020',
  }
    
  ];
  

  constructor() { }


   public getBook(){return Promise.resolve(this.Books) }
   public getBook1(){ return Promise.resolve( {id: 1,nom: 'Book1',user_id:20 ,image_base64: 'https://c.pxhere.com/photos/30/d6/photographer_camera_lens_slr_photography_hands-1079029.jpg!d', Add_date: '10/03/2020',})}
   public removeBook1(){this.Books.pop();return Promise.resolve(this.Books);}
   public editBook1(book:any){this.removeBook1();this.Books.push(book);}


}
