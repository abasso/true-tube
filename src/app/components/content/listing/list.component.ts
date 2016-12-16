import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormControl } from '@angular/forms';

import 'rxjs/add/operator/switchMap';
import { Location } from '@angular/common';
import { SubjectPipe } from './../../../pipes/subject.pipe';
import { SearchTermPipe } from './../../../pipes/search-term.pipe';
import { TransformPipe } from './../../../pipes/transform.pipe';
import { TypePipe } from './../../../pipes/type.pipe';
import { PaginationPipe } from './../../../pipes/pagination.pipe';
import { KeystagePipe } from './../../../pipes/keystage.pipe';
import { Observable } from 'rxjs/Rx';

import { DataService } from './../../../services/data.service';
import { ListService } from './../../../services/list.service';

import { Items } from './mock-listing';
import Cookies from 'js-cookie';
// import {CountUpDirective} from '/node_modules/countup.js/dist/countUp.directive';

import _ from 'lodash';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  providers: [
    SubjectPipe,
    SearchTermPipe,
    TypePipe,
    KeystagePipe,
    TransformPipe,
    PaginationPipe,
    ListService,
    DataService
  ]
})

export class ListComponent implements OnInit {

  public itemCount: number;
  public data: Observable<Array<any>>;
  public items: Observable<Array<any>>;
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

  ngOnInit() {
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
