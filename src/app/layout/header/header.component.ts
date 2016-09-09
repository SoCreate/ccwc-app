import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { AppState } from '../../shared/state/app-state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() mode;
  @Output() menuItemClick = new EventEmitter();

  constructor(public store: Store<AppState>) {
  }

  onMenuItemClick(mode) {
    this.menuItemClick.emit(mode);
  }

}
