import { ActionReducer, Action } from '@ngrx/store';

export const selectedSessionIdReducer: ActionReducer<number> = (state: number | null = null, action: Action) => {
  switch(action.type) {
    case 'SELECT_SESSION_ID':
      return action.payload;
    case 'CLEAR_SELECTED_SESSION_ID':
      return null;
    default:
      return state;
  }
};
