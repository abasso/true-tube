/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '../../navigation/pages-nav.component.ngfactory';
import * as import2 from '../../../../../app/components/navigation/pages-nav.component';
import * as import3 from '../../../../../app/services/data.service';
import * as import4 from 'angulartics2/dist/providers/ga/angulartics2-ga';
import * as import5 from 'angulartics2/dist/core/angulartics2';
import * as import6 from '@angular/common';
import * as import7 from '../../../../../app/components/content/pages/page.component';
import * as import8 from '@angular/router';
const styles_PageComponent:any[] = ([] as any[]);
export const RenderType_PageComponent:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 2,
  styles: styles_PageComponent,
  data: {}
}
);
function View_PageComponent_1(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),7,'div',[[
        'class',
        'col-xs-12 col-ml-12 col-xl-9 col-xl-p-left m-t-1'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'h1',[[
        'class',
        'page-title'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '\n      ',
      '\n    '
    ]
    )),
    (l()(),import0.ɵted((null as any),['\n    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'div',[[
        'class',
        'content'
      ]
      ],[[
        8,
        'innerHTML',
        1
      ]
    ],(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵted((null as any),['\n  ']))
  ]
  ,(null as any),(ck,v) => {
    const currVal_0:any = v.context.$implicit._source.title;
    ck(v,3,0,currVal_0);
    const currVal_1:any = v.context.$implicit._source.description;
    ck(v,5,0,currVal_1);
  });
}
export function View_PageComponent_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),11,'div',[[
        'class',
        'row info-page'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n  '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),5,'div',[[
        'class',
        'col-xs-12 col-ml-12 col-xl-3 col-xl-p-right m-t-2 hidden-lg-down'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),2,'app-pages-nav',([] as any[]),(null as any),(null as any),(null as any),import1.View_PagesNavComponent_0,import1.RenderType_PagesNavComponent)),
    import0.ɵdid(57344,(null as any),0,import2.PagesNavComponent,[
      import3.DataService,
      import4.Angulartics2GoogleAnalytics,
      import5.Angulartics2
    ]
    ,(null as any),(null as any)),
    (l()(),import0.ɵted((null as any),['\n		'])),
    (l()(),import0.ɵted((null as any),['\n\n  '])),
    (l()(),import0.ɵted((null as any),['\n  '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_PageComponent_1)),
    import0.ɵdid(401408,(null as any),0,import6.NgForOf,[
      import0.ViewContainerRef,
      import0.TemplateRef,
      import0.IterableDiffers
    ]
      ,{ngForOf: [
        0,
        'ngForOf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n'])),
    (l()(),import0.ɵted((null as any),['\n']))
  ]
  ,(ck,v) => {
    var co:import7.PageComponent = v.component;
    ck(v,5,0);
    const currVal_0:any = co.content;
    ck(v,10,0,currVal_0);
  },(null as any));
}
function View_PageComponent_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'app-page',([] as any[]),(null as any),(null as any),(null as any),View_PageComponent_0,RenderType_PageComponent)),
    import0.ɵdid(57344,(null as any),0,import7.PageComponent,[
      import3.DataService,
      import8.ActivatedRoute
    ]
    ,(null as any),(null as any))
  ]
  ,(ck,v) => {
    ck(v,1,0);
  },(null as any));
}
export const PageComponentNgFactory:import0.ComponentFactory<import7.PageComponent> = import0.ɵccf('app-page',import7.PageComponent,View_PageComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL3RicC9Eb2N1bWVudHMvR2l0aHViL2N0dmMvdHJ1ZS10dWJlL3NyYy9hcHAvY29tcG9uZW50cy9jb250ZW50L3BhZ2VzL3BhZ2UuY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL1VzZXJzL3RicC9Eb2N1bWVudHMvR2l0aHViL2N0dmMvdHJ1ZS10dWJlL3NyYy9hcHAvY29tcG9uZW50cy9jb250ZW50L3BhZ2VzL3BhZ2UuY29tcG9uZW50LnRzIiwibmc6Ly8vVXNlcnMvdGJwL0RvY3VtZW50cy9HaXRodWIvY3R2Yy90cnVlLXR1YmUvc3JjL2FwcC9jb21wb25lbnRzL2NvbnRlbnQvcGFnZXMvcGFnZS5jb21wb25lbnQuaHRtbCIsIm5nOi8vL1VzZXJzL3RicC9Eb2N1bWVudHMvR2l0aHViL2N0dmMvdHJ1ZS10dWJlL3NyYy9hcHAvY29tcG9uZW50cy9jb250ZW50L3BhZ2VzL3BhZ2UuY29tcG9uZW50LnRzLlBhZ2VDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCI8ZGl2IGNsYXNzPVwicm93IGluZm8tcGFnZVwiPlxuICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1tbC0xMiBjb2wteGwtMyBjb2wteGwtcC1yaWdodCBtLXQtMiBoaWRkZW4tbGctZG93blwiPlxuICAgIDxhcHAtcGFnZXMtbmF2PlxuXHRcdDwvYXBwLXBhZ2VzLW5hdj5cblxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtbWwtMTIgY29sLXhsLTkgY29sLXhsLXAtbGVmdCBtLXQtMVwiICpuZ0Zvcj1cImxldCBpdGVtIG9mIGNvbnRlbnRcIj5cbiAgICA8aDEgY2xhc3M9XCJwYWdlLXRpdGxlXCI+XG4gICAgICB7e2l0ZW0uX3NvdXJjZS50aXRsZX19XG4gICAgPC9oMT5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiIFtpbm5lckhUTUxdPVwiaXRlbS5fc291cmNlLmRlc2NyaXB0aW9uXCI+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG4iLCI8YXBwLXBhZ2U+PC9hcHAtcGFnZT4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQ01FO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBMkY7TUFDekY7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUF1QjtNQUFBO01BQUE7SUFBQTtJQUFBO0lBRWxCO01BQ0w7UUFBQTtRQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBNEQ7SUFDdEQ7OztJQUppQjtJQUFBO0lBR0Y7SUFBckIsU0FBcUIsU0FBckI7Ozs7O01BVko7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUEyQjtNQUN6QjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQThFO0lBQzVFO2dCQUFBOzs7O0lBQUE7S0FBQTtJQUFlO0lBQ0Q7SUFFVjtJQUNOO2dCQUFBOzs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBTU07SUFDRjs7OztJQVhGO0lBSTREO0lBQTlELFVBQThELFNBQTlEOzs7OztJQ05GO2dCQUFBOzs7SUFBQTtLQUFBOzs7SUFBQTs7OyJ9
