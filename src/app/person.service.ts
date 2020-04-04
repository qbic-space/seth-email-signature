import { Injectable } from '@angular/core';
// Local imports
import { Person } from './person';
import { GIENIA } from './sample-genowefa';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  getPerson(): Person {
    return GIENIA;
  }

  constructor() { }
}
