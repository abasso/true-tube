import { Component, OnInit } from '@angular/core'
import { DataService } from './../../../services/data.service'
import { Angulartics2GoogleAnalytics, Angulartics2 } from 'angulartics2'

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html'
})
export class CarouselComponent implements OnInit {
  private data: any
  private slides: any
  constructor(
    private dataService: DataService,
    public angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
    private angulartics2: Angulartics2
  ) {

  }
  ngOnInit() {
    this.data = this.dataService.carousel()
    .subscribe(
      (data) => {
        this.slides = data.hits.hits
      }
    )
  }

}
