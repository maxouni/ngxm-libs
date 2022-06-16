import { InjectionToken, Provider } from '@angular/core';
import { NgxmTextareaLocales } from './lib.constants';

export type NgxmTextareaValue = string;

export interface NgxmTextareaErrorMsgModel {
  errorRequiredMsg?: string;
  errorPatternMsg?: string;
  errorMinMsg?: string;
  errorMaxMsg?: string;
}
export type NgxmRequiredType = true | false;

export interface NgxmTextareaConfig {
  errorsLocale?: NgxmTextareaLocales;
  errorsMessages?: NgxmTextareaErrorMsgModel;
  ngxTranslateLoader?: Provider;
}

export interface NgxmTextareaPattern {
  email: string | RegExp;
  numeric: string | RegExp;
  positiveNumeric: string | RegExp;
  percent: string | RegExp;
  words: string | RegExp;
}

export const NGXM_TEXTAREA_LIB_CONFIG = new InjectionToken(
  'NGXM_TEXTAREA_LIB_CONFIG',
);

export const NgxmPatterns: NgxmTextareaPattern = {
  email: `[a-z0-9!#$%&'*+/=?^_\`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_\`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?`,
  numeric: `^-?[0-9]\\d*(\\.\\d*)?$`,
  positiveNumeric: `^[0-9]\\d*(\\.\\d*)?$`,
  percent: `^100(\\.0{0,2})? *%?$|^\\d{1,2}(\\.\\d{1,2})? *%?$`,
  words: `[\\da-zA-Z\\-\\s"&._,+\']*`,
}
