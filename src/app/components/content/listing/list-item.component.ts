import { Component, OnInit, Input, OnChanges } from '@angular/core'
import { DataService } from './../../../services/data.service'
import { PaginationPipe } from './../../../pipes/pagination.pipe'
import { ImagePipe } from './../../../pipes/image.pipe'
import { ListFilterComponent } from './filter.component'
import { Angulartics2GoogleAnalytics, Angulartics2 } from 'angulartics2'
import * as _ from 'lodash'

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  providers: [
    PaginationPipe,
    ImagePipe
  ]
})
export class ListItemComponent implements OnInit, OnChanges {
  @Input() items: any
  @Input() paginationData: any
  public filter = ListFilterComponent
  constructor(
    private dataService: DataService,
    public angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
    private angulartics2: Angulartics2
  ) { }

  ngOnInit() {
    this.fixSource()
  }

  ngOnChanges() {
    console.log(this.filter)
    this.fixSource()
  }

  fixSource() {
    _.each(this.items, (item) => {
      if (_.isUndefined(item._source)) {
        item._source = item
      }
    })
  }

}
