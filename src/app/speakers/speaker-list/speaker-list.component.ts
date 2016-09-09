import { Component, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { Speaker } from '../../shared/state/speaker';

@Component({
  selector: 'app-speaker-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './speaker-list.component.html',
  styleUrls: ['./speaker-list.component.css']
})
export class SpeakerListComponent {
  @Input() speakers: Speaker[];
  @Output() speakerClick = new EventEmitter();

  onSpeakerClick(id) {
    this.speakerClick.emit(id);
  }
}
