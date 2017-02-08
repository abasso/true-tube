import {Component} from '@angular/core'
import {Profile} from './profile.model'
import {ActivatedRoute} from '@angular/router'
import * as _ from 'lodash'

@Component({
    templateUrl: './profile.component.html'
})
export class ProfileComponent {
    public profile: Profile
    public menu: any[] = [
      {
        label: 'Account'
      },
      {
        label: 'Lists'
      },
      {
        label: 'Favourites'
      }
    ]
    constructor(route: ActivatedRoute) {
        route.data.subscribe(data => {
            let listArray = []
            this.profile = data['profile']
            _.each(this.profile.lists, (list, key) => {
              console.log("THE LIST", key)
              listArray.push(list)
            })
        })
    }
}
