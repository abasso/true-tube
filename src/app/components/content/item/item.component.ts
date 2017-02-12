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
export class ItemComponent implements OnInit {
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
      }
    )
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

    this.isItemInList()

    setTimeout(
      () => {
      this.videoJSplayer = videojs(this.player.nativeElement.id, {}, function() {
      })
    }, 200)
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

  // ngOnDestroy() {
  //   this.videoJSplayer.dispose();
  // }

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
    this.addedToFavourites = true
  }

  removeFromFavourites(event: any) {
    event.preventDefault()
    this.userService.removeFromList('favourites', this.id)
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

  isItemInList() {
    this.http.get('http://api.truetube.co.uk/me')
      .subscribe(
        (data) => {
          this.userData = JSON.parse(data['_body'])
          _.each(this.userData.lists, (list, key) => {
            _.each(list, (listItem) => {
              if (listItem === this.id && key === 'favourites') {
                this.addedToFavourites = true
              } else if (listItem === this.id) {
                this.listTitle = key
              }
            })
          })
        }
      )
  }
}
