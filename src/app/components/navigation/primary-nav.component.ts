import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { ListFilterComponent } from './../content/listing/filter.component'
import { Angulartics2GoogleAnalytics, Angulartics2 } from 'angulartics2'

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
  public items: any[]
  public item: any = ItemComponent
  constructor(
    private filter: ListFilterComponent,
    private listService: ListService,
    public auth: Auth,
    public angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
    private angulartics2: Angulartics2
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
    this.angulartics2.eventTrack.next({ action: 'Search', properties: { category: 'Primary Nav', label: event.target.elements[0].value}})
    this.searchSubmitted.emit(event)
  }


}
