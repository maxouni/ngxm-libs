import { ModuleWithProviders, NgModule } from "@angular/core";
import { NgxmTextareaComponent } from './ngxm-textarea.component';
import { NgxmTextareaValidationPipe } from "./ngxm-textarea-validation.pipe";
import { NGXM_TEXTAREA_LIB_CONFIG, NgxmTextareaConfig, NgxmTextareaErrorMsgModel } from "./ngmx-textarea.model";
import { defaultLocale, defaultMessages } from "./lib.constants";
import { NgxmTextareaService } from "./ngxm-textarea.service";
import { CommonModule } from "@angular/common";

export const provideOptions = (
  options: NgxmTextareaConfig,
  ngxmTextareaService: NgxmTextareaService,
): NgxmTextareaConfig | undefined => {
  const locale = options.errorsLocale;
  ngxmTextareaService.errorTranslations = {
    ...defaultMessages[locale ? locale : defaultLocale],
    ...options.errorsMessages,
  } as NgxmTextareaErrorMsgModel;
  return options;
};

@NgModule({
  declarations: [
    NgxmTextareaComponent,
    NgxmTextareaValidationPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgxmTextareaComponent
  ],
  providers: [NgxmTextareaService],
})
export class NgxmTextareaModule {
  constructor(private ngxmTextareaService: NgxmTextareaService) {
    provideOptions({}, ngxmTextareaService);
  }

  public static forRoot(
    options?: NgxmTextareaConfig,
  ): ModuleWithProviders<NgxmTextareaModule> {
    return {
      ngModule: NgxmTextareaModule,
      providers: [
        {
          provide: NGXM_TEXTAREA_LIB_CONFIG,
          useValue: provideOptions,
          deps: [options, NgxmTextareaService],
        },
      ],
    };
  }
}
