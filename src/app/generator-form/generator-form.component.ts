import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { Person } from '../person';

@Component({
  selector: 'app-generator-form',
  templateUrl: './generator-form.component.html',
  styleUrls: ['./generator-form.component.css']
})
export class GeneratorFormComponent implements OnInit {

  person: Person;

  getPerson(): void {this.person = this.personService.getPerson();}
  genUsername(): void {this.person.user = this.personService.genUsername();}
  onSubmit() {
    this.personService.inliner();
  };
  
  constructor(private personService: PersonService) {}
  
  ngOnInit(): void {this.getPerson();}
  
}
