import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Speaker } from '../../shared/state/speaker';

@Component({
  selector: 'app-speaker-details',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './speaker-details.component.html',
  styleUrls: ['./speaker-details.component.css']
})
export class SpeakerDetailsComponent {
  @Input() speaker: Speaker;
  @Output() backClick = new EventEmitter();

  onBackClick() {
    this.backClick.emit();
  }
}
