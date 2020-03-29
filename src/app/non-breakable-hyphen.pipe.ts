import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nonBreakableHyphen'
})
export class NonBreakableHyphenPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/-/g, '‑');
  }

}
