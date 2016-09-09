import { Component, EventEmitter, Output, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() mode;
  @Output() menuItemClick = new EventEmitter();

  onMenuItemClick(mode) {
    this.menuItemClick.emit(mode);
  }

}
