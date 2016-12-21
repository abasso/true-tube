import { Component, OnInit } from '@angular/core';
import { ListComponent } from "./list.component";
import _ from "lodash";
import Cookies from 'js-cookie';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html'
})
export class SortComponent {

  pages: number[];
  itemsPerPageCurrent: any;
  itemsPerPage: string[];
  currentPage: number;
  loadMoreCount: number;

  constructor(private listComponent: ListComponent) {
    this.itemsPerPage = [
      "12",
      "24",
      "48",
      "All"
    ];

    this.setListDisplay((_.isUndefined(Cookies.get("list-display"))) ? "grid" : Cookies.get("list-display"))
    this.currentPage = 0;
    this.listComponent.paginationData.itemsPerPageCurrent = (_.isUndefined(Cookies.get("items-per-page"))) ? this.itemsPerPage[0] : Cookies.get("items-per-page");
    this.listComponent.paginationData.pages = [];
    this.listComponent.paginationData.totalPages = Math.ceil(this.listComponent.paginationData.totalItems / this.listComponent.paginationData.itemsPerPageCurrent);
    for(let i=0;i<this.listComponent.paginationData.totalPages;i++) this.listComponent.paginationData.pages.push(i+1);
    this.pages = this.listComponent.paginationData.pages;
    this.loadMoreCount = 12;
    this.listComponent.paginationData.currentPage = this.currentPage;
  }

  setPage(event) {
    event.preventDefault();
    this.listComponent.paginationData.currentPage = event.target.value;
  }

  setItemsPerPage(event) {
    event.preventDefault();
    Cookies.set("items-per-page", event.target.value);
    this.listComponent.paginationData.itemsPerPageCurrent = event.target.value;
    this.listComponent.paginationData.totalPages = Math.ceil(this.listComponent.paginationData.totalItems / this.listComponent.paginationData.itemsPerPageCurrent);
    this.listComponent.paginationData.pages = [];
    for(let i=0;i<this.listComponent.paginationData.totalPages;i++) this.listComponent.paginationData.pages.push(i+1);
    this.pages = this.listComponent.paginationData.pages;
    this.listComponent.paginationData.currentPage = 0;
  }

  hideDescriptions(event) {
    this.listComponent.showDescriptions = (this.listComponent.showDescriptions === true) ? false : true;
  }

  setListDisplay(type) {
    Cookies.set("list-display", type);
    this.listComponent.displayGrid = (type === "grid") ? true : false;
    this.listComponent.displayList = (type === "list") ? true : false;
  }

  listDisplayClick(event, type) {
    event.preventDefault();
    this.setListDisplay(type);
  }

  loadMore(event) {
    event.preventDefault();
    this.loadMoreCount = this.loadMoreCount + 12;
    this.listComponent.paginationData.itemsPerPageCurrent = this.loadMoreCount;
  }
}
