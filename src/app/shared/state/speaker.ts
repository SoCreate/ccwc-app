import { Session } from './session';

export interface Speaker {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  bio: string;
  sessions: Session[] | null;
}
