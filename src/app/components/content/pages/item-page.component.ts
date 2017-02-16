import { Component, OnInit } from '@angular/core'
import { DataService } from './../../../services/data.service'
import { ActivatedRoute } from '@angular/router'
import * as _ from 'lodash'
@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html'
})
export class ItemPageComponent implements OnInit {
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
        this.currentId = url[0].path
        this.menuData = this.route.params
        .switchMap(() =>
        this.dataService.menus()
      )
      .subscribe(
        (data) => {
          this.menu = data._source.items
          console.log(this.menu)
        })

      this.dataService.itemPages('team')
      .subscribe(
        (data) => {
          this.content = data
          // _.each(data.hits.hits, (item) => {
          //   item.slug = item._source.slug
          // })
          // let tempId = '/page/' + this.currentId
          // this.content = _.filter(data.hits.hits, {slug: tempId})
        }
      )
    }
  )
}
}
