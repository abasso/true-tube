import { Component, OnInit } from '@angular/core'
import { DataService } from './../../../services/data.service'
import { ActivatedRoute } from '@angular/router'
import * as _ from 'lodash'

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html'
})
export class PageComponent implements OnInit {
  private data: any
  private content: any
  private menu: any
  private param: any
  private currentId: string
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.param = this.route.params.subscribe(
      (params) => {
          this.currentId = params['id']
      }
    )
    this.data = this.route.params
    .switchMap(() =>
      this.dataService.pages()
    )
    .subscribe(
      (data) => {
        this.menu = _.pull(data.hits.hits, {_id: this.currentId})
        _.each(this.menu, (item) => {
          item.path = '/page/' + item._id
        })
        this.content = _.filter(data.hits.hits, {_id: this.currentId})
      }
    )

  }
}
