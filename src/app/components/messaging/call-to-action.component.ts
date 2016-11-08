import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.scss']
})
export class CallToActionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let hideCallToAction = document.getElementById('call-to-action-hide-link');
    let callToActionContainer = document.getElementsByTagName('app-call-to-action');

    hideCallToAction.addEventListener("click", (e) => {
      callToActionContainer[0].classList.add("hidden-sm-up");
    });

  }

}
