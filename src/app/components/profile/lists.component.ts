import {Component} from '@angular/core'
import {Profile} from './profile.model'
import {ActivatedRoute} from '@angular/router'
import * as _ from 'lodash'

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html'
})
export class UserListsComponent {

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
  constructor(route: ActivatedRoute) {
      route.data.subscribe(data => {
          this.profile = data['profile']
          _.each(this.profile.lists, (list, key) => {
            if (key === "favourites") {
              this.lists.unshift({
                name: key + ' (' + list.length + ' Item' + ((list.length > 1) ? 's' : '') + ')',
                canDelete: false,
                url: '/me/list/' + key
              })
            } else {
              this.lists.push({
                name: key + ' (' + list.length + ' Item' + ((list.length > 1) ? 's' : '') + ')',
                canDelete: true,
                url: '/me/list/' + key
              })
            }
          })
          console.log(this.lists)
      })
  }

}
