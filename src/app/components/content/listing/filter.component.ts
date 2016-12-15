import { Component, OnInit, OnChanges, SimpleChanges, Injectable, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ListComponent } from './list.component';
import { SortComponent } from './sort.component';
import { ListService } from './../../../services/list.service';
import { DataService } from './../../../services/data.service'
import { TypeFilterPipe } from './../../../pipes/type-filter.pipe';
import { CategoryPipe } from './../../../pipes/category.pipe';
import { Categories } from './mock-categories';
import { Observable } from 'rxjs/Rx';
import {CountUpDirective} from 'countup.js/dist/countUp.directive';

import Sortable from 'sortablejs';
import _ from 'lodash';
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
    this.filterCategory = '';
  }

  @Output() listChange = new EventEmitter();
  private filterSearch: string;
  private filterCategory: string;
  private filterSubCategories: any[];
  private filterSubCategoriesStatus = [];
  private filterSubjects: string;
  private categories: any[];
  private subCategories: any[];
  private items;

  filter = new FormGroup({
    term: new FormControl(),
    typeVideo: new FormControl(),
    typeAssembly: new FormControl(),
    typeLesson: new FormControl(),
    typeInteractive: new FormControl(),
    subject: new FormControl(),
    keyStage1: new FormControl(),
    keyStage2: new FormControl(),
    keyStage3: new FormControl(),
    keyStage4: new FormControl(),
    keyStage5: new FormControl(),
  })

  ngOnInit() {
    this.filterSubjects = 'All';
    var el = document.getElementById('GridFilter');
    var sortable = Sortable.create(el);
    this.filter.patchValue({subject: 'All'});
    this.listComponent.data = this.filter.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .switchMap(data => this.dataService.search(data, this.types, this.keystages, this.filterSubjects, this.filterSubCategories));

      this.items = this.listComponent.data.subscribe(
        (data) => {
          this.listComponent.paginationData.totalItems = data.hits.hits.length;
          this.listComponent.resetPagination();
          _.forEach(data.hits.hits, (item) => {
            let embedTypes = {}
            item.typesCount = _.countBy(item._source.embedded, 'type');
            item.contenttypes = [];
            _.forEach(item.typesCount, (type, key) => {
              key = (key === 'film') ? 'video' : key;
              let typestring = (type > 1) ? key.replace('_', ' ') + 's' : key.replace('_', ' ');
                item.contenttypes.push({'label': typestring, 'class': 'btn-' + key.replace('_', '-')});
            });
        });
          this.listComponent.itemCount = data.hits.total;
          this.listComponent.items = data.hits.hits;
        }
      )
  }

  types = [
    {
        label: 'Videos',
        name: 'typeVideo',
        term: 'film',
        class: 'btn-video',
        active: false
    },
    {
        label: 'Lesson Plans',
        name: 'typeLesson',
        term: 'lesson_plan',
        class: 'btn-lesson-plans',
        active: false
    },
    {
        label: 'Assembly Scripts',
        name: 'typeAssembly',
        term: 'assembly_plan',
        class: 'btn-assembly-scripts',
        active: false
    },
    {
        label: 'Interactive',
        name: 'typeInteractive',
        term: 'interactive',
        class: 'btn-interactive',
        active: false
    }
  ];

  keystages = [
    {
        label: '1',
        name: 'keyStage1',
        term: 'Key stage 1',
        active: false
    },
    {
        label: '2',
        name: 'keyStage2',
        term: 'Key stage 2',
        active: false
    },
    {
        label: '3',
        name: 'keyStage3',
        term: 'Key stage 3',
        active: false
    },
    {
        label: '4',
        name: 'keyStage4',
        term: 'Key stage 4',
        active: false
    },
    {
        label: '5',
        name: 'keyStage5',
        term: 'Key stage 5',
        active: false
    }
  ];

  subjects = [
    {
      label: 'Citizenship',
    }, {
      label: 'PHSE'
    }, {
      label: 'RE'
    }
  ]

  resetFilterState(object) {
    _.forEach(object, (item) => {
      item.active = false;
      let name = object.name;
      this.filter.patchValue({name: null})
    });
  }

  search(value) {
    this.listComponent.resetPagination();
    this.listChange.emit({
      'type' : 'search'
    })
  }

  clear(event, toClear) {
    event.preventDefault();
    if(toClear === 'term' || toClear === 'all') {
      this.filter.patchValue({term: ''});
    }
    if(toClear === 'subjects' || toClear === 'all') {
      this.filter.patchValue({subject: 'All'});
      this.filterSubjects = 'All';
    }
    if(toClear === 'categories' || toClear === 'all') {
      this.filterCategory = '';
      this.subCategories = [];
      this.filterSubCategories.length = 0;
      _.forEach(this.subCategories, (subCategory) => {
        subCategory.checked = false;
      })
    }
    if(toClear === 'subCategories' || toClear === 'all') {
      this.filterSubCategories.length = 0;
      _.forEach(this.subCategories, (subCategory) => {
        subCategory.checked = false;
      })
    }
    if(toClear === 'types' || toClear === 'all') {
      this.resetFilterState(this.types)
    }
    if(toClear === 'keystages' || toClear === 'all') {
      this.resetFilterState(this.keystages)
    }
    this.listComponent.resetPagination();
  }

  setFilter(event, value) {
    event.preventDefault();
    console.log(value);
    if(value.active) {
      value.active = false;
      this.filter.patchValue({value: false});
    } else {
      value.active = true;
      this.filter.patchValue({value: true});
    }
    this.listComponent.resetPagination();
  }

  setSubject(event: Event) {
    this.filterSubjects = (<HTMLSelectElement>event.srcElement).value;
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
      'type': 'subCategory'
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
    this.subCategories = _.sortBy(_.concat(this.subCategories, category[0].subCategories), 'label');
    this.listChange.emit({
      'type': 'category'
    })
    this.listComponent.resetPagination();
  }

  checkboxesActive(data) {
    return (_.findIndex(data, { 'active': true}) !== -1) true : false;
  }

  filterActive() {
    return (this.filter.value.term || this.filterSubjects !== 'All' || _.findIndex(this.types, { 'active': true}) !== -1 || _.findIndex(this.keystages, { 'active': true}) !== -1 || this.filterCategory !== '') ? true : false;
  }

  subjectsActive(subject) {
    if(subject !== 'All') return true;
  }

  isActive(value, collection) {
    let isActive = false;
    _.forEach(collection, (item) => {
      if(item.active === true && item) isActive = true;
    });
    return isActive;
  }

  toggleFilter(event) {
    event.preventDefault()
    if(event.target.tagName === 'SPAN') return;
    let parent = event.target.parentElement.parentElement;
    if (parent.classList) {
      parent.classList.toggle('collapsed');
    } else {
      let classes = parent.className.split(' ');
      let i = classes.indexOf('collapsed');
      if (i >= 0) {
        classes.splice(i, 1);
      }
      else {
        classes.push('collapsed');
        parent.className = classes.join(' ');
      }
    }
  }

  showFilter(event) {
    event.preventDefault()
    let parent = event.target.parentElement.parentElement;
    event.target.innerHTML = (event.target.innerHTML === 'Show') ? 'Hide' : 'Show';

    if (parent.classList) {
      parent.classList.toggle('show');
    } else {
      let classes = parent.className.split(' ');
      let i = classes.indexOf('show');
      if (i >= 0) {
        classes.splice(i, 1);
      }
      else {
        classes.push('show');
        parent.className = classes.join(' ');
      }
    }
  }
}
