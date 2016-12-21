import { Component } from '@angular/core';
import { Categories } from './../../definitions/categories';
import { QueryStringPipe } from './../../pipes/query-string.pipe';

@Component({
  selector: 'app-secondary-nav',
  templateUrl: './secondary-nav.component.html',
  providers: [
    QueryStringPipe
  ]
})
export class SecondaryNavComponent {
  private categories: any[] = Categories;
}
