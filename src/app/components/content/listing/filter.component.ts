import { Component, OnInit, OnChanges, SimpleChanges, Injectable, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ListComponent } from "./list.component";
import { SortComponent } from "./sort.component";
import { ListService } from './../../../services/list.service';
import { DataService } from './../../../services/data.service'
import { TypeFilterPipe } from './../../../pipes/type-filter.pipe';
import { CategoryPipe } from './../../../pipes/category.pipe';
import { Categories } from './mock-categories';
import { Observable } from 'rxjs/Rx';

import Sortable from "sortablejs";
import _ from "lodash";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  providers: [
    TypeFilterPipe
  ]
})

export class ListFilter implements OnInit {

  constructor(private listService: ListService, private listComponent: ListComponent, private dataService: DataService) {
    this.categories = Categories;
    this.subCategories = [];
    this.filterSubCategories = [];
    this.filterCategory = "";

  }

  @Output() listChange = new EventEmitter();
  private filterSearch: string;
  private filterTypes: string[];
  private filterKeystages: number[];
  private filterCategory: string;
  private filterSubCategories: any[];
  private filterSubCategoriesStatus = [];
  private filterSubjects: string;
  private categories: any[];
  private subCategories: any[];
  private items;

  ngOnInit() {
    this.listComponent.term = new FormControl();

    if(!_.isUndefined(this.listService.getCurrentType())) {
      this.filterTypes = this.listService.getCurrentType()
      this.typeObject[this.listService.getCurrentType()[0]] = true;
    } else {
      this.filterTypes = _.clone(this.types);
    }
    // this.filterTypes = (this.listService.getCurrentType() !== null) ? this.listService.getCurrentType() : _.clone(this.types);
    this.filterKeystages = _.clone(this.keystages);
    this.filterSubjects = "All";
    var el = document.getElementById('GridFilter');
    var sortable = Sortable.create(el);

   this.listComponent.data = this.listComponent.term.valueChanges
                    .debounceTime(400)
                    .distinctUntilChanged()
                    .switchMap(term => this.dataService.search(term));

                    this.items = this.listComponent.data.subscribe(
                      (data) => {
                        this.listComponent.paginationData.totalItems = data.hits.hits.length;
                        this.listComponent.resetPagination();
                        _.forEach(data.hits.hits, (item) => {
                          let embedTypes = {}
                          item.typesCount = _.countBy(item._source.embedded, 'type');
                          item.contenttypes = [];
                          _.forEach(item.typesCount, (type, key) => {
                            key = (key === 'film') ? "video" : key;
                            let typestring = (type > 1) ? key.replace("_", " ") + "s" : key.replace("_", " ");
                              item.contenttypes.push({'label': typestring, 'class': "btn-" + key.replace("_", "-")});
                          });
                        //   _.forEach(item._source.embedded, (embed) => {
                        //     console.log(embed.type);
                        //     embedTypes[embed.type] = (_.isUndefined(embedTypes[embed.type])) ? 0 : embedTypes[embed.type]++;
                        //     // if(embed.type === "film") {
                        //     //   embed.label = "Video";
                        //     //   embed.class = "btn-video";
                        //     // }
                        //     // if(embed.type === "assembly-script") {
                        //     //   embed.label = "Assembly Scripts";
                        //     //   embed.class = "btn-assembly-scripts";
                        //     // }
                        // })
                      });
                        this.listComponent.itemCount = data.hits.total;
                        this.listComponent.items = data.hits.hits;
                        console.log(this.listComponent.items);

                      }
                    )

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
    this.listComponent.resetPagination();
    this.listChange.emit({
      "type" : "search"
    })
  }

  clear(event, toClear) {
    event.preventDefault();
    if(toClear === "filterSearch" || toClear === "all") {
      this.filterSearch = "";
    }
    if(toClear === "filterSubjects" || toClear === "all") {
      this.filterSubjects = "All";
    }
    if(toClear === "categories" || toClear === "all") {
      this.filterCategory = "";
      this.subCategories = [];
      this.filterSubCategories.length = 0;
      _.forEach(this.subCategories, (subCategory) => {
        subCategory.checked = false;
      })
    }
    if(toClear === "subCategories" || toClear === "all") {
      this.filterSubCategories.length = 0;
      _.forEach(this.subCategories, (subCategory) => {
        subCategory.checked = false;
      })
    }
    if(toClear === "filterTypes" || toClear === "all") {
      this.filterTypes = _.clone(this.types);
      this.resetFilterState("typeObject")
    }
    if(toClear === "filterKeystages" || toClear === "all") {
      this.filterKeystages = _.clone(this.keystages);
      this.resetFilterState("keyStagesObject")
    }
    this.listComponent.resetPagination();
    //this.listService.setListLength(this.listComponent.items.length);

    setTimeout(() => {
      //this.listComponent.itemCount = this.listService.getListLength();
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
    this.listComponent.resetPagination();
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
    this.listComponent.resetPagination();
    return this.filterKeystages;
  }

  setSubject(event: Event) {
    this.filterSubjects = (<HTMLSelectElement>event.srcElement).value;
    this.listChange.emit({
      "type": "subject"
    })
    this.listComponent.resetPagination();
    return this.filterSubjects;
  }

  setSubCategories(event) {
    event.preventDefault();
    if(event.target.checked) {
      this.filterSubCategories.push(event.target.value);
    } else {
      this.filterSubCategories = _.pull(this.filterSubCategories, event.target.value);
    }
    this.filterSubCategories = _.clone(this.filterSubCategories);
    this.listChange.emit({
      "type": "subCategory"
    })
    this.listComponent.resetPagination();
  }

  displaySubCategories(event) {
    event.preventDefault();
    this.filterSubCategories.length = 0;
    _.forEach(this.subCategories, (subCategory) => {
      subCategory.checked = false;
    })
    let category = _.filter(this.categories, {label: event.target.id})
    this.filterCategory = event.target.id;
    this.subCategories = [];
    this.subCategories = _.sortBy(_.concat(this.subCategories, category[0].subCategories), "label");
    this.listChange.emit({
      "type": "category"
    })
    this.listComponent.resetPagination();
  }

  filterTypesActive(filterObject) {
    let isActive = false;
    _.forEach(filterObject, (item) => {
      if(item === true) isActive = true;
    });
    return isActive;
  }

  filterActive() {
    return (this.filterSearch || this.filterSubjects !== 'All' || this.filterTypes.length !== 4 && this.filterTypes.length !== 0 || this.filterKeystages.length !== 5 || this.filterCategory !== "") ? true : false;
  }

  subjectsActive(subject) {
    if(subject !== "All") return true;
  }

  isActive(value, type) {
    if (this[type][value] === true) return true;
  }

  toggleFilter(event) {
    event.preventDefault()
    if(event.target.tagName === "SPAN") return;
    let parent = event.target.parentElement.parentElement;
    if (parent.classList) {
      parent.classList.toggle("collapsed");
    } else {
      let classes = parent.className.split(" ");
      let i = classes.indexOf("collapsed");
      if (i >= 0) {
        classes.splice(i, 1);
      }
      else {
        classes.push("collapsed");
        parent.className = classes.join(" ");
      }
    }
  }

  showFilter(event) {
    event.preventDefault()
    let parent = event.target.parentElement;
    event.target.innerHTML = (event.target.innerHTML === "Show") ? "Hide" : "Show";

    if (parent.classList) {
      parent.classList.toggle("show");
    } else {
      let classes = parent.className.split(" ");
      let i = classes.indexOf("show");
      if (i >= 0) {
        classes.splice(i, 1);
      }
      else {
        classes.push("show");
        parent.className = classes.join(" ");
      }
    }
  }
}
