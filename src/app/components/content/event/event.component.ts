import { Component, OnInit } from '@angular/core';
import { DataService } from './../../../services/data.service'
import { ActivatedRoute, Router } from '@angular/router'
import { ContentTypes } from './../../../definitions/content-types'

import * as _ from 'lodash'
import moment from 'moment'

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styles: []
})
export class EventComponent implements OnInit {
  public data: any
  public items: any
  public types: any
  public paginationData = {
    currentPage: 0,
    itemsPerPage: 'All',
    itemsPerPageCurrent: 'All'
    }
  constructor(
    public dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
) {
  }
  ngOnInit() {
    this.types = ContentTypes
    this.data = this.dataService.events().subscribe(
      (data) => {
        window.scrollTo(0, 0)
        this.data = this.route.url
        .subscribe(
          (route) => {
            let slugString = ''
            _.each(route, (part) => {
              slugString += '/' + part.path
            })
            this.items = _.filter(data.hits.hits, (item) => {
              return item['_source'].slug === slugString
            })
            this.items[0].date = moment(this.items[0]._source.date.value).format('Do MMMM YYYY')
            _.each(this.items[0]._source.related, (item) => {
                item.contenttypes = []
                _.each(item.resource_types, (type, key) => {
                  if (_.findIndex(this.types, {'term': type.type}) !== -1) {
                    item.contenttypes.push({'label': type.label, 'class': 'btn-' + type.type.replace('_', '-'), 'query': { 'tab': type.type}})
                  }
                })
              })
            })
          }
        )
      }
  }
