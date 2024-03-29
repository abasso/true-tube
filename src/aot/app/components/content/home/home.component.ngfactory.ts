/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from './carousel.component.ngfactory';
import * as import2 from '../../../../../app/components/content/home/carousel.component';
import * as import3 from '../../../../../app/services/data.service';
import * as import4 from 'angulartics2/dist/providers/ga/angulartics2-ga';
import * as import5 from 'angulartics2/dist/core/angulartics2';
import * as import6 from './list.component.ngfactory';
import * as import7 from '../../../../../app/services/list.service';
import * as import8 from '../../../../../app/components/content/home/list.component';
import * as import9 from '../../../../../app/pipes/pagination.pipe';
import * as import10 from '../../shared/events.component.ngfactory';
import * as import11 from '../../../../../app/components/shared/events.component';
import * as import12 from '../../shared/topics.component.ngfactory';
import * as import13 from '../../../../../app/components/shared/topics.component';
import * as import14 from '@angular/router';
import * as import15 from '../../../../../app/components/content/home/home.component';
const styles_HomeComponent:any[] = ([] as any[]);
export const RenderType_HomeComponent:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 2,
  styles: styles_HomeComponent,
  data: {}
}
);
export function View_HomeComponent_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),7,'div',[[
        'class',
        'row'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n  '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),4,'div',[[
        'class',
        'col-xs-12 col-ml-12 col-xl-12 m-t-1'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'app-carousel',([] as any[]),(null as any),(null as any),(null as any),import1.View_CarouselComponent_0,import1.RenderType_CarouselComponent)),
    import0.ɵdid(57344,(null as any),0,import2.CarouselComponent,[
      import3.DataService,
      import4.Angulartics2GoogleAnalytics,
      import5.Angulartics2
    ]
    ,(null as any),(null as any)),
    (l()(),import0.ɵted((null as any),['\n  '])),
    (l()(),import0.ɵted((null as any),['\n'])),
    (l()(),import0.ɵted((null as any),['\n'])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),19,'div',[[
        'class',
        'row'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),6,'div',[[
        'class',
        'col-xs-12 col-ml-12 col-xl-9 col-xl-p-right'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n      '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),3,'home-list',([] as any[]),(null as any),(null as any),(null as any),import6.View_HomeListingComponent_0,import6.RenderType_HomeListingComponent)),
    import0.ɵprd(256,(null as any),import7.ListService,import7.ListService,([] as any[])),
    import0.ɵdid(57344,(null as any),0,import8.HomeListingComponent,[
      import3.DataService,
      import7.ListService,
      import4.Angulartics2GoogleAnalytics,
      import5.Angulartics2
    ]
    ,(null as any),(null as any)),
    import0.ɵprd(2304,(null as any),import9.PaginationPipe,import9.PaginationPipe,([] as any[])),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵted((null as any),['\n    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),8,'div',[[
        'class',
        'col-xs-12 col-ml-12 col-xl-3 col-xl-p-left'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n      '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'app-events-block',([] as any[]),(null as any),(null as any),(null as any),import10.View_EventsBlockComponent_0,import10.RenderType_EventsBlockComponent)),
    import0.ɵdid(57344,(null as any),0,import11.EventsBlockComponent,[
      import3.DataService,
      import4.Angulartics2GoogleAnalytics,
      import5.Angulartics2
    ]
    ,(null as any),(null as any)),
    (l()(),import0.ɵted((null as any),['\n      '])),
    (l()(),import0.ɵted((null as any),['\n      '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'app-topics-block',([] as any[]),(null as any),(null as any),(null as any),import12.View_TopicsComponent_0,import12.RenderType_TopicsComponent)),
    import0.ɵdid(57344,(null as any),0,import13.TopicsComponent,[import14.Router],(null as any),(null as any)),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵted((null as any),['\n']))
  ]
  ,(ck,v) => {
    ck(v,5,0);
    ck(v,15,0);
    ck(v,22,0);
    ck(v,26,0);
  },(null as any));
}
function View_HomeComponent_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'app-home',([] as any[]),(null as any),(null as any),(null as any),View_HomeComponent_0,RenderType_HomeComponent)),
    import0.ɵdid(57344,(null as any),0,import15.HomeComponent,([] as any[]),(null as any),(null as any))
  ]
  ,(ck,v) => {
    ck(v,1,0);
  },(null as any));
}
export const HomeComponentNgFactory:import0.ComponentFactory<import15.HomeComponent> = import0.ɵccf('app-home',import15.HomeComponent,View_HomeComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL3RicC9Eb2N1bWVudHMvR2l0aHViL2N0dmMvdHJ1ZS10dWJlL3NyYy9hcHAvY29tcG9uZW50cy9jb250ZW50L2hvbWUvaG9tZS5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vVXNlcnMvdGJwL0RvY3VtZW50cy9HaXRodWIvY3R2Yy90cnVlLXR1YmUvc3JjL2FwcC9jb21wb25lbnRzL2NvbnRlbnQvaG9tZS9ob21lLmNvbXBvbmVudC50cyIsIm5nOi8vL1VzZXJzL3RicC9Eb2N1bWVudHMvR2l0aHViL2N0dmMvdHJ1ZS10dWJlL3NyYy9hcHAvY29tcG9uZW50cy9jb250ZW50L2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbCIsIm5nOi8vL1VzZXJzL3RicC9Eb2N1bWVudHMvR2l0aHViL2N0dmMvdHJ1ZS10dWJlL3NyYy9hcHAvY29tcG9uZW50cy9jb250ZW50L2hvbWUvaG9tZS5jb21wb25lbnQudHMuSG9tZUNvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtbWwtMTIgY29sLXhsLTEyIG0tdC0xXCI+XG4gICAgPGFwcC1jYXJvdXNlbD48L2FwcC1jYXJvdXNlbD5cbiAgPC9kaXY+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1tbC0xMiBjb2wteGwtOSBjb2wteGwtcC1yaWdodFwiPlxuICAgICAgPGhvbWUtbGlzdD48L2hvbWUtbGlzdD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1tbC0xMiBjb2wteGwtMyBjb2wteGwtcC1sZWZ0XCI+XG4gICAgICA8YXBwLWV2ZW50cy1ibG9jaz48L2FwcC1ldmVudHMtYmxvY2s+XG4gICAgICA8IS0te3s+IG9yZ2FuaXNtcy1zZWN0aW9uLXBvcHVsYXItYmxvY2sgfX0gLS0+XG4gICAgICA8YXBwLXRvcGljcy1ibG9jaz48L2FwcC10b3BpY3MtYmxvY2s+XG4gICAgPC9kaXY+XG4iLCI8YXBwLWhvbWU+PC9hcHAtaG9tZT4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUNBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQWlCO01BQ2Y7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUFpRDtJQUMvQztnQkFBQTs7OztJQUFBO0tBQUE7SUFBNkI7SUFDekI7SUFDRjtNQUNOO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBaUI7TUFDYjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQXlEO0lBQ3ZEO2dCQUFBO2dCQUFBOzs7OztJQUFBO0tBQUE7Z0JBQUE7SUFBdUI7SUFDbkI7TUFDTjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQXdEO0lBQ3REO2dCQUFBOzs7O0lBQUE7S0FBQTtJQUFxQztJQUNTO0lBQzlDO2dCQUFBO0lBQXFDO0lBQ2pDOzs7SUFYTjtJQUtFO0lBR0E7SUFFQTs7Ozs7SUNaTjtnQkFBQTs7O0lBQUE7OzsifQ==
