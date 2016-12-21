import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  private focussed = false;
  focus() {
    this.focussed = true;
  }

  blur() {
    this.focussed = false;
  }

}
