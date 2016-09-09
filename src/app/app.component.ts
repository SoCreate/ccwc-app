import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  AppState,
  Modes,
  Speaker,
  Session
} from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mode;
  sessionsModel;
  speakersModel;

  constructor(private store: Store<AppState>) {
    this.store.select<Modes>('mode')
      .subscribe(mode => {
        this.mode = mode;
      });
    this.sessionsModel = Observable.combineLatest(
      this.store.select<Session[]>('sessions'),
      this.store.select('scheduleDate'),
      this.store.select<string>('selectedSessionId'),
      (sessions, scheduleDate, selectedSessionId) => {
        return {
          sessions: sessions.filter(session => session.date === scheduleDate),
          scheduleDate,
          selectedSession: sessions.find(session => session.id === selectedSessionId)
        };
      }
    );
    this.speakersModel = Observable.combineLatest(
      this.store.select<Speaker[]>('speakers'),
      this.store.select<string>('selectedSpeakerId'),
      (speakers, selectedSpeakerId) => {
        return {
          speakers: speakers,
          selectedSpeaker: speakers.find(speaker => speaker.id === selectedSpeakerId)
        };
      }
    );
  }

  onMenuItemClick(mode) {
    switch (mode) {
      case 'schedule':
        this.store.dispatch({ type: 'VIEW_SCHEDULE' });
        break;
      case 'speakers':
        this.store.dispatch({ type: 'VIEW_SPEAKERS' });
        break;
    }
  }

  onDayClick(date) {
    this.store.dispatch({ type: 'VIEW_DAY', payload: date });
  }

  onSessionClick(sessionId) {
    this.store.dispatch({ type: 'SELECT_SESSION_ID', payload: sessionId });
    this.store.dispatch({ type: 'VIEW_SESSION' });
  }

  onSpeakerClick(speakerId) {
    this.store.dispatch({ type: 'SELECT_SPEAKER_ID', payload: speakerId });
    this.store.dispatch({ type: 'VIEW_SPEAKER' });
  }

  onBackFromSpeakerClick() {
    this.store.dispatch({ type: 'CLEAR_SELECTED_SPEAKER_ID' });
    this.store.dispatch({ type: 'VIEW_SPEAKERS' });
  }

  onBackFromSessionClick() {
    this.store.dispatch({ type: 'CLEAR_SELECTED_SESSION_ID' });
    this.store.dispatch({ type: 'VIEW_SCHEDULE' });
  }
}
