import { Component, OnInit, Input, ViewChild, ElementRef, OnChanges, OnDestroy} from '@angular/core'
import * as _ from 'lodash'
declare var videojs: any

@Component({
  selector: 'app-video-player',
  templateUrl: './video.component.html'
})
export class VideoComponent implements OnInit, OnChanges, OnDestroy {
  @Input() embed: any
  @Input() embeddedContent: any
  @Input() activeTab: any
  @Input() subtitles: any
  @Input() enableSubtitles: any
  @Input() play: any
  @ViewChild('player') player: ElementRef
  private videoJSplayer: any

  constructor() { }

  ngOnInit() {
    this.resetPlayer()
  }

  ngOnChanges() {
    if (this.play === true && !_.isUndefined(this.videoJSplayer)) {
      this.playPlayer(null)
      if (this.enableSubtitles === true) {
        let tracks = this.videoJSplayer.textTracks()
        for (let i = 0; i < tracks.length; i++) {
          let track = tracks[i]
          if (track.kind === 'captions' && track.language === 'en') {
            track.mode = 'showing'
          }
        }
      }

    }
  }

  ngOnDestroy() {
    setTimeout(() => {
      if (!_.isUndefined(this.videoJSplayer)) {
        this.videoJSplayer.dispose()
      }
    }, 1)
  }

  playPlayer(event: any) {
    if (event !== null) {
      event.preventDefault()
    }
    this.videoJSplayer.play()
  }

  resetPlayer() {
    if (this.activeTab === 'film') {
      setTimeout(
        () => {
          this.videoJSplayer = videojs(this.player.nativeElement.id, {'html5': {
            nativeTextTracks: false
          }})
          // let v = document.getElementsByTagName('video')[0]
          // v.addEventListener('progress', function(data) {
          //   console.log(data)
          // }, true)
        }, 1)
      }
    }
  }
