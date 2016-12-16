import { Component, OnInit, OnChanges, SimpleChanges, Injectable, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { ListComponent } from './list.component';
import { SortComponent } from './sort.component';
import { ListService } from './../../../services/list.service';
import { DataService } from './../../../services/data.service'
import { Categories } from './mock-categories';
import { Observable } from 'rxjs/Rx';
// import {CountUpDirective} from 'countup.js/dist/countUp.directive';
import 'rxjs/add/operator/switchMap';

import Sortable from 'sortablejs';
import _ from 'lodash';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html'
})

export class ListFilter implements OnInit {

  constructor(private listService: ListService, private route: ActivatedRoute,  private listComponent: ListComponent, private dataService: DataService, private location: Location) {
    this.categories = Categories;
    this.subCategories = [];
    this.filterSubCategories = [];
    this.filterCategory = '';
  }

  @Output() listChange = new EventEmitter();
  private filterSearch: string;
  private contentLoading: boolean = false;
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
          this.contentLoading = false;
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

          _.forEach(this.listComponent.items, (item) => {
            _.forEach(this.categories, (category) => {
              _.forEach(category.subCategories, (subCategory) => {
                _.forEach(item._source.topic, (topic) => {
                  if(topic === subCategory.label) {
                    subCategory.count++;
                    item._source.category = category;
                  }
              });
            });
          });
        });
        _.forEach(this.categories, (category) => {
          category.count = 0;
          _.forEach(category.subCategories, (subCategory) => {
            category.count += subCategory.count;
          });
        });
        }
      )

      this.route.params
      .map(params => params['type'])
      .subscribe((type) => {
        console.log(type);
        if(!_.isUndefined(type)) {
          this.filter.patchValue({type: true});
          let pathType = _.find(this.types, { slug: type});
          pathType.active = true;
        }
      });

      // this.route.query
      // .map(query => params['type'])
      // .subscribe((type) => {
      //   console.log(type);
      //   if(!_.isUndefined(type)) {
      //     this.filter.patchValue({type: true});
      //     let pathType = _.find(this.types, { slug: type});
      //     pathType.active = true;
      //   }
      // });


      // // NEEDS REPLACING WITH AN OBSERVABLE METHOD
      // console.log(this.route.params);
      // if(this.route.params.value.type) {
      //   let pathType = _.find(this.types, { slug: this.route.params.value.type});
      //   pathType.active = true;
      //   let pathName = pathType.name
      //   this.filter.patchValue({pathName: true});
      // }

  }

  types = [
    {
        label: 'Videos',
        slug: 'videos',
        name: 'typeVideo',
        term: 'film',
        class: 'btn-video',
        active: false
    },
    {
        label: 'Lesson Plans',
        slug: 'lesson-plans',
        name: 'typeLesson',
        term: 'lesson_plan',
        class: 'btn-lesson-plans',
        active: false
    },
    {
        label: 'Assembly Scripts',
        slug: 'assembly-scripts',
        name: 'typeAssembly',
        term: 'assembly_plan',
        class: 'btn-assembly-scripts',
        active: false
    },
    {
        label: 'Interactive',
        slug: 'interactive',
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
        slug: 'key-stage-1',
        term: 'Key stage 1',
        active: false
    },
    {
        label: '2',
        name: 'keyStage2',
        slug: 'key-stage-2',
        term: 'Key stage 2',
        active: false
    },
    {
        label: '3',
        name: 'keyStage3',
        slug: 'key-stage-3',
        term: 'Key stage 3',
        active: false
    },
    {
        label: '4',
        name: 'keyStage4',
        slug: 'key-stage-4',
        term: 'Key stage 4',
        active: false
    },
    {
        label: '5',
        name: 'keyStage5',
        slug: 'key-stage-5',
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

  resetFilterState(filter) {
    _.forEach(filter, (item) => {
      item.active = false;
      let name = filter.name;
      this.filter.patchValue({name: null})
    });
  }

  search(value) {
    this.contentLoading = true;
    this.listComponent.resetPagination();
  }

  clear(event, toClear) {
    this.contentLoading = true;
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
    this.contentLoading = true;
    if(value.active) {
      value.active = false;
      this.filter.patchValue({value: false});
    } else {
      this.location.replaceState("/list/" + value.slug);
      value.active = true;
      this.filter.patchValue({value: true});
    }
    this.listComponent.resetPagination();
  }

  setSubject(event: Event) {
    this.contentLoading = true;
    this.filterSubjects = (<HTMLSelectElement>event.srcElement).value;
    this.listComponent.resetPagination();
    return this.filterSubjects;
  }

  setSubCategories(event) {
    this.contentLoading = true;
    event.preventDefault();
    if(event.target.checked) {
      this.filterSubCategories.push(event.target.value);
    } else {
      this.filterSubCategories = _.pull(this.filterSubCategories, event.target.value);
    }
    this.filterSubCategories = _.clone(this.filterSubCategories);
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
    this.listComponent.resetPagination();
  }

  checkboxesActive(data) {
    return (_.findIndex(data, { 'active': true}) !== -1) ? true : false;
  }

  filterActive() {
    return (this.filter.value.term || this.filterSubjects !== 'All' || _.findIndex(this.types, { 'active': true}) !== -1 || _.findIndex(this.keystages, { 'active': true}) !== -1 || this.filterCategory !== '') ? true : false;
  }

  subjectsActive(subject) {
    return (subject !== 'All') ? true : false;
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
