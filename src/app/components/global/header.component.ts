import { Component, OnInit  } from '@angular/core';
import Cookies from 'js-cookie';
import _ from 'lodash';
import { Auth } from './../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  showCallToAction: boolean;
  callToActionClasses: Object;
  constructor(private auth: Auth) {}

  ngOnInit() {
    console.log(Auth);
    this.showCallToAction = (_.isUndefined(Cookies.get("hide-call-to-action"))) ? false : true;
    this.callToActionClasses = {'hidden-xs-up': this.showCallToAction, 'call-to-action': true }
    if (!this.showCallToAction) {
      document.getElementById('call-to-action-hide-link').addEventListener("click", (e) => {
        Cookies.set("hide-call-to-action", true);
      });
    }

  }

}
