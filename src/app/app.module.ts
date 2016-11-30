import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { Location } from '@angular/common';
import { AUTH_PROVIDERS } from 'angular2-jwt';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/global/header.component';
import { PrimaryNavComponent } from './components/navigation/primary-nav.component';
import { SecondaryNavComponent } from './components/navigation/secondary-nav.component';
import { SearchComponent } from './components/navigation/search.component';
import { CallToActionComponent } from './components/messaging/call-to-action.component';
import { Auth } from './services/auth.service';
import _ from 'lodash';
import Cookies from 'js-cookie';
import { ListingComponent } from './components/content/listing/listing.component';
import { ListFilter } from './components/content/listing/filter.component';
import { ListComponent } from './components/content/listing/list.component';
import { SearchTermPipe } from './pipes/search-term.pipe';
import { TypePipe } from './pipes/type.pipe';
import { KeystagePipe } from './pipes/keystage.pipe';
import { SubjectPipe } from './pipes/subject.pipe';
import { TypeFilterPipe } from './pipes/type-filter.pipe';
import { CategoryPipe } from './pipes/category.pipe';
import { SortComponent } from './components/content/listing/sort.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PrimaryNavComponent,
    SecondaryNavComponent,
    SearchComponent,
    CallToActionComponent,
    SearchTermPipe,
    ListingComponent,
    ListFilter,
    ListComponent,
    TypePipe,
    KeystagePipe,
    SubjectPipe,
    TypeFilterPipe,
    CategoryPipe,
    SortComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule
  ],
  providers: [
    AUTH_PROVIDERS,
    Location,
    Auth
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
