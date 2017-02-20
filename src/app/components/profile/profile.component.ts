import {Component} from '@angular/core'
import {Profile} from './profile.model'
import {ActivatedRoute} from '@angular/router'
import * as _ from 'lodash'
import { Angulartics2GoogleAnalytics, Angulartics2 } from 'angulartics2'

@Component({
    templateUrl: './profile.component.html'
})
export class ProfileComponent {
    public profile: Profile
    public lists: any[] = []
    public menu: any[] = [
      {
        label: 'Profile',
        url: '/me',
        css: ''
      },
      {
        label: 'Lists',
        url: '/me/lists',
        css: 'icon icon-small icon-list icon-left'
      },
      {
        label: 'Favourites',
        url: '/me/list/favourites',
        css: 'icon icon-small icon-favourite icon-left'
      }
    ]
    constructor(
      route: ActivatedRoute
    ) {
        route.data.subscribe(data => {
            this.profile = data['profile']
        })
    }
}
