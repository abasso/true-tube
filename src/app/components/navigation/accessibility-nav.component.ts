import { Component, OnInit } from '@angular/core'
import Cookies from 'js-cookie'
import _ from "lodash"

@Component({
  selector: 'app-accessibility-nav',
  templateUrl: './accessibility-nav.component.html'
})
export class AccessibilityNavComponent implements OnInit {
  fontSize: number = 16
  constructor() { }

  ngOnInit() {
    // this.setDyslexiaFont()
  }

  toggleDyslexiaFont(event) {
    event.preventDefault()
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
    let body = document.getElementsByTagName('body')[0]
    let fontSize = this.fontSize++
    body.setAttribute('style', 'font-size:' + fontSize + 'px')
  }

  reduceFont(event) {
    event.preventDefault()
    let body = document.getElementsByTagName('body')[0]
    let fontSize = this.fontSize--
    body.setAttribute('style', 'font-size:' + fontSize + 'px')
  }

  // setDyslexiaFont() {
  //   let body = document.getElementsByTagName('body')[0]
  //   if(_.isUndefined(Cookies.get("dyslexia-font"))) {
  //     body.classList.classList.add('dyslexia')
  //   }
  // }


}
