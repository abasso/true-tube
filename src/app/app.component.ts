import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public stickyHeader
  public showHeader = false
  public lastScrollPos = 0
  public animateHeader = false
  @HostListener('window:scroll', ['$event'])
  scroll(event) {
    let scrolledPastHeader = false
      if (window.pageYOffset > this.lastScrollPos) {
          this.showHeader = true
          if (window.pageYOffset > 300) {
            this.stickyHeader = true
            this.animateHeader = true
            scrolledPastHeader = true
          } else if (window.pageYOffset > 144) {
            scrolledPastHeader = true
            this.stickyHeader = true
            this.animateHeader = false
          } else {
            this.stickyHeader = false
            this.animateHeader = false
          }
        } else {
        this.showHeader = false
        if (window.pageYOffset === 0 && scrolledPastHeader === false) {
          scrolledPastHeader = false
          this.stickyHeader = false
        } else {
          this.stickyHeader = true
        }
      }

      this.lastScrollPos = window.pageYOffset
  }
}
