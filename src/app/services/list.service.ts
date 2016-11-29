import { Injectable, EventEmitter, Output } from '@angular/core';

import _ from "lodash";
@Injectable()
export class ListService {

  listLength: number;
  getListLength() {
    return this.listLength;
  }

  setListLength(list) {
    this.listLength = list.length;
    //this.subject.next(list);
  }

  isListEmpty() {
    return (this.getListLength) ? false : true;
  }

  stringifyTitleArray(array) {
    let arrayString = array.join(", ");
    return arrayString.replace(/,([^,]*)$/, ' & $1');
  }

  pageTitle(keystages, categories, term) {
    keystages = (keystages.length === 5 || keystages.length === 0) ? "" : "Key Stage " + this.stringifyTitleArray(keystages);
    categories = (categories.length === 4) ? "" : this.stringifyTitleArray(categories);
    term = (_.isUndefined(term) || term === "") ? "" : term;
    if(keystages === "" && categories === "" && term === "") return "All Content (" + this.getListLength() + ")";
    return keystages + " " + term + " " + categories + " (" + this.getListLength() + ")";
  }
}
