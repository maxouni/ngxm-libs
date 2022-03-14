import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgxmInputComponent } from './ngxm-input.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxmInputService } from './ngxm-input.service';
import {
  NGXM_INPUT_LIB_CONFIG,
  NgxmInputConfig,
  NgxmInputErrorMsgModel,
} from './ngmx-input.model';
import { NgxmInputValidationPipe } from './ngxm-input-validation.pipe';
import { defaultLocale, defaultMessages } from './lib.constants';

export const provideOptions = (
  options: NgxmInputConfig,
  ngxmInputService: NgxmInputService,
): NgxmInputConfig | undefined => {
  const locale = options.errorsLocale;
  ngxmInputService.errorTranslations = {
    ...defaultMessages[locale ? locale : defaultLocale],
    ...options.errorsMessages,
  } as NgxmInputErrorMsgModel;
  return options;
};

@NgModule({
  declarations: [NgxmInputComponent, NgxmInputValidationPipe],
  imports: [CommonModule, BrowserAnimationsModule],
  exports: [NgxmInputComponent],
  providers: [NgxmInputService],
})
export class NgxmInputModule {
  constructor(private ngxmInputService: NgxmInputService) {
    provideOptions({}, ngxmInputService);
  }

  public static forRoot(
    options?: NgxmInputConfig,
  ): ModuleWithProviders<NgxmInputModule> {
    return {
      ngModule: NgxmInputModule,
      providers: [
        {
          provide: NGXM_INPUT_LIB_CONFIG,
          useValue: provideOptions,
          deps: [options, NgxmInputService],
        },
      ],
    };
  }
}
