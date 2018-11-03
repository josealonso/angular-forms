import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DemoFormSkuComponent } from './demo-form-sku/demo-form-sku.component';
import { FormsDemoApp } from './app.component';

@NgModule({
  declarations: [
    FormsDemoApp,
    DemoFormSkuComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [FormsDemoApp]
})
export class FormsDemoAppModule { }
