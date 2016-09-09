import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout';
import { SessionListComponent, SessionDetailsComponent } from './schedule';
import { SpeakerListComponent, SpeakerDetailsComponent } from './speakers';
import {
  Modes,
  AppState,
  sessionsReducer,
  speakerReducer,
  modeReducer,
  scheduleDateReducer,
  selectedSpeakerIdReducer,
  selectedSessionIdReducer
} from './shared';

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
    SessionDetailsComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
