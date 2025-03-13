import { en } from './en';
import { de } from './de';

export const translations = {
  EN: en,
  DE: de,
};

export type TranslationKey = keyof typeof en;
