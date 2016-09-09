import { Category } from './category';
import { Session } from './session';
import { Speaker } from './speaker';

export interface AppState {
  sessions: Session[];
  speakers: Speaker[];
  categories: Category[];
  selectedSessionId: string | null;
  selectedSpeakerId: string | null;
  mode: Modes;
}

export const enum Modes {
  Schedule = 1,
  Speakers
}
