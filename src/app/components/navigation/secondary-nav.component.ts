import { Component } from '@angular/core';

@Component({
  selector: 'app-secondary-nav',
  templateUrl: './secondary-nav.component.html',
  styleUrls: ['./secondary-nav.component.sass']
})
export class SecondaryNavComponent {
  items = [
    {
      "label": "Global",
      "url": "link.pages-video"
    },
    {
      "label": "The Earth",
      "url": "link.pages-video"
    },
    {
      "label": "Relationships",
      "url": "link.pages-video"
    },
    {
      "label": "Culture",
      "url": "link.pages-video"
    },
    {
      "label": "Society",
      "url": "link.pages-video"
    },
    {
      "label": "Ethics & Religion",
      "url": "link.pages-video"
    },
    {
      "label": "Jobs & Money",
      "url": "link.pages-video"
    },
    {
      "label": "Crime",
      "url": "link.pages-video"
    },
    {
      "label": "Body & Health",
      "url": "link.pages-video"
    }
  ]
}
