import { Injectable } from '@angular/core';
// Local imports
import { Person } from './person';
import { GIENIA } from './sample-genowefa';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  person = GIENIA;
  filledform = false;

  getPerson(): Person {
    return this.person;
  }

  inliner(): void { // TODO Some nice versatile inliner() - probably as a standalone component
    var phonestring1 = '<tr><td style="padding:0"><p style="font-family:Arial,Helvetica,sans-serif;margin:0">GSM:</p></td><td style="padding:0"><p style="font-family:Arial,Helvetica,sans-serif;margin:0"><a href="tel:+48 ';
    var phonestring2 = '" style="color:#324b9b;text-decoration:none">+48&nbsp;'
    var phonestring3 = '</a></p></td>'
    var phonestring : string;
    var titlestring : string;

    if (!this.person.phone) {phonestring = '';} else {
      phonestring = phonestring1 + this.person.phone + phonestring2 + this.person.phone.replace(/ /g, '&nbsp;') + phonestring3;
    }

    if (!this.person.title) {titlestring = '';} else {
      titlestring = this.person.title.replace(/ /g, '&nbsp;') + ' ';
    }

    this.person.inlinedsignature = '' + 
      '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"></head><body><table style="padding-bottom:10px"><tbody><tr><td style="width:220px"><a href="http://www.seth.software" style="display:block;text-align:center;text-decoration:none"><img src="http://seth.software/src/tree-logo.png" alt=""></a></td><td style="border-left:.4em solid #28ae7a;max-width:360px;padding-left:10px!important"><p style="color:#324b9b;font-family:Arial,Helvetica,sans-serif;font-size:.7em;letter-spacing:.1em;margin:0 .1em">Z poważaniem / Best regards</p><p style="color:#324b9b;font-family:Arial,Helvetica,sans-serif;font-size:1em;letter-spacing:.5em;margin:.1em;min-height:19px;min-width:380px;">' + titlestring + this.person.name.replace(/ /g, '&nbsp;') + '&nbsp;' + this.person.surname.replace(/-/g, '&#8209;') + '</p><p style="color:#324b9b;font-family:Arial,Helvetica,sans-serif;font-size:.7em;letter-spacing:.1em;margin:0 .1em">' + this.person.jobPL.replace(/ /g, '&nbsp;') + ' / ' + this.person.jobEN.replace(/ /g, '&nbsp;') + '</p><br><table><tbody><tr><td style="padding:0"><table style="color:#324b9b;font-size:.7em;letter-spacing:.1em;margin:0 .1em"><tbody><tr><td style="padding:0"><p style="font-family:Arial,Helvetica,sans-serif;margin:0">phone:</p></td><td style="padding:0"><p style="font-family:Arial,Helvetica,sans-serif;margin:0"><a href="tel:+48 17 784 2222" style="color:#324b9b;text-decoration:none">+48&nbsp;17&nbsp;784&nbsp;2222</a></p></td></tr>' + phonestring + '<tr><td style="padding:0"><p style="font-family:Arial,Helvetica,sans-serif;margin:0">email:</p></td><td style="padding:0"><p style="font-family:Arial,Helvetica,sans-serif;margin:0"><a href="mailto:' + this.person.user + '@seth.software" style="color:#324b9b;text-decoration:none">' + this.person.user.replace(/ /g, '') + '@seth.software</a></p></td></tr><tr><td colspan="2" style="padding:0"><p style="font-family:Arial,Helvetica,sans-serif;margin:0"><a href="http://www.seth.software" style="color:#324b9b;font-weight:900;text-decoration:none">www.seth.software</a></p></td></tr></tbody></table></td><td style="padding:0"><a href="https://www.linkedin.com/company/sethsoftware" style="text-decoration:none"><img src="http://seth.software/src/linkedin.png" style="float:right;margin:1px"></a><a href="https://www.facebook.com/sethsoftware/" style="text-decoration:none"><img src="http://seth.software/src/fb.png" style="float:right;margin:1px"></a></td></tr><tr><td style="padding:0"><p style="color:#28ae7a;font-family:Arial,Helvetica,sans-serif;font-size:.7em;font-style:italic;letter-spacing:0;margin:0 .1em">Firma przyjazna środowisku. Nie drukuj bez potrzeby.<br>Think green. Please consider the environment before printing.</p></td><td style="padding:0"><img src="http://seth.software/src/green-globe.png" alt=""></td></tr></tbody></table><p style="color:#324b9b;font-family:Arial,Helvetica,sans-serif;font-size:.6em;letter-spacing:.02em;margin:0">Seth&nbsp;Software Sp&nbsp;z&nbsp;o.&nbsp;o. z siedzibą: 36-060 Głogów Małopolski, ul.Strefowa 1, POLSKA, wpisana do rejestru przedsiębiorców prowadzonego przez Sąd&nbsp;Rejonowy w Rzeszowie, XII Wydział Gospodarczy<br>KRS&nbsp;0000114098 | NIP&nbsp;PL&nbsp;813&nbsp;27&nbsp;09&nbsp;001 | Kapitał&nbsp;zakładowy&nbsp;50&nbsp;000&nbsp;PLN</p></td></tr></tbody></table></body></html>'
  }

  genUsername(): string {
    var tpn = this.person.name;
    var tps = this.person.surname;
    var tpu = this.person.user;
    // For some reason ł needs to be targeted individually outside normalization - some people say that it is not diacritic
    tpn = tpn.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    tpn = tpn.replace(/\u0142/g, "l");                          // ł -> l replacer
    tpn = tpn.replace(/\u0141/g, "L");                          // capital Ł -> L replacer (uppercase)
    tps = tps.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    tps = tps.replace(/\u0142/g, "l");                          // ł -> l replacer
    tps = tps.replace(/\u0141/g, "L");                          // Ł -> L replacer (uppercase)
    if ( !this.person.surname ) {
      this.person.user =  tpu.replace(tpu, tpn).toLowerCase();
    } else { 
      tpu = tpu.replace(tpu, tpn.charAt(0) + tps).toLowerCase();
      this.person.user = tpu.replace(/ /g, '');
    }
    return this.person.user;
  }

  constructor() { }
}
