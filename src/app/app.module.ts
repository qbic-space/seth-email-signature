/* Basic imports */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
/* Additional imports from @angular */
import { FormsModule } from '@angular/forms';
/* Components */
import { GeneratorFormComponent } from './generator-form/generator-form.component';
import { SignaturePreviewComponent } from './signature-preview/signature-preview.component';
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
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
