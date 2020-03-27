import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-signature-preview',
  templateUrl: './signature-preview.component.html',
  styleUrls: ['./signature-preview.component.css']
})
export class SignaturePreviewComponent implements OnInit {

  @Input() person: Person;

  constructor() { }

  ngOnInit(): void {
  }

}
