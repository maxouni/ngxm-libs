import { Injectable } from '@angular/core';
import {
  NgxmInputErrorMsgModel,
} from './ngmx-input.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NgxmInputService {
  private errorTranslations$: BehaviorSubject<NgxmInputErrorMsgModel> =
    new BehaviorSubject<NgxmInputErrorMsgModel>({});

  constructor() {}

  set errorTranslations(translations: NgxmInputErrorMsgModel) {
    this.errorTranslations$.next({
      ...this.errorTranslations$.value,
      ...translations,
    });
  }

  getErrorTranslations(): Observable<NgxmInputErrorMsgModel> {
    return this.errorTranslations$.asObservable();
  }
}
