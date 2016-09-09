import { ActionReducer, Action } from '@ngrx/store';
import { Category } from './category';

export const categoriesReducer: ActionReducer<Category[]> = (state: Category[], action: Action) => {
  return state;
};
