import { Component, EventEmitter, Output, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnChanges {
  @Input() mode;
  @Output() menuItemClick = new EventEmitter();
  title;

  ngOnChanges(): void {
    if(this.mode === 1) {
      this.title = 'Schedule';
    } else if (this.mode === 2) {
      this.title = 'Speakers';
    }
  }

  onMenuItemClick(mode) {
    this.menuItemClick.emit(mode);
  }

}
