import { NgxmTextareaErrorMsgModel } from "./ngmx-textarea.model";

export type NgxmTextareaLocales = 'ru' | 'en';

export const defaultLocale: NgxmTextareaLocales = 'en';

export const defaultMessages: {
  [key: string]: NgxmTextareaErrorMsgModel;
} = {
  en: {
    errorRequiredMsg: 'Required value',
  },
  ru: {
    errorRequiredMsg: 'Обязательное поле',
  },
};
