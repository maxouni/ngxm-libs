import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageInputRoutingModule } from './page-input-routing.module';
import { PageInputComponent } from './page-input.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxmInputModule } from "../../../../../ngxm-input/src/lib/ngxm-input.module";


@NgModule({
  declarations: [
    PageInputComponent
  ],
  imports: [
    CommonModule,
    PageInputRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxmInputModule
  ]
})
export class PageInputModule { }
