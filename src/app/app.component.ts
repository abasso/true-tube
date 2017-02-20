import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public stickyHeader
  public hideHeader = false
  public lastScrollPos = 0
  public animateHeader = false
  public sticky = false
  // @HostListener('window:scroll', ['$event'])
  // scroll(event) {
  //   let main = document.querySelector('main').getBoundingClientRect()
  //   let header = document.querySelector('header').getBoundingClientRect()
  //     if (window.pageYOffset > this.lastScrollPos) {
  //         if (main.top - 100 <= 0) {
  //           this.animateHeader = true
  //           this.hideHeader = true
  //         }
  //       } else {
  //         this.hideHeader = false
  //     }
  //
  //     this.lastScrollPos = window.pageYOffset
  // }
}
