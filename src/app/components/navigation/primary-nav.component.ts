import { Component } from '@angular/core';
import { SearchComponent } from './search.component';
import { ListFilter } from './../content/listing/filter.component';
import { ContentTypes } from './../../definitions/content-types';
import { ListService } from './../../services/list.service';

import { Auth } from './../../services/auth.service';

@Component({
  selector: 'app-primary-nav',
  templateUrl: './primary-nav.component.html'
})
export class PrimaryNavComponent {
  private items = ContentTypes;

  constructor(private filter: ListFilter, private listService: ListService, private auth: Auth) {
  }

  resetRootPath(event, query) {
    event.preventDefault();
    this.listService.resetCurrentPath(query);
  }

}
