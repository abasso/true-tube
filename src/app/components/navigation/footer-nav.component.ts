import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service'
import * as _ from 'lodash'

@Component({
  selector: 'app-footer-nav',
  templateUrl: './footer-nav.component.html'
})
export class FooterNavComponent implements OnInit {
  private menuData: any
  public menu: any
  private pages: any
  private items: any[] = []
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {

    this.menuData = this.dataService.menus().subscribe(
      (data) => {
        console.log(data)
        _.each(data._source.items, (item) => {
          item.slug = item.uri
        })
        this.menu = data._source.items
        this.menu = _.chunk(this.menu, 4)
      }
    )
  }
}
