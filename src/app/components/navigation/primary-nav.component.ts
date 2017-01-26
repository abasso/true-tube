import { Component, OnInit, Output, EventEmitter } from '@angular/core'
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
  @Output() searchSubmitted = new EventEmitter()
  private items: any[]
  public aSearchValue
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

  searchDone(event) {
    this.searchSubmitted.emit(event)
  }

  login() {
    this.auth.login()
  }

}
