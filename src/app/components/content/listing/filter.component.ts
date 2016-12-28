import { Component, OnInit, Injectable, Input, EventEmitter } from '@angular/core'
import { Location } from '@angular/common'
import { FormBuilder, FormGroup } from '@angular/forms'
// import { ActivatedRoute, Params } from '@angular/router'
import { ActivatedRoute, Router } from '@angular/router'
import { ListComponent } from './list.component'
import { SortComponent } from './sort.component'
import { DataService } from './../../../services/data.service'
import { Categories } from './../../../definitions/categories'
import { Subjects } from './../../../definitions/subjects'
import { ContentTypes } from './../../../definitions/content-types'
import { KeyStages } from './../../../definitions/key-stages'
import { ListService } from './../../../services/list.service'
import _ from 'lodash'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/operator/switchMap'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html'
})
export class ListFilter implements OnInit {
  private contentLoading: boolean = true
  private topics: any[] = []
  private filterSubjects: string
  private categories: any[] = Categories
  private types: any[] = ContentTypes
  private subjects: any[] = Subjects
  private keystages: any[] = KeyStages
  private category = null
  private currentItemCount: number
  private items
  private itemsTotal: number = 0
  private itemsTotalLabel: string = 'Items'
  private filter: FormGroup
  private activeFilters: number = 0
  private currentParams: any
  private currentCategory: string
  private currentCategoryString: string
  constructor(private listService: ListService, private route: ActivatedRoute, private router: Router,  private listComponent: ListComponent, private dataService: DataService, private location: Location, private formBuilder: FormBuilder) {
    // Construct the filter form

    listService.pathToReset$.subscribe(
      query => {
        this.route.queryParams
        .subscribe((params) => {
          this.currentParams = _.assign({}, params)
        });
      });


    let formElements = {
      term: '',
      subject: '',
      category: ''
    }
    _.forEach(this.types, (type) => {
      formElements[type.name] = ''
    })

    _.forEach(this.keystages, (keystage) => {
      formElements[keystage.name] = ''
    })

    _.forEach(this.categories, (category) => {
      formElements[category.name] = ''
      _.forEach(category.topics, (topic) => {
        formElements[topic.name] = ''
      })
    })

    this.filter = formBuilder.group(formElements)
    this.route.queryParams
    .subscribe((params) => {
      this.currentParams = _.assign({}, params)
    });
  }

