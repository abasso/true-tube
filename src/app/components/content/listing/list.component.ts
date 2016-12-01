import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { SubjectPipe } from './../../../pipes/subject.pipe';
import { SearchTermPipe } from './../../../pipes/search-term.pipe';
import { TypePipe } from './../../../pipes/type.pipe';
import { PaginationPipe } from './../../../pipes/pagination.pipe';
import { KeystagePipe } from './../../../pipes/keystage.pipe';
import { ListService } from './../../../services/list.service';
import { Items } from './mock-listing';
import Cookies from 'js-cookie';

import _ from "lodash";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  providers: [
    SubjectPipe,
    SearchTermPipe,
    TypePipe,
    KeystagePipe,
    PaginationPipe,
    ListService
  ]
})

export class ListComponent implements OnInit {

  public itemCount: number;
  public items: any[];
  public showDescriptions:boolean;
  public displayGrid:boolean = true;
  public displayList:boolean = false;

  public paginationData: {
    currentPage: number,
    itemsPerPage: number,
    totalPages: number,
    totalItems: number,
    pages: any[],
    itemsPerPageCurrent: any
  };

  constructor(private listService: ListService,private route: ActivatedRoute,
  private location: Location) {
    this.paginationData = {
      currentPage: 0,
      itemsPerPage: 6,
      totalPages: 3,
      totalItems: Items.length,
      pages: [],
      itemsPerPageCurrent: 9
    }
    // this.showDescriptions = (_.isUndefined(Cookies.get("show-descriptions"))) ? true : Boolean(Cookies.get("show-descriptions"));
    // console.log("THE COOKIE", _.isUndefined(Cookies.get("show-descriptions")));
    this.showDescriptions = true;
    this.itemCount = listService.getListLength();
    this.items = Items;
  }

  ngOnInit() {
    this.listService.setCurrentType(this.route.params._value);
    console.log("PARAMS", this.route.params._value);
    this.listService.setListLength(this.items);
    this.itemCount = this.listService.getListLength();

    // this.route.params
    // .switchMap((params: Params) => this.shout(+params['id']));
  }

  filterEvent(event) {
    setTimeout(() => {
      this.itemCount = this.listService.getListLength();
    }, 1);
  }

  shout(word) {
    console.log("PARAM", word);
  }

  resetPagination() {
    setTimeout(() => {
      this.paginationData.totalItems = this.listService.getListLength();
      this.paginationData.pages = [];
      this.paginationData.totalPages = Math.ceil(this.paginationData.totalItems / this.paginationData.itemsPerPageCurrent);
      for(let i=0;i<this.paginationData.totalPages;i++) this.paginationData.pages.push(i+1);
      this.paginationData.currentPage = 0;
      console.log(this.paginationData);
  }, 1);

  }

}
