import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PATH_INPUT, PATH_TEXTAREA } from './app.constants';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./pages/page-main/page-main.module').then(
        (m) => m.PageMainModule,
      ),
  },
  {
    path: PATH_INPUT,
    loadChildren: () =>
      import('./pages/page-input/page-input.module').then(
        (m) => m.PageInputModule,
      ),
  },
  {
    path: PATH_TEXTAREA,
    loadChildren: () =>
      import('./pages/page-textarea/page-textarea.module').then(
        (m) => m.PageTextareaModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
