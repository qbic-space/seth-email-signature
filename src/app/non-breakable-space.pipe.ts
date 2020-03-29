import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nonBreakableSpace'
})
export class NonBreakableSpacePipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/ /g, '\xa0');
  }

}
