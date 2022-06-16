import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageInputComponent } from './page-input.component';

const routes: Routes = [
  {
    path: '',
    component: PageInputComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageInputRoutingModule {}
