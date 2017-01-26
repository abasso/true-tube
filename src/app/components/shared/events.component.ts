import { Component, OnInit } from '@angular/core'
import { DataService } from './../../services/data.service'
import { Observable, Subject, BehaviorSubject } from 'rxjs/Rx'
import moment from 'moment'
import _ from 'lodash'

@Component({
  selector: 'app-events-block',
  templateUrl: './events.component.html'
})
export class EventsBlockComponent implements OnInit {
  private currentTime = moment()
  public selectedMonth: any = new BehaviorSubject(moment().month())
  private selectedMonthString: string
  private month
  private data
  private subscriber
  private noEvents: boolean = true
  public items: any[] = []
  constructor(public dataService: DataService) {
    this.month = this.selectedMonth.subscribe(
      (month) => {
        this.selectedMonthString = (this.currentTime.month() === month) ? "this month" : "in " + moment().month(month).format("MMMM")
        this.data = this.dataService.events(month)
        this.subscriber = this.data.subscribe(
          (data) => {
            this.items = _.sortBy(data.hits.hits, "date").reverse()
            this.noEvents = (this.items.length) ? false : true
            if(this.items.length) {
              _.each(this.items, (item) => {
                item.url = "/event/" + item._id
                item.date = moment(item._source.date).format("Do")
              })
            }
          }
        )
      }
    )
  }

  ngOnInit() {
  }

  prevMonth(event) {
    event.preventDefault()
    let currentMonth = this.selectedMonth.getValue()
    if(currentMonth !== 0) {
      this.selectedMonth.next(currentMonth - 1)
    }

  }

  nextMonth(event) {
    event.preventDefault()
    let currentMonth = this.selectedMonth.getValue()
    if(currentMonth !== 11) {
      this.selectedMonth.next(currentMonth + 1)
    }
  }
}
