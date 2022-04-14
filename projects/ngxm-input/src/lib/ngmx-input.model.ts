import { InjectionToken, Provider } from '@angular/core';
import { NgxmInputLocales } from './lib.constants';

export type NgxmInputValue = string;
export type NgxmInputType = 'text' | 'number' | 'search' | 'email' | 'password';
export interface NgxmInputErrorMsgModel {
  errorRequiredMsg?: string;
  errorPatternMsg?: string;
  errorMinMsg?: string;
  errorMaxMsg?: string;
}
export type NgxmRequiredType = true | false;

export interface NgxmInputConfig {
  errorsLocale?: NgxmInputLocales;
  errorsMessages?: NgxmInputErrorMsgModel;
  ngxTranslateLoader?: Provider;
}

export interface NgxmInputPattern {
  email: string | RegExp;
  numeric: string | RegExp;
  positiveNumeric: string | RegExp;
  percent: string | RegExp;
  words: string | RegExp;
}

export const NGXM_INPUT_LIB_CONFIG = new InjectionToken(
  'NGXM_INPUT_LIB_CONFIG',
);

export const NgxmPatterns: NgxmInputPattern = {
  email: `[a-z0-9!#$%&'*+/=?^_\`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_\`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?`,
  numeric: `^-?[0-9]\\d*(\\.\\d*)?$`,
  positiveNumeric: `^[0-9]\\d*(\\.\\d*)?$`,
  percent: `^100(\\.0{0,2})? *%?$|^\\d{1,2}(\\.\\d{1,2})? *%?$`,
  words: `[\\da-zA-Z\\-\\s"&._,+\']*`,
}
