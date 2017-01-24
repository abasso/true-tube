import { Component, OnInit } from '@angular/core'
import Cookies from 'js-cookie'
import _ from 'lodash'
@Component({
  selector: 'app-call-to-action',
  templateUrl: './call-to-action.component.html'
})
export class CallToActionComponent implements OnInit {
  private fontSize: number = 16
  private dyslexiaEnabled: boolean = false
  private dyslexiaLabel: string = "Dyslexia Font"
  constructor() { }

  ngOnInit() {
  }

  toggleDyslexiaFont(event) {
    event.preventDefault()
    this.dyslexiaEnabled = (this.dyslexiaEnabled) ? false : true
    this.dyslexiaLabel = (this.dyslexiaEnabled) ? "Standard Font" : "Dyslexia Font"
    let body = document.getElementsByTagName('body')[0]
    let className = 'dyslexia'
    if (body.classList) {
      body.classList.toggle(className)
    } else {
      var classes = body.className.split(' ')
      var existingIndex = classes.indexOf(className)
      if (existingIndex >= 0)
        classes.splice(existingIndex, 1)
      else
        classes.push(className)
      body.className = classes.join(' ')
    }
  }

  enlargeFont(event) {
    event.preventDefault()
    let body = document.getElementsByTagName('html')[0]
    let fontSize = ++this.fontSize
    body.setAttribute('style', 'font-size:' + fontSize + 'px')
  }

  reduceFont(event) {
    event.preventDefault()
    let body = document.getElementsByTagName('html')[0]
    let fontSize = --this.fontSize
    body.setAttribute('style', 'font-size:' + fontSize + 'px')
  }

}
