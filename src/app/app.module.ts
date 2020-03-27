import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { GeneratorFormComponent } from './generator-form/generator-form.component';
import { SignaturePreviewComponent } from './signature-preview/signature-preview.component';



@NgModule({
  declarations: [
    AppComponent,
    GeneratorFormComponent,
    SignaturePreviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
