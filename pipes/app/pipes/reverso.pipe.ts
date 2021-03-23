import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverso'
})
export class ReversoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    
    if(typeof value =='string'){
      return value.split(' ').reverse().join(' ');
    }
  }

}
