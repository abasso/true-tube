import { Component, OnInit  } from '@angular/core'
import Cookies from 'js-cookie'
import _ from 'lodash'

import { Auth } from './../../services/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  showCallToAction: boolean
  callToActionClasses: Object
  menuVisible: boolean = false
  constructor(private auth: Auth) {}

  ngOnInit() {
    this.showCallToAction = (_.isUndefined(Cookies.get('hide-call-to-action'))) ? false : true
    this.callToActionClasses = {'hidden-xs-up': this.showCallToAction, 'call-to-action': true }
    if (!this.showCallToAction) {
      document.getElementById('call-to-action-hide-link').addEventListener('click', (e) => {
        Cookies.set('hide-call-to-action', true)
      })
    }

  }
  toggleMenu(event) {
    console.log('toggling menu')
    event.preventDefault()
    this.menuVisible = (this.menuVisible === false) ? true : false
  }

}
