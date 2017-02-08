import { Component } from '@angular/core'
import { ListingComponent } from './list.component'
import { ActivatedRoute, Router } from '@angular/router'

import * as _ from 'lodash'
import * as Cookies from 'js-cookie'

@Component({
  selector: 'listing-sort',
  templateUrl: './sort.component.html'
})
export class ListingSortComponent {

  private pages: number[]
  private itemsPerPage: string[]
  private currentPage: number
  private loadMoreCount: number
  private currentParams: any
  constructor(
    public ListingComponent: ListingComponent,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.itemsPerPage = [
      '12',
      '24',
      '48',
      'All'
    ]

    this.route.queryParams
    .subscribe((params) => {
      this.currentParams = _.assign({}, params)
    })

    this.setListDisplay((_.isUndefined(Cookies.get('list-display'))) ? 'grid' : Cookies.get('list-display'))
    this.currentPage = 0
    this.ListingComponent.paginationData.itemsPerPageCurrent = (_.isUndefined(Cookies.get('items-per-page'))) ? this.itemsPerPage[0] : Cookies.get('items-per-page')
    this.ListingComponent.paginationData.pages = []
    this.ListingComponent.paginationData.totalPages = Math.ceil(this.ListingComponent.paginationData.totalItems / this.ListingComponent.paginationData.itemsPerPageCurrent)
    for (let i = 0; i < this.ListingComponent.paginationData.totalPages; i++) {
      this.ListingComponent.paginationData.pages.push(i + 1)
    }
    this.pages = this.ListingComponent.paginationData.pages
    this.loadMoreCount = 12
    // this.ListingComponent.paginationData.currentPage = 0
  }

  setPage(event: any, arg) {
    if (arg === 'next') {
      event.preventDefault()
      if (this.ListingComponent.paginationData.currentPage === this.ListingComponent.paginationData.totalPages - 1) {
        return
      }
      event.target.value = ++this.ListingComponent.paginationData.currentPage
    }
    if (arg === 'prev') {
      event.preventDefault()
      if (this.ListingComponent.paginationData.currentPage === 0) {
        return
      }
      event.target.value = --this.ListingComponent.paginationData.currentPage
    }
    let appendedQuery = ''
    let pageNumber = parseInt(event.target.value)
    let hasPage = false
    pageNumber++
    let pageNumberString = pageNumber.toString()
    _.each(this.currentParams, (value, key) => {
      if (key === 'page') {
        hasPage = true
        value = pageNumberString
      }
      if (value.length) {
        appendedQuery += key + '=' + value.trim() + '&'
      }
    })
    if (!hasPage) {
      appendedQuery += 'page=' + pageNumberString
    }
    this.router.navigateByUrl('/list?' + appendedQuery)
  }

  setItemsPerPage(event: any) {
    event.preventDefault()
    Cookies.set('items-per-page', event.target.value)
    this.ListingComponent.paginationData.itemsPerPageCurrent = event.target.value
    this.ListingComponent.paginationData.totalPages = Math.ceil(this.ListingComponent.paginationData.totalItems / this.ListingComponent.paginationData.itemsPerPageCurrent)
    this.ListingComponent.paginationData.pages = []
    for (let i = 0; i < this.ListingComponent.paginationData.totalPages; i++) {
      this.ListingComponent.paginationData.pages.push(i + 1)
    }
    this.pages = this.ListingComponent.paginationData.pages
    this.ListingComponent.paginationData.currentPage = 0
  }

  setListDisplay(type: any) {
    Cookies.set('list-display', type)
    this.ListingComponent.displayGrid = (type === 'grid') ? true : false
    this.ListingComponent.displayList = (type === 'list') ? true : false
  }

  listDisplayClick(event: any, type: any) {
    event.preventDefault()
    this.setListDisplay(type)
  }

  loadMore(event: any) {
    event.preventDefault()
    this.loadMoreCount = this.loadMoreCount + 12
    this.ListingComponent.paginationData.itemsPerPageCurrent = this.loadMoreCount
  }
}
