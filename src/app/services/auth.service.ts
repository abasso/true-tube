import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import {AuthHttp, AuthConfig} from 'angular2-jwt';
import {Http, RequestOptions} from '@angular/http'
import { myConfig }        from './auth.config';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router'

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class Auth {
  // Configure Auth0
  private lock
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    // myConfig.options['auth'].params.state = JSON.stringify({pathname: route})
    this.lock = new Auth0Lock(myConfig.clientID, myConfig.domain, myConfig.options);
    // Add callback for lock `authenticated` event
    this.lock.on('authenticated', (authResult: any) => {
      localStorage.setItem('id_token', authResult.idToken);
      const redirectUrl: string = localStorage.getItem('redirectUrl');
      if (redirectUrl) {
          this.router.navigate([redirectUrl]);
      } else {
          this.router.navigate(['/me']);
      }
    });
  }

  public login(event: any) {
    event.preventDefault()
    console.log('called the login')
    localStorage.setItem('redirectUrl', this.router.url)
    // Call the show method to display the widget.
    this.lock.show()
  };

  public signup(event: any) {
    event.preventDefault()
    localStorage.setItem('redirectUrl', '/me')
    // Call the show method to display the widget.
    this.lock.show({initialScreen: 'signUp'})
  };

  public authenticated() {

    // Check if there's an unexpired JWT
    // It searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  };

  public logout(event: any) {
    event.preventDefault()
    // Remove token from localStorage
    localStorage.removeItem('id_token');
  };
}

@Injectable()
export class LoggedInGuard implements CanActivate
{
  constructor(private auth: Auth) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean
  {
    console.log("ITS BEEN AUTHENTICATED")
    return this.auth.authenticated();
  }
}

export function authFactory(
    http: Http,
    options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    // Config options if you want
  }), http, options);
}

// Include this in your ngModule providers
export const AUTH_PROVIDERS = {
  provide: AuthHttp,
  deps: [Http, RequestOptions],
  useFactory: authFactory
};
