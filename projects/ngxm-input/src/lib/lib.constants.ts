import { NgxmInputErrorMsgModel } from './ngmx-input.model';

export type NgxmInputLocales = 'ru' | 'en';

export const defaultLocale: NgxmInputLocales = 'en';

export const defaultMessages: {
  [key: string]: NgxmInputErrorMsgModel;
} = {
  en: {
    errorRequiredMsg: 'Required value',
    errorPatternMsg: 'Incorrect value',
    errorMinMsg: 'Value is too small',
    errorMaxMsg: 'Value is too big',
  },
  ru: {
    errorRequiredMsg: 'Обязательное поле',
    errorPatternMsg: 'Некорректное значение',
    errorMinMsg: 'Значение меньше минимума',
    errorMaxMsg: 'Значение меньше максимума',
  },
};
