import { Speaker } from './speaker';

export interface Session {
  id: string;
  name: string;
  date: string;
  description: string;
  startTime: number;
  endTime: number;
  categoryIds: number[];
  speakerIds: number[];
  speakers: Speaker[] | null;
}
