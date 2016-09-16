import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout';
import { SessionListComponent } from './schedule/session-list/session-list.component';
import { SpeakerListComponent } from './speakers/speaker-list/speaker-list.component';
import { SpeakerDetailsComponent } from './speakers/speaker-details/speaker-details.component';
import { SessionDetailsComponent } from './schedule/session-details/session-details.component';
import { AppState, Modes } from './shared/state/app-state';
import { sessionsReducer } from './shared/state/sessions-reducer';
import { speakerReducer } from './shared/state/speaker-reducer';
import { modeReducer } from './shared/state/mode-reducer';
import { scheduleDateReducer } from './shared/state/schedule-date-reducer';
import { selectedSpeakerIdReducer } from './shared/state/selected-speaker-id-reducer';
import { selectedSessionIdReducer } from './shared/state/selected-session-id-reducer';
import { StorageService } from './shared/storage.service';
import { SessionListItemComponent } from './schedule/session-list-item/session-list-item.component';

const initialState: AppState = require('./data/2016scheduledata.json');
initialState.mode = Modes.Schedule;
initialState.scheduleDate = '2016-09-30';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SessionListComponent,
    SpeakerListComponent,
    SpeakerDetailsComponent,
    SessionDetailsComponent,
    SessionListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({
        sessions: sessionsReducer,
        speakers: speakerReducer,
        mode: modeReducer,
        scheduleDate: scheduleDateReducer,
        selectedSpeakerId: selectedSpeakerIdReducer,
        selectedSessionId: selectedSessionIdReducer
      },
      initialState)
  ],
  providers: [
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
