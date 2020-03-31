import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeployYourSignatureComponent } from './deploy-your-signature.component';

describe('DeployYourSignatureComponent', () => {
  let component: DeployYourSignatureComponent;
  let fixture: ComponentFixture<DeployYourSignatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeployYourSignatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeployYourSignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
