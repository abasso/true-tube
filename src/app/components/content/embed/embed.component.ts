import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'
import { ActivatedRoute, Router, Params } from '@angular/router'
import { DataService } from './../../../services/data.service'
import * as _ from 'lodash'

declare var videojs: any

@Component({
  selector: 'app-item',
  templateUrl: './embed.component.html'
})
export class EmbedComponent implements OnInit {

  private videoJSplayer: any
  private data: any
  private item: any
  @ViewChild('player') player:ElementRef
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {
 }

  ngOnInit() {
    this.data = this.route.params
    .switchMap((params: Params) => this.dataService.item(params['id']))
    .subscribe(
      (data) => {
        this.item = _.find(data._source.embedded, {type: 'film'})
        if(this.item.thumbnail === null) this.item.thumbnail = this.item.thumbnail
      }
    )
    setTimeout(
      ()=>{
      this.videoJSplayer = videojs(this.player.nativeElement.id, {}, function() {
      })
    },100)
  }

}
