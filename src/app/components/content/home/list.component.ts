import { Component, Input, OnInit } from '@angular/core'
import { PaginationPipe } from './../../../pipes/pagination.pipe'
import { Observable, Subject, BehaviorSubject } from 'rxjs/Rx'
import { DataService } from './../../../services/data.service'
import { ListService } from './../../../services/list.service'
import { Categories } from './../../../definitions/categories'
import { ContentTypes } from './../../../definitions/content-types'

import _ from 'lodash'

@Component({
  selector: 'home-list',
  templateUrl: './list.component.html',
  providers: [
    PaginationPipe,
    ListService
  ]
})
export class HomeListingComponent implements OnInit {

  public data: any
  public items: Observable<any>
  public showDescriptions:boolean
  public displayGrid:boolean = true
  public displayList:boolean = false
  public startVal: number
  public endVal: number
  public loadMoreCount: number = 12
  public paginationData: {
    currentPage: number,
    itemsPerPage: number,
    totalPages: number,
    totalItems: number,
    pages: any[],
    itemsPerPageCurrent: any
  };
  public categories: any[] = Categories
  public sortBy: any = new BehaviorSubject('created')
  public contentLoading:boolean = true

  constructor(public dataService: DataService, public listService: ListService) {
    this.paginationData = {
      currentPage: 0,
      itemsPerPage: 6,
      totalPages: 3,
      totalItems: 0,
      pages: [],
      itemsPerPageCurrent: 9
    }
    this.showDescriptions = true
  }

  ngOnInit() {
    this.sortBy
    .subscribe(
      (data) => {
        this.data = this.dataService.list(data)
        let result = this.data.subscribe(
          (data) => {
            _.each(data.hits.hits, (item) => {
              item.typesCount = _.countBy(item._source.embedded, 'type')
              item.contenttypes = []
              _.each(item.typesCount, (type, key) => {
                _.each(ContentTypes, (contentType) => {
                  if(contentType.term === key && contentType.inMenu === true) {
                    let typestring = (type > 1) ? key.replace('_', ' ') + 's' : key.replace('_', ' ')
                    item.contenttypes.push({'label': typestring, 'class': 'btn-' + key.replace('_', '-')})
                  }
                })
              })
            })
            this.items = data.hits.hits
            _.each(this.items, (item) => {
              item.slug = '/item/' + item._id
              item._source.description = this.dataService.trimDescription(item._source.description)
              if(_.endsWith(item._source.description, '...')) item.readMore = true
              _.each(this.categories, (category) => {
                _.each(category.topics, (subCategory) => {
                  _.each(item._source.topic, (topic) => {
                    if(topic === subCategory.label) {
                      item._source.category = category
                    }
                  })
                })
              })
            })
            this.contentLoading = false
          }
        )
      }
    )
  }

  sort(event, sortBy) {
    event.preventDefault();
    this.sortBy.next(sortBy);
    this.paginationData.itemsPerPageCurrent = 12
  }

  loadMore(event) {
    event.preventDefault();
    this.loadMoreCount = this.loadMoreCount + 12
    this.paginationData.itemsPerPageCurrent = this.loadMoreCount
  }

  resetPagination() {
    setTimeout(() => {
      this.paginationData.pages = []
      this.paginationData.totalPages = Math.ceil(this.paginationData.totalItems / this.paginationData.itemsPerPageCurrent)
      for(let i=0;i<this.paginationData.totalPages;i++) this.paginationData.pages.push(i+1)
      this.paginationData.currentPage = 0
    }, 1)
  }

}