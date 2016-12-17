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
      href: "videos"
    },
    {
      label: "Lesson Plans",
      href: "lesson-plans"
    },
    {
      label: "Assembly Scripts",
      href: "assembly-scripts"
    },
    {
      label: "Interactive",
      href: "interactive"
    }
  ]
  loggedIn = false;
}
