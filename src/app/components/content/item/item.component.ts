import { Component, OnInit } from '@angular/core'
import { Item } from './../../../definitions/mock-item'
import { DataService } from './../../../services/data.service'
import { AttributePipe } from './../../../pipes/attribute.pipe'
import { EmbedMenuPipe } from './../../../pipes/embed-menu.pipe'
import { ActivatedRoute, Router, Params } from '@angular/router'
import moment from 'moment'
import _ from 'lodash'
import 'rxjs/add/operator/switchMap'

declare var videojs: any;


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  providers: [
    AttributePipe
  ]
})
export class ItemComponent implements OnInit {
  private item: any = {}
  private data: any

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit() {
    // this.item = Item[0]._source;

    this.data = this.route.params
    // (+) converts string 'id' to a number
    .switchMap((params: Params) => this.dataService.item(params['id']))
    .subscribe(
      (data) => {
        this.item = data._source
      }
    )
  }

  hasAttributes(attribute) {
    return (_.isUndefined(attribute) || attribute === null || attribute === false || attribute.length === 0) ? false : true
  }

  duration(seconds) {
    return moment("2017-01-01").startOf('day').seconds(seconds).format('mm:ss')
  }

  age(seconds) {
    return moment.unix(seconds).fromNow()
  }

}
