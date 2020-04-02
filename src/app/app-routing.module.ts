import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneratorFormComponent } from './generator-form/generator-form.component';
import { DeployYourSignatureComponent } from './deploy-your-signature/deploy-your-signature.component';

const routes: Routes = [
  { path: '', redirectTo: '/generator', pathMatch: 'full' },
  { path: 'generator', component: GeneratorFormComponent },
  { path: 'deployer', component: DeployYourSignatureComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
