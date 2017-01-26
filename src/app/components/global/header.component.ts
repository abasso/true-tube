import { Component, OnInit  } from '@angular/core'
import Cookies from 'js-cookie'
import _ from 'lodash'

import { Auth } from './../../services/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  menuVisible: boolean = false
  constructor(private auth: Auth) {

  }

  ngOnInit() {
  }

  toggleMenu(event) {
    event.preventDefault()
    this.menuVisible = (this.menuVisible === false) ? true : false
  }
  mobileSearch(event) {
    event.preventDefault()
    this.menuVisible = true
    document.getElementById("search").focus()
  }

  searchDone() {
    this.menuVisible = false
  }

}
