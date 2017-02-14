import {Component} from '@angular/core'
import {Profile} from './profile.model'
import { ActivatedRoute, Router, Params } from '@angular/router'
import { DataService } from './../../services/data.service'
import {AuthHttp} from 'angular2-jwt'

import * as _ from 'lodash'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class UserListComponent {
  private data: any
  public profile: Profile
  public lists: any[] = []
  public items: any[] = []
  public title
  public id
  public deleteDialogTitle = 'Are you sure?'
  public message = ''
  public notificationMessage = ''
  public showNotification = false
  public notificationRemove = false
  public embeddedContent: any[] = []
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
    private dataService: DataService,
    public http: AuthHttp
  ) {
    this.data = this.route.params
    .switchMap((params: Params) => this.dataService.userList(params['id']))
    .subscribe(
      (data) => {
        this.data = data
        this.items = data.items
        this.route.params
        .map(params => params['id'])
        .subscribe((id) => {
          this.id = id
          this.title = data.title + ' (' + this.items.length + ' Item' + ((this.items.length > 1) ? 's' : '') + ')'
        })
        _.each(this.items, (item) => {
          item.slug = '/item/' + item.id
          console.log(item)
          item.contenttypes = []
          _.each(item.resource_types, (resource) => {
            item.contenttypes.push({'label': resource.label, 'class': 'btn-' + resource.type.replace('_', '-'), 'query': { 'tab': resource.type}, 'slug': '/item/' + item.id + '?tab=' + resource.type})
          })
        })
        // _.each(this.items, (item) => {
        //   item.typesCount = _.countBy(item.embedded, 'type')
        //   item.contenttypes = []
        //   _.each(item.typesCount, (type, key) => {
        //     let typestring = key.replace('_', ' ')
        //     if (_.findIndex(this.types, {'term': key}) !== -1) {
        //       item.contenttypes.push({'label': typestring, 'class': 'btn-' + key.replace('_', '-'), 'query': { 'tab': key}})
        //     }
        //   })
        // })
      }
    )

  }

  toggleNotification(item) {
    this.notificationRemove = true
    this.notificationMessage = 'Removed ' + item
    this.showNotification = true
    setTimeout(() => {
      this.showNotification = false
    }, 3000)
  }

  highlightRow(event, list) {
    event.preventDefault()
    _.each(this.items, (item) => {
      if (item.title === list) {
        item.removing = true
      }
    })
  }

  unHighlightRow(list) {
    _.each(this.items, (item) => {
      if (item.title === list) {
        item.removing = false
      }
    })
  }

  removeItem(event, key) {
    this.http.delete('http://api.truetube.co.uk/me/' + this.id + '/' + key).subscribe(
    (data) => {
      _.each(this.items, (item) => {
        if (item.id === key) {
          item.removed = true
          this.toggleNotification(item.title)
        }
      })
      setTimeout(() => {
         _.remove(this.items, {'id': key})
         this.title = this.data.title + ' (' + this.items.length + ' Item' + ((this.items.length > 1) ? 's' : '') + ')'
       }, 200)
    })
  }
}
