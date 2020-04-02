/* Basic imports */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
/* Additional external imports */
import { FormsModule } from '@angular/forms';
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
    FormsModule,
    NgxMaskModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
