import { Component } from '@angular/core';
import { Categories } from './../../definitions/categories';

@Component({
  selector: 'app-secondary-nav',
  templateUrl: './secondary-nav.component.html'
})
export class SecondaryNavComponent {
  private categories: any[] = Categories;
}
