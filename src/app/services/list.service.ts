import { Injectable, EventEmitter, Output } from '@angular/core';

import _ from "lodash";
@Injectable()
export class ListService {

  listLength: number;

  constructor() {
  }

  getListLength() {
    return this.listLength;
  }

  setListLength(list) {
    this.listLength = list.length;
  }

  isListEmpty() {
    return (this.getListLength) ? false : true;
  }

  stringifyTitleArray(array) {
    let arrayString = array.join(", ");
    return arrayString.replace(/,([^,]*)$/, ' & $1');
  }

  pageTitle(subject, keystages, types, term) {
    subject = (subject === "All") ? "" : subject;
    keystages = (keystages.length === 5 || keystages.length === 0) ? "" : "Key Stage " + this.stringifyTitleArray(keystages);
    types = (types.length === 4) ? "" : this.stringifyTitleArray(types);
    term = (_.isUndefined(term) || term === "") ? "" : term;
    if(subject === "" && keystages === "" && types === "" && term === "") return "All Content (" + this.getListLength() + " Items)";
    return subject + " " + keystages + " " + term + " " + types + " (" + this.getListLength() + " Items)";
  }
}
