import { Component, Input, OnInit } from '@angular/core';
import { SearchTermPipe } from './../../../pipes/search-term.pipe';
import { CategoryPipe } from './../../../pipes/category.pipe';
import { KeystagePipe } from './../../../pipes/keystage.pipe';
import { ListService } from './../../../services/list.service';

import _ from "lodash";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [
    SearchTermPipe,
    CategoryPipe,
    KeystagePipe,
    ListService
  ]
})

export class ListComponent implements OnInit {

  itemCount: number;

  constructor(private listService: ListService) {
    this.itemCount = listService.getListLength();
  }

  ngOnInit() {
    this.listService.setListLength(this.items);
    this.itemCount = this.listService.getListLength();
  }

  filterEvent(event) {
    setTimeout(() => {
      this.itemCount = this.listService.getListLength();
    }, 1);
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
      ],
      keystages: [
        1,
        2,
        3
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
      ],
      keystages: [
        1
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
      ],
      keystages: [
        1,
        3
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
      ],
      keystages: [
        2,
        3
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
      ],
      keystages: [
        1,
        2,
        3
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
      ],
      keystages: [
        1,
        2,
        3
      ]
    }
  ]

}
