import { Injectable } from '@angular/core';
import{Book} from '../../intefaces/Book.interface' ;

@Injectable({
  providedIn: 'root'
})
export class TrackbyService {

  constructor() { }

  Book(index:number ,Book:Book ){
    return Book.id ;
  }
}
