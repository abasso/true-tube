import { Component, OnInit } from '@angular/core'
import { DataService } from './../../../services/data.service'

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html'
})
export class CarouselComponent implements OnInit {
  private data: any
  private slides: any
  constructor(
    private dataService: DataService
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
