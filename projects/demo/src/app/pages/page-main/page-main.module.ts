import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageMainRoutingModule } from './page-main-routing.module';
import { PageMainComponent } from './page-main.component';


@NgModule({
  declarations: [
    PageMainComponent
  ],
  imports: [
    CommonModule,
    PageMainRoutingModule
  ]
})
export class PageMainModule { }
