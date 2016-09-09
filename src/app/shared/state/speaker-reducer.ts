import { ActionReducer, Action } from '@ngrx/store';
import { Speaker } from './speaker';

export const speakerReducer: ActionReducer<Speaker[]> = (state: Speaker[], action: Action) => {
  return state;
};
