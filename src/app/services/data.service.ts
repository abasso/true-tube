import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import _ from 'lodash';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {

  constructor(private http: Http, private jsonp: Jsonp) {
  }

  private baseUrl = 'http://api.truetube.co.uk/resource/_search?size=1000'

  search(data, types, keys, subject, topics) {
    console.log("GETTING DATA");
    let termArray = [];

    if(data.term) termArray.push(data.term);

    if(_.findLastIndex(types, {'active': true}) !== -1) {
      let typeString = '(embedded.type:"'
      _.forEach(types, (type, index) => {
        if(type.active === true) {
          typeString += type.term;
          if(types.length > 1 && index !== _.findLastIndex(types, {'active': true})) typeString += '" AND "';
          if(index === _.findLastIndex(types, {'active': true})) typeString += '")';
        }
      })
      termArray.push(typeString);
    }

    if(_.findLastIndex(keys, {'active': true}) !== -1) {
      let keyString = '(keystage:"'
      _.forEach(keys, (key, index) => {
        if(key.active === true) {
          keyString += key.term;
          if(keys.length > 1 && index !== _.findLastIndex(keys, {'active': true})) keyString += '" AND "';
          if(index === _.findLastIndex(keys, {'active': true})) keyString += '")';
        }
      })
      termArray.push(keyString);
    }

    if(topics.length) {
      let topicString = '(topic:"'
      _.forEach(topics, (topic, index) => {
        topicString += topic.term;
        if(topics.length > 1 && index !== topics.length - 1) topicString += '" AND "';
        if(index === topics.length - 1) topicString += '")';
      })
      termArray.push(topicString);
    }

    if(_.isString(subject) && subject !== 'All') termArray.push('(subjects:"' + subject + '")');

    let termString = (termArray.length) ? termArray.join(' AND ') : '';
    let search = new URLSearchParams()
    if(termString !== '') search.set('q', termString);
    search.set('size', '1000');
    return this.http
      .get('http://api.truetube.co.uk/resource/_search', { search })
      .map((response) => ( response.json() )
    )
  }



}
