import { Component } from '@angular/core';
import { Auth } from './../../services/auth.service';

@Component({
  selector: 'app-primary-nav',
  templateUrl: './primary-nav.component.html',
  styleUrls: ['./primary-nav.component.sass']
})
export class PrimaryNavComponent {
  constructor(private auth: Auth) {}

  items = [
    {
      label: "Videos",
      href: ""
    },
    {
      label: "Lesson Plans",
      href: ""
    },
    {
      label: "Assembly Scripts",
      href: ""
    },
    {
      label: "Interactive",
      href: ""
    }
  ]
  loggedIn = false;
}
