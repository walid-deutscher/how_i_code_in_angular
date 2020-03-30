import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberx2'
})
export class PipePipe implements PipeTransform {

  transform(value: number): any {
    return value*2;
  }

}
