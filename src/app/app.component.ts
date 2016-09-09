import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Speaker } from './shared/state/speaker';
import { Session } from './shared/state/session';
import { Observable } from 'rxjs';
import { AppState, Modes } from './shared/state/app-state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  speakers: Observable<Speaker[]>;
  mode;
  sessionsModel;

  constructor(private store: Store<AppState>) {
    this.sessionsModel = Observable.combineLatest(
      this.store.select<Session[]>('sessions'),
      this.store.select('scheduleDate'),
      (sessions, scheduleDate) => {
        return {
          sessions: sessions.filter(session => session.date === scheduleDate),
          scheduleDate
        };
      }
    );
    this.speakers = this.store.select<Speaker[]>('speakers');
    this.store.select<Modes>('mode')
      .subscribe(mode => {
        this.mode = mode;
      });
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
}
