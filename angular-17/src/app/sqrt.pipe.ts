import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sqrt',
  standalone: true
})
export class SqrtPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number {
    return value*value;
  }
}
