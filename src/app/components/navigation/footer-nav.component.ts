import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service'
import _ from 'lodash'

@Component({
  selector: 'app-footer-nav',
  templateUrl: './footer-nav.component.html'
})
export class FooterNavComponent implements OnInit {
  private data
  private items: any[] = []
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.data = this.dataService.pages()
    .subscribe(
      (data) => {
        console.log(data)
        _.each(data.hits.hits, (item) => {
          item.slug = '/page/' + item._id
        })
        this.items = _.chunk(data.hits.hits, 4)
        console.log(this.items)
      }
    )
  }
}
