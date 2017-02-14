import {Component} from '@angular/core'
import {Profile} from './profile.model'
import {ActivatedRoute} from '@angular/router'
import * as _ from 'lodash'
import {AuthHttp} from 'angular2-jwt'

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html'
})
export class UserListsComponent {
  public deleteDialogTitle = 'Are you sure?'
  public message = ''
  public confirmClicked = false
  public cancelClicked = false
  public profile: Profile
  public lockBlur = false
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
    public route: ActivatedRoute,
    public http: AuthHttp
  ) {
      route.data.subscribe(data => {
          this.profile = data['profile']
          _.each(this.profile.lists, (list, key) => {
            if (key === 'favourites') {
              this.lists.unshift({
                key: key,
                name: key + ' (' + list.items.length + ' Item' + ((list.items.length > 1) ? 's' : '') + ')',
                canDelete: false,
                url: '/me/list/' + key
              })
            } else {
              this.lists.push({
                key: key,
                name: decodeURI(key) + ' (' + list.items.length + ' Item' + ((list.items.length > 1) ? 's' : '') + ')',
                canDelete: true,
                url: '/me/list/' + key
              })
            }
          })
      })
  }

  highlightRow(event, list) {
    event.preventDefault()
    _.each(this.lists, (item) => {
      if (item.name === list) {
        item.removing = true
      }
    })
  }

  unHighlightRow(list) {
    _.each(this.lists, (item) => {
      if (item.name === list) {
        item.removing = false
      }
    })
  }

  removeList(event, key) {
    this.http.delete('http://api.truetube.co.uk/me/' + key, {}).subscribe(
    (data) => {
      _.each(this.lists, (item) => {
        if (item.key === key) {
          item.removed = true
        }
      })
      setTimeout(() => {
         _.remove(this.lists, {'key': key})
       }, 200)
    })
  }
}
