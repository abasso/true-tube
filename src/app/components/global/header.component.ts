import { Component, OnInit  } from '@angular/core'
import { Auth } from './../../services/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  menuVisible = false
  constructor(
    private auth: Auth
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

  searchDone() {
    this.menuVisible = false
  }

}
