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

  private baseUrl = 'http://139.162.232.95/resource/_search?size=1000'

  search(term: string, types: string[], subjects: string[], keystages: string[], topics: string[]) {
    let aggTerm = ''
    if(term) aggTerm += term
    if(!_.isUndefined(types)) {
      let typeTerm = '(embedded.type:'
      _.forEach(types, (type, index) => {
        typeTerm += (index === types.length) ? type + ')' : type + '%20AND%20'
      })
      aggTerm += typeTerm
    }
    console.log(aggTerm);
    let search = new URLSearchParams()
    if(aggTerm !== '') search.set('q', aggTerm);
    search.set('size', '1000')
    return this.http
      .get('http://139.162.232.95/resource/_search', { search })
      .map((response) => ( response.json() )
    )
  }
}

// @Injectable()
// export class DataService {
//
//   constructor(private http: Http, private jsonp: Jsonp) {
//   }
//
//   private baseUrl = 'http://139.162.232.95/resource/_search?size=1000';
//
//   search(term: string) {
//     let search = new URLSearchParams();
//     let body = {};
//     body.query = {};
//     body.query.queryString = {}
//     if(term) body.query.queryString = term;
//     // search.set('q', term)
//
//     // search.set('size', '1000')
//     return this.http
//       .post('http://139.162.232.95/resource/resource/_search', body, { search })
//       .map((response) => ( response.json() )
//     );
//   }
// }
