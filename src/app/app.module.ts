import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule} from '@angular/forms'

import { HttpModule } from '@angular/http'
import { RouterModule, Routes } from '@angular/router'
// import { Location } from '@angular/common'
// import { AUTH_PROVIDERS } from 'angular2-jwt'
import { AppComponent } from './app.component'
import { ListingComponent } from './components/content/listing/list.component'
import { HeaderComponent } from './components/global/header.component'
import { PrimaryNavComponent } from './components/navigation/primary-nav.component'
import { SearchComponent } from './components/navigation/search.component'
import { CallToActionComponent } from './components/messaging/call-to-action.component'
import { ItemComponent } from './components/content/item/item.component'
import { ListFilterComponent } from './components/content/listing/filter.component'
import { ListingSortComponent } from './components/content/listing/sort.component'
// import { EmbedComponent } from './components/content/embed/embed.component'
import { DataService } from './services/data.service'
import { ListService } from './services/list.service'
import { QueryStringPipe } from './pipes/query-string.pipe'
import { AttributePipe } from './pipes/attribute.pipe'
import { PaginationPipe } from './pipes/pagination.pipe'
import { EmbedMenuPipe } from './pipes/embed-menu.pipe'
import { SanitiseUrlPipe } from './pipes/sanitise-url.pipe'

import { Auth } from './services/auth.service'
import { ClipboardModule } from 'ngx-clipboard'
// import * as moment from 'moment'
// import * as _ from 'lodash'
// import * as Cookies from 'js-cookie'
import { FooterComponent } from './components/global/footer.component'
import { HomeComponent } from './components/content/home/home.component'
import { HomeListingComponent } from './components/content/home/list.component'
import { HomeSortComponent } from './components/content/home/sort.component'
import { CarouselComponent } from './components/content/home/carousel.component'
import { SwiperModule } from 'angular2-swiper-wrapper'
import { SwiperConfigInterface } from 'angular2-swiper-wrapper'
import { EventsBlockComponent } from './components/shared/events.component'
import { TopicsComponent } from './components/shared/topics.component'
import { PageComponent } from './components/content/pages/page.component'
import { FooterNavComponent } from './components/navigation/footer-nav.component'
import { AccessibilityNavComponent } from './components/navigation/accessibility-nav.component'
import { CalendarComponent } from './components/content/calendar/calendar.component'
import { EventComponent } from './components/content/event/event.component'
// import { MetaModule } from 'ng2-meta'

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      meta: {
        title: 'FUCK CHOPS',
        description: 'Description of the home page'
      }
    }
  },
  { path: 'list', component: ListingComponent},
  { path: 'calendar', component: CalendarComponent},
  // { path: 'embed/:id', component: EmbedComponent},
  { path: 'event/:id', component: EventComponent},
  { path: 'item/:id', component: ItemComponent},
  { path: 'page/:id', component: PageComponent},
  { path: 'films', component: ListingComponent, data: [{filter: 'typeFilm', type: 'content types'}] },
  { path: 'lesson plans', component: ListingComponent, data: [{filter: 'typeLesson', type: 'content types'}]},
  { path: 'assembly scripts', component: ListingComponent, data: [{filter: 'typeAssembly', type: 'content types'}]},
  { path: 'interactive', component: ListingComponent, data: [{filter: 'typeInteractive', type: 'content types'}]},
]

const SWIPER_CONFIG: SwiperConfigInterface = {
      pagination: '.swiper-pagination',
      slidesPerView: 1,
      paginationClickable: true,
      spaceBetween: 0,
      loop: false
    }


@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    HeaderComponent,
    PrimaryNavComponent,
    SearchComponent,
    CallToActionComponent,
    ItemComponent,
    ListFilterComponent,
    ListingSortComponent,
    PaginationPipe,
    QueryStringPipe,
    AttributePipe,
    EmbedMenuPipe,
    SanitiseUrlPipe,
    FooterComponent,
    // EmbedComponent,
    HomeComponent,
    HomeListingComponent,
    HomeSortComponent,
    CarouselComponent,
    EventsBlockComponent,
    TopicsComponent,
    PageComponent,
    FooterNavComponent,
    AccessibilityNavComponent,
    CalendarComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ClipboardModule,
    SwiperModule.forRoot(SWIPER_CONFIG),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    // AUTH_PROVIDERS,
    Auth,
    ListFilterComponent,
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
