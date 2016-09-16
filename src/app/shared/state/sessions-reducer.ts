import { Action, ActionReducer } from '@ngrx/store';
import { Session } from './session';

export const sessionsReducer: ActionReducer<Session[]> = (state: Session[], action: Action) => {
  switch (action.type) {
    case 'TOGGLE_FAVORITE_SESSION':
      return state.map(session => {
          if (session.id === action.payload) {
            return Object.assign({}, session, {isFavorite: !session.isFavorite});
          }
          return session;
        });
    default:
      return state;
  }
};
