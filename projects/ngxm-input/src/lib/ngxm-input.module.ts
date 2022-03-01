import { NgModule } from '@angular/core';
import { NgxmInputComponent } from './ngxm-input.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [NgxmInputComponent],
  imports: [CommonModule, BrowserAnimationsModule],
  exports: [NgxmInputComponent],
})
export class NgxmInputModule {}
