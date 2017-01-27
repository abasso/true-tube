import { Component, OnInit } from '@angular/core'
import * as moment from 'moment'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  private currentYear: number = moment().year()

  constructor() { }

  ngOnInit() {
  }

}
