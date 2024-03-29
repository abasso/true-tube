import { Injectable } from '@angular/core'
import { Http, URLSearchParams } from '@angular/http'
import * as _ from 'lodash'
import moment from 'moment'
import 'rxjs/add/operator/map'
import {AuthHttp} from 'angular2-jwt'
import { Headers, RequestOptions } from '@angular/http'

@Injectable()
export class DataService {

  private baseUrl = 'https://www.truetube.co.uk/v5/api/'
  private searchUrl = this.baseUrl + 'resources/_search'
  private meUrl = this.baseUrl + 'me'
  private feedBackUrl = this.baseUrl + 'feedback'
  private tempUrl = this.baseUrl + 'resources/resource'
  private carouselUrl = this.baseUrl + 'carousels/homepage/_search?sort=weight:asc'
  private menuUrl = this.baseUrl + 'menus/menu/pages'
  private eventsUrl = this.baseUrl + 'events/_search?sort=date.value:desc'
  private pagesUrl = this.baseUrl + 'pages/_search'
  private itemPageUrl = this.baseUrl + 'item_pages/page'

  constructor(
    private http: Http,
    private authHttp: AuthHttp
  ) {
  }

  search(data: any, types: any, keys: any, subject: any, topics: any, category: any, limit = 1000) {

    let termArray: string[] = []

    if (data.term) {
      termArray.push(encodeURIComponent(data.term))
    }

    if (_.findLastIndex(types, {'active': true}) !== -1) {
      let typeString = '(embedded.type:"'
      _.each(types, (type, index) => {
        if (type.active === true) {
          typeString += type.term
          if (types.length > 1 && parseInt(index) !== _.findLastIndex(types, {'active': true})) {
            typeString += '" AND "'
          }
          if (parseInt(index) === _.findLastIndex(types, {'active': true})) {
            typeString += '")'
          }
        }
      })
      termArray.push(typeString)
    }

    if (_.findLastIndex(keys, {'active': true}) !== -1) {
      let keyString = '(keystage:"'
      _.each(keys, (key, index) => {
        if (key.active === true) {
          keyString += key.term
          if (keys.length > 1 && parseInt(index) !== _.findLastIndex(keys, {'active': true})) {
            keyString += '" AND "'
          }
          if (parseInt(index) === _.findLastIndex(keys, {'active': true})) {
            keyString += '")'
          }
        }
      })
      termArray.push(keyString)
    }

    let topicArray: any = []

    if (topics.length && category) {
      let topicString = '(topic:"'
      _.each(topics, (topic, index) => {
        if (topic.active === true) {
          topicArray.push(topic.label);
        }
      })
      let count: any = _.countBy(topics, 'active');
      if (count.false === topics.length) {
        _.each(topics, (topic, index) => {
          topicArray.push(topic.label);
        })
      }

      _.each(topicArray, (topic, index) => {
        topicString += topic
        // let count: number = topicArray.length
        // let numberIndex: number = parseInt(index)
        if (topicArray.length > 1 && index !== topicArray.length) {
          topicString += '" OR "'
        }
        if (parseInt(index) === topicArray.length - 1) {
          topicString += '")'
        }
      })
      termArray.push(topicString)
    }

    if (_.isString(subject) && subject !== 'All') {
      termArray.push('(subjects:"' + subject + '")')
    }

    let termString: string = (termArray.length) ? termArray.join(' AND ') : ''
    let search: any = new URLSearchParams()
    if (termString !== '') {
      search.set('q', termString)
    }
    search.set('size', limit)
    return this.http
    .get(this.searchUrl, { search })
    .map((response) => ( response.json()))
  }

  list(sort: string = 'created', limit = 1000) {
    let search: any = new URLSearchParams()
    if (sort) {
      search.set('sort', sort + ':desc')
    }
    search.set('size', limit)
    return this.http
    .get(this.searchUrl, { search })
    .map((response) => (
      response.json()
    ))
  }

  item(uri: string) {
    let itemUrl: string = this.tempUrl + '/' + uri.split('?')[0]
    itemUrl = itemUrl.split('%3F')[0]
    return this.http
    .get(itemUrl)
    .map((response) => ( response.json() ))
  }

  itemBySlug(slug: any = null, limit = 1) {
    let slugString = ''
    _.each(slug, (part) => {
      let cleanedPath = part.path.split('?')[0]
      slugString += '/' + cleanedPath
    })

    let search: any = new URLSearchParams()
    search.set('q', 'slug:"' + slugString + '"')
    return this.http
    .get(this.searchUrl, { search })
    .map((response) => (
      response.json()
    ))
  }

  userList(uri: string) {
    let itemUrl: string = this.meUrl + '/' + uri.split('?')[0]
    return this.authHttp
    .get(itemUrl)
    .map((response) => ( response.json() ))
  }

  updateUser(data: any) {
    let header = new Headers()
    let options = new RequestOptions({ headers: header })
    header.append('Content-Type', 'multipart/form-data')
    return this.authHttp
    .post(this.meUrl, data, options)
    .subscribe((response) => ( console.log(response) ))
  }

  sendFeedback(data: any) {
    let header = new Headers()
    let options = new RequestOptions({ headers: header })
    header.append('Content-Type', 'application/json')
    return this.authHttp
    .post(this.feedBackUrl, data, options)
    .subscribe((response) => ( console.log(response) ))
  }

  carousel() {
    return this.http
    .get(this.carouselUrl)
    .map((response) => ( response.json()))
  }

  menus() {
    return this.http
    .get(this.menuUrl)
    .map((response) => ( response.json()))
  }

  events(month: number = null) {
    let search: any = new URLSearchParams()
    if (month !== null) {
      let monthStart: any = moment({ M: month }).format('YYYY-MM-DD')
      let monthEnd: any = moment({ M: month, D: moment({M: month} ).daysInMonth()}).format('YYYY-MM-DD')
      search.set('q', 'date.value:[' + monthStart + ' TO ' +  monthEnd + ']' )
    }
    search.set('size', '1000')
    return this.http
    .get(this.eventsUrl, { search })
    .map((response) => ( response.json()))
  }

  pages(page: string = null) {
    let search: any = new URLSearchParams()
    if (page !== null) {
      search.set('q', 'slug:' + page)
    }
    return this.http
    .get(this.pagesUrl, { search })
    .map((response) => ( response.json()))
  }

  itemPages(page: string = null) {
    return this.http
    .get(this.itemPageUrl + '/' + page, {})
    .map((response) => ( response.json()))
  }

  duration(seconds: number) {
    return moment('2017-01-01').startOf('day').seconds(seconds).format('mm:ss')
  }

  trimDescription(description: string) {
    let descriptionArray: string[] = description.split(' ')
    if (descriptionArray.length > 38) {
      descriptionArray.length = 38
    }
    return (descriptionArray.length < 38) ? description : descriptionArray.join(' ') + '...'
  }

}
