import { Component, OnInit } from '@angular/core';
import { DataService } from './../../../services/data.service'
import { ActivatedRoute, Router, Params } from '@angular/router'
import _ from 'lodash'

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html'
})
export class PageComponent implements OnInit {
  private data
  private content
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute

  ) {

  }

  ngOnInit() {
    this.data = this.route.params
    .switchMap((params: Params) => this.dataService.pages())
    .subscribe(
      (data) => {
        this.content = data.hits.hits
      }
    )
  }
}
