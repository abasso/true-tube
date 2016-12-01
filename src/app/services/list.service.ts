import { Injectable, EventEmitter, Output } from '@angular/core';

import _ from "lodash";
@Injectable()
export class ListService {

  listLength: number;
  currentType = null;

  getListLength() {
    return this.listLength;
  }

  setListLength(list) {
    this.listLength = list.length;
  }

  isListEmpty() {
    return (this.getListLength) ? false : true;
  }

  getCurrentType() {
    return this.currentType;
  }

  setCurrentType(type) {
    console.log("THIS IS THE TYPE", type)
    let typeMap = {
      "lesson-plans": "Lesson Plans",
      "interactive": "Interactive",
      "videos": "Videos",
      "assembly-scripts": "Assembly Scripts"
    }

    let mappedType = typeMap[type.type];

    this.currentType = [mappedType];
  }

  stringifyTitleArray(array) {
    let arrayString = array.join(", ");
    return arrayString.replace(/,([^,]*)$/, ' & $1');
  }

  pageTitle(subject, keystages, types, term, categories, subCategories) {
    categories = (_.isUndefined(categories) || categories === "") ? "" : categories;
    subCategories = (subCategories.length) ? this.stringifyTitleArray(subCategories) : "";
    if (subCategories !== "") categories = "";
    subject = (subject === "All") ? "" : subject;
    keystages = (keystages.length === 5 || keystages.length === 0) ? "" : "Key Stage " + this.stringifyTitleArray(keystages);
    types = (types.length === 4) ? "" : this.stringifyTitleArray(types);
    term = (_.isUndefined(term) || term === "") ? "" : term;
    if(categories === "" && subCategories === "" && subject === "" && keystages === "" && types === "" && term === "") return "All Content (" + this.getListLength() + " Items)";
    return categories + " " + subCategories + " " + subject + " " + keystages + " " + term + " " + types + " (" + this.getListLength() + " Items)";
  }
}
