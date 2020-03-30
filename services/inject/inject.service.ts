import { Injectable , Inject , InjectionToken} from '@angular/core';
 
export const BROWSER_STORAGE= new  InjectionToken<Storage>('Browser Storage' ,{
  providedIn:'root',
  factory:()=>localStorage


})

export const BROWSER_WINDWOS= new InjectionToken<Window>('Browser Windwos',{

  providedIn:'root',
  factory:()=>window
})

@Injectable({
  providedIn: 'root'
})
export class InjectService {

  constructor( @Inject(BROWSER_WINDWOS) public windows:Window , @Inject(BROWSER_STORAGE) public storage:Storage) { }


  public  getStorage():Storage{
   
     return this.storage;


  }

  public getWindows():Window
  {
      return this.windows
  }
}

 
 