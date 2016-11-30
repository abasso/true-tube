import { Component, OnInit, OnChanges, SimpleChanges, Injectable, Input, Output, EventEmitter } from '@angular/core';
import { ListComponent } from "./list.component";
import { ListService } from './../../../services/list.service';
import { TypeFilterPipe } from './../../../pipes/type-filter.pipe';
import { CategoryPipe } from './../../../pipes/category.pipe';
import { Categories } from './mock-categories';
import sortable from "sortablejs";

import _ from "lodash";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  providers: [
    TypeFilterPipe
  ]
})

export class ListFilter implements OnInit {

  constructor(private listService: ListService, private listComponent: ListComponent) {
    this.categories = Categories;
    this.subCategories = [];
    this.filterCategories = [];
    this.filterSubCategories = [];
  }

  @Output() listChange = new EventEmitter();
  private filterSearch: string;
  private filterTypes: string[];
  private filterKeystages: number[];
  private filterCategories: any[];
  private filterSubCategories: any[];
  private filterSubjects: string;
  private categories: any[];
  private subCategories: any[];

  ngOnInit() {
    this.filterTypes = _.clone(this.types);
    this.filterKeystages = _.clone(this.keystages);
    this.filterSubjects = "All";
  }

  types = [
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

  typeObject = {
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
    _.forEach(this[object], (type, key, collection) => {
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
    console.log(toClear);
    if(toClear === "filterSearch" || toClear === "all") {
      this["filterSearch"] = "";
    }
    if(toClear === "filterSubjects" || toClear === "all") {
      this["filterSubjects"] = "All";
    }
    if(toClear === "filterTypes" || toClear === "all") {
      this.filterTypes = _.clone(this.types);
      this.resetFilterState("typeObject")
    }
    if(toClear === "filterKeystages" || toClear === "all") {
      this.filterKeystages = _.clone(this.keystages);
      this.resetFilterState("keyStagesObject")
    }
    this.listService.setListLength(this.listComponent.items.length);

    setTimeout(() => {
      this.listComponent.itemCount = this.listService.getListLength();
    }, 1);
  }

  setType(event, value) {
    event.preventDefault();
    this.filterTypes.length = 0;
    let valueIndex = _.findIndex(this.filterTypes, value);
    this.typeObject[value] = (this.typeObject[value] === false) ? true : false;
    _.forEach(this.typeObject, (value, key) => {
      if(value == true) {
        this.filterTypes.push(key);
      }
    });
    // Clone itself to trigger the ng update.
    this.filterTypes = _.clone(this.filterTypes);
    // If there are no type filters show all the types.
    if(this.filterTypes.length === 0) this.filterTypes = _.clone(this.types);
    this.listChange.emit({
      "type": "type"
    })
    return this.filterTypes;
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
    this.filterKeystages = _.clone(this.filterKeystages);
    if(this.filterKeystages.length === 0) this.filterKeystages = _.clone(this.filterKeystages);
    this.listChange.emit({
      "type": "keys"
    })
    return this.filterKeystages;
  }

  setSubject(event: Event) {
    this.filterSubjects = (<HTMLSelectElement>event.srcElement).value;
    this.listChange.emit({
      "type": "subject"
    })
    return this.filterSubjects;
  }

  setSubCategories(event) {
    event.preventDefault();
    if(event.target.checked) {
      this.filterSubCategories.push(event.target.name);
    } else {
      this.filterSubCategories = _.pull(this.filterSubCategories, event.target.name);
    }
    this.filterSubCategories = _.clone(this.filterSubCategories);
  }

  displaySubCategories(event) {
    event.preventDefault();
    let category = _.filter(this.categories, {label: event.target.name})
    if(event.target.checked) {
      this.filterCategories.push(event.target.name);
      this.subCategories = _.sortBy(_.compact(_.uniq(_.concat(this.subCategories, category[0].subCategories))), "label");
    } else {
      this.filterCategories = _.pull(this.filterCategories, event.target.name);
      this.subCategories = _.pullAll(this.subCategories, category[0].subCategories);
      this.filterSubCategories = _.pullAll(this.filterSubCategories, category[0].subCategories);
    }
    this.filterCategories = _.clone(this.filterCategories);
  }

  filterTypesActive(filterObject) {
    let isActive = false;
    _.forEach(filterObject, (item) => {
      if(item === true) isActive = true;
    });
    return isActive;
  }

  subjectsActive(subject) {
    if(subject !== "All") return true;
  }

  isActive(value, type) {
    if (this[type][value] === true) return true;
  }
}
