import { atom } from 'jotai';
import type { FormSchema } from './schema';

export const meishiPortfolioUrlState = atom('');
export const meishiNameState = atom('');
export const meishiEmailState = atom('');

export const meishiInfoState = atom(
  (get) =>
    ({
      portfolioUrl: get(meishiPortfolioUrlState),
      name: get(meishiNameState),
      email: get(meishiEmailState),
    }) satisfies FormSchema,
);
