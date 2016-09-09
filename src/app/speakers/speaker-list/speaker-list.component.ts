import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Speaker } from '../../shared';

@Component({
  selector: 'app-speaker-list',
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
