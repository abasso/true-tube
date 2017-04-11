var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaginationPipe } from './../../../pipes/pagination.pipe';
import { DataService } from './../../../services/data.service';
import { ListService } from './../../../services/list.service';
import * as _ from 'lodash';
import { BehaviorSubject } from 'rxjs/Rx';
var ListingComponent = (function () {
    function ListingComponent(dataService, listService, route) {
        var _this = this;
        this.dataService = dataService;
        this.listService = listService;
        this.route = route;
        this.displayGrid = true;
        this.displayList = false;
        this.stickyTitle = false;
        this.currentPage = new BehaviorSubject(0);
        this.paginationData = {
            currentPage: 0,
            itemsPerPage: 6,
            totalPages: 3,
            totalItems: 0,
            pages: [],
            itemsPerPageCurrent: 9
        };
        this.route.queryParams
            .map(function (params) { return params['page']; })
            .subscribe(function (page) {
            if (!_.isUndefined(page)) {
                _this.paginationData.currentPage = page - 1;
                _this.currentPage.next(page - 1);
            }
        });
    }
    ListingComponent.prototype.resetPagination = function () {
        var _this = this;
        setTimeout(function () {
            _this.paginationData.pages = [];
            _this.paginationData.totalPages = Math.ceil(_this.paginationData.totalItems / _this.paginationData.itemsPerPageCurrent);
            for (var i = 0; i < _this.paginationData.totalPages; i++) {
                _this.paginationData.pages.push(i + 1);
            }
            _this.paginationData.currentPage = _this.paginationData.currentPage;
            _this.currentPage.next(_this.paginationData.currentPage);
        }, 1);
    };
    ListingComponent.prototype.stringifyTitleArray = function (array) {
        array = _.filter(array, { active: true });
        array = _.map(array, 'label');
        var arrayString = array.join(', ');
        return arrayString.replace(/,([^,]*)$/, ' & $1');
    };
    ListingComponent.prototype.pageTitle = function (subject, keystages, types, term, category, topics) {
        var showTopics = false;
        if (!_.isUndefined(category) && category !== null) {
            if (_.findIndex(category[0].topics, { 'active': false }) !== -1 && _.findIndex(category[0].topics, { 'active': true }) !== -1) {
                showTopics = true;
            }
        }
        topics = (showTopics) ? this.stringifyTitleArray(topics) : '';
        category = (_.isUndefined(category) || category === null || category === '') ? '' : category[0].label;
        subject = (subject === 'All') ? '' : subject;
        keystages = (_.findIndex(keystages, { 'active': true }) === -1) ? '' : 'Key Stage ' + this.stringifyTitleArray(keystages);
        types = (_.findIndex(types, { 'active': true }) === -1) ? '' : this.stringifyTitleArray(types);
        term = (term === null || term === '') ? '' : _.upperFirst(term);
        if (category === '' && topics === '' && subject === '' && keystages === '' && types === '' && term === '') {
            return 'All Content';
        }
        return category + ' ' + topics + ' ' + subject + ' ' + keystages + ' ' + term + ' ' + types;
    };
    ListingComponent.prototype.scroll = function (event) {
        var main = document.querySelector('main').getBoundingClientRect();
        if (main.top <= 0) {
            this.stickyTitle = true;
        }
        else {
            this.stickyTitle = false;
        }
    };
    return ListingComponent;
}());
__decorate([
    HostListener('window:scroll', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ListingComponent.prototype, "scroll", null);
ListingComponent = __decorate([
    Component({
        selector: 'app-list',
        templateUrl: './list.component.html',
        providers: [
            PaginationPipe,
            ListService
        ]
    }),
    __metadata("design:paramtypes", [DataService,
        ListService,
        ActivatedRoute])
], ListingComponent);
export { ListingComponent };
//# sourceMappingURL=list.component.js.map