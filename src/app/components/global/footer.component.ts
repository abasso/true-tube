import { Component, OnInit } from '@angular/core';
import moment from 'moment'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  private currentYear: string = moment().year()

  constructor() { }

  ngOnInit() {
  }

}
