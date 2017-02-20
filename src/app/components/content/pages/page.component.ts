import { Component, OnInit } from '@angular/core'
import { DataService } from './../../../services/data.service'
import { ActivatedRoute } from '@angular/router'
import * as _ from 'lodash'

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html'
})
export class PageComponent implements OnInit {
  private content: any
  private menu: any
  private menuData: any
  private param: any
  private currentId: string
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {
  }
  ngOnInit() {
    this.param = this.route.url.subscribe(
      (url) => {
        let path = '/'
        _.each(url, (urlPart) => {
          path += urlPart.path + '/'
        })
        path = _.trimEnd(path, '/')
        this.currentId = path
        this.menuData = this.route.params
        .switchMap(() =>
        this.dataService.menus()
      )
      .subscribe(
        (data) => {
          this.menu = data._source.items
          console.log(this.menu)
        })

      this.dataService.pages()
      .subscribe(
        (data) => {
          _.each(data.hits.hits, (item) => {
            item.slug = item._source.slug
          })
          console.log(this.currentId)
          console.log(data.hits.hits)
          this.content = _.filter(data.hits.hits, {slug: this.currentId})
        }
      )
    }
  )
}
}
