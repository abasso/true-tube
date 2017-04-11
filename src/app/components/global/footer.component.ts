import { Component, OnInit } from '@angular/core'
import moment from 'moment'
import { Angulartics2 } from 'angulartics2'
import { Angulartics2GoogleAnalytics } from 'angulartics2/dist/providers/ga/angulartics2-ga'
import * as Cookies from 'js-cookie'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  public currentYear: number = moment().year()

  constructor(
    public angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
    private angulartics2: Angulartics2
  ) { }

  ngOnInit() {
  }

  toggleSite(event: any) {
    Cookies.remove('proxy_override')
    window.location.reload()
  }

}
