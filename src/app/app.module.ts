import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
// import { Location } from '@angular/common';
// import { AUTH_PROVIDERS } from 'angular2-jwt';
import { AppComponent } from './app.component';
import { ListComponent } from './components/content/listing/list.component';
import { HeaderComponent } from './components/global/header.component';
import { PrimaryNavComponent } from './components/navigation/primary-nav.component';
import { SecondaryNavComponent } from './components/navigation/secondary-nav.component';
import { SearchComponent } from './components/navigation/search.component';
import { CallToActionComponent } from './components/messaging/call-to-action.component';
import { ListFilter } from './components/content/listing/filter.component';
import { SortComponent } from './components/content/listing/sort.component';
import { PaginationPipe } from './pipes/pagination.pipe';

// import { Auth } from './services/auth.service';
import _ from 'lodash';
import Cookies from 'js-cookie';

const appRoutes: Routes = [
  { path: '', component: ListComponent},
  { path: 'list', component: ListComponent},
  // { path: 'videos', component: ListComponent, data: [{filter: 'typeVideo', type: 'types'}] },
  // { path: 'lesson-plans', component: ListComponent, data: [{filter: 'typeLesson', type: 'types'}]},
  // { path: 'assembly-scripts', component: ListComponent, data: [{filter: 'typeAssembly', type: 'types'}]},
  // { path: 'interactive', component: ListComponent, data: [{filter: 'typeInteractive', type: 'types'}]},
];


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HeaderComponent,
    PrimaryNavComponent,
    SecondaryNavComponent,
    SearchComponent,
    CallToActionComponent,
    ListFilter,
    SortComponent,
    PaginationPipe
],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  // providers: [
  //   AUTH_PROVIDERS,
  //   Auth
  // ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
