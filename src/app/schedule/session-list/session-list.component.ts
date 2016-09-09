import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Session } from '../../shared';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent {
  @Input() sessions: Session[];
  @Input() scheduleDate: string;
  @Output() dayClick = new EventEmitter();
  @Output() sessionClick = new EventEmitter();

  onDayClick(date) {
    this.dayClick.emit(date);
  }

  onSessionClick(id) {
    this.sessionClick.emit(id);
  }
}
