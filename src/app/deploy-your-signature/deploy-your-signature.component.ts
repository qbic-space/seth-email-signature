import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-deploy-your-signature',
  templateUrl: './deploy-your-signature.component.html',
  styleUrls: ['./deploy-your-signature.component.css']
})
export class DeployYourSignatureComponent implements OnInit {

  @Input() inlinedsignature : string;

  constructor() { }

  ngOnInit(): void {
  }

}
