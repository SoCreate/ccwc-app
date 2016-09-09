import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Session } from '../../shared/state/session';

@Component({
  selector: 'app-session-details',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './session-details.component.html',
  styleUrls: ['./session-details.component.css']
})
export class SessionDetailsComponent {
  @Input() session: Session;
  @Output() backClick = new EventEmitter();

  onBackClick() {
    this.backClick.emit();
  }
}