  ngOnInit() {
    this.filterSubjects = 'All'
    this.filter.patchValue({subject: 'All'})
    //var el = document.getElementById('GridFilter')
    // var sortable = Sortable.create(el)
    this.listComponent.data = this.filter.valueChanges
    .debounceTime(400)
    .distinctUntilChanged()
    .switchMap(data => this.dataService.search(data, this.types, this.keystages, this.filterSubjects, this.topics, this.category))

    this.items = this.listComponent.data.subscribe(
      (data) => {
        this.contentLoading = false
        this.listComponent.paginationData.totalItems = data.hits.hits.length
        this.listComponent.resetPagination()
        _.forEach(data.hits.hits, (item) => {
          item.typesCount = _.countBy(item._source.embedded, 'type')
          item.contenttypes = []
          _.forEach(item.typesCount, (type, key) => {
            key = (key === 'film') ? 'video' : key
            let typestring = (type > 1) ? key.replace('_', ' ') + 's' : key.replace('_', ' ')
            item.contenttypes.push({'label': typestring, 'class': 'btn-' + key.replace('_', '-')})
          })
        })
        this.listComponent.itemCount = data.hits.total
        this.listComponent.items = data.hits.hits
        // _.forEach(this.categories, (category) => {
        //   _.forEach(category.topics, (topic) => {
        //     topic.count = 0
        //   })
        // })
        _.forEach(this.listComponent.items, (item) => {
          _.forEach(this.categories, (category) => {
            _.forEach(category.topics, (subCategory) => {
              _.forEach(item._source.topic, (topic) => {
                if(topic === subCategory.label) {
                  //subCategory.count++
                  item._source.category = category
                }
              })
            })
          })
        })
        // _.forEach(this.categories, (category) => {
        //   category.count = 0
        //   _.forEach(category.topics, (subCategory) => {
        //     category.count += subCategory.count
        //   })
        // })
        if(_.isUndefined(this.currentItemCount)) {
          this.currentItemCount = this.listComponent.itemCount
        }
        this.updateTotal(this.currentItemCount, this.listComponent.itemCount)
        this.listComponent.resetPagination()
      }
    )

    this.route.queryParams
    .map(params => params['content types'])
    .subscribe((types) => {
      if(!_.isUndefined(types)) {
        this.resetFilterState(this.types)
          let typeArray = types.split(',')
          _.forEach(typeArray, (type) => {
            let pathType = _.find(this.types, { slug: type})
            pathType.active = true
            let patch = {}
            patch[pathType.name] = true
            this.filter.patchValue(patch)
          })
      } else {
        this.clearTypes(null)
      }
    })

    this.route.queryParams
    .map(params => params['keystages'])
    .subscribe((keystages) => {
      if(!_.isUndefined(keystages)) {
        this.resetFilterState(this.keystages)
          let keyArray = keystages.split(',')
          _.forEach(keyArray, (key) => {
            let pathKeys = _.find(this.keystages, { slug: key})
            pathKeys.active = true
            let patch = {}
            patch[pathKeys.name] = true
            this.filter.patchValue(patch)
          })
      } else {
        this.clearKeystages(null)
      }
    })

    this.route.queryParams
    .map(params => params['search'])
    .subscribe((search) => {
      if(!_.isUndefined(search)) {
        this.filter.patchValue({term: search})
      } else {
        this.clearTerm(null)
      }
    })

    this.route.queryParams
    .map(params => params['topics'])
    .subscribe((topics) => {
      if(!_.isUndefined(topics)) {
        this.setTopics(topics)
      } else {
        this.clearTopics(null)
      }
    })

    this.route.queryParams
    .map(params => params['category'])
    .subscribe((category) => {
      if(this.currentCategory === category) return;
      if(!_.isUndefined(category)) {
        this.category = _.filter(this.categories, {slug: category})
        this.displayTopics(this.category[0].name)
      } else {
        if(_.findIndex(this.topics, {active:true}) === -1) {
          this.clearCategory();
        }
      }
    })

    this.route.queryParams
    .map(params => params['subject'])
    .subscribe((subject) => {
      if(!_.isUndefined(subject)) {
        let sub = _.find(this.subjects, {slug: subject})
        this.currentParams['subject'] = sub.slug
        this.filterSubjects = sub.label;
        this.filter.patchValue({subject: sub.slug})
      } else {
        this.clearSubject(null)
      }
    })
  }

  querySubscription() {
    this.route.queryParams
    .subscribe((params) => {
      this.currentParams = _.assign({}, params)
    })
  }

  resetFilterState(filter) {
    _.forEach(filter, (item) => {
      item.active = false
      let name = filter.name
      this.filter.patchValue({name: null})
    })
  }

  updateTotal(currentCount, newCount) {

    let countSpeed = 3
    let difference = currentCount - newCount

    if(this.itemsTotal > newCount) {
      countSpeed = (difference > 400) ? 81 : (difference > 200) ? 21 : 11
    } else {
      countSpeed = (difference < 400) ? 81 : (difference < 200) ? 21 : 11
    }

    if(countSpeed === 0) countSpeed = 1
    if(currentCount === newCount) countSpeed = currentCount
    let loop = () => {
      if(this.itemsTotal > newCount) {
        this.itemsTotal -= countSpeed
        if(this.itemsTotal <= newCount) {
          this.itemsTotal = this.listComponent.itemCount
          this.currentItemCount = this.listComponent.itemCount
          this.itemsTotalLabel = (newCount > 1) ? 'Items' : 'Item'
        } else {
          requestAnimationFrame( loop )
        }
      } else {
        this.itemsTotal += countSpeed
        if(this.itemsTotal >= newCount) {
          this.itemsTotal = this.listComponent.itemCount
          this.currentItemCount = this.listComponent.itemCount
          this.itemsTotalLabel = (newCount > 1) ? 'Items' : 'Item'
        } else {
          requestAnimationFrame( loop )
        }
      }
    }
    loop()
  }

