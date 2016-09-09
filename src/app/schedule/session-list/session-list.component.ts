import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Session } from '../../shared/state/session';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent {
  @Input() sessions: Session[];
  @Input() scheduleDate: string;
  @Output() dayClick = new EventEmitter();

  constructor() { }

  onDayClick(date) {
    this.dayClick.emit(date);
  }

}
