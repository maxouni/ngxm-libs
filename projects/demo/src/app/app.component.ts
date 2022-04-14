import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import {
  NgxmInputPattern,
  NgxmInputType,
  NgxmPatterns,
} from '../../../ngxm-input/src/lib/ngmx-input.model';
import { TranslateService } from '@ngx-translate/core';
import { NgxmInputService } from '../../../ngxm-input/src/lib/ngxm-input.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Ngxm-input demo page';

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

  paramsLabel: string = 'Test input control';
  paramsPattern: keyof NgxmInputPattern = 'email';
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
    private ngxmInputService: NgxmInputService,
  ) {
    translate.setDefaultLang('en');
    translate.use('en').subscribe(() => {
      ngxmInputService.errorTranslations = {
        errorRequiredMsg: this.translate.instant('error.required'),
      };
    });
  }
}
