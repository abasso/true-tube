var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { HomeListingComponent } from './list.component';
import { DataService } from './../../../services/data.service';
import { Categories } from './../../../definitions/categories';
import * as Cookies from 'js-cookie';
import * as _ from 'lodash';
import { Angulartics2 } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/dist/providers/ga/angulartics2-ga';
var HomeSortComponent = (function () {
    function HomeSortComponent(ListingComponent, dataService, angulartics2GoogleAnalytics, angulartics2) {
        this.ListingComponent = ListingComponent;
        this.dataService = dataService;
        this.angulartics2GoogleAnalytics = angulartics2GoogleAnalytics;
        this.angulartics2 = angulartics2;
        this.categories = Categories;
        this.setListDisplay((_.isUndefined(Cookies.get('list-display'))) ? 'grid' : Cookies.get('list-display'));
        this.currentPage = 0;
        this.ListingComponent.paginationData.itemsPerPageCurrent = 12;
        this.ListingComponent.paginationData.pages = [];
        this.ListingComponent.paginationData.totalPages = Math.ceil(this.ListingComponent.paginationData.totalItems / this.ListingComponent.paginationData.itemsPerPageCurrent);
        for (var i = 0; i < this.ListingComponent.paginationData.totalPages; i++) {
            this.ListingComponent.paginationData.pages.push(i + 1);
        }
        this.pages = this.ListingComponent.paginationData.pages;
        this.loadMoreCount = 12;
        this.ListingComponent.paginationData.currentPage = this.currentPage;
    }
    HomeSortComponent.prototype.setListDisplay = function (type) {
        Cookies.set('list-display', type);
        this.ListingComponent.displayGrid = (type === 'grid') ? true : false;
        this.ListingComponent.displayList = (type === 'list') ? true : false;
    };
    HomeSortComponent.prototype.listDisplayClick = function (event, type) {
        event.preventDefault();
        this.setListDisplay(type);
        this.angulartics2.eventTrack.next({ action: 'Action', properties: { category: 'Set List Type', label: type } });
    };
    return HomeSortComponent;
}());
HomeSortComponent = __decorate([
    Component({
        selector: 'home-sort',
        templateUrl: './sort.component.html'
    }),
    __metadata("design:paramtypes", [HomeListingComponent,
        DataService,
        Angulartics2GoogleAnalytics,
        Angulartics2])
], HomeSortComponent);
export { HomeSortComponent };
//# sourceMappingURL=sort.component.js.map