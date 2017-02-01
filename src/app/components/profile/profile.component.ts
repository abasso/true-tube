import {Component} from "@angular/core";
import {Profile} from "./profile.model";
import {ActivatedRoute} from "@angular/router";

@Component({
    templateUrl: './profile.component.html'
})
export class ProfileComponent
{
    profile: Profile;

    constructor(route: ActivatedRoute)
    {
        route.data.subscribe(data => {
            this.profile = data['profile'];
        });
    }

}
