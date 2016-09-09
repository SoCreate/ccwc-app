import { Component, Input, EventEmitter, Output, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Session } from '../../shared/state/session';

@Component({
  selector: 'app-session-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit {
  @Input() sessions: Session[];
  @Input() scheduleDate: string;
  @Output() dayClick = new EventEmitter();
  @Output() sessionClick = new EventEmitter();
  fridaySessions;
  saturdaySessions;

  ngOnInit(): void {
    this.fridaySessions = this.sessions.filter(session => session.date === '2016-09-30');
    this.saturdaySessions = this.sessions.filter(session => session.date === '2016-10-01');
  }

  onDayClick(date) {
    this.dayClick.emit(date);
  }

  onSessionClick(id) {
    this.sessionClick.emit(id);
  }
}
