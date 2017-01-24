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
  menuVisible: boolean = false
  constructor(private auth: Auth) {

  }

  ngOnInit() {
  }

  toggleMenu(event) {
    event.preventDefault()
    this.menuVisible = (this.menuVisible === false) ? true : false
  }

}
