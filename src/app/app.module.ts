/* Basic imports */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
/* Additional external imports */
import { NgxMaskModule } from 'ngx-mask';
/* Components */
import { GeneratorFormComponent } from './generator-form/generator-form.component';
import { SignaturePreviewComponent } from './signature-preview/signature-preview.component';
import { DeployYourSignatureComponent } from './deploy-your-signature/deploy-your-signature.component';
/* Pipes */
import { NonBreakableSpacePipe } from './non-breakable-space.pipe';
import { NonBreakableHyphenPipe } from './non-breakable-hyphen.pipe';
import { GenerateUsernamePipe } from './generate-username.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GeneratorFormComponent,
    SignaturePreviewComponent,
    NonBreakableSpacePipe,
    NonBreakableHyphenPipe,
    GenerateUsernamePipe,
    DeployYourSignatureComponent,
  ],
  imports: [
    BrowserModule,
    NgxMaskModule.forRoot(),
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
