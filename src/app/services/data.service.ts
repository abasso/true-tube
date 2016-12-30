import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http'
import { Observable } from 'rxjs/Rx'
import _ from 'lodash'
import 'rxjs/add/operator/map'

@Injectable()
export class DataService {

  constructor(private http: Http) {
  }

  private baseUrl = 'http://api.truetube.co.uk/resource/_search'
  private tempUrl = 'http://api.truetube.co.uk/resource2/resource'

  search(data, types, keys, subject, topics, category) {

    let termArray = []

    if(data.term) termArray.push(data.term)

    if(_.findLastIndex(types, {'active': true}) !== -1) {
      let typeString = '(embedded.type:"'
      _.forEach(types, (type, index) => {
        if(type.active === true) {
          typeString += type.term
          if(types.length > 1 && index !== _.findLastIndex(types, {'active': true})) typeString += '" AND "'
          if(index === _.findLastIndex(types, {'active': true})) typeString += '")'
        }
      })
      termArray.push(typeString)
    }

    if(_.findLastIndex(keys, {'active': true}) !== -1) {
      let keyString = '(keystage:"'
      _.forEach(keys, (key, index) => {
        if(key.active === true) {
          keyString += key.term
          if(keys.length > 1 && index !== _.findLastIndex(keys, {'active': true})) keyString += '" AND "'
          if(index === _.findLastIndex(keys, {'active': true})) keyString += '")'
        }
      })
      termArray.push(keyString)
    }

    let topicArray = [];

    if(topics.length && category) {
      let topicString = '(topic:"'
      _.forEach(topics, (topic, index) => {
        if(topic.active === true) {
          topicArray.push(topic.label);
        }
      })
      let count = _.countBy(topics, 'active');
      if(count.false === topics.length) {
        _.forEach(topics, (topic, index) => {
          topicArray.push(topic.label);
        })
      }

      _.forEach(topicArray, (topic, index) => {
        topicString += topic;
        if(topicArray.length > 1 && index !== topicArray.length - 1) topicString += '" OR "'
        if(index === topicArray.length - 1) topicString += '")'
      })
      termArray.push(topicString)
    }

    if(_.isString(subject) && subject !== 'All') termArray.push('(subjects:"' + subject + '")')

    let termString = (termArray.length) ? termArray.join(' AND ') : ''
    let search = new URLSearchParams()
    if(termString !== '') search.set('q', termString)
    search.set('size', '1000')
    return this.http
    .get(this.baseUrl, { search })
    .map((response) => ( response.json() )
  )
}

item(uri) {
  let itemUrl = this.tempUrl + '/' + uri
  return this.http
  .get(itemUrl)
  .map((response) => ( response.json() ))
}



}
