import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AUTH_PROVIDERS }      from 'angular2-jwt';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/global/header.component';
import { PrimaryNavComponent } from './components/navigation/primary-nav.component';
import { SecondaryNavComponent } from './components/navigation/secondary-nav.component';
import { SearchComponent } from './components/navigation/search.component';
import { CallToActionComponent } from './components/messaging/call-to-action.component';
import { Auth } from './services/auth.service';
import _ from 'lodash';
import Cookies from 'js-cookie';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PrimaryNavComponent,
    SecondaryNavComponent,
    SearchComponent,
    CallToActionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    AUTH_PROVIDERS,
    Auth
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
