import { Component, OnInit } from '@angular/core';
import { ListComponent } from "./list.component";
import _ from "lodash";

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {

  pages: number[];

  constructor(private listComponent: ListComponent) {
  }

  ngOnInit() {
    this.listComponent.paginationData.pages = [];
    this.listComponent.paginationData.totalPages = Math.ceil(this.listComponent.paginationData.totalItems / this.listComponent.paginationData.itemsPerPage);
    for(let i=0;i<this.listComponent.paginationData.totalPages;i++) this.listComponent.paginationData.pages.push({number: i+1, active: (i==0) ? true : false});
    console.log(this.listComponent.paginationData)
    this.pages = this.listComponent.paginationData.pages;
    console.log(this.pages)
  }

  setPage(event, page) {
    event.preventDefault();
    this.listComponent.paginationData.currentPage = page-1;
    _.forEach(this.pages, (pages) => {
      pages.active = false;
      if(pages.number == page) pages.active = true;
    })
    console.log(this.listComponent.paginationData);
  }

  hideDescriptions(event) {
    this.listComponent.showDescriptions = (this.listComponent.showDescriptions == true) ? false : true;
  }

  setListDisplay(type) {
    this.listComponent.displayGrid = (type === "grid") ? true : false;
    this.listComponent.displayList = (type === "list") ? true : false;
  }
}
