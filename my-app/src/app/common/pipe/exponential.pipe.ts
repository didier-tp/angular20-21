import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponential'
})
export class ExponentialPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let val : number = <number> value;
    let p : number = <number> args[0] || 1;
    return Math.pow(val,p);
  }

}
