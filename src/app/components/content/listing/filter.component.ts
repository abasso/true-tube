import { Component, OnInit, OnChanges, SimpleChanges, Injectable, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { ListComponent } from './list.component';
import { SortComponent } from './sort.component';
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
import 'rxjs/add/operator/finally';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html'
})

export class ListFilter implements OnInit {
  @Output() listChange = new EventEmitter();
  private filterSearch: string;
  private contentLoading: boolean = true;
  private topics: any[] = [];
  private filterSubjects: string;
  private categories: any[];
  private category;
  private currentItemCount: number;
  private items;
  private itemsTotal: number = 0;
  private itemsTotalLabel: string = "Items";

  private filter: FormGroup;

  constructor(private route: ActivatedRoute,  private listComponent: ListComponent, private dataService: DataService, private location: Location, private formBuilder: FormBuilder) {
    this.categories = Categories;
    this.category = null;
    let formElements = {
      term: '',
      subject: '',
      category: ''
    }

    _.forEach(this.types, (type) => {
      formElements[type.name] = '';
    })

    _.forEach(this.keystages, (keystage) => {
      formElements[keystage.name] = '';
    });

    _.forEach(this.categories, (category) => {
      formElements[category.name] = '';
      _.forEach(category.topics, (topic) => {
        formElements[topic.name] = '';
      });
    });

    this.filter = formBuilder.group(formElements);

  }

