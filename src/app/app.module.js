var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import * as Raven from 'raven-js';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ListingComponent } from './components/content/listing/list.component';
import { ListItemComponent } from './components/content/listing/list-item.component';
import { HeaderComponent } from './components/global/header.component';
import { PrimaryNavComponent } from './components/navigation/primary-nav.component';
import { SearchComponent } from './components/navigation/search.component';
import { CallToActionComponent } from './components/messaging/call-to-action.component';
import { ItemComponent } from './components/content/item/item.component';
import { ItemListComponent } from './components/content/item/list.component';
import { VideoComponent } from './components/content/item/video.component';
import { AudioComponent } from './components/content/item/audio.component';
import { ListFilterComponent } from './components/content/listing/filter.component';
import { ListingSortComponent } from './components/content/listing/sort.component';
import { DataService } from './services/data.service';
import { ListService } from './services/list.service';
import { UserService } from './services/user.service';
import { QueryStringPipe } from './pipes/query-string.pipe';
import { ImagePipe } from './pipes/image.pipe';
import { AttributePipe } from './pipes/attribute.pipe';
import { PaginationPipe } from './pipes/pagination.pipe';
import { EmbedMenuPipe } from './pipes/embed-menu.pipe';
import { SanitiseUrlPipe } from './pipes/sanitise-url.pipe';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { Auth, AUTH_PROVIDERS, LoggedInGuard } from './services/auth.service';
// import { ClipboardModule } from 'ngx-clipboard'
import { FooterComponent } from './components/global/footer.component';
import { HomeComponent } from './components/content/home/home.component';
import { HomeListingComponent } from './components/content/home/list.component';
import { HomeSortComponent } from './components/content/home/sort.component';
import { CarouselComponent } from './components/content/home/carousel.component';
import { PartnersCarouselComponent } from './components/shared/partners-carousel.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { EventsBlockComponent } from './components/shared/events.component';
import { TopicsComponent } from './components/shared/topics.component';
import { AwardsComponent } from './components/messaging/awards.component';
import { CookieNoticeComponent } from './components/messaging/cookie-notice.component';
import { PageComponent } from './components/content/pages/page.component';
import { ItemPageComponent } from './components/content/pages/item-page.component';
import { FooterNavComponent } from './components/navigation/footer-nav.component';
import { UserNavComponent } from './components/navigation/user-nav.component';
import { PagesNavComponent } from './components/navigation/pages-nav.component';
import { AccessibilityNavComponent } from './components/navigation/accessibility-nav.component';
import { CalendarComponent } from './components/content/calendar/calendar.component';
import { EventComponent } from './components/content/event/event.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileResolver } from './components/profile/profile.resolver';
import { UserListsComponent } from './components/profile/lists.component';
import { UserListComponent } from './components/profile/list.component';
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/dist/providers/ga/angulartics2-ga';
import { FeedbackComponent } from './components/shared/feedback.component';
import { RmAuthComponent } from './components/profile/rm-auth.component';
// import {PopoverModule} from 'ngx-popover'
// import { MetaModule } from 'ng2-meta'
Raven
    .config('https://2978499738d5454a8c9bdaa1bc5ae034@sentry.io/141702')
    .install();
