import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormControl } from '@angular/forms';

import 'rxjs/add/operator/switchMap';
import { Location } from '@angular/common';
import { PaginationPipe } from './../../../pipes/pagination.pipe';
import { Observable } from 'rxjs/Rx';

import { DataService } from './../../../services/data.service';
import { ListService } from './../../../services/list.service';

import { Items } from './mock-listing';
import Cookies from 'js-cookie';
import _ from 'lodash';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  providers: [
    PaginationPipe,
    ListService,
    DataService
  ]
})
export class ListComponent {

  public itemCount: number;
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

  constructor(private listService: ListService, private route: ActivatedRoute, private location: Location, private dataService: DataService) {
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
}
