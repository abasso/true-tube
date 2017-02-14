import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core'
import { Location } from '@angular/common'
import { DataService } from './../../../services/data.service'
import { UserService } from './../../../services/user.service'
import { AttributePipe } from './../../../pipes/attribute.pipe'
// import { EmbedMenuPipe } from './../../../pipes/embed-menu.pipe'
import { SanitiseUrlPipe } from './../../../pipes/sanitise-url.pipe'
import { ContentTypes } from './../../../definitions/content-types'
import { ActivatedRoute, Router, Params } from '@angular/router'
import { Auth } from './../../../services/auth.service'
import * as moment from 'moment'
import * as _ from 'lodash'
import 'rxjs/add/operator/switchMap'
import { Headers } from '@angular/http'


import {AuthHttp} from 'angular2-jwt'



declare var videojs: any

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  providers: [
    AttributePipe,
    SanitiseUrlPipe
  ]
})
export class ItemComponent implements OnInit, OnDestroy {
  private item: any = {}
  private data: any
  private id: string
  private showEmbed = false
  private embedButtonLabel = 'Copy'
  private embedButtonClass = 'btn-video'
  private embeddedContent: any = []
  private activeTab = 'film'
  private videoJSplayer: any
  private types
  private hideAdvisory = false
  public addedToFavourites = false
  public userData: any
  public listTitle
  public showLists = false
  public createListName = ''
  public addListError = false
  public addListErrorMessage = 'An error occured'
  public listArray: any[] = []
  public listButtonClass = 'btn-lesson-plan'
  public listButtonLabel = 'Create List &amp; Add'
  public notificationMessage = ''
  public showNotification = false
  public notificationRemove = false
  @ViewChild('player') player: ElementRef
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    private userService: UserService,
    private location: Location,
    private auth: Auth,
    private http: AuthHttp
  ) {}

  ngOnInit() {
    this.types = ContentTypes
    this.data = this.route.params
    .switchMap((params: Params) => this.dataService.item(params['id']))
    .subscribe(
      (data) => {
        this.item = data._source
        this.embeddedContent = _.groupBy(this.item.embedded, 'type')
        if (this.item.resource_types.length === 1) {
          this.item.hideMenu = true

        }
        _.each(this.item.embedded, (embed) => {
          if (embed.thumbnail === null) {
            embed.thumbnail = this.item.thumbnail
          }
        })
        _.each(this.item.related, (item) => {
          item.slug = '/item/' + item.uuid
          item.contenttypes = []
          _.each(item.resource_types, (type, key) => {
            if (_.findIndex(this.types, {'term': type.type}) !== -1) {
              item.contenttypes.push({'label': type.label, 'class': 'btn-' + type.type.replace('_', '-'), 'query': { 'tab': type.type}})
            }
          })
        })
        this.resetPlayer()
        if (this.auth.authenticated()) {
          this.isItemInList()
        }
      }
    )
    this.auth.loggedInStatus.subscribe((data) => {
      this.isItemInList()
    })
    this.route.params
    .map(params => params['id'])
    .subscribe((id) => {
      this.id = id
    })

    this.route.queryParams
    .map(params => params['tab'])
    .subscribe((type) => {
      if (!_.isUndefined(type)) {
        this.setActiveTab(type)
      }
    })
  }

  ngOnDestroy() {
    this.videoJSplayer.dispose()
  }

  pausePlayer() {
    this.videoJSplayer.pause()
  }

  playPlayer(event) {
    event.preventDefault()
    this.videoJSplayer.play()
    this.hideAdvisory = true
  }

  resetPlayer() {
    if (!_.isUndefined(this.videoJSplayer) && this.videoJSplayer !== null) {
      setTimeout(() => {
          this.videoJSplayer.dispose()
      }, 100);
    }
    setTimeout(
      () => {
      this.videoJSplayer = videojs(this.player.nativeElement.id, {}, function() {
      })
    }, 200)
  }

  hasAttributes(attribute: any) {
    return (_.isUndefined(attribute) || attribute === null || attribute === false || attribute.length === 0) ? false : true
  }

  navigateAttribute(event: any, type: string, attribute: string) {
    event.preventDefault()
    this.router.navigateByUrl('/list?' + type + '=' + attribute)
  }

  duration(seconds: number) {
    return moment('2017-01-01').startOf('day').seconds(seconds).format('mm:ss')
  }

  age(seconds: number) {
    return moment.unix(seconds).fromNow()
  }

  toggleEmbed(event: any) {
    event.preventDefault()
    return this.showEmbed = (this.showEmbed) ? false : true
  }

  setActiveTab(event: any) {
    event = event.replace(' ', '_')
    this.activeTab = event
  }

  tab(event: any) {
    this.router.navigateByUrl('/item/' + this.id + '?tab=' + event)
    this.pausePlayer()
  }

  embedCopySuccess(event: any) {
    this.embedButtonLabel = 'Copied'
    this.embedButtonClass = 'btn-success'
    setTimeout(() => {
      this.embedButtonLabel = 'Copy'
      this.embedButtonClass = 'btn-video'
    }, 1000)
  }

  addToFavourites(event: any) {
    event.preventDefault()
    this.userService.addToList('favourites', this.id)
    _.find(this.listArray, (listItem) => {
      if (listItem.name === 'Favourites') {
        listItem.checked = true
      }
    })
    this.addedToFavourites = true
  }

  removeFromFavourites(event: any) {
    event.preventDefault()
    this.userService.removeFromList('favourites', this.id)
    _.find(this.listArray, (listItem) => {
      if (listItem.name === 'Favourites') {
        listItem.checked = false
      }
    })
    this.addedToFavourites = false
  }

  toggleLists(event: any) {
    event.preventDefault()
    if (this.showLists === true) {
      this.showLists = false
    } else {
      this.showLists = true;
    }
  }

  addList(event) {
    if (_.findIndex(this.listArray, (list) => {
      return list.name === this.createListName
    }) !== -1) {
      this.addListError = true
      this.addListErrorMessage = 'A list with that name already exists'
    } else if (this.createListName !== '') {

      this.addListError = false
      let header = new Headers()
      let listSlug = _.kebabCase(this.createListName)
      header.append('Content-Type', 'application/json');
      this.http.post('http://api.truetube.co.uk/me/' + listSlug + '/' + this.id, {
        title : this.createListName
      }, { headers: header }).subscribe(
      (data) => {
        this.listArray.push({
          name: this.createListName,
          checked: true
        })
        this.listButtonLabel = 'Created ' + _.capitalize(decodeURI(this.createListName))
        this.listButtonClass = 'btn-success'
        this.toggleNotification(_.capitalize(decodeURI(this.createListName)), true)
        setTimeout(() => {
          this.listButtonLabel = 'Create List &amp; Add'
          this.listButtonClass = 'btn-lesson-plan'
          this.createListName = ''
        }, 2000)
      })
    } else {
      this.addListError = true
      this.addListErrorMessage = 'Please enter a list name'
    }
  }

  toggleNotification(list, added) {
    this.showNotification = false
    let message = 'Removed from '
    if (added === false) {
      this.notificationRemove = true
    } else {
      message = 'Added to '
      this.notificationRemove = false
    }
    this.notificationMessage = message + _.capitalize(decodeURI(list))
    this.showNotification = true
    setTimeout(() => {
      this.showNotification = false
    }, 1000)
  }

  setList(event, list) {
    if (event.target.checked) {
      if (list === 'Favourites') {
        this.addedToFavourites = true
      }
      this.toggleNotification(list, true)
      this.http.post('http://api.truetube.co.uk/me/' + list + '/' + this.id, {}).subscribe(
      (data) => {

      })
    } else {
      this.toggleNotification(list, false)
      if (list === 'Favourites') {
        this.addedToFavourites = false
      }
      this.http.delete('http://api.truetube.co.uk/me/' + list + '/' + this.id).subscribe(
      (data) => {
      })
    }
  }

  keyCheck(event) {
    if (event.key === 'Enter') {
      this.addList(event)
    }
  }

  isItemInList() {
    this.http.get('http://api.truetube.co.uk/me')
      .subscribe(
        (data) => {
          this.addedToFavourites = false
          this.userData = JSON.parse(data['_body'])
          this.listArray = []
          _.each(this.userData.lists, (list, key) => {
            let arrayItem = {
              name: _.capitalize(decodeURI(key)),
              checked: false,
              order: 1
            }
            _.each(list.items, (listItem) => {
              if (listItem === this.id && key === 'favourites') {
                arrayItem.checked = true
                this.addedToFavourites = true
                arrayItem.order = 0
              } else if (listItem === this.id) {
                arrayItem.checked = true
                this.listTitle = _.capitalize(decodeURI(key))
              }
            })
            this.listArray.push(arrayItem)
          })
        }
      )
  }
}
