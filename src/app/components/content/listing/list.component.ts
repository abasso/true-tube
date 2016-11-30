import { Component, Input, OnInit } from '@angular/core';
import { SubjectPipe } from './../../../pipes/subject.pipe';
import { SearchTermPipe } from './../../../pipes/search-term.pipe';
import { TypePipe } from './../../../pipes/type.pipe';
import { PaginationPipe } from './../../../pipes/pagination.pipe';
import { KeystagePipe } from './../../../pipes/keystage.pipe';
import { ListService } from './../../../services/list.service';
import { Items } from './mock-listing';

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
  public showDescriptions = true;
  public displayGrid:boolean = true;
  public displayList:boolean = false;

  public paginationData: {
    currentPage: number,
    itemsPerPage: number,
    totalPages: number,
    totalItems: number,
    pages: any[]
  };

  constructor(private listService: ListService) {
    this.paginationData = {
      currentPage: 0,
      itemsPerPage: 6,
      totalPages: 3,
      totalItems: 15,
      pages: []
    }
    this.itemCount = listService.getListLength();
    this.items = Items;
  }

  ngOnInit() {
    this.listService.setListLength(this.items);
    this.itemCount = this.listService.getListLength();
  }

  filterEvent(event) {
    setTimeout(() => {
      this.itemCount = this.listService.getListLength();
    }, 1);
  }

}
