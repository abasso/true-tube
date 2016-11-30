import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html'
})
export class ListingComponent implements OnInit {

  showDescriptions = true;

  constructor() { }

  ngOnInit() {
    console.log(this.showDescriptions)
  }

}
