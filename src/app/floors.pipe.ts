import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'floors'
})
export class FloorsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
