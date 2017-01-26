import { Component, OnInit } from '@angular/core';
import { DataService } from './../../../services/data.service'
import { ActivatedRoute, Router, Params } from '@angular/router'
import _ from 'lodash'
import moment from 'moment'

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styles: []
})
export class EventComponent implements OnInit {
  private data
  private items
  constructor(
    public dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
) {
  }
  ngOnInit() {
    this.data = this.dataService.events().subscribe(
      (data) => {
        this.data = this.route.params
        .subscribe(
          (route) => {
            this.items = _.filter(data.hits.hits, {_id: route['id'] })
            console.log(this.items)
            this.items[0].date = moment(this.items[0]._source.date).format("Do MMMM YYYY")
            _.each(this.items[0]._source.related, (item) => {
              item.slug = '/item/' + item.uuid
            })
          }
        )
      }
    )
  }

}
