import { ActionReducer, Action } from '@ngrx/store';

export const scheduleDateReducer: ActionReducer<string> = (state: string, action: Action) => {
  switch(action.type) {
    case 'VIEW_DAY':
      return action.payload;
    default:
      return state;
  }
};
