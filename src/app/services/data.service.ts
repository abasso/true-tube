import { Injectable } from '@angular/core'
import { Http, URLSearchParams } from '@angular/http'
import * as _ from 'lodash'
import * as moment from 'moment'
import 'rxjs/add/operator/map'
import {AuthHttp} from 'angular2-jwt'

@Injectable()
export class DataService {

  constructor(
    private http: Http,
    private authHttp: AuthHttp
  ) {
  }

  private baseUrl = 'http://api.truetube.co.uk/resources/_search'
  private meUrl = 'http://api.truetube.co.uk/me'
  private tempUrl = 'http://api.truetube.co.uk/resources/resource'
  private carouselUrl = 'http://api.truetube.co.uk/carousels/homepage/_search?sort=updated:desc'
  private menuUrl = 'http://api.truetube.co.uk/menus/menu/pages'
  private eventsUrl = 'http://api.truetube.co.uk/events/_search?sort=date.value:desc'
  private pagesUrl = 'http://api.truetube.co.uk/pages/_search'
  private itemPageUrl = 'http://api.truetube.co.uk/item_pages/page'

  search(data: any, types: any, keys: any, subject: any, topics: any, category: any, limit = 1000) {

    let termArray: string[] = []

    if (data.term) {
      termArray.push(data.term)
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
        if (index === topicArray.length - 1) {
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
    .get(this.baseUrl, { search })
    .map((response) => ( response.json()))
  }

  list(sort: string = null, limit = 1000) {
    let search: any = new URLSearchParams()
    if (sort) {
      search.set('sort', sort + ':desc')
    }
    search.set('size', limit)
    return this.http
    .get(this.baseUrl, { search })
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

  itemBySlug(slug: string = null, limit = 1) {
    let search: any = new URLSearchParams()
    search.set('q', 'slug:"' + slug + '"')
    return this.http
    .get(this.baseUrl, { search })
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
