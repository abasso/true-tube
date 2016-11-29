import { Component, OnInit, OnChanges, SimpleChanges, Injectable, Input, Output, EventEmitter } from '@angular/core';
import { ListComponent } from "./list.component";
import { ListService } from './../../../services/list.service';
import { CategoryFilterPipe } from './../../../pipes/category-filter.pipe';

import _ from "lodash";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  providers: [
    CategoryFilterPipe
  ]
})

export class ListFilter implements OnInit {

  constructor(private listService: ListService, private listComponent: ListComponent) {
  }

  private filterSearch: string;
  private filterCategories: string[];
  private filterKeystages: number[];
  private filterSubjects: string[];
  @Output() listChange = new EventEmitter();

  ngOnInit() {
    this.filterCategories = _.clone(this.categories);
    this.filterKeystages = _.clone(this.keystages);
    this.filterSubjects = ["All"];
  }

  categories = [
    "Videos",
    "Lesson Plans",
    "Assembly Scripts",
    "Interactive"
  ];

  subjects = [
    {
      label: "Citizenship",
      selected: "selected"
    }, {
      label: "PHSE"
    }, {
      label: "RE"
    }
  ]

  categoryObject = {
    "Videos": false,
    "Lesson Plans": false,
    "Assembly Scripts": false,
    "Interactive": false
  };

  keystages = [
    1,
    2,
    3,
    4,
    5
  ];

  keyStagesObject = {
    "1": false,
    "2": false,
    "3": false,
    "4": false,
    "5": false
  }

  resetFilterState(object) {
    _.forEach(this[object], (category, key, collection) => {
      collection[key] = false;
    })
  }

  search(value) {
    this.listChange.emit({
      "type" : "search"
    })
  }

  clear(event, toClear) {
    event.preventDefault();
    if(typeof this[toClear] === "string") {
      this[toClear] = "";
    } else if(toClear === "filterCategories" ) {
      this.filterCategories = _.clone(this.categories);
      this.resetFilterState("categoryObject")
    } else if(toClear === "filterKeystages" ) {
      this.filterKeystages = _.clone(this.keystages);
      this.resetFilterState("keyStagesObject")
    }
    this.listService.setListLength(this.listComponent.items.length);
    setTimeout(() => {
      this.listComponent.itemCount = this.listService.getListLength();
    }, 1);
  }

  setCategory(event, value) {
    event.preventDefault();
    this.filterCategories.length = 0;
    let valueIndex = _.findIndex(this.filterCategories, value);
    this.categoryObject[value] = (this.categoryObject[value] === false) ? true : false;
    _.forEach(this.categoryObject, (value, key) => {
      if(value == true) {
        this.filterCategories.push(key);
      }
    });
    // Clone itself to trigger the ng update.
    this.filterCategories = _.clone(this.filterCategories);
    // If there are no category filters show all the categories.
    if(this.filterCategories.length === 0) this.filterCategories = _.clone(this.categories);
    this.listChange.emit({
      "type": "category"
    })
    return this.filterCategories;
  }

  setKey(event, value) {
    event.preventDefault();
    this.filterKeystages.length = 0;
    let valueIndex = _.findIndex(this.filterKeystages, value);
    this.keyStagesObject[value] = (this.keyStagesObject[value] === false) ? true : false;
    _.forEach(this.keyStagesObject, (value, key) => {
      if(value == true) {
        this.filterKeystages.push(key);
      }
    });
    // Clone itself to trigger the ng update.
    this.filterKeystages = _.clone(this.filterKeystages);
    // If there are no category filters show all the categories.
    if(this.filterKeystages.length === 0) this.filterKeystages = _.clone(this.filterKeystages);
    this.listChange.emit({
      "type": "keys"
    })
    return this.filterKeystages;
  }

  setSubject(event: Event):void {
    let value:string = (<HTMLSelectElement>event.srcElement).value;
    console.log(value);
    // this.filterSubjects.splice(0, 1, subject);
  }

  filterCategoriesActive(filterObject) {
    let isActive = false;
    _.forEach(filterObject, (item) => {
      if(item === true) isActive = true;
    });
    return isActive;
  }

  isActive(value, type) {
    if (this[type][value] === true) return true;
  }
}
