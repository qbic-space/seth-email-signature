import { Component, OnInit, SimpleChanges } from '@angular/core';
import { GIENIA } from '../sample-genowefa';
import { STRINGS } from '../signaturestrings';
import { GenerateUsernamePipe } from '../generate-username.pipe';
import { concat } from 'rxjs';

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
    this.inlinedsignature = STRINGS.str1 + this.person.name + ' ' + this.person.surname + STRINGS.str2 + 
                            this.person.jobPL + ' / ' + this.person.jobEN + STRINGS.str3 + 
                            this.person.phone + STRINGS.str4 + this.person.phone + STRINGS.str5 + 
                            this.person.user + STRINGS.str6 + this.person.user + STRINGS.str7;
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

  // Something's wrong here:
  phoneMask(): void {
    var tpp = this.person.phone;
    this.person.phone = tpp.replace(tpp, tpp[0].concat(tpp[1], tpp[2], ' ', tpp[3], tpp[4], tpp[5], ' ', tpp[6], tpp[7], tpp[8]));
    console.log(this.person.phone);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
