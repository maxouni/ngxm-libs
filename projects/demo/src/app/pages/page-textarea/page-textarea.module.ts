import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageTextareaRoutingModule } from './page-textarea-routing.module';
import { PageTextareaComponent } from './page-textarea.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxmTextareaModule } from '../../../../../ngxm-textarea/src/lib/ngxm-textarea.module';

@NgModule({
  declarations: [PageTextareaComponent],
  imports: [
    CommonModule,
    PageTextareaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxmTextareaModule,
  ],
})
export class PageTextareaModule {}
