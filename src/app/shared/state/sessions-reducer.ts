import { Action, ActionReducer } from '@ngrx/store';
import { Session } from './session';

export const sessionsReducer: ActionReducer<Session[]> = (state: Session[], action: Action) => {
  return state;
};
