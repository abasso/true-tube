import { Component, OnInit } from '@angular/core'
import { DataService } from './../../../services/data.service'
import { ActivatedRoute } from '@angular/router'
import * as _ from 'lodash'

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html'
})
export class PageComponent implements OnInit {
  public content: any
  public menu: any
  public param: any
  public currentId: string
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {
  }
  ngOnInit() {
    this.param = this.route.url.subscribe(
      (url) => {
        window.scrollTo(0, 0)
        let path = '/'
        _.each(url, (urlPart) => {
          path += urlPart.path + '/'
        })
        path = _.trimEnd(path, '/')
        this.currentId = path
      this.route.params
        .switchMap(() =>
        this.dataService.menus()
      )
      .subscribe(
        (data) => {
          this.menu = data._source.items
        })

      this.dataService.pages()
      .subscribe(
        (data) => {
          _.each(data.hits.hits, (item) => {
            item.slug = item._source.slug
          })
          this.content = _.filter(data.hits.hits, {slug: this.currentId})
        }
      )
    }
  )
}
}
