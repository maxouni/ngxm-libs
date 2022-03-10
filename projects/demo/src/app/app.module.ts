import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxmInputModule } from '../../../ngxm-input/src/lib/ngxm-input.module';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export const createTranslateLoader = (http: HttpClient) => {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

const translateServiceProvider = async (translate: TranslateService) => {
  const req = await translate.get('error.required').subscribe();
  window.console.log(req);
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    NgxmInputModule.forRoot({
      errorsMessages: {
        errorRequiredMsg: 'error.required'
      },
      ngxTranslateLoader: {
        provide: 'translate',
        useFactory: translateServiceProvider,
        deps: [TranslateService],
      },
    }),
    FormsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
