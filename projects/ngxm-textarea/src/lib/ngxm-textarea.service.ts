import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { NgxmTextareaErrorMsgModel } from "./ngmx-textarea.model";

@Injectable({
  providedIn: 'root'
})
export class NgxmTextareaService {
  private errorTranslations$: BehaviorSubject<NgxmTextareaErrorMsgModel> =
    new BehaviorSubject<NgxmTextareaErrorMsgModel>({});

  constructor() {}

  set errorTranslations(translations: NgxmTextareaErrorMsgModel) {
    this.errorTranslations$.next({
      ...this.errorTranslations$.value,
      ...translations,
    });
  }

  getErrorTranslations(): Observable<NgxmTextareaErrorMsgModel> {
    return this.errorTranslations$.asObservable();
  }
}
