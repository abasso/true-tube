import { Component, Input } from '@angular/core'
import { PaginationPipe } from './../../../pipes/pagination.pipe'
import { Observable } from 'rxjs/Rx'
import { DataService } from './../../../services/data.service'
import { ListService } from './../../../services/list.service'
import * as _ from 'lodash'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  providers: [
    PaginationPipe,
    ListService
  ]
})
export class ListingComponent {

  public itemCount: number
  public currentItemCount: number
  public data: Observable<any>
  public items: Observable<any>
  public showDescriptions:boolean
  public displayGrid:boolean = true
  public displayList:boolean = false
  public count: number
  public startVal: number
  public endVal: number
  public paginationData: {
    currentPage: number,
    itemsPerPage: number,
    totalPages: number,
    totalItems: number,
    pages: any[],
    itemsPerPageCurrent: any
  }

  constructor(private dataService: DataService, private listService: ListService) {
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

  resetPagination() {
    setTimeout(() => {
      this.paginationData.pages = []
      this.paginationData.totalPages = Math.ceil(this.paginationData.totalItems / this.paginationData.itemsPerPageCurrent)
      for(let i=0; i<this.paginationData.totalPages; i++) this.paginationData.pages.push(i+1)
      this.paginationData.currentPage = 0
    }, 1)
  }

  stringifyTitleArray(array: any) {
    array = _.filter(array, {active: true})
    array = _.map(array, 'label')
    let arrayString: string = array.join(', ')
    return arrayString.replace(/,([^,]*)$/, ' & $1')
  }

  pageTitle(subject: any, keystages: any, types: any, term: any, category: any, topics: any) {
    let showTopics: boolean = false
    if(!_.isUndefined(category) && category !== null) {
      if(_.findIndex(category[0].topics, { 'active': false}) !== -1 && _.findIndex(category[0].topics, { 'active': true}) !== -1) showTopics = true
    }
    topics = (showTopics) ? this.stringifyTitleArray(topics) : ''
    category = (_.isUndefined(category) || category === null || category === '') ? '' : category[0].label
    subject = (subject === 'All') ? '' : subject
    keystages = (_.findIndex(keystages, { 'active': true}) === -1) ? '' : 'Key Stage ' + this.stringifyTitleArray(keystages)
    types = (_.findIndex(types, { 'active': true}) === -1) ? '' : this.stringifyTitleArray(types)
    term = (term === null || term === '') ? '' : _.upperFirst(term)
    if(category === '' && topics === '' && subject === '' && keystages === '' && types === '' && term === '') return 'All Content'
    return category + ' ' + topics + ' ' + subject + ' ' + keystages + ' ' + term + ' ' + types
  }

}
