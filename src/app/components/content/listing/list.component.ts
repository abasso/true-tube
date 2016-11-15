import { Component } from '@angular/core';
import { ListingComponent } from './listing.component';
import { SearchTermPipe } from './../../../pipes/search-term.pipe';
import { CategoryPipe } from './../../../pipes/category.pipe';
import _ from "lodash";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [
    SearchTermPipe,
    CategoryPipe
  ]
})

export class ListComponent {
  constructor(private SearchTermPipe: SearchTermPipe, private CategoryPipe: CategoryPipe) {

  }

  categories = [
    "Videos",
    "Lesson Plans",
    "Assembly Scripts",
    "Interactive"
  ];

  filterCategories = [
    "Videos",
    "Lesson Plans",
    "Assembly Scripts",
    "Interactive"
  ];

  filterObject = {
    "Videos": false,
    "Lesson Plans": false,
    "Assembly Scripts": false,
    "Interactive": false
  };

  filterSearch:string = '';
  noResults = false;

  setValue(value) {
    this.filterCategories.length = 0;
    let valueIndex = _.findIndex(this.filterCategories, value);
    this.filterObject[value] = (this.filterObject[value] === false) ? true : false;
    _.forEach(this.filterObject, (value, key) => {
      if(value == true) {
        this.filterCategories.push(key);
      }
    });
    // Clone itself to trigger the ng update.
    this.filterCategories = _.clone(this.filterCategories);
    // If there are no category filters show all the categories.
    if(this.filterCategories.length === 0) this.filterCategories = _.clone(this.categories);
    console.log(this.filterCategories);
  }

  isActive(value) {
    if (this.filterObject[value] === true) return true;
  }

  items = [
    {
      time: '5.32',
      title: 'Charlie & Blue celebrate passover',
      description: 'Charlie and her favourite soft toy (and best friend) Blue visit a Jewish neighbour called Rachel to find out what Jews celebrate at the festival of Passover, and how the food they eat helps them remember important things that happened in the past.',
      url: '',
      image: {
        src: '/assets/images/sample/grid_1.jpg',
        alt: 'Some sort of alt text'
      },
      categories: [
        {
          label: 'Lesson Plans',
          class: 'btn-lesson-plan',
          url: 'something'
        }
      ]
    },
    {
      time: '5.32',
      title: 'Charlie & Blue learn about enlightenment',
      description: 'Zippity-zip, let\'s go on a trip! Charlie and her favourite soft toy (and best friend) Blue visit a Buddhist Centre to find out what it means to be enlightened, and how Buddhists try to live more peaceful lives.',
      url: '',
      image: {
        src: '/assets/images/sample/grid_2.jpg',
        alt: 'Some sort of alt text'
      },
      categories: [
        {
          label: 'Videos',
          class: 'btn-video',
          url: 'something'
        },
        {
          label: 'Lesson Plans',
          class: 'btn-lesson-plan',
          url: 'something'
        }
      ]
    },
    {
      time: '5.32',
      title: 'Stronger',
      description: 'Hannah was bullied so badly that eventually she had to change schools. Here she talks about her experiences, her thoughts on the bullies, and her recovery. And she has advice for anyone who has been bullied: "You\'re not a victim, you\'re a survivor".',
      url: '',
      image: {
        src: '/assets/images/sample/grid_3.jpg',
        alt: 'Some sort of alt text'
      },
      categories: [
        {
          label: 'Videos',
          class: 'btn-video',
          url: 'something'
        }
      ]
    },
    {
      title: 'Refugee',
      description: 'If you were forced to leave your home and could only take one bag, what would you take? What would it feel like to be on the run from your own country, in the hope of finding a safe place somewhere else? In this short drama, we meet a young girl and her family in an unknown land and discover how they came to be there, far away from home.',
      url: '',
      image: {
        src: '/assets/images/sample/grid_4.jpg',
        alt: 'Some sort of alt text'
      },
      categories: [
        {
          label: 'Videos',
          class: 'btn-video',
          url: 'something'
        },
        {
          label: 'Lesson Plans',
          class: 'btn-lesson-plan',
          url: 'something'
        }
      ]
    },
    {
      time: '5.32',
      title: 'Charlie & Blue celebrate passover',
      description: 'Charlie and her favourite soft toy (and best friend) Blue visit a Jewish neighbour called Rachel to find out what Jews celebrate at the festival of Passover, and how the food they eat helps them remember important things that happened in the past.',
      url: '',
      image: {
        src: '/assets/images/sample/grid_5.jpg',
        alt: 'Some sort of alt text'
      },
      categories: [
        {
          label: 'Videos',
          class: 'btn-video',
          url: 'something'
        },
        {
          label: 'Lesson Plans',
          class: 'btn-lesson-plan',
          url: 'something'
        }
      ]
    },
    {
      time: '5.32',
      title: 'Charlie & Blue celebrate passover',
      description: 'Charlie and her favourite soft toy (and best friend) Blue visit a Jewish neighbour called Rachel to find out what Jews celebrate at the festival of Passover, and how the food they eat helps them remember important things that happened in the past.',
      url: '',
      image: {
        src: '/assets/images/sample/grid_6.jpg',
        alt: 'Some sort of alt text'
      },
      categories: [
        {
          label: 'Videos',
          class: 'btn-video',
          url: 'something'
        },
        {
          label: 'Lesson Plans',
          class: 'btn-lesson-plan',
          url: 'something'
        }
      ]
    }
  ]

  itemsVisible(items) {
    console.log(items);
    if(items.length) {
      return false;
    } else {
      return true;
    }
  }
  // hasProperty(property) {
  //   if (property) return true;
  // }
}
