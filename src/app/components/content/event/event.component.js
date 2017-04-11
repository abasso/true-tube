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
import { DataService } from './../../../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentTypes } from './../../../definitions/content-types';
import * as _ from 'lodash';
import moment from 'moment';
var EventComponent = (function () {
    function EventComponent(dataService, route, router) {
        this.dataService = dataService;
        this.route = route;
        this.router = router;
        this.paginationData = {
            currentPage: 0,
            itemsPerPage: 'All',
            itemsPerPageCurrent: 'All'
        };
    }
    EventComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.types = ContentTypes;
        this.data = this.dataService.events().subscribe(function (data) {
            window.scrollTo(0, 0);
            _this.data = _this.route.url
                .subscribe(function (route) {
                var slugString = '';
                _.each(route, function (part) {
                    slugString += '/' + part.path;
                });
                _this.items = _.filter(data.hits.hits, function (item) {
                    return item['_source'].slug === slugString;
                });
                _this.items[0].date = moment(_this.items[0]._source.date.value).format('Do MMMM YYYY');
                _.each(_this.items[0]._source.related, function (item) {
                    item.contenttypes = [];
                    _.each(item.resource_types, function (type, key) {
                        if (_.findIndex(_this.types, { 'term': type.type }) !== -1) {
                            item.contenttypes.push({ 'label': type.label, 'class': 'btn-' + type.type.replace('_', '-'), 'query': { 'tab': type.type } });
                        }
                    });
                });
            });
        });
    };
    return EventComponent;
}());
EventComponent = __decorate([
    Component({
        selector: 'app-event',
        templateUrl: './event.component.html',
        styles: []
    }),
    __metadata("design:paramtypes", [DataService,
        ActivatedRoute,
        Router])
], EventComponent);
export { EventComponent };
//# sourceMappingURL=event.component.js.map