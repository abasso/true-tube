var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { Http, RequestOptions } from '@angular/http';
import { myConfig } from './auth.config';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
var Auth = (function () {
    function Auth(route, router) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.loggedInStatus = new Subject();
        // myConfig.options['auth'].params.state = JSON.stringify({pathname: route})
        this.lock = new Auth0Lock(myConfig.clientID, myConfig.domain, myConfig.options);
        // Add callback for lock `authenticated` event
        this.lock.on('authenticated', function (authResult) {
            localStorage.setItem('id_token', authResult.idToken);
            var redirectUrl = localStorage.getItem('redirectUrl');
            // Fetch profile information
            _this.lock.getProfile(authResult.idToken, function (error, profile) {
                if (error) {
                    // Handle error
                    return;
                }
                localStorage.setItem('profile', JSON.stringify(profile));
                _this.userProfile = profile;
                ga('set', 'userId', profile.user_id);
            });
            _this.loggedInStatus.next('update');
            if (redirectUrl) {
                _this.router.navigate([redirectUrl]);
            }
            else {
                _this.router.navigate(['/me']);
            }
        });
        this.lock.on('show', function () {
            var parent = document.querySelectorAll('.auth0-lock-body-content');
            parent[0].insertAdjacentHTML('beforebegin', '<div class="rm-unify-login"><a class="btn btn-rm-unify">Log In with <img src="/assets/images/logo_RM.png" /></a>or<div>');
            document.querySelectorAll('.btn-rm-unify')[0].addEventListener('click', function (event) {
                _this.loginWithRM(event);
            });
        });
    }
    Auth.prototype.login = function (event) {
        event.preventDefault();
        localStorage.setItem('redirectUrl', this.router.url);
        this.lock.show();
    };
    Auth.prototype.signup = function (event) {
        event.preventDefault();
        localStorage.setItem('redirectUrl', '/me');
        this.lock.show({ initialScreen: 'signUp' });
    };
    Auth.prototype.loginWithState = function (event, state) {
        event.preventDefault();
        localStorage.setItem('redirectUrl', this.router.url + state);
        this.lock.show();
    };
    Auth.prototype.loginWithRM = function (event) {
        event.preventDefault();
        // this.router.navigate(['/rm/callback'])
        window.location.href = 'https://www.truetube.co.uk/rm/';
    };
    Auth.prototype.checkRM = function () {
        return !!localStorage.getItem('rmlogin');
    };
    Auth.prototype.authenticated = function () {
        // Check if there's an unexpired JWT
        // It searches for an item in localStorage with key == 'id_token'
        return tokenNotExpired() || this.checkRM();
    };
    Auth.prototype.logout = function (event) {
        event.preventDefault();
        // Remove token from localStorage
        localStorage.removeItem('id_token');
        this.userProfile = undefined;
        if (this.checkRM()) {
            localStorage.removeItem('rmlogin');
            return window.location.href = 'http://www.truetube.co.uk/rm/logout.php';
        }
        this.router.navigate(['/']);
    };
    return Auth;
}());
Auth = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [ActivatedRoute,
        Router])
], Auth);
export { Auth };
var LoggedInGuard = (function () {
    function LoggedInGuard(auth) {
        this.auth = auth;
    }
    LoggedInGuard.prototype.canActivate = function (route, state) {
        return this.auth.authenticated() || !!localStorage.getItem('rmlogin');
    };
    return LoggedInGuard;
}());
LoggedInGuard = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Auth])
], LoggedInGuard);
export { LoggedInGuard };
export function authFactory(http, options) {
    return new AuthHttp(new AuthConfig({}), http, options);
}
// Include this in your ngModule providers
export var AUTH_PROVIDERS = {
    provide: AuthHttp,
    deps: [Http, RequestOptions],
    useFactory: authFactory
};
//# sourceMappingURL=auth.service.js.map