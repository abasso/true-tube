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
import moment from 'moment';
import { Angulartics2 } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/dist/providers/ga/angulartics2-ga';
import * as Cookies from 'js-cookie';
var FooterComponent = (function () {
    function FooterComponent(angulartics2GoogleAnalytics, angulartics2) {
        this.angulartics2GoogleAnalytics = angulartics2GoogleAnalytics;
        this.angulartics2 = angulartics2;
        this.currentYear = moment().year();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.toggleSite = function (event) {
        Cookies.set('proxy_override', 'true');
        window.location.reload();
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Component({
        selector: 'app-footer',
        templateUrl: './footer.component.html'
    }),
    __metadata("design:paramtypes", [Angulartics2GoogleAnalytics,
        Angulartics2])
], FooterComponent);
export { FooterComponent };
//# sourceMappingURL=footer.component.js.map