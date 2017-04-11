/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '@angular/router';
import * as import2 from '@angular/common';
import * as import3 from '../../../../app/components/messaging/awards.component';
import * as import4 from '../../../../app/services/data.service';
const styles_AwardsComponent:any[] = ([] as any[]);
export const RenderType_AwardsComponent:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 2,
  styles: styles_AwardsComponent,
  data: {}
}
);
function View_AwardsComponent_1(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),5,'div',[[
        'class',
        'award'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n  '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),2,'a',[[
        'href',
        '#'
      ]
    ],[
      [
        1,
        'target',
        0
      ]
      ,
      [
        8,
        'href',
        4
      ]

    ]
      ,[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      if (('click' === en)) {
        const pd_0:any = ((<any>import0.ɵnov(v,3).onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import0.ɵdid(335872,(null as any),0,import1.RouterLinkWithHref,[
      import1.Router,
      import1.ActivatedRoute,
      import2.LocationStrategy
    ]
      ,{routerLink: [
        0,
        'routerLink'
      ]
    },(null as any)),
      (l()(),import0.ɵeld(0,(null as any),(null as any),0,'img',([] as any[]),[[
        8,
        'src',
        4
      ]
    ],(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n']))
  ]
  ,(ck,v) => {
    const currVal_2:any = '/awards';
    ck(v,3,0,currVal_2);
  },(ck,v) => {
    const currVal_0:any = import0.ɵnov(v,3).target;
    const currVal_1:any = import0.ɵnov(v,3).href;
    ck(v,2,0,currVal_0,currVal_1);
    const currVal_3:any = import0.ɵinlineInterpolate(1,'',v.context.$implicit.image,'');
    ck(v,4,0,currVal_3);
  });
}
export function View_AwardsComponent_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_AwardsComponent_1)),
    import0.ɵdid(401408,(null as any),0,import2.NgForOf,[
      import0.ViewContainerRef,
      import0.TemplateRef,
      import0.IterableDiffers
    ]
      ,{ngForOf: [
        0,
        'ngForOf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n']))
  ]
  ,(ck,v) => {
    var co:import3.AwardsComponent = v.component;
    const currVal_0:any = co.items;
    ck(v,1,0,currVal_0);
  },(null as any));
}
function View_AwardsComponent_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'app-awards',([] as any[]),(null as any),(null as any),(null as any),View_AwardsComponent_0,RenderType_AwardsComponent)),
    import0.ɵdid(57344,(null as any),0,import3.AwardsComponent,[import4.DataService],(null as any),(null as any))
  ]
  ,(ck,v) => {
    ck(v,1,0);
  },(null as any));
}
export const AwardsComponentNgFactory:import0.ComponentFactory<import3.AwardsComponent> = import0.ɵccf('app-awards',import3.AwardsComponent,View_AwardsComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL3RicC9Eb2N1bWVudHMvR2l0aHViL2N0dmMvdHJ1ZS10dWJlL3NyYy9hcHAvY29tcG9uZW50cy9tZXNzYWdpbmcvYXdhcmRzLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9Vc2Vycy90YnAvRG9jdW1lbnRzL0dpdGh1Yi9jdHZjL3RydWUtdHViZS9zcmMvYXBwL2NvbXBvbmVudHMvbWVzc2FnaW5nL2F3YXJkcy5jb21wb25lbnQudHMiLCJuZzovLy9Vc2Vycy90YnAvRG9jdW1lbnRzL0dpdGh1Yi9jdHZjL3RydWUtdHViZS9zcmMvYXBwL2NvbXBvbmVudHMvbWVzc2FnaW5nL2F3YXJkcy5jb21wb25lbnQuaHRtbCIsIm5nOi8vL1VzZXJzL3RicC9Eb2N1bWVudHMvR2l0aHViL2N0dmMvdHJ1ZS10dWJlL3NyYy9hcHAvY29tcG9uZW50cy9tZXNzYWdpbmcvYXdhcmRzLmNvbXBvbmVudC50cy5Bd2FyZHNDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCI8ZGl2IGNsYXNzPVwiYXdhcmRcIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtc1wiPlxuICA8YSBocmVmPVwiI1wiIFtyb3V0ZXJMaW5rXT1cIicvYXdhcmRzJ1wiPjxpbWcgc3JjPVwie3tpdGVtLmltYWdlfX1cIiAvPjwvYT5cbjwvZGl2PlxuIiwiPGFwcC1hd2FyZHM+PC9hcHAtYXdhcmRzPiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUNBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQThDO01BQzVDO1FBQUE7UUFBQTtNQUFBO0lBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO0lBQUE7Z0JBQUE7Ozs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7TUFBcUM7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQWdDOzs7SUFBekQ7SUFBWixTQUFZLFNBQVo7O0lBQUE7SUFBQTtJQUFBLFNBQUEsbUJBQUE7SUFBMEM7SUFBTCxTQUFLLFNBQUw7Ozs7O0lBRHZDO2dCQUFBOzs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBRU07Ozs7SUFGYTtJQUFuQixTQUFtQixTQUFuQjs7Ozs7SUNBQTtnQkFBQTs7O0lBQUE7OzsifQ==
