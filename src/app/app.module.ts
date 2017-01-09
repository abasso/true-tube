import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule} from '@angular/forms'

import { HttpModule } from '@angular/http'
import { RouterModule, Routes } from '@angular/router'
// import { Location } from '@angular/common'
import { AUTH_PROVIDERS } from 'angular2-jwt'
import { AppComponent } from './app.component'
import { ListingComponent } from './components/content/listing/list.component'
import { HeaderComponent } from './components/global/header.component'
import { PrimaryNavComponent } from './components/navigation/primary-nav.component'
import { SecondaryNavComponent } from './components/navigation/secondary-nav.component'
import { SearchComponent } from './components/navigation/search.component'
import { CallToActionComponent } from './components/messaging/call-to-action.component'
import { ItemComponent } from './components/content/item/item.component'
import { ListFilter } from './components/content/listing/filter.component'
import { ListingSortComponent } from './components/content/listing/sort.component'
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
import { HomeListingComponent } from './components/content/home/list.component';
import { CarouselComponent } from './components/content/home/carousel.component';
import { KSSwiperModule } from 'angular2-swiper';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'list', component: ListingComponent},
  // { path: 'embed/:id', component: EmbedComponent},
  { path: 'item/:id', component: ItemComponent},
  { path: 'films', component: ListingComponent, data: [{filter: 'typeFilm', type: 'content types'}] },
  { path: 'lesson plans', component: ListingComponent, data: [{filter: 'typeLesson', type: 'content types'}]},
  { path: 'assembly scripts', component: ListingComponent, data: [{filter: 'typeAssembly', type: 'content types'}]},
  { path: 'interactive', component: ListingComponent, data: [{filter: 'typeInteractive', type: 'content types'}]},
]


@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    HeaderComponent,
    PrimaryNavComponent,
    SecondaryNavComponent,
    SearchComponent,
    CallToActionComponent,
    ItemComponent,
    ListFilter,
    ListingSortComponent,
    PaginationPipe,
    QueryStringPipe,
    AttributePipe,
    EmbedMenuPipe,
    FooterComponent,
    // EmbedComponent,
    HomeComponent,
    HomeListingComponent,
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
    ListingComponent,
    DataService,
    ListService
  ],
  bootstrap: [
    AppComponent,
    // EmbedComponent
  ]
})
export class AppModule { }
