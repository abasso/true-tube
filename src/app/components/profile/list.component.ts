import {Component} from '@angular/core'
import {Profile} from './profile.model'
import { ActivatedRoute, Router, Params } from '@angular/router'
import { DataService } from './../../services/data.service'

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
    private dataService: DataService
  ) {
    this.data = this.route.params
    .switchMap((params: Params) => this.dataService.userList(params['id']))
    .subscribe(
      (data) => {
        console.log(data)
        this.items = data
        this.route.params
        .map(params => params['id'])
        .subscribe((id) => {
          this.title = _.capitalize(decodeURI(id)) + ' (' + this.items.length + ' Item' + ((this.items.length > 1) ? 's' : '') + ')'
        })
        _.each(this.items, (item) => {
          item.slug = "/item/" + item.id
        })
      }
    )

  }
}
