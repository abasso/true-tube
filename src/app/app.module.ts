import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule} from '@angular/forms'

import { HttpModule } from '@angular/http'
import { RouterModule, Routes } from '@angular/router'
// import { Location } from '@angular/common'
import { AUTH_PROVIDERS } from 'angular2-jwt'
import { AppComponent } from './app.component'
import { ListComponent } from './components/content/listing/list.component'
import { HeaderComponent } from './components/global/header.component'
import { PrimaryNavComponent } from './components/navigation/primary-nav.component'
import { SecondaryNavComponent } from './components/navigation/secondary-nav.component'
import { SearchComponent } from './components/navigation/search.component'
import { CallToActionComponent } from './components/messaging/call-to-action.component'
import { ItemComponent } from './components/content/item/item.component'
import { ListFilter } from './components/content/listing/filter.component'
import { SortComponent } from './components/content/listing/sort.component'
// import { EmbedComponent } from './components/content/embed/embed.component'
import { DataService } from './services/data.service'
import { ListService } from './services/list.service'
import { QueryStringPipe } from './pipes/query-string.pipe'
import { AttributePipe } from './pipes/attribute.pipe'
import { PaginationPipe } from './pipes/pagination.pipe'
import { EmbedMenuPipe } from './pipes/embed-menu.pipe'

import { Auth } from './services/auth.service'
import { ClipboardModule } from 'ngx-clipboard'
import Moment from 'moment'
import _ from 'lodash'
import Cookies from 'js-cookie';
import { FooterComponent } from './components/global/footer.component';
import { HomeComponent } from './components/content/home/home.component';
import { CarouselComponent } from './components/content/home/carousel.component';
import { KSSwiperModule } from 'angular2-swiper';

const appRoutes: Routes = [
  { path: '', component: CarouselComponent},
  { path: 'list', component: ListComponent},
  // { path: 'embed/:id', component: EmbedComponent},
  { path: 'item/:id', component: ItemComponent},
  { path: 'films', component: ListComponent, data: [{filter: 'typeFilm', type: 'content types'}] },
  { path: 'lesson plans', component: ListComponent, data: [{filter: 'typeLesson', type: 'content types'}]},
  { path: 'assembly scripts', component: ListComponent, data: [{filter: 'typeAssembly', type: 'content types'}]},
  { path: 'interactive', component: ListComponent, data: [{filter: 'typeInteractive', type: 'content types'}]},
]


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HeaderComponent,
    PrimaryNavComponent,
    SecondaryNavComponent,
    SearchComponent,
    CallToActionComponent,
    ItemComponent,
    ListFilter,
    SortComponent,
    PaginationPipe,
    QueryStringPipe,
    AttributePipe,
    EmbedMenuPipe,
    FooterComponent,
    // EmbedComponent,
    HomeComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ClipboardModule,
    KSSwiperModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AUTH_PROVIDERS,
    Auth,
    ListFilter,
    ListComponent,
    DataService,
    ListService
  ],
  bootstrap: [
    AppComponent,
    // EmbedComponent
  ]
})
export class AppModule { }
