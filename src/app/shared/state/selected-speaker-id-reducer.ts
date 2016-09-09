import { ActionReducer, Action } from '@ngrx/store';

export const selectedSpeakerIdReducer: ActionReducer<number> = (state: number | null = null, action: Action) => {
  switch(action.type) {
    case 'SELECT_SPEAKER_ID':
      return action.payload;
    case 'CLEAR_SELECTED_SPEAKER_ID':
      return null;
    default:
      return state;
  }
};
