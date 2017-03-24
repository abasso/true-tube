import { Component, OnInit } from '@angular/core'
import { DataService } from './../../../services/data.service'
import { ActivatedRoute } from '@angular/router'
import { Angulartics2GoogleAnalytics, Angulartics2 } from 'angulartics2'
import * as _ from 'lodash'

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html'
})
export class ItemPageComponent implements OnInit {
  private content: any[] = []
  private param: any
  private currentId: string
  public gridSize = 'grid-row'
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    public angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
    private angulartics2: Angulartics2
  ) {
  }
  ngOnInit() {
    this.param = this.route.url.subscribe(
      (url) => {
        this.currentId = url[url.length - 1].path

      this.dataService.itemPages(this.currentId)
      .subscribe(
        (data) => {
          window.scrollTo(0, 0)
          if (data._source.grid_size !== 3) {
            this.gridSize = (data._source.grid_size === 4) ? 'grid-row-four' : (data._source.grid_size === 2) ? 'grid-row-two' : 'list-row'
          }
          this.content.push(data._source)
          _.each(this.content, (content) => {
            _.each(content.items, (item) => {
              if (item.link) {
                item.cleanLink = item.link.split('/')[2]
              }
            })
          })
        }
      )
    }
  )
}
}
