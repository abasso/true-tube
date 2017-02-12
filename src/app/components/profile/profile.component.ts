import {Component} from '@angular/core'
import {Profile} from './profile.model'
import {ActivatedRoute} from '@angular/router'
import * as _ from 'lodash'

@Component({
    templateUrl: './profile.component.html'
})
export class ProfileComponent {
    public profile: Profile
    public lists: any[] = []
    public menu: any[] = [
      {
        label: 'Profile',
        css: ''
      },
      {
        label: 'Lists',
        css: 'icon icon-small icon-list icon-left'
      },
      {
        label: 'Favourites',
        css: 'icon icon-small icon-favourite icon-left'
      }
    ]
    constructor(route: ActivatedRoute) {
        route.data.subscribe(data => {
            this.profile = data['profile']
            _.each(this.profile.lists, (list, key) => {
              this.lists.push(key)
            })
            console.log(this.lists)
        })
    }
}
