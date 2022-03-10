import { Inject, Pipe, PipeTransform } from '@angular/core';
import {
  NGXM_INPUT_LIB_CONFIG,
  NgxmInputConfig,
  NgxmInputErrorMsgModel,
} from './ngmx-input.model';
import { ValidationErrors } from '@angular/forms';
import { defaultLocale, defaultMessages } from './lib.constants';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'ngxmInputValidation',
})
export class NgxmInputValidationPipe implements PipeTransform {
  transform(
    value: any,
    args?: ValidationErrors | null,
    translateService?: TranslateService,
  ): string {
    const locale = this.ngxmInputConfig.errorsLocale;
    let outputErrorMessages: NgxmInputErrorMsgModel = {
      ...defaultMessages[locale ? locale : defaultLocale],
      ...this.ngxmInputConfig.errorsMessages,
    };

    if (args) {
      switch (Object.keys(args)[0]) {
        case 'max':
          return outputErrorMessages.errorMaxMsg || '';
        case 'min':
          return outputErrorMessages.errorMinMsg || '';
        case 'pattern':
          return outputErrorMessages.errorPatternMsg || '';
        case 'required':
          return outputErrorMessages?.errorRequiredMsg || '';
      }
    }
    return '';
  }

  constructor(
    @Inject(NGXM_INPUT_LIB_CONFIG) private ngxmInputConfig: NgxmInputConfig,
  ) {}
}
