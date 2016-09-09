import { ActionReducer, Action } from '@ngrx/store';
import { Modes } from './app-state';

export const modeReducer: ActionReducer<Modes> = (state: Modes = Modes.Schedule, action: Action) => {
  switch(action.type) {
    case 'VIEW_SCHEDULE':
      return Modes.Schedule;
    case 'VIEW_SPEAKERS':
      return Modes.Speakers;
    default:
      return state;
  }
};
