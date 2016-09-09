import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './shared/state/app-state';
import { Session } from './shared/state/session';
import { Speaker } from './shared/state/speaker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mode;
  speakers;
  selectedSpeaker;
  sessions;
  selectedSession;
  scheduleDate;

  constructor(private store: Store<AppState>) {
    this.store.select<string>('mode')
      .subscribe(mode => {
        this.mode = mode;
      });
    this.store.select<Speaker[]>('speakers')
      .subscribe(speakers => {
        this.speakers = speakers;
      });
    this.store.select<Session[]>('sessions')
      .subscribe(sessions => {
        this.sessions = sessions;
      });
    this.store.select('scheduleDate')
      .subscribe(scheduleDate => {
        this.scheduleDate = scheduleDate;
      });
    this.store.select<number>('selectedSpeakerId')
      .subscribe(selectedSpeakerId => {
        this.selectedSpeaker = this.speakers.find(speaker => speaker.id === selectedSpeakerId);
        if (this.selectedSpeaker) {
          this.selectedSpeaker.sessions = this.sessions.filter(session => session.speakerIds.indexOf(this.selectedSpeaker.id) >= 0);
        }
      });
    this.store.select<number>('selectedSessionId')
      .subscribe(selectedSessionId => {
        this.selectedSession = this.sessions.find(session => session.id === selectedSessionId);
        if (this.selectedSession) {
          this.selectedSession.speakers = this.speakers.filter(speaker => this.selectedSession.speakerIds.indexOf(speaker.id) >= 0);
        }
      });
  }

  onMenuItemClick(mode) {
    switch (mode) {
      case 'schedule':
        this.store.dispatch({type: 'VIEW_SCHEDULE'});
        break;
      case 'speakers':
        this.store.dispatch({type: 'VIEW_SPEAKERS'});
        break;
    }
  }

  onDayClick(date) {
    this.store.dispatch({type: 'VIEW_DAY', payload: date});
  }

  onSessionClick(sessionId) {
    this.store.dispatch({type: 'SELECT_SESSION_ID', payload: sessionId});
  }

  onSpeakerClick(speakerId) {
    this.store.dispatch({type: 'SELECT_SPEAKER_ID', payload: speakerId});
  }

  onBackFromSpeakerClick() {
    this.store.dispatch({type: 'CLEAR_SELECTED_SPEAKER_ID'});
  }

  onBackFromSessionClick() {
    this.store.dispatch({type: 'CLEAR_SELECTED_SESSION_ID'});
  }
}
