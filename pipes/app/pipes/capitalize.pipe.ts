import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    if (typeof value == 'string') {
      return value
        .split(' ')
        .map(
          (palabra) => palabra[0].toUpperCase() + palabra.slice(1).toLowerCase()
        ).join(' ');
    }
  }
}
