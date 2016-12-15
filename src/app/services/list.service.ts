import { Injectable, EventEmitter, Output } from '@angular/core';

import _ from 'lodash';
@Injectable()
export class ListService {

  stringifyTitleArray(array) {
    array = _.filter(array, {active: true});
    array = _.map(array, 'label');
    let arrayString = array.join(', ');
    return arrayString.replace(/,([^,]*)$/, ' & $1');
  }

  pageTitle(subject, keystages, types, term, categories, subCategories, total) {
    // console.log(subject);
    // console.log(keystages);
    // console.log(types);
    // console.log(term);
    // console.log(categories);
    // console.log(subCategories);
    // console.log(total);
    total = (_.isUndefined(total)) ? '' : ' (' + total + ' Items)';
    categories = (_.isUndefined(categories) || categories === '') ? '' : categories;
    subCategories = (subCategories.length) ? this.stringifyTitleArray(subCategories) : '';
    if (subCategories !== '') categories = '';
    subject = (subject === 'All') ? '' : subject;
    keystages = (_.findIndex(keystages, { 'active': true}) === -1) ? '' : 'Key Stage ' + this.stringifyTitleArray(keystages);
    types = (_.findIndex(types, { 'active': true}) === -1) ? '' : this.stringifyTitleArray(types);
    term = (term === null || term === '') ? '' : term;
    if(categories === '' && subCategories === '' && subject === '' && keystages === '' && types === '' && term === '') return 'All Content' + total;
    return categories + ' ' + subCategories + ' ' + subject + ' ' + keystages + ' ' + term + ' ' + types + total;
  }
}
