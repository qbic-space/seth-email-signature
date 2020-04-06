import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneratorFormComponent } from './generator-form/generator-form.component';
import { DeployYourSignatureComponent } from './deploy-your-signature/deploy-your-signature.component';
import { EmptyFormGuard } from './empty-form.guard';

const routes: Routes = [
  { path: '',
   redirectTo: '/generator', 
   pathMatch: 'full' 
  },
  { 
    path: 'generator', 
    component: GeneratorFormComponent,
  },
  {
    path: 'deployer', 
    component: DeployYourSignatureComponent,
    canActivate: [EmptyFormGuard]
  }
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
