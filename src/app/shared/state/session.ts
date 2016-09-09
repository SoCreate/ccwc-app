export interface Session {
  id: string;
  name: string;
  date: string;
  startTimeUtc: number;
  endTimeUtc: number;
  categoryIds: number[];
  speakerIds: number[];
}
