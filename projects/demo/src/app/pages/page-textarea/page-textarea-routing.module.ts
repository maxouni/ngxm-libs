import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageTextareaComponent } from './page-textarea.component';

const routes: Routes = [
  {
    path: '',
    component: PageTextareaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageTextareaRoutingModule {}
