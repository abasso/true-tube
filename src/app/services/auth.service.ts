import { Injectable } from '@angular/core'
import { tokenNotExpired } from 'angular2-jwt'
import {AuthHttp, AuthConfig} from 'angular2-jwt'
import {Http, RequestOptions} from '@angular/http'
import { myConfig } from './auth.config'
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router'
import { ActivatedRoute, Router } from '@angular/router'
import { Subject } from 'rxjs/Subject'
declare let ga: Function
import * as _ from 'lodash'

// Avoid name not found warnings
declare var Auth0Lock: any

@Injectable()
export class Auth {
  // Configure Auth0
  private lock: any
  private userProfile: any
  public loggedInStatus: any = new Subject()
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    // myConfig.options['auth'].params.state = JSON.stringify({pathname: route})
    this.lock = new Auth0Lock(myConfig.clientID, myConfig.domain, myConfig.options)
    // Add callback for lock `authenticated` event
    this.lock.on('authenticated', (authResult: any) => {
      localStorage.setItem('id_token', authResult.idToken)
      const redirectUrl: string = localStorage.getItem('redirectUrl')
      // Fetch profile information
       this.lock.getProfile(authResult.idToken, (error: any, profile: any) => {
         if (error) {
           // Handle error
           return
         }
         localStorage.setItem('profile', JSON.stringify(profile))
         this.userProfile = profile
         ga('set', 'userId', profile.user_id)
       })
       this.loggedInStatus.next('update')
      if (redirectUrl) {
          this.router.navigate([redirectUrl])
      } else {
          this.router.navigate(['/me'])
      }
    })
    this.lock.on('show', () => {
      let parent: any = document.querySelectorAll('.auth0-lock-body-content')
      parent[0].insertAdjacentHTML('beforebegin', '<div class="rm-unify-login"><a class="btn btn-rm-unify">Log In with <img src="/assets/images/logo_RM.png" /></a>or<div>')
      document.querySelectorAll('.btn-rm-unify')[0].addEventListener('click', (event) => {
        this.loginWithRM(event)
      })

    })


  }

  public login(event: any) {
    event.preventDefault()
    localStorage.setItem('redirectUrl', this.router.url)
    this.lock.show()
  }

  public signup(event: any) {
    event.preventDefault()
    localStorage.setItem('redirectUrl', '/me')
    this.lock.show({initialScreen: 'signUp'})
  }

  public loginWithState(event: any, state: any) {
    event.preventDefault()
    localStorage.setItem('redirectUrl', this.router.url + state)
    this.lock.show()
  }

  public loginWithRM(event: any) {
    event.preventDefault()
    this.router.navigate(['/rm/callback'])
  }

  public checkRM() {
    return (_.isUndefined(localStorage.getItem('rmlogin'))) ? false : true
  }

  public authenticated() {
    // Check if there's an unexpired JWT
    // It searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired()
  }

  public logout(event: any) {
    event.preventDefault()


    // Remove token from localStorage
    localStorage.removeItem('id_token')
    this.userProfile = undefined
    if (this.checkRM()) {
      localStorage.removeItem('rmlogin')
      return window.location.href = 'http://www.truetube.co.uk/rm/logout.php'
    }
    this.router.navigate(['/'])
  }
}

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private auth: Auth) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.auth.authenticated()
  }
}

export function authFactory(
    http: Http,
    options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    // Config options if you want
  }), http, options)
}

// Include this in your ngModule providers
export const AUTH_PROVIDERS = {
  provide: AuthHttp,
  deps: [Http, RequestOptions],
  useFactory: authFactory
}
