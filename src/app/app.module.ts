import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { metaReducers, reducers } from 'src/reducers';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocStackModule } from './components/doc-stack/doc-stack.module';
import { FormModule } from './components/form/form.module';
import { MaterialModule } from './material.module';
import { HomeModule } from './pages/home/home.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormModule,
    HomeModule,
    BrowserAnimationsModule,
    MaterialModule,
    DocStackModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateSerializability: true,
        strictActionSerializability: true,
      },
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
      routerState: RouterState.Minimal,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
