import { Injectable } from '@angular/core';
import{Book} from'../../intefaces/Book.interface'
import{HttpClient,HttpErrorResponse} from'@angular/common/http'
 import{map} from'rxjs/operators'
 
@Injectable({
  providedIn: 'root'
})
export class DataService {

  Books:Book[]
  baseUrl="http://localhost:3000";
  constructor( private http:HttpClient) { }
  getBooks(){
     return new Promise((resolve ,reject)=>{
      this.http.get<Book>(this.baseUrl+'/Books')

      
      .subscribe(response=>{resolve(response)} , Errors=>{ reject(Errors);
      }) 
     })
   }
  
     createBook(Book:Book)
   {
     return new Promise((resolve, reject)=>{
      this.http.post<Book[]>(this.baseUrl+'/Book',Book).subscribe(response=>{
      resolve(response);
        }, Errors=>{
       reject(Errors);
     }).unsubscribe()


     })
   }

    editBook(Book:Book):Promise<any>{
   return new Promise((resolve,reject)=>{
   this.http.put<Book[]>(this.baseUrl+'/Book', Book).subscribe(
   (Response)=>{
   resolve(Response)
   }
     , Errors=>{
    reject(Errors)
}


) 

   })


   }

   deleteBook(id:number){
   return new Promise((reject , resolve)=>{
   this.http.delete(this.baseUrl+'/Book/'+id).subscribe(
  (response)=>
  resolve(response)
      ,Errors=>{
         reject(Error)
      }).unsubscribe()
     })
   }
     getBookByid(id:number){
     return new Promise((resolve,reject)=>{
      this.http.get<Book[]>(this.baseUrl+'/Book/'+id).subscribe(
      reponse=> resolve(reponse)
       ,Errors=>{ reject(Errors)}) 
     })

   }

    searchBooks(char:string)
   {
     return new Promise((resolve, reject)=>{
     this.http.get<Book[]>(this.baseUrl+'/Book/sreach/'+char).subscribe(
     response=>{resolve(response) } , Errors=>{reject(Errors);
    }) 
    })
    
   }


}