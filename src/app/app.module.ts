import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout';
import { SessionListComponent } from './schedule';
import { SpeakerListComponent, SpeakerDetailsComponent } from './speakers';
import { StoreModule } from '@ngrx/store';
import { sessionsReducer } from './shared/state/sessions-reducer';
import { speakerReducer } from './shared/state/speaker-reducer';
import { Modes } from './shared/state/app-state';
import { modeReducer } from './shared/state/mode-reducer';

const initialState = require('./data/2016scheduledata.json');
initialState.mode = Modes.Schedule;

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SessionListComponent,
    SpeakerListComponent,
    SpeakerDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({
        sessions: sessionsReducer,
        speakers: speakerReducer,
        mode: modeReducer
      },
      initialState)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
