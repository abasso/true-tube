import { Component, NgModule, OnInit, ViewChild, ElementRef } from '@angular/core'
import { Item } from './../../../definitions/mock-item'
import { DataService } from './../../../services/data.service'
import { AttributePipe } from './../../../pipes/attribute.pipe'
import { EmbedMenuPipe } from './../../../pipes/embed-menu.pipe'
import { ActivatedRoute, Router, Params } from '@angular/router'
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
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.data = this.route.params
    .switchMap((params: Params) => this.dataService.item(params['id']))
    .subscribe(
      (data) => {
        this.item = data._source
        this.embeddedContent = _.groupBy(this.item.embedded, 'type')
      }
    )
  }

  ngAfterViewInit() {

    setTimeout(
      ()=>{
      console.log('cats', this.player)
      this.videoJSplayer = videojs(this.player.nativeElement.id, {}, function() {
          // This is functionally the same as the previous example.
      });
    },100)


  }


  hasAttributes(attribute) {
    return (_.isUndefined(attribute) || attribute === null || attribute === false || attribute.length === 0) ? false : true
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
    console.log(event);
    this.activeTab = event
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
