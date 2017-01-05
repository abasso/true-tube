import { Component, NgModule, OnInit, ViewChild, ElementRef } from '@angular/core'
import { Item } from './../../../definitions/mock-item'
import { DataService } from './../../../services/data.service'
import { AttributePipe } from './../../../pipes/attribute.pipe'
import { EmbedMenuPipe } from './../../../pipes/embed-menu.pipe'
import { ActivatedRoute, Router, Params } from '@angular/router'
import { Auth } from './../../../services/auth.service'
import { ClipboardModule } from 'ngx-clipboard'
import moment from 'moment'
import _ from 'lodash'
import 'rxjs/add/operator/switchMap'

declare var videojs: any

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  providers: [
    AttributePipe
  ]
})
export class ItemComponent implements OnInit {
  private item: any = {}
  private data: any
  private showEmbed: boolean = false
  private embedButtonLabel: string = 'Copy'
  private embedButtonClass: string = 'btn-video'
  private embeddedContent: any[] = []
  private activeTab: string = 'film'
  private videoJSplayer
  @ViewChild('player') player:ElementRef
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
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
          if(embed.thumbnail === null) embed.thumbnail = this.item.thumbnail
        })
        _.each(this.item.related, (item) => {
          item.slug = '/item/' + item.uuid
        })
      }
    )
    setTimeout(
      ()=>{
      this.videoJSplayer = videojs(this.player.nativeElement.id, {}, function() {
      })
    },100)
  }

  ngAfterViewInit() {

  }

  pausePlayer() {
    this.videoJSplayer.pause()
  }

  ngOnDestroy() {
    this.videoJSplayer.dispose();
    //alert('DESTROYING THE VIEWWWWW');
  }

  hasAttributes(attribute) {
    return (_.isUndefined(attribute) || attribute === null || attribute === false || attribute.length === 0) ? false : true
  }

  navigateAttribute(event, type, attribute) {
    event.preventDefault()
    this.router.navigateByUrl('/list?' + type + '=' + attribute)
  }

  duration(seconds) {
    return moment("2017-01-01").startOf('day').seconds(seconds).format('mm:ss')
  }

  age(seconds) {
    return moment.unix(seconds).fromNow()
  }

  toggleEmbed(event) {
    event.preventDefault()
    return this.showEmbed = (this.showEmbed) ? false : true
  }

  setActiveTab(event) {
    this.activeTab = event
    if(event !== 'film') this.videoJSplayer.pause()
  }

  embedCopySuccess(event) {
    this.embedButtonLabel = 'Copied'
    this.embedButtonClass = 'btn-success'
    setTimeout(() => {
      this.embedButtonLabel = 'Copy'
      this.embedButtonClass = 'btn-video'
    }, 1000)
  }


}
