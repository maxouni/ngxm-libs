import { NgModule } from '@angular/core';
import { NgxmInputComponent } from './ngxm-input.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxmInputService } from './ngxm-input.service';

@NgModule({
  declarations: [NgxmInputComponent],
  imports: [CommonModule, BrowserAnimationsModule],
  exports: [NgxmInputComponent],
  providers: [NgxmInputService],
})
export class NgxmInputModule {}
