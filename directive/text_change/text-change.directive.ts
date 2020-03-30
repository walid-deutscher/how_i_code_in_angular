import { Directive  ,ElementRef ,HostListener} from '@angular/core';

@Directive({
  selector: '[appTextChange]'
})
export class TextChangeDirective {

  constructor(public Element:ElementRef) { 

    this.Element.nativeElement.innerText="walid mohamed" ;

  }
  @HostListener('mouseleave') onMouseLeaver(){
    this.Element.nativeElement.stylebackgroundColor="green"
  }

}
