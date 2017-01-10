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
  private eventData
  public items: any[] = []
  constructor(public dataService: DataService) {
  }

  ngOnInit() {
    //this.selectedMonthString = "this month"
    this.eventData = this.selectedMonth.subscribe(
      (data) => {
        this.selectedMonthString = (this.currentTime.month() === data) ? "this month" : "in " + moment().month(data).format("MMMM")
        this.items = this.dataService.events(data)
        _.each(this.items, (item) => {
          item.date = moment.unix(item.end).format("Do")
        })
      }
    )
    // this.selectedMonth.next(this.currentTime.month())
    // .subscribe(
    //   (data) => {
    //
    //   })
    // this.selectedMonth = this.currentTime.format('MMMM')
  }

  prevMonth(event) {
    event.preventDefault()
    let currentMonth = this.selectedMonth.getValue()
    if(currentMonth !== 0) {
      this.selectedMonth.next(currentMonth - 1)
    } else {

    }

  }

  nextMonth(event) {
    event.preventDefault()
    let currentMonth = this.selectedMonth.getValue()
    if(currentMonth !== 11) {
      this.selectedMonth.next(currentMonth + 1)
    } else {

    }

  }
}
