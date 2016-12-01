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
      href: "/type/videos"
    },
    {
      label: "Lesson Plans",
      href: "/type/lesson-plans"
    },
    {
      label: "Assembly Scripts",
      href: "/type/assembly-scripts"
    },
    {
      label: "Interactive",
      href: "/type/interactive"
    }
  ]
  loggedIn = false;
}