var appRoutes = [
    {
        path: '',
        component: HomeComponent,
        data: {
            meta: {
                description: 'Description of the home page'
            }
        }
    },
    { path: 'list',
        component: ListingComponent
    },
    { path: 'calendar',
        component: CalendarComponent
    },
    // { path: 'embed/:id', component: EmbedComponent},
    {
        path: 'event/:id',
        component: EventComponent
    },
    {
        path: 'item/:id',
        component: ItemComponent
    },
    {
        path: 'film/:slug',
        component: ItemComponent
    },
    {
        path: 'interactive/:slug',
        component: ItemComponent
    },
    {
        path: 'audio/:slug',
        component: ItemComponent
    },
    {
        path: 'node/:slug',
        component: ItemComponent
    },
    {
        path: 'awards',
        component: ItemPageComponent
    },
    {
        path: 'team',
        component: ItemPageComponent
    },
    {
        path: 'partners',
        component: ItemPageComponent
    },
    {
        path: 'terms-and-conditions',
        component: PageComponent
    },
    {
        path: 'privacy-and-cookies',
        component: PageComponent
    },
    {
        path: 'about',
        component: PageComponent
    },
    {
        path: 'films',
        component: ListingComponent,
        data: [{ filter: 'typeFilm', type: 'content types' }]
    },
    {
        path: 'lesson plans',
        component: ListingComponent,
        data: [{ filter: 'typeLesson',
                type: 'content types' }]
    },
    {
        path: 'assembly scripts',
        component: ListingComponent,
        data: [{ filter: 'typeAssembly',
                type: 'content types' }]
    },
    {
        path: 'interactive',
        component: ListingComponent,
        data: [{ filter: 'typeInteractive',
                type: 'content types' }]
    },
    {
        path: 'me',
        component: ProfileComponent,
        canActivate: [LoggedInGuard],
        resolve: {
            profile: ProfileResolver
        }
    },
    {
        path: 'me/lists',
        component: UserListsComponent,
        canActivate: [LoggedInGuard],
        resolve: {
            profile: ProfileResolver
        }
    },
    {
        path: 'me/list/:id',
        component: UserListComponent,
        canActivate: [LoggedInGuard],
        resolve: {
            profile: ProfileResolver
        }
    },
    {
        path: 'rmcallback',
        component: RmAuthComponent
    }
];
var SWIPER_CONFIG = {
    pagination: '.swiper-pagination',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 0,
    loop: false,
    autoplay: 5000
};
var RavenErrorHandler = (function () {
    function RavenErrorHandler() {
    }
    RavenErrorHandler.prototype.handleError = function (err) {
        Raven.captureException(err.originalError);
    };
    return RavenErrorHandler;
}());
export { RavenErrorHandler };
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            AccessibilityNavComponent,
            AppComponent,
            AttributePipe,
            AwardsComponent,
            CalendarComponent,
            CallToActionComponent,
            CarouselComponent,
            CookieNoticeComponent,
            EmbedMenuPipe,
            EventComponent,
            EventsBlockComponent,
            FooterComponent,
            FooterNavComponent,
            HeaderComponent,
            HomeComponent,
            HomeListingComponent,
            HomeSortComponent,
            ImagePipe,
            ItemComponent,
            ItemPageComponent,
            ItemListComponent,
            ListFilterComponent,
            ListingComponent,
            ListItemComponent,
            ListingSortComponent,
            PageComponent,
            PagesNavComponent,
            PaginationPipe,
            PartnersCarouselComponent,
            VideoComponent,
            AudioComponent,
            PrimaryNavComponent,
            ProfileComponent,
            QueryStringPipe,
            SanitiseUrlPipe,
            SearchComponent,
            TopicsComponent,
            UserListComponent,
            UserListsComponent,
            UserNavComponent,
            FeedbackComponent,
            RmAuthComponent
        ],
        imports: [
            // PopoverModule,
            BrowserModule,
            // ClipboardModule,
            ConfirmationPopoverModule.forRoot({
                confirmButtonType: 'danger'
            }),
            FormsModule,
            HttpModule,
            ReactiveFormsModule,
            RouterModule.forRoot(appRoutes),
            SwiperModule.forRoot(SWIPER_CONFIG),
            Angulartics2Module.forRoot([Angulartics2GoogleAnalytics])
        ],
        providers: [
            AUTH_PROVIDERS,
            Auth,
            DataService,
            ListFilterComponent,
            ListingComponent,
            ListService,
            LoggedInGuard,
            ProfileResolver,
            UserService,
            { provide: ErrorHandler, useClass: RavenErrorHandler }
        ],
        bootstrap: [
            AppComponent
        ]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map