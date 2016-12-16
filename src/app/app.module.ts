import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { HttpModule, JsonpModule } from '@angular/http';
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
//import {CountUpDirective} from 'countup.js';
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
import { PaginationPipe } from './pipes/pagination.pipe';
import { TransformPipe } from './pipes/transform.pipe';

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
    SortComponent,
    PaginationPipe,
    TransformPipe,
],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: ListComponent
      },
      {
        path: 'type/:type',
        component: ListComponent
      }
    ])
  ],
  providers: [
    AUTH_PROVIDERS,
    Auth
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
