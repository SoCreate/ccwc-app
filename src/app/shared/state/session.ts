export interface Session {
  id: string;
  name: string;
  startTimeUtc: number;
  endTimeUtc: number;
  categoryIds: number[];
  speakerIds: number[];
}
