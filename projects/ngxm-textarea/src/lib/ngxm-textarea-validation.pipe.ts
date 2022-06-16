import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { NgxmTextareaService } from "./ngxm-textarea.service";

@Pipe({
  name: 'ngxmTextareaValidation',
})
export class NgxmTextareaValidationPipe implements PipeTransform {
  transform(value: any, args?: ValidationErrors | null): Observable<string> {
    return this.ngxmTextareaService.getErrorTranslations().pipe(
      map((outputErrorMessages) => {
        if (args) {
          switch (Object.keys(args)[0]) {
            case 'max':
              return outputErrorMessages?.errorMaxMsg || '';
            case 'min':
              return outputErrorMessages?.errorMinMsg || '';
            case 'pattern':
              return outputErrorMessages?.errorPatternMsg || '';
            case 'required':
              return outputErrorMessages?.errorRequiredMsg || '';
          }
        }
        return '';
      }),
    );
  }

  constructor(private ngxmTextareaService: NgxmTextareaService) {}
}
