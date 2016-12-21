import { Component } from '@angular/core';
import { SearchComponent } from './../navigation/search.component';
import { ContentTypes } from './../../definitions/content-types';

// import { Auth } from './../../services/auth.service';

@Component({
  selector: 'app-primary-nav',
  templateUrl: './primary-nav.component.html'
})
export class PrimaryNavComponent {

  private items = ContentTypes;
  // constructor(private auth: Auth) {}
  // loggedIn = false;
}
