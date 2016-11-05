import { Component } from '@angular/core';

@Component({
  selector: 'app-primary-nav',
  templateUrl: './primary-nav.component.html',
  styleUrls: ['./primary-nav.component.sass']
})
export class PrimaryNavComponent {
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
}
