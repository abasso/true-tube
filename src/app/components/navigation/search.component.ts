import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  private focussed = false
  constructor(private router: Router) {
  }
  focus() {
    this.focussed = true
  }

  blur() {
    this.focussed = false
  }

  search(event) {
    this.router.navigateByUrl('/list?search=' + event.target.elements[0].value)

  }

}
