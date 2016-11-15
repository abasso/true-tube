import { Pipe, PipeTransform } from '@angular/core';
import _ from 'lodash';
import { Location } from '@angular/common';

const FuzzySearch = require('fuzzysearch-js');
const levenshteinFS = require('fuzzysearch-js/js/modules/LevenshteinFS');
const indexOfFS = require('fuzzysearch-js/js/modules/IndexOfFS');
const wordCountFS = require('fuzzysearch-js/js/modules/WordCountFS');

@Pipe({
  name: 'SearchTermPipe'
})
export class SearchTermPipe implements PipeTransform {
  filteredResults = [];
  transform(value: string, queryString: string): any {
    let fuzzySearch = new FuzzySearch(value, {'minimumScore': 300, 'termPath': 'title'});

    fuzzySearch.addModule(levenshteinFS({'maxDistanceTolerance': 3, 'factor': 3}));
    fuzzySearch.addModule(indexOfFS({'minTermLength': 3, 'maxIterations': 500, 'factor': 3}));
    fuzzySearch.addModule(wordCountFS({'maxWordTolerance': 3, 'factor': 1}));
    let searchResults = fuzzySearch.search(queryString);
    this.filteredResults.length = 0;

    _.forEach(searchResults, (item) => {
        this.filteredResults.push(item.value);
    })

    return (queryString) ? this.filteredResults : value;
  }

}
