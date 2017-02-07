import { Component, OnInit } from '@angular/core'
import { DataService } from './../../services/data.service'
import { BehaviorSubject } from 'rxjs/Rx'
import * as moment from 'moment'
import * as _ from 'lodash'

@Component({
  selector: 'app-events-block',
  templateUrl: './events.component.html'
})
export class EventsBlockComponent implements OnInit {
  private currentTime: any = moment()
  public selectedMonth: any = new BehaviorSubject(moment().month())
  private selectedMonthString: string
  private month: any
  private data: any
  private subscriber: any
  private noEvents = true
  public items: any[] = []
  constructor(
    public dataService: DataService
  ) {
    this.month = this.selectedMonth.subscribe(
      (month: any) => {
        this.selectedMonthString = (this.currentTime.month() === month) ? 'this month' : 'in ' + moment().month(month).format('MMMM')
        this.data = this.dataService.events(month)
        this.subscriber = this.data.subscribe(
          (data: any) => {
            this.items = _.sortBy(data.hits.hits, 'date').reverse()
            this.noEvents = (this.items.length) ? false : true
            if (this.items.length) {
              _.each(this.items, (item) => {
                item.url = '/event/' + item._id
                item.date = moment(item._source.date.value).format('Do')
              })
            }
          }
        )
      }
    )
  }

  ngOnInit() {
  }

  prevMonth(event: any) {
    event.preventDefault()
    let currentMonth: any = this.selectedMonth.getValue()
    if (currentMonth !== 0) {
      this.selectedMonth.next(currentMonth - 1)
    }

  }

  nextMonth(event: any) {
    event.preventDefault()
    let currentMonth: any = this.selectedMonth.getValue()
    if (currentMonth !== 11) {
      this.selectedMonth.next(currentMonth + 1)
    }
  }
}
