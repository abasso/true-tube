import { Component, OnInit } from '@angular/core';
import { DataService } from './../../../services/data.service'
import { KSSwiperContainer, KSSwiperSlide } from 'angular2-swiper'

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html'
})
export class CarouselComponent implements OnInit {
  private data: any
  private slides: any
  private example1SwipeOptions
  constructor(
    private dataService: DataService
  ) {
    this.example1SwipeOptions = {
          slidesPerView: 4,
          loop: false,
          spaceBetween: 5
        };
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
