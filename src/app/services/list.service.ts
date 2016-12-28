import { Injectable, Output } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import _ from 'lodash';

@Injectable()
export class ListService {

  private resetCurrentPathSource = new Subject();

  pathToReset$ = this.resetCurrentPathSource.asObservable();

  resetCurrentPath(query:any) {
    this.resetCurrentPathSource.next(query);
  }

  stringifyTitleArray(array) {
    array = _.filter(array, {active: true});
    array = _.map(array, 'label');
    let arrayString = array.join(', ');
    return arrayString.replace(/,([^,]*)$/, ' & $1');
  }

  pageTitle(subject, keystages, types, term, categories, topics) {
    categories = (_.isUndefined(categories) || categories === '') ? '' : categories;
    topics = (_.findIndex(types, { 'active': true}) === -1 || (_.findLastIndex(types, { 'active': true}) === types.length)) ? this.stringifyTitleArray(topics) : '';
    if (topics !== '') categories = '';
    subject = (subject === 'All') ? '' : subject;
    keystages = (_.findIndex(keystages, { 'active': true}) === -1) ? '' : 'Key Stage ' + this.stringifyTitleArray(keystages);
    types = (_.findIndex(types, { 'active': true}) === -1) ? '' : this.stringifyTitleArray(types);
    term = (term === null || term === '') ? '' : term;
    if(categories === '' && topics === '' && subject === '' && keystages === '' && types === '' && term === '') return 'All Content';
    return categories + ' ' + topics + ' ' + subject + ' ' + keystages + ' ' + term + ' ' + types;
  }
}
