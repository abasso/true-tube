import { Component, OnInit } from '@angular/core'
import { DataService } from './../../../services/data.service'
// import { KSSwiperContainer, KSSwiperSlide } from 'angular2-swiper'

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
    this.example1SwipeOptions = {
          pagination: '.swiper-pagination',
          slidesPerView: 1,
          paginationClickable: true,
          spaceBetween: 0,
          loop: false
        }
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
