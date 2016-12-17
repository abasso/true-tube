import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormControl } from '@angular/forms';

import 'rxjs/add/operator/switchMap';
import { Location } from '@angular/common';
import { PaginationPipe } from './../../../pipes/pagination.pipe';
import { Observable } from 'rxjs/Rx';

import { DataService } from './../../../services/data.service';

import { Items } from './mock-listing';
import Cookies from 'js-cookie';
import _ from 'lodash';
import CountUp from 'countup.js';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  providers: [
    PaginationPipe,
    DataService
  ]
})
export class ListComponent {

  public itemCount: number;
  public currentItemCount: number;
  public data: Observable<any>;
  public items: Observable<any>;
  public showDescriptions:boolean;
  public displayGrid:boolean = true;
  public displayList:boolean = false;
  public count;
  public startVal: number;
  public endVal: number;
  public paginationData: {
    currentPage: number,
    itemsPerPage: number,
    totalPages: number,
    totalItems: number,
    pages: any[],
    itemsPerPageCurrent: any
  };

  constructor(private route: ActivatedRoute, private location: Location, private dataService: DataService) {
    this.paginationData = {
      currentPage: 0,
      itemsPerPage: 6,
      totalPages: 3,
      totalItems: 0,
      pages: [],
      itemsPerPageCurrent: 9
    }
    this.showDescriptions = true;
  }

  resetPagination() {
    setTimeout(() => {
      this.paginationData.pages = [];
      this.paginationData.totalPages = Math.ceil(this.paginationData.totalItems / this.paginationData.itemsPerPageCurrent);
      for(let i=0;i<this.paginationData.totalPages;i++) this.paginationData.pages.push(i+1);
      this.paginationData.currentPage = 0;
  }, 1);

  }

  stringifyTitleArray(array) {
    array = _.filter(array, {active: true});
    array = _.map(array, 'label');
    let arrayString = array.join(', ');
    return arrayString.replace(/,([^,]*)$/, ' & $1');
  }

  pageTitle(subject, keystages, types, term, category, topics) {
    let showTopics = false;
    if(!_.isUndefined(category) && category !== null) {
      if(_.findIndex(category[0].topics, { 'active': false}) !== -1 && _.findIndex(category[0].topics, { 'active': true}) !== -1) showTopics = true;
    }
    topics = (showTopics) ? this.stringifyTitleArray(topics) : '';
    category = (_.isUndefined(category) || category === null || category === '') ? '' : category[0].label;
    subject = (subject === 'All') ? '' : subject;
    keystages = (_.findIndex(keystages, { 'active': true}) === -1) ? '' : 'Key Stage ' + this.stringifyTitleArray(keystages);
    types = (_.findIndex(types, { 'active': true}) === -1) ? '' : this.stringifyTitleArray(types);
    term = (term === null || term === '') ? '' : term;
    if(category === '' && topics === '' && subject === '' && keystages === '' && types === '' && term === '') return 'All Content';
    return category + ' ' + topics + ' ' + subject + ' ' + keystages + ' ' + term + ' ' + types;
  }

}
