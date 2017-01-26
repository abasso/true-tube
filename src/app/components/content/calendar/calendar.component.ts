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
  private currentDate = moment()
  private currentMonth = this.currentDate.month()
  public selectedMonth: any = new BehaviorSubject(moment().month())
  private selectedMonthString: string
  private month
  private data
  private subscriber
  private noEvents: boolean = true
  public items: any[] = []
  private weeks: any[] = []
  private toHighlight = ''
  private eventCount: number
  constructor(public dataService: DataService) {
    this.weeks.length = 42
    this.month = this.selectedMonth.subscribe(
      (month) => {
        this.selectedMonthString = (this.currentMonth === month) ? 'This Month' : moment().month(month).format('MMMM')
        this.data = this.dataService.events()
        this.subscriber = this.data.subscribe(
          (data) => {
            this.eventCount = 0
            let days = []
            let selectedMonth = moment({'M': month})
            let currentMonthStartDay = selectedMonth.startOf("month").day()
            let previousMonthEndDate = moment().month(month-1).daysInMonth()
            let startDateOffset = previousMonthEndDate - currentMonthStartDay + 1
            let monthStart = 1
            let nextMonthStart = 1
            console.log(selectedMonth)
            console.log(currentMonthStartDay)
            for(let i = 0; i<=41; i++) {
              if(currentMonthStartDay === 1) {
                if(monthStart <= selectedMonth.daysInMonth()) {
                  days.splice(i, 0, {
                    day: monthStart++,
                    month: selectedMonth.month()
                  })
                } else {
                  days.splice(i, 0, {
                    day: nextMonthStart++,
                    month: selectedMonth.month() + 1,
                    css: 'other-month next-month'
                  })
                }
              } else {
                if(startDateOffset < previousMonthEndDate) {
                  days.splice(i, 0, {
                    day: ++startDateOffset,
                    month: selectedMonth.month() - 1,
                    css: 'other-month previous-month'
                  })
                } else if(monthStart <= selectedMonth.daysInMonth()) {
                  days.splice(i, 0, {
                    day: monthStart++,
                    month: selectedMonth.month(),
                  })
                } else {
                  days.splice(i, 0, {
                    day: nextMonthStart++,
                    month: selectedMonth.month() + 1,
                    css: 'other-month next-month'
                  })
                }
              }
            }
            this.items = _.sortBy(data.hits.hits, 'date').reverse()
            _.each(this.items, (item) => {
              if (moment(item._source.date).month() === selectedMonth.month()) this.eventCount++
            })
            let multiLineEvents = []
            _.each(days, (day) => {
              day.events = []
              _.each(this.items, (event, index) => {
                event.startDate = moment(event._source.date)
                event.endDate = moment(event.startDate)
                console.log(event.startDate)
                // event.endDate = '2017-01-29'
                if(event._source.title === "Hanukkah") {
                  event.endDate = moment('2017-01-01')
                }
                if(event._source.title === "LGBT History Month") {
                  event.endDate = moment('2017-02-28')
                }
                event.title = event._source.title
                event.link = "/event/" + event._id
                let eventClone = _.clone(event, true)
                  // If the day is the same as the start date and the month is the same as the start month
                  if(day.day === event.startDate.date() && day.month === event.startDate.month()) {
                    console.log("ITS A START DATE THIS MONTH AND THE EVENT IS", event.title)
                    console.log("ON THIS DAY", day.day)
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
                    if(!event.startDate.isSame(event.endDate)) eventClone.css += ' event-start'
                    let characterCount = event._source.title.length
                    if(characterCount > 20 && day.day % 7 == 0) {
                      eventClone.css += ' event-two-lines'
                      event.css += ' event-two-lines'
                      event.multiLine = eventClone.multiLine = true
                      multiLineEvents.push(event.index)
                    }
                    if(characterCount > 40 && day.day % 7 == 0) {
                      eventClone.css = event.css += ' event-three-lines'
                      event.multiLine = eventClone.multiLine = true
                    }
                    // Else if the day date is equal to the end date and the day month is the same as the event end month
                  } else if (day.day === event.endDate.date() && day.month === event.endDate.month()) {
                    console.log("ITS AN END DATE THIS MONTH AND THE EVENT IS", event.title)
                    console.log("ON THIS DAY", day.day)
                    if(day.events.length === 0) event.index = eventClone.index = 0
                    eventClone.css += ' event-end'
                  } else if(moment({M: day.month, d: day.day}).isBetween(event.startDate, event.endDate, 'day', '[]')) {
                    console.log("ITS A BRIDGE DATE THIS MONTH AND THE EVENT IS", event.title)
                    console.log("ON THIS DAY", day.day)
                    if(day.events.length === 0) event.index = eventClone.index = 0
                    //if(day.events.length === 0) event.index = eventClone.index = 0
                    eventClone.css += ' event-multi'
                  }
                if(moment({M: day.month, d: day.day}).isBetween(event.startDate, event.endDate, 'day', '[]')) day.events[event.index] = eventClone
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
