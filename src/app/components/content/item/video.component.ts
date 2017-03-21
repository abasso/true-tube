import { Component, OnInit, Input, ViewChild, ElementRef, OnDestroy} from '@angular/core'
import * as _ from 'lodash'
declare var videojs: any

@Component({
  selector: 'app-video-player',
  templateUrl: './video.component.html'
})
export class VideoComponent implements OnInit, OnDestroy {
  @Input() embed: any
  @Input() embeddedContent: any
  @Input() activeTab: any
  @Input() subtitles: any
  @ViewChild('player') player: ElementRef
  private videoJSplayer: any
  private hideAdvisory = false

  constructor() { }

  ngOnInit() {
    this.resetPlayer()
  }
  ngOnDestroy() {
    setTimeout(() => {
      if (!_.isUndefined(this.videoJSplayer)) {
        this.videoJSplayer.dispose()
      }
    }, 1)
  }

  playPlayer(event: any) {
    event.preventDefault()
    this.videoJSplayer.play()
    this.hideAdvisory = true
  }

  resetPlayer() {
    if (this.activeTab === 'film') {
      setTimeout(
        () => {
          this.videoJSplayer = videojs(this.player.nativeElement.id, {'html5': {
            nativeTextTracks: false
          }})
        }, 1)
      }
    }
  }
