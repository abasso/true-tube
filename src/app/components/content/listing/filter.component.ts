import { Component, OnInit, Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { ActivatedRoute, Params } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ListComponent } from './list.component';
import { SortComponent } from './sort.component';
import { DataService } from './../../../services/data.service'
import { Categories } from './../../../definitions/categories';
import { Subjects } from './../../../definitions/subjects';
import { ContentTypes } from './../../../definitions/content-types';
import { KeyStages } from './../../../definitions/key-stages';
import { Observable } from 'rxjs/Rx';

// import Sortable from 'sortablejs';
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
  private filterSearch: string;
  private contentLoading: boolean = true;
  private topics: any[] = [];
  private filterSubjects: string;
  private categories: any[] = Categories;
  private types: any[] = ContentTypes;
  private subjects: any[] = Subjects;
  private keystages: any[] = KeyStages;
  private category = null;
  private currentItemCount: number;
  private items;
  private itemsTotal: number = 0;
  private itemsTotalLabel: string = 'Items';
  private filter: FormGroup;
  private activeFilters: number = 0;
  private currentParams: any;
  constructor(private route: ActivatedRoute,  private listComponent: ListComponent, private dataService: DataService, private location: Location, private formBuilder: FormBuilder) {
    // Construct the filter form
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
    this.filter.patchValue({subject: 'All'});
    //var el = document.getElementById('GridFilter');
    // var sortable = Sortable.create(el);
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

    this.route.queryParams
    .subscribe((params) => {
      this.currentParams = _.assign({}, params);
    });

    // let pageData = this.route.snapshot.data[0];
    // let pageDataType = pageData.type;
    // let pageDataFilter = pageData.filter;
    // let firstLoad = true;
    // if(!_.isUndefined(pageData)) {
    //   this.clear(null, pageDataType, pageData);
    //   let pageTypes = _.find(this.types, {name: pageDataFilter});
    //   pageTypes.active = true;
    //   this.filterCount = 1;
    //   firstLoad === false;
    // }

    this.route.queryParams
    .map(params => params['types'])
    .subscribe((types) => {
      if(!_.isUndefined(types)) {
        this.resetFilterState(this.types);
          let typeArray = types.split(',');
          _.forEach(typeArray, (type) => {
            let pathType = _.find(this.types, { slug: type});
            pathType.active = true;
            let patch = {}
            patch[pathType.name] = true;
            this.filter.patchValue(patch);
          })
      }
    });

    this.route.queryParams
    .map(params => params['keystages'])
    .subscribe((keystages) => {
      if(!_.isUndefined(keystages)) {
        this.resetFilterState(this.keystages);
          let keyArray = keystages.split(' ');
          _.forEach(keyArray, (key) => {
            let pathKeys = _.find(this.keystages, { slug: key});
            pathKeys.active = true;
            let patch = {}
            patch[pathKeys.name] = true;
            this.filter.patchValue(patch);
          })
      }
    });

    this.route.queryParams
    .map(params => params['search'])
    .subscribe((search) => {
      if(!_.isUndefined(search)) {
        this.filter.patchValue({term: search});
      }
    });

    this.route.queryParams
    .map(params => params['category'])
    .subscribe((category) => {
      if(!_.isUndefined(category)) {
        this.category = _.filter(this.categories, {slug: category});
        this.displayTopics(this.category[0].name);
      }
    });

    this.route.queryParams
    .map(params => params['topics'])
    .subscribe((topics) => {
      if(!_.isUndefined(topics)) {
        this.setTopics(topics);
      }
    });

    this.route.queryParams
    .map(params => params['subject'])
    .subscribe((subject) => {
      if(!_.isUndefined(subject)) {
        let sub = _.find(this.subjects, {slug: subject});
        this.currentParams['subject'] = sub.label;
        this.filterSubjects = subject;
        this.filter.patchValue({'subject': sub.label});
      }
    });
  }

  resetFilterState(filter) {
    _.forEach(filter, (item) => {
      item.active = false;
      let name = filter.name;
      this.filter.patchValue({name: null})
    });
  }

  updateTotal(currentCount, newCount) {

    let countSpeed = 3;
    let difference = currentCount - newCount;

    if(this.itemsTotal > newCount) {
      countSpeed = (difference > 400) ? 41 : (difference > 200) ? 21 : 11;
    } else {
      countSpeed = (difference < 400) ? 11 : (difference < 200) ? 21 : 41;
    }
    if(countSpeed === 0) countSpeed = 1;
    if(currentCount === newCount) countSpeed = currentCount;
    let loop = () => {
      if(this.itemsTotal > newCount) {
        this.itemsTotal -= countSpeed;
        if(this.itemsTotal <= newCount) {
          //clearInterval(totalLoop);
          this.itemsTotal = this.listComponent.itemCount;
          this.currentItemCount = this.listComponent.itemCount;
          this.itemsTotalLabel = (newCount > 1) ? 'Items' : 'Item';
        } else {
          requestAnimationFrame( loop );
        }
      } else {
        this.itemsTotal += countSpeed
        if(this.itemsTotal >= newCount) {
          //clearInterval(totalLoop);
          this.itemsTotal = this.listComponent.itemCount;
          this.currentItemCount = this.listComponent.itemCount;
          this.itemsTotalLabel = (newCount > 1) ? 'Items' : 'Item';
        } else {
          requestAnimationFrame( loop );
        }
      }
    }
    loop();
  }

  search(event) {
    this.contentLoading = true;
    this.currentParams['search'] = event.target.value;
    this.setQueryString();
    this.listComponent.resetPagination();
  }

  clear(event, toClear) {
    this.contentLoading = true;
    if(event !== null) event.preventDefault();
    if(toClear === 'term') {
      this.filter.patchValue({term: ''});
      delete this.currentParams['search'];
      this.setQueryString();
    }
    if(toClear === 'subjects') {
      this.filter.patchValue({subject: 'All'});
      this.filterSubjects = 'All';
      delete this.currentParams['subject'];
      this.setQueryString();
    }
    if(toClear === 'categories') {
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
      delete this.currentParams['category'];
      this.setQueryString();
    }
    if(toClear === 'topics') {
      _.forEach(this.topics, (topic) => {
        let toClear = {}
        toClear[topic.name] = '';
        this.filter.patchValue(toClear);
        topic.active = false;
      });
      this.currentParams['category'] = this.category[0].slug;
      delete this.currentParams['topics'];
      this.setQueryString();
    }
    if(toClear === 'types') {
      delete this.currentParams['types'];
      this.setQueryString();
      this.resetFilterState(this.types);
    }
    if(toClear === 'keystages') {
      delete this.currentParams['keystages'];
      this.setQueryString();
      this.resetFilterState(this.keystages);
    }
    if(toClear === 'all') {
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
      this.filter.reset();
      this.currentParams = {};
      this.resetFilterState(this.types);
      this.resetFilterState(this.keystages);
      this.filter.patchValue({subject: 'All'});
      this.filterSubjects = 'All';
      this.setQueryString();
    }
  }

  setFilter(event, value) {
    event.preventDefault();
    this.contentLoading = true;
    let filterQuery = (_.isUndefined(this.currentParams[value.type])) ? [] : this.currentParams[value.type].split(',');
    if(value.active) {
      filterQuery.splice(_.indexOf(filterQuery, value.slug), 1);
      value.active = false;
      this.filter.patchValue({value: false});
    } else {
      filterQuery.push(value.slug);
      value.active = true;
      this.filter.patchValue({value: true});
    }
    this.currentParams[value.type] = filterQuery.join();
    this.setQueryString();
  }

  setQueryString() {
    let appendedQuery = '';
    _.forEach(this.currentParams, (value, key) => {
      if(value.length) appendedQuery += key + '=' + value.trim() + '&';
    });
    appendedQuery = appendedQuery.slice(0, -1);
    this.location.replaceState('/list', appendedQuery);
  }

  setSubject(event: Event) {
    this.contentLoading = true;
    this.filterSubjects = (<HTMLSelectElement>event.srcElement).value;
    this.currentParams['subject'] = this.filterSubjects;
    this.setQueryString();
    return this.filterSubjects;
  }

  setTopics(event) {
    this.contentLoading = true;
    let topicArray = [];
    if(!_.isUndefined(event.preventDefault)) {
      event.preventDefault();
      _.forEach(this.topics, (topic) => {
        if(topic.label === event.target.value) {
          if(event.target.checked) {
            topic.active = true;
          } else {
            topic.active = false;
          }
        }
        if(topic.active === true) topicArray.push(topic.slug);
      })
      this.currentParams['topics'] = topicArray.join();
    } else {
      let paramTopics = event.split(',');
      _.forEach(this.categories, (category) => {
        _.forEach(category.topics, (topic) => {
          _.forEach(paramTopics, (paramTopic) => {
            if(topic.slug === paramTopic) {
              topic.active = true;
              this.topics = category.topics;
              category.active = true;
              this.category = [category];
              let patch = {};
              patch[topic.name] = true;
              this.filter.patchValue(patch);
            }
          })
        })
      })
      this.currentParams['topics'] = event;
    }


    // All of the topics are false so do a search by category (all the topics)
    if(_.findIndex(this.topics, { 'active': true}) === -1) {
      _.forEach(this.topics, (topic) => {
        topic.active = false;
      })
    }

    delete this.currentParams['category'];
    this.setQueryString();
  }

  displayTopics(event) {
    let value = event;
    if(!_.isUndefined(event.preventDefault)) {
      event.preventDefault();
      value = event.target.id;
    }
    this.topics.length = 0;
    this.category = _.filter(this.categories, {name: value})
    this.topics = _.sortBy(this.category[0].topics, 'label');
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
    this.currentParams['category'] = this.category[0].slug;
    delete this.currentParams['topics'];
    this.setQueryString();

    this.category[0].active = true;
    let toSet = {}
    toSet[value] = true;
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
        parent.className = classes.join();
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
