import { Component, OnInit } from '@angular/core';
import { DataService } from './../../../services/data.service'
import { Observable, Subject, BehaviorSubject } from 'rxjs/Rx'
import moment from 'moment'
import _ from 'lodash'

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styles: []
})
export class CalendarComponent implements OnInit {
  private currentTime = moment()
  private currentMonth = moment().month(moment().month()).date(1)
  private currentMonthString = this.currentMonth.format("MMMM YYYY")
  public selectedMonth: any = new BehaviorSubject(moment().month())
  private selectedMonthString: string
  private month
  private data
  private subscriber
  private noEvents: boolean = true
  public items: any[] = []
  private weeks: any[] = []

  constructor(public dataService: DataService) {
    this.weeks.length = 42
    this.month = this.selectedMonth.subscribe(
      (month) => {
        this.selectedMonthString = (this.currentMonth === month) ? "this month" : "in " + moment().month(month).format("MMMM YYYY")
        this.data = this.dataService.events(month)
        this.subscriber = this.data.subscribe(
          (data) => {
            let days = []
            let currentMonthStartDay = this.currentMonth.format("d")
            let previousMonthEndDate = moment().month(moment().month()-1).daysInMonth()
            let startDateOffset = previousMonthEndDate - currentMonthStartDay + 1
            let monthStart = 1
            let nextMonthStart = 1;
            for(let i = 0; i<=41; i++) {
              if(currentMonthStartDay === "0") {
                if(monthStart <= this.currentMonth.daysInMonth()) {
                  days.splice(i, 0, {
                    date: monthStart++
                  })
                } else {
                  days.splice(i, 0, {
                    date: nextMonthStart++,
                    css: "other-month"
                  })
                }
              } else {
                if(startDateOffset < previousMonthEndDate) {
                  days.splice(i, 0, {
                    date: ++startDateOffset,
                    css: "other-month"
                  })
                } else if(monthStart <= this.currentMonth.daysInMonth()) {
                  days.splice(i, 0, {
                    date: monthStart++
                  })
                } else {
                  days.splice(i, 0, {
                    date: nextMonthStart++,
                    css: "other-month"
                  })
                }
              }
            }
            this.items = _.sortBy(data.hits.hits, "date").reverse()
            _.each(days, (day) => {
              day.events = []
              _.each(this.items, (event) => {
                event.startDate = event._source.date
                event.endDate = "2017-01-30"
                event.title = event._source.title
                let eventClone = _.clone(event, true)
                if(event.endDate) {
                  if(day.date === parseInt(event.startDate.split("-")[2])) {
                    // If its the start of a multi and the event has not start index position set it
                    if(_.isUndefined(event.index)) {
                      if(day.events.length) {
                        _.each(day.events, (dayEvent, index) => {
                          if(_.isUndefined(dayEvent)) {
                            event.index = index
                            eventClone.index = event.index
                          } else {
                            event.index = day.events.length
                            eventClone.index = day.events.length
                          }
                        })
                      } else {
                        event.index = day.events.length
                        eventClone.index = day.events.length
                      }
                    }
                    eventClone.css = "event-start"
                  } else if (day.date === parseInt(event.endDate.split("-")[2])) {
                    eventClone.css = "event-end"
                  } else {
                    eventClone.css = "event-multi"
                  }
                }
                event.cats = "DOGS"
                console.log(event)
                if(moment().month(moment().month()).date(day.date).isBetween(event.startDate, event.endDate, 'day', '[]')) day.events[event.index] = eventClone
              })

              day.events = _.sortBy(day.events, "title")
            })
            this.weeks = _.chunk(days, 7)
            if(currentMonthStartDay <=4) this.weeks = _.dropRight(this.weeks, 1)

            this.noEvents = (this.items.length) ? false : true
            if(this.items.length) {
              _.each(this.items, (item) => {
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

}
