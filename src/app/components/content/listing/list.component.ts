import { Component, Input, OnInit } from '@angular/core';
import { SubjectPipe } from './../../../pipes/subject.pipe';
import { SearchTermPipe } from './../../../pipes/search-term.pipe';
import { TypePipe } from './../../../pipes/type.pipe';
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
    ListService
  ]
})

export class ListComponent implements OnInit {

  public itemCount: number;
  public items: any[];
  showDescriptions = true;
  displayGrid = true;
  displayList = false;
  constructor(private listService: ListService) {
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
