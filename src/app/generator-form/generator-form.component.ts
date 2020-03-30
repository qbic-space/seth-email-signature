import { Component, OnInit, SimpleChanges } from '@angular/core';
import { GIENIA } from '../sample-genowefa';
import { STRINGS } from '../signaturestrings';
import { GenerateUsernamePipe } from '../generate-username.pipe';

@Component({
  selector: 'app-generator-form',
  templateUrl: './generator-form.component.html',
  styleUrls: ['./generator-form.component.css']
})
export class GeneratorFormComponent implements OnInit {



  person = GIENIA;
  inlinedsignature : string;
  signaturestrings = STRINGS;

  inliner(): string {
    this.inlinedsignature = STRINGS.str1 + this.person.name + ' ' + this.person.surname;
    console.log(this.inlinedsignature);
    return this.inlinedsignature;
  }

  checker(): void {
    console.log(this.person.user);
  }

  genUsername(): void {
    var tpn = this.person.name;
    var tps = this.person.surname;
    var tpu = this.person.user;

    if ( !this.person.surname ) {
      this.person.user =  tpu.replace(tpu, tpn).toLowerCase();
    } else { 
      this.person.user = tpu.replace(tpu, tpn.charAt(0) + tps).toLowerCase();
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
