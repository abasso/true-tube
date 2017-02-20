import { Component, OnInit } from '@angular/core'
import { DataService } from './../../services/data.service'

@Component({
  selector: 'app-partners-carousel',
  templateUrl: './partners-carousel.component.html'
})
export class PartnersCarouselComponent implements OnInit {
  private data: any
  private slides: any
  public carouselConfig = {
    slidesPerGroup: 3,
    slidesPerView: 5,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
      400: {
        slidesPerGroup: 1,
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay: 1500
      },
      767: {
        slidesPerGroup: 1,
        slidesPerView: 2,
        spaceBetween: 20,
        autoplay: 1500
      },
      992: {
        slidesPerGroup: 1,
        slidesPerView: 3,
        spaceBetween: 10
      },
      1200: {
        slidesPerGroup: 2,
        slidesPerView: 4,
        spaceBetween: 10
      }
    }
  }
  // $breakpoint-sm: 544px;
  // $breakpoint-md: 767px;
  // $breakpoint-lg: 992px;
  // $breakpoint-xl: 1200px;
  constructor(
    private dataService: DataService
  ) {

  }
  ngOnInit() {
    this.data = this.dataService.itemPages('partners')
    .subscribe(
      (data) => {
        console.log(data)
        this.slides = data._source.items
      }
    )
  }

}