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

export const NGXM_INPUT_LIB_CONFIG = new InjectionToken(
  'NGXM_INPUT_LIB_CONFIG',
);
