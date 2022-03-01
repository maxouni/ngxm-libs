import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgxmInputModule } from '../../../ngxm-input/src/lib/ngxm-input.module';

@NgModule({
  declarations: [AppComponent],
    imports: [BrowserModule, ReactiveFormsModule, NgxmInputModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
