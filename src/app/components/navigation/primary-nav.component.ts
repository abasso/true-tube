import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { ListFilterComponent } from './../content/listing/filter.component'
import { ContentTypes } from './../../definitions/content-types'
import { ListService } from './../../services/list.service'
import { ItemComponent } from './../content/item/item.component'
import { Auth } from './../../services/auth.service'
import * as _ from 'lodash'

@Component({
  selector: 'app-primary-nav',
  templateUrl: './primary-nav.component.html'
})
export class PrimaryNavComponent implements OnInit {
  @Output() searchSubmitted = new EventEmitter()
  private items: any[]
  private item: any = ItemComponent
  constructor(
    private filter: ListFilterComponent,
    private listService: ListService,
    private auth: Auth
  ) {
    this.items = _.filter(ContentTypes, {inMenu: true})
  }

  ngOnInit() {
    this.item = ItemComponent
  }

  resetRootPath(event: any, query: any) {
    event.preventDefault()
    this.listService.resetCurrentPath(query)
  }

  searchDone(event: any) {
    this.searchSubmitted.emit(event)
  }


}
