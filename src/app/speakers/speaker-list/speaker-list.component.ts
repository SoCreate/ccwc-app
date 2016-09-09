import { Component, OnInit, Input } from '@angular/core';
import { Speaker } from '../../shared/state/speaker';

@Component({
  selector: 'app-speaker-list',
  templateUrl: './speaker-list.component.html',
  styleUrls: ['./speaker-list.component.css']
})
export class SpeakerListComponent implements OnInit {
  @Input() speakers: Speaker[];

  constructor() { }

  ngOnInit() {
  }

}
