import { Component, OnInit } from '@angular/core';
import { ListComponent } from "./list.component";

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {


  constructor(private listComponent: ListComponent) {
  }

  ngOnInit() {
  }

  hideDescriptions(event) {
    this.listComponent.showDescriptions = (this.listComponent.showDescriptions == true) ? false : true;
  }

  setListDisplay(type) {
    this.listComponent.displayGrid = (type === "grid") ? true : false;
    this.listComponent.displayList = (type === "list") ? true : false;
  }
}
