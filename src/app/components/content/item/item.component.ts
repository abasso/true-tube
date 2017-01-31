import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'
import { Location } from '@angular/common'
import { DataService } from './../../../services/data.service'
import { AttributePipe } from './../../../pipes/attribute.pipe'
// import { EmbedMenuPipe } from './../../../pipes/embed-menu.pipe'
import { SanitiseUrlPipe } from './../../../pipes/sanitise-url.pipe'
import { ActivatedRoute, Router, Params } from '@angular/router'
import { Auth } from './../../../services/auth.service'
import * as moment from 'moment'
import * as _ from 'lodash'
import 'rxjs/add/operator/switchMap'

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
  @ViewChild('player') player: ElementRef
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    private location: Location,
    private auth: Auth
  ) {}

  ngOnInit() {
    this.data = this.route.params
    .switchMap((params: Params) => this.dataService.item(params['id']))
    .subscribe(
      (data) => {
        this.item = data._source
        this.embeddedContent = _.groupBy(this.item.embedded, 'type')
        _.each(this.item.embedded, (embed) => {
          if (embed.thumbnail === null) {
            embed.thumbnail = this.item.thumbnail
          }
        })
        _.each(this.item.related, (item) => {
          item.slug = '/item/' + item.uuid
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

    setTimeout(
      () => {
      this.videoJSplayer = videojs(this.player.nativeElement.id, {}, function() {
      })
    }, 200)
  }

  pausePlayer() {
    this.videoJSplayer.pause()
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
  }

  embedCopySuccess(event: any) {
    this.embedButtonLabel = 'Copied'
    this.embedButtonClass = 'btn-success'
    setTimeout(() => {
      this.embedButtonLabel = 'Copy'
      this.embedButtonClass = 'btn-video'
    }, 1000)
  }


}
