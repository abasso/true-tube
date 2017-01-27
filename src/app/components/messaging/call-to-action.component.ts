import { Component, OnInit } from '@angular/core'
import * as Cookies from 'js-cookie'
import * as _ from 'lodash'
@Component({
  selector: 'app-call-to-action',
  templateUrl: './call-to-action.component.html'
})
export class CallToActionComponent implements OnInit {
  private fontSize: number = 16
  private dyslexiaEnabled: boolean = false
  private dyslexiaLabel: string = 'Dyslexia Font'
  constructor() { }

  ngOnInit() {
    if(Cookies.get('dyslexia-font')) {
      this.setDyslexiaFont()
      this.dyslexiaEnabled = true
      this.dyslexiaLabel = 'Standard Font'
    }
  }

  toggleDyslexiaFont(event: any) {
    this.dyslexiaEnabled = (this.dyslexiaEnabled) ? false : true
    this.dyslexiaLabel = (this.dyslexiaEnabled) ? 'Standard Font' : 'Dyslexia Font'
    event.preventDefault()
    this.setDyslexiaFont()
    this.setDyslexiaCookie()
  }

  enlargeFont(event: any) {
    event.preventDefault()
    let body: any = document.getElementsByTagName('body')[0]
    let fontSize: any = this.fontSize++
    body.setAttribute('style', 'font-size:' + fontSize + 'px')
  }

  reduceFont(event: any) {
    event.preventDefault()
    let body: any = document.getElementsByTagName('body')[0]
    let fontSize: any = this.fontSize--
    body.setAttribute('style', 'font-size:' + fontSize + 'px')
  }

  setDyslexiaCookie() {
    if(_.isUndefined(Cookies.get('dyslexia-font'))) {
      Cookies.set('dyslexia-font', 'true')
    } else {
      Cookies.remove('dyslexia-font')
    }
  }

  setDyslexiaFont() {
    let body: any = document.getElementsByTagName('body')[0]
    let className: string = 'dyslexia'
    if (body.classList) {
      body.classList.toggle(className)
    } else {
      let classes: any = body.className.split(' ')
      let existingIndex: any = classes.indexOf(className)
      if (existingIndex >= 0)
        classes.splice(existingIndex, 1)
      else
        classes.push(className)
      body.className = classes.join(' ')
    }
  }


}
