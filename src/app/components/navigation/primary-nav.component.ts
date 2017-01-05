import { Component, OnInit } from '@angular/core'
import { SearchComponent } from './search.component'
import { ListFilter } from './../content/listing/filter.component'
import { ContentTypes } from './../../definitions/content-types'
import { ListService } from './../../services/list.service'
import { ItemComponent } from './../content/item/item.component'
import { Auth } from './../../services/auth.service'
import _ from 'lodash'

@Component({
  selector: 'app-primary-nav',
  templateUrl: './primary-nav.component.html'
})
export class PrimaryNavComponent implements OnInit {
  private items: any[]
  private item = ItemComponent
  constructor(private filter: ListFilter, private listService: ListService, private auth: Auth) {
    this.items = _.filter(ContentTypes, {inMenu: true})

  }

  ngOnInit() {
    this.item = ItemComponent
  }

  resetRootPath(event, query) {
    event.preventDefault()
    this.listService.resetCurrentPath(query)
  }

  login() {
    this.auth.login()
  }

}
