import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReduxComponent } from './redux/redux.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/reduces';
import { CounterFacade } from './store/facade';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    ReduxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({'counter':counterReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
  ],
  providers: [CounterFacade],
  bootstrap: [AppComponent]
})
export class AppModule { }
