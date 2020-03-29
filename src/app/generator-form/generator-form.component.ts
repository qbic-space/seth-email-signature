import { Component, OnInit } from '@angular/core';
import { GIENIA } from '../sample-genowefa';

@Component({
  selector: 'app-generator-form',
  templateUrl: './generator-form.component.html',
  styleUrls: ['./generator-form.component.css']
})
export class GeneratorFormComponent implements OnInit {

  person = GIENIA;

  constructor() { }

  ngOnInit(): void {
  }

}
