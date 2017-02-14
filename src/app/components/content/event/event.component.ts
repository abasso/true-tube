import { Component, OnInit } from '@angular/core';
import { DataService } from './../../../services/data.service'
import { ActivatedRoute, Router } from '@angular/router'
import { ContentTypes } from './../../../definitions/content-types'

import * as _ from 'lodash'
import * as moment from 'moment'

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styles: []
})
export class EventComponent implements OnInit {
  private data: any
  private items: any
  private types
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
        this.data = this.route.params
        .subscribe(
          (route) => {
            this.items = _.filter(data.hits.hits, {_id: route['id'] })
            this.items[0].date = moment(this.items[0]._source.date.value).format('Do MMMM YYYY')
            _.each(this.items[0]._source.related, (item) => {
              item.slug = '/item/' + item.uuid
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