  search(event) {
    this.contentLoading = true
    this.currentParams['search'] = event.target.value
    this.setQueryString()
    this.listComponent.resetPagination()

  }

  clearTerm(event) {
    if(event !== null) event.preventDefault()
    this.contentLoading = true
    this.filter.patchValue({term: ''})
    delete this.currentParams.search
    this.setQueryString()
  }

  clearSubject(event) {
    if(event !== null) event.preventDefault()
    this.contentLoading = true
    this.filter.patchValue({subject: 'All'})
    this.filterSubjects = 'All'
    delete this.currentParams.subject
    this.setQueryString()
  }

  clearCategory() {
    this.category = null
    _.forEach(this.categories, (category) => {
      let toClear = {}
      toClear[category.name] = ''
      this.filter.patchValue(toClear)
      category.active = false
    })
    delete this.currentParams.category
    this.setQueryString()
  }

  clearCategoryAndTopics(event) {
    if(event !== null) event.preventDefault()
    this.contentLoading = true
    this.category = null
    _.forEach(this.topics, (topic) => {
      let toClear = {}
      toClear[topic.name] = ''
      this.filter.patchValue(toClear)
      topic.active = false
    })
    _.forEach(this.categories, (category) => {
      let toClear = {}
      toClear[category.name] = ''
      this.filter.patchValue(toClear)
      category.active = false
    })
    delete this.currentParams.category
    this.setQueryString()
  }

  clearTopics(event) {
    if(event !== null) event.preventDefault()
    // if(_.isUndefined(this.currentParams.category)) return
    this.contentLoading = true
    _.forEach(this.topics, (topic) => {
      let toClear = {}
      toClear[topic.name] = ''
      this.filter.patchValue(toClear)
      topic.active = false
    });

    if(this.category !== null) this.currentParams.category = this.category[0].slug
    delete this.currentParams.topics
    this.setQueryString()
  }

  clearTypes(event) {
    if(event !== null) event.preventDefault()
    this.contentLoading = true
    _.forEach(this.types, (type) => {
      let toClear = {}
      toClear[type.name] = ''
      this.filter.patchValue(toClear)
      type.active = false
    })
    delete this.currentParams['content types']
    this.setQueryString()
    this.resetFilterState(this.types)
  }

  clearKeystages(event) {
    if(event !== null) event.preventDefault()
    this.contentLoading = true
    delete this.currentParams.keystages
    this.setQueryString()
    this.resetFilterState(this.keystages)
  }

  clearAll(event) {
    if(event !== null) event.preventDefault()
    this.contentLoading = true
    this.clearSubject(event)
    this.clearCategoryAndTopics(event)
    this.clearTopics(event)
    this.clearTypes(event)
    this.clearKeystages(event)
    this.clearTerm(event)
  }

  setFilter(event, value) {
    if(!_.isUndefined(event)) event.preventDefault()
    this.contentLoading = true
    let filterQuery = (_.isUndefined(this.currentParams[value.type])) ? [] : this.currentParams[value.type].split(',')
    if(value.active) {
      filterQuery.splice(_.indexOf(filterQuery, value.slug), 1)
      value.active = false
      this.filter.patchValue({value: false})
    } else {
      filterQuery.push(value.slug)
      value.active = true
      this.filter.patchValue({value: true})
    }
    this.currentParams[value.type] = filterQuery.join()
    this.setQueryString()
  }

  setQueryString() {
    let appendedQuery = ''
    _.forEach(this.currentParams, (value, key) => {
      if(value.length) appendedQuery += key + '=' + value.trim() + '&'
    })
    this.router.navigateByUrl('/list?' + appendedQuery, {replaceUrl: true})
  }

  navigate(query) {
    let appendedQuery = ''
    _.forEach(query, (value, key) => {
      if(value.length) appendedQuery += key + '=' + value.trim() + '&'
    })
    this.router.navigateByUrl('/list?' + appendedQuery, {replaceUrl: true})
  }

  setSubject(event: Event) {
    this.contentLoading = true
    this.filterSubjects = (<HTMLSelectElement>event.srcElement).value
    this.currentParams['subject'] = this.filterSubjects
    this.setQueryString()
    return this.filterSubjects
  }

