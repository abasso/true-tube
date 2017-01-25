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
  private currentYear = moment().month(moment().month()).year(1)
  private currentMonthString = this.currentMonth.format('MMMM YYYY')
  public selectedMonth: any = new BehaviorSubject(moment().month())
  private selectedMonthString: string
  private month
  private data
  private subscriber
  private noEvents: boolean = true
  public items: any[] = []
  private weeks: any[] = []
  private toHighlight = ''
  constructor(public dataService: DataService) {
    this.weeks.length = 42
    this.month = this.selectedMonth.subscribe(
      (month) => {
        this.selectedMonthString = (this.currentMonth.format("M")-1 === month) ? 'this month' : 'in ' + moment().month(month).format('MMMM YYYY')
        this.data = this.dataService.events()
        this.subscriber = this.data.subscribe(
          (data) => {
            let days = []
            let selectedMonth = moment().month(month).date(1)
            let currentMonthStartDay = selectedMonth.format('d')
            let previousMonthEndDate = moment().month(month-1).daysInMonth()
            let startDateOffset = previousMonthEndDate - currentMonthStartDay + 1
            let monthStart = 1
            let nextMonthStart = 1
            for(let i = 0; i<=41; i++) {
              if(currentMonthStartDay === '0') {
                if(monthStart <= selectedMonth.daysInMonth()) {
                  days.splice(i, 0, {
                    date: monthStart++,
                    month: parseInt(selectedMonth.format('M'))
                  })
                } else {
                  days.splice(i, 0, {
                    date: nextMonthStart++,
                    month: parseInt(selectedMonth.format('M'))+1,
                    css: 'other-month next-month'
                  })
                }
              } else {
                if(startDateOffset < previousMonthEndDate) {
                  days.splice(i, 0, {
                    date: ++startDateOffset,
                    month: parseInt(selectedMonth.format('M'))-1,
                    css: 'other-month previous-month'
                  })
                } else if(monthStart <= selectedMonth.daysInMonth()) {
                  days.splice(i, 0, {
                    date: monthStart++,
                    month: parseInt(selectedMonth.format('M')),
                  })
                } else {
                  days.splice(i, 0, {
                    date: nextMonthStart++,
                    month: parseInt(selectedMonth.format('M'))+1,
                    css: 'other-month next-month'
                  })
                }
              }
            }
            this.items = _.sortBy(data.hits.hits, 'date').reverse()
            let multiLineEvents = []
            _.each(days, (day) => {
              day.events = []
              _.each(this.items, (event, index) => {
                event.startDate = event._source.date
                event.endDate = event.startDate
                // event.endDate = '2017-01-29'
                if(event._source.title === "Hanukkah") {
                  event.endDate = '2017-01-01'
                }
                if(event._source.title === "LGBT History Month") {
                  event.endDate = '2017-02-28'
                }
                event.startDateArray = event.startDate.split('-')
                event.startDay = parseInt(event.startDateArray[2])
                event.startMonth = parseInt(event.startDateArray[1])
                event.startYear = parseInt(event.startDateArray[0])
                event.endDateArray = event.endDate.split('-')
                event.endDay = parseInt(event.endDateArray[2])
                event.endMonth = parseInt(event.endDateArray[1])
                event.endYear = parseInt(event.endDateArray[0])
                event.title = event._source.title
                event.link = "/event/" + event._id
                let eventClone = _.clone(event, true)
                  // If the day is the same as the start date and the month is the same as the start month
                  if(day.date === event.startDay && day.month === event.startMonth) {
                    if(_.isUndefined(event.index)) {
                      // If there is already an event array
                      if(day.events.length) {
                        // Itterate over the existing events
                        _.each(day.events, (dayEvent) => {
                          // If there is an empty slot fill it with an event
                          if(_.isUndefined(dayEvent)) {
                            event.index = eventClone.index = event.index
                          } else {
                            // Otherwise make the slot the end of the array
                            event.index = eventClone.index = day.events.length
                          }
                        })
                      } else {
                        // If there isnt an event object make it 0
                        event.index = eventClone.index = 0
                      }
                    }
                    eventClone.css = ''
                    event.css = ''
                    if(event.startDate !== event.endDate) eventClone.css += ' event-start'
                    let characterCount = event._source.title.length
                    if(characterCount > 20 && day.date % 7 == 0) {
                      eventClone.css += ' event-two-lines'
                      event.css += ' event-two-lines'
                      event.multiLine = eventClone.multiLine = true
                      multiLineEvents.push(event.index)
                    }
                    if(characterCount > 40 && day.date % 7 == 0) {
                      eventClone.css = event.css += ' event-three-lines'
                      event.multiLine = eventClone.multiLine = true
                    }
                    // Else if the day date is equal to the end date and the day month is the same as the event end month
                  } else if (day.date === event.endDay && day.month === event.endMonth) {
                    if(day.events.length === 0) event.index = eventClone.index = 0
                    eventClone.css += ' event-end'
                  } else if(moment({M: day.month -1, d: day.date}).isBetween(event.startDate, event.endDate, 'day', '[]')) {
                    if(day.events.length === 0) event.index = eventClone.index = 0
                    //if(day.events.length === 0) event.index = eventClone.index = 0
                    eventClone.css += ' event-multi'
                  }
                if(moment({M: day.month -1, d: day.date}).isBetween(event.startDate, event.endDate, 'day', '[]')) day.events[event.index] = eventClone
              })

              _.each(day.events, (event, index, collection) => {
                if(_.isUndefined(event)) {
                  collection[index] = {
                    css: ' event-placeholder',
                    index: index,
                    _source: {}
                  }
                  collection[index]._source.title = ''
                }
              })

              day.events = _.sortBy(day.events, 'index')
            })
            this.weeks = _.chunk(days, 7)
            if(currentMonthStartDay <=5) this.weeks = _.dropRight(this.weeks, 1)

            this.noEvents = (this.items.length) ? false : true
            if(this.items.length) {
              _.each(this.items, (item) => {
                item.date = moment(item._source.date).format('Do')
              })
            }

          }
        )
      }
    )
  }

  highlightEvent(event, index) {
    this.toHighlight = index
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
