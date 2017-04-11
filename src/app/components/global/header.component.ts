import { Component, OnInit } from '@angular/core'
import { Auth } from './../../services/auth.service'
import { Angulartics2 } from 'angulartics2'
import { Angulartics2GoogleAnalytics } from 'angulartics2/dist/providers/ga/angulartics2-ga'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  public menuVisible = false
  constructor(
    public auth: Auth,
    public angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
    private angulartics2: Angulartics2
  ) {
  }
  ngOnInit() {
  }
  toggleMenu(event: any) {
    event.preventDefault()
    this.menuVisible = (this.menuVisible === false) ? true : false
  }
  mobileSearch(event: any) {
    event.preventDefault()
    this.menuVisible = true
    document.getElementById('search').focus()
  }
  searchDone(event: any) {
    this.hideMenu()
    document.getElementById('search').blur()
  }

  menuClick() {
    this.hideMenu()
  }

  hideMenu() {
    this.menuVisible = false
  }

}