  setTopics(event) {
    this.contentLoading = true
    let paramTopics = (_.isUndefined(this.currentParams.topics)) ? [] : this.currentParams.topics.split(',');
    if(!_.isUndefined(event.preventDefault)) {
      event.preventDefault()
      if(event.target.checked) {
        if(_.indexOf(paramTopics, event.target.value) === -1) {
          paramTopics.push(event.target.value)
        }
      }
      else {
        paramTopics.splice(_.indexOf(paramTopics, event.target.value), 1);
      }
    } else {
      paramTopics = event.split(',')
    }
    this.category = [];
      _.forEach(this.categories, (category) => {
        _.forEach(category.topics, (topic) => {
          _.forEach(paramTopics, (paramTopic) => {
            if(topic.slug === paramTopic) {
              topic.active = true
              this.topics = category.topics
              this.topics = _.sortBy(category.topics, 'label')
              category.active = true
              this.category.push(category);
              let patch = {}
              patch[topic.name] = true
              this.filter.patchValue(patch);
            }
          })
        })
      })
      _.forEach(this.topics, (topic) => {
        topic.active = false;
        _.forEach(paramTopics, (paramTopic) => {
          if(topic.slug === paramTopic) {
            topic.active = true;
          }
        })
      })
      this.currentParams['topics'] = paramTopics.join();
      delete this.currentParams.category

    if(_.findIndex(this.topics, { 'active': true}) === -1) {
      _.forEach(this.topics, (topic) => {
        topic.active = false
      })
    }
    this.setQueryString()
  }

  displayTopics(event) {
    let value = event
    if(!_.isUndefined(event.preventDefault)) {
      event.preventDefault()
      value = event.target.id
    }
    this.topics.length = 0
    this.category = _.filter(this.categories, {name: value})
    this.currentCategory = this.category[0].slug;
    this.currentCategoryString = this.category[0].label;
    this.topics = _.sortBy(this.category[0].topics, 'label')
    _.forEach(this.categories, (category) => {
      let toClear = {}
      toClear[category.name] = ''
      this.filter.patchValue(toClear)
      category.active = false
    })
    _.forEach(this.topics, (topic) => {
      let toClear = {}
      toClear[topic.name] = ''
      this.filter.patchValue(toClear)
      topic.active = false
    })
    this.currentParams['category'] = this.category[0].slug
    delete this.currentParams['topics']
    this.setQueryString()

    this.category[0].active = true
    let toSet = {}
    toSet[value] = true
    this.filter.patchValue(toSet)
    _.forEach(this.topics, (topic) => {
      topic.active = false
    })
  }

  checkboxesActive(data) {
    return (_.findIndex(data, { 'active': true}) !== -1) ? true : false
  }

  filterActive() {
    return (this.filter.value.term || this.filterSubjects !== 'All' || _.findIndex(this.types, { 'active': true}) != -1 || _.findIndex(this.keystages, { 'active': true}) != -1 || this.category !== null ) ? true : false
  }

  subjectsActive(subject) {
    return (subject !== 'All') ? true : false
  }

  isActive(collection) {
    let isActive = false
    _.forEach(collection, (item) => {
      if(item.active === true) isActive = true
    })
    return isActive
  }

  toggleFilter(event) {
    event.preventDefault()
    if(event.target.tagName === 'SPAN') return
    let parent = event.target.parentElement.parentElement
    if (parent.classList) {
      parent.classList.toggle('collapsed')
    } else {
      let classes = parent.className.split(' ')
      let i = classes.indexOf('collapsed')
      if (i >= 0) {
        classes.splice(i, 1)
      }
      else {
        classes.push('collapsed')
        parent.className = classes.join()
      }
    }
  }

  showFilter(event) {
    event.preventDefault()
    let parent = event.target.parentElement.parentElement
    event.target.innerHTML = (event.target.innerHTML === 'Show') ? 'Hide' : 'Show'

    if (parent.classList) {
      parent.classList.toggle('show')
    } else {
      let classes = parent.className.split(' ')
      let i = classes.indexOf('show')
      if (i >= 0) {
        classes.splice(i, 1)
      }
      else {
        classes.push('show')
        parent.className = classes.join(' ')
      }
    }
  }
}