  ngOnInit() {
    this.filterSubjects = 'All';
    var el = document.getElementById('GridFilter');
    var sortable = Sortable.create(el);
    this.filter.patchValue({subject: 'All'});
    this.listComponent.data = this.filter.valueChanges
    .debounceTime(400)
    .distinctUntilChanged()
    .switchMap(data => this.dataService.search(data, this.types, this.keystages, this.filterSubjects, this.topics, this.category));

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
        // _.forEach(this.categories, (category) => {
        //   _.forEach(category.topics, (topic) => {
        //     topic.count = 0;
        //   });
        // });
        _.forEach(this.listComponent.items, (item) => {
          _.forEach(this.categories, (category) => {
            _.forEach(category.topics, (subCategory) => {
              _.forEach(item._source.topic, (topic) => {
                if(topic === subCategory.label) {
                  //subCategory.count++;
                  item._source.category = category;
                }
              });
            });
          });
        });
        // _.forEach(this.categories, (category) => {
        //   category.count = 0;
        //   _.forEach(category.topics, (subCategory) => {
        //     category.count += subCategory.count;
        //   });
        // });
        if(_.isUndefined(this.currentItemCount)) {
          this.currentItemCount = this.listComponent.itemCount;
        }
        this.updateTotal(this.currentItemCount, this.listComponent.itemCount);
        this.listComponent.resetPagination();
      }
    )
    let pageData = this.route.snapshot.data[0];

    if(!_.isUndefined(pageData)) {
      this.filter.patchValue({pageData: true});
      pageData = _.find(this.types, {name: pageData});
      pageData.active = true;
    }

    // this.route.queryParams
    // .map(params => params['type'])
    // .subscribe((type) => {
    //   if(!_.isUndefined(type)) {
    //     this.filter.patchValue({type: true});
    //     let pathType = _.find(this.types, { slug: type});
    //     pathType.active = true;
    //   }
    // });

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

  updateTotal(currentCount, newCount) {

    let countSpeed = 3;

    if(this.itemsTotal > newCount) {
      countSpeed = Math.ceil(newCount / currentCount);
      if(countSpeed <= 1 && currentCount - newCount > 200) countSpeed = 10;
      if(countSpeed === 0) countSpeed = 1;
      if(currentCount === newCount) countSpeed = currentCount;
    } else {
      countSpeed = Math.ceil(currentCount / newCount)
      if(countSpeed <= 1 && newCount - currentCount > 200) countSpeed = 10;
      if(countSpeed === 0) countSpeed = 1;
      if(currentCount === newCount) countSpeed = currentCount;
    }

    let totalLoop = setInterval( () => {
      if(this.itemsTotal > newCount) {
        this.itemsTotal -= countSpeed
        if(this.itemsTotal <= newCount) {
          clearInterval(totalLoop);
          this.itemsTotal = this.listComponent.itemCount;
          this.currentItemCount = this.listComponent.itemCount;
          this.itemsTotalLabel = (newCount > 1) ? "Items" : "Item";
        }
      } else {
        this.itemsTotal += countSpeed
        if(this.itemsTotal >= newCount) {
          clearInterval(totalLoop);
          this.itemsTotal = this.listComponent.itemCount;
          this.currentItemCount = this.listComponent.itemCount;
          this.itemsTotalLabel = (newCount > 1) ? "Items" : "Item";
        }
      }

    }, 1);
  }

  search(value) {
    this.contentLoading = true;
    this.listComponent.resetPagination();
  }

  clear(event, toClear) {
    this.contentLoading = true;
    event.preventDefault();
    if(toClear === 'term') {
      this.filter.patchValue({term: ''});
    }
    if(toClear === 'subjects' || toClear === 'all') {
      this.filter.patchValue({subject: 'All'});
      this.filterSubjects = 'All';
    }
    if(toClear === 'categories' || toClear === 'all') {
      this.category = null;
      _.forEach(this.topics, (topic) => {
        let toClear = {}
        toClear[topic.name] = '';
        this.filter.patchValue(toClear);
        topic.active = false;
      })
      _.forEach(this.categories, (category) => {
        let toClear = {}
        toClear[category.name] = '';
        this.filter.patchValue(toClear);
        category.active = false;
      })
    }
    if(toClear === 'topics' || toClear === 'all') {
      _.forEach(this.topics, (topic) => {
        let toClear = {}
        toClear[topic.name] = '';
        this.filter.patchValue(toClear);
        topic.active = false;
      })
    }
    if(toClear === 'types' || toClear === 'all') {
      this.resetFilterState(this.types)
    }
    if(toClear === 'keystages' || toClear === 'all') {
      this.resetFilterState(this.keystages)
    }
    if(toClear === "all") {
      this.filter.reset();
      this.resetFilterState(this.types)
      this.filter.patchValue({subject: 'All'});
      this.filterSubjects = 'All';
    }
  }

  setFilter(event, value) {
    event.preventDefault();
    this.contentLoading = true;
    if(value.active) {
      value.active = false;
      this.filter.patchValue({value: false});
    } else {
      this.location.replaceState(value.slug);
      value.active = true;
      this.filter.patchValue({value: true});
    }
  }

  setSubject(event: Event) {
    this.contentLoading = true;
    this.filterSubjects = (<HTMLSelectElement>event.srcElement).value;
    return this.filterSubjects;
  }

  setTopics(event) {
    event.preventDefault();
    this.contentLoading = true;
    if(_.findIndex(this.topics, { 'active': false}) === -1) {
      _.forEach(this.topics, (topic) => {
        topic.active = false;
      })
    }
    _.forEach(this.topics, (topic) => {
      console.log(topic.label === event.target.value);
      if(topic.label === event.target.value) topic.active = (event.target.checked) ? true : false;
      console.log(topic.active);
    })
    if(_.findIndex(this.topics, { 'active': true}) === -1) {
      _.forEach(this.topics, (topic) => {
        topic.active = true;
      })
    }
  }

  displayTopics(event) {
    event.preventDefault();
    this.topics.length = 0;
    this.category = _.filter(this.categories, {name: event.target.id})
    this.topics = _.sortBy(this.category[0].topics, 'label');
    // Remove the blank topics
    // this.topics = _.remove(this.topics, (topic) => {
    //   return topic.count !== 0;
    // })
    _.forEach(this.categories, (category) => {
      let toClear = {}
      toClear[category.name] = '';
      this.filter.patchValue(toClear);
      category.active = false;
    })
    _.forEach(this.topics, (topic) => {
      let toClear = {}
      toClear[topic.name] = '';
      this.filter.patchValue(toClear);
      topic.active = false;
    })
    this.category[0].active = true;
    let toSet = {}
    toSet[event.target.id] = true;
    this.filter.patchValue(toSet);
    _.forEach(this.topics, (topic) => {
      topic.active = false;
    });
  }

  checkboxesActive(data) {
    return (_.findIndex(data, { 'active': true}) !== -1) ? true : false;
  }

  filterActive() {
    return (this.filter.value.term || this.filterSubjects !== 'All' || _.findIndex(this.types, { 'active': true}) != -1 || _.findIndex(this.keystages, { 'active': true}) != -1 || this.category !== null ) ? true : false;
  }

  subjectsActive(subject) {
    return (subject !== 'All') ? true : false;
  }

  isActive(collection) {
    let isActive = false;
    _.forEach(collection, (item) => {
      if(item.active === true) isActive = true;
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
