import { Component, OnInit } from '@angular/core'
import { DataService } from './../../../services/data.service'
// import { KSSwiperContainer, KSSwiperSlide } from 'angular2-swiper'
import { SwiperModule, SwiperConfigInterface } from 'angular2-swiper-wrapper'

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html'
})
export class CarouselComponent implements OnInit {
  private data: any
  private slides: any
  private example1SwipeOptions: any
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
