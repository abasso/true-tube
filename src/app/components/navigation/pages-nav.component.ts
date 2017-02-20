import { Component, OnInit } from '@angular/core'
import { DataService } from './../../services/data.service'
import { Angulartics2GoogleAnalytics, Angulartics2 } from 'angulartics2'

@Component({
  selector: 'app-pages-nav',
  templateUrl: './pages-nav.component.html'
})
export class PagesNavComponent implements OnInit {
  public menu
  constructor(
    private dataService: DataService,
    public angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
    private angulartics2: Angulartics2
  ) { }

  ngOnInit() {
    this.dataService.menus()
    .subscribe((data) => {
      this.menu = data._source.items
    })
  }

}
