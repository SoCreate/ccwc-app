import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-header',
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
