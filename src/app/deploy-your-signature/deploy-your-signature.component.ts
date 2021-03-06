import { Component, OnInit, Input } from '@angular/core';
import { PersonService } from '../person.service';
import { Person } from '../person';
import { faStepBackward, faDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-deploy-your-signature',
  templateUrl: './deploy-your-signature.component.html',
  styleUrls: ['./deploy-your-signature.component.css']
})
export class DeployYourSignatureComponent implements OnInit {

  faStepBackward = faStepBackward;
  faDownload = faDownload;

  @Input() inlinedsignature : string;

  person: Person;

  getPerson(): void {this.person = this.personService.getPerson();}
  inlinePerson(): void {this.personService.inliner();}

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.getPerson();
    this.inlinePerson();
  }

}
