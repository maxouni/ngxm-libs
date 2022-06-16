import { Component } from '@angular/core';
import { NgxmInputPattern, NgxmInputType, NgxmPatterns } from "../../../../../ngxm-input/src/lib/ngmx-input.model";
import { AbstractControl, FormBuilder, FormGroup } from "@angular/forms";
import { TranslateService } from "@ngx-translate/core";
import { NgxmInputService } from "../../../../../ngxm-input/src/lib/ngxm-input.service";
import { NgxmTextareaService } from "../../../../../ngxm-textarea/src/lib/ngxm-textarea.service";
import { NgxmTextareaPattern } from "../../../../../ngxm-textarea/src/lib/ngmx-textarea.model";

@Component({
  selector: 'app-page-textarea',
  templateUrl: './page-textarea.component.html',
  styleUrls: ['./page-textarea.component.scss']
})
export class PageTextareaComponent {
  title = 'NGXM Textarea demo page';

  paramsType: NgxmInputType = 'text';
  paramsRequired: string = 'false';
  paramsShowEye: string = 'false';
  paramsShowLoop: string = 'false';

  get paramsDisabled(): 'false' | 'true' {
    return 'false';
  }

  set paramsDisabled(flag: 'false' | 'true') {
    if (flag === 'true') {
      this.testControl?.disable();
    } else {
      this.testControl?.enable();
    }
  }

  paramsMinHeight: number = 100;
  paramsLabel: string = 'Test input control';
  paramsPattern: keyof NgxmTextareaPattern = 'email';
  paramsError: string = 'Error text';
  paramsDescription: string = 'Test input control description';

  readonly form: FormGroup = this.fb.group(
    {
      testControl: this.fb.control(null, []),
    },
    {},
  );

  get testControl(): AbstractControl | null {
    return this.form.get('testControl');
  }

  patterns: NgxmInputPattern = NgxmPatterns;

  constructor(
    private translate: TranslateService,
    private fb: FormBuilder,
    private ngxmTextareaService: NgxmTextareaService,
  ) {
    translate.setDefaultLang('en');
    translate.use('en').subscribe(() => {
      ngxmTextareaService.errorTranslations = {
        errorRequiredMsg: this.translate.instant('error.required'),
      };
    });
  }
}
