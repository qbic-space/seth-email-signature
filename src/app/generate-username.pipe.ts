import { Pipe, PipeTransform } from '@angular/core';
import { Person } from './person';
import { GIENIA } from './sample-genowefa';

@Pipe({
  name: 'generateUsername'
})
export class GenerateUsernamePipe implements PipeTransform {

  // TODO Send username to the model with this pipe -> remove genUsername() function in generator-form component

  transform( value: string, nameStr: string, surnameStr: string ): string {
    if ( !surnameStr ) {
      return value.replace(value, nameStr);
    }
    return value.replace(value, nameStr.charAt(0) + surnameStr);
  }

}
