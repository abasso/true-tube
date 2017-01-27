import { Component, OnInit } from '@angular/core'
import { ListingComponent } from './list.component'
import * as _ from 'lodash'
import * as Cookies from 'js-cookie'

@Component({
  selector: 'listing-sort',
  templateUrl: './sort.component.html'
})
export class ListingSortComponent {

  pages: number[]
  itemsPerPageCurrent: any
  itemsPerPage: string[]
  currentPage: number
  loadMoreCount: number

  constructor(private ListingComponent: ListingComponent) {
    this.itemsPerPage = [
      '12',
      '24',
      '48',
      'All'
    ]

    this.setListDisplay((_.isUndefined(Cookies.get('list-display'))) ? 'grid' : Cookies.get('list-display'))
    this.currentPage = 0
    this.ListingComponent.paginationData.itemsPerPageCurrent = (_.isUndefined(Cookies.get('items-per-page'))) ? this.itemsPerPage[0] : Cookies.get('items-per-page')
    this.ListingComponent.paginationData.pages = []
    this.ListingComponent.paginationData.totalPages = Math.ceil(this.ListingComponent.paginationData.totalItems / this.ListingComponent.paginationData.itemsPerPageCurrent)
    for(let i=0;i<this.ListingComponent.paginationData.totalPages;i++) this.ListingComponent.paginationData.pages.push(i+1)
    this.pages = this.ListingComponent.paginationData.pages
    this.loadMoreCount = 12
    this.ListingComponent.paginationData.currentPage = this.currentPage
  }

  setPage(event: any) {
    event.preventDefault()
    this.ListingComponent.paginationData.currentPage = event.target.value
  }

  setItemsPerPage(event: any) {
    event.preventDefault()
    Cookies.set('items-per-page', event.target.value)
    this.ListingComponent.paginationData.itemsPerPageCurrent = event.target.value
    this.ListingComponent.paginationData.totalPages = Math.ceil(this.ListingComponent.paginationData.totalItems / this.ListingComponent.paginationData.itemsPerPageCurrent)
    this.ListingComponent.paginationData.pages = []
    for(let i=0;i<this.ListingComponent.paginationData.totalPages;i++) this.ListingComponent.paginationData.pages.push(i+1)
    this.pages = this.ListingComponent.paginationData.pages
    this.ListingComponent.paginationData.currentPage = 0
  }

  hideDescriptions(event: any) {
    this.ListingComponent.showDescriptions = (this.ListingComponent.showDescriptions === true) ? false : true
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
