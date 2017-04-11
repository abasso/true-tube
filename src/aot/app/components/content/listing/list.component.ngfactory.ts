/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from './sort.component.ngfactory';
import * as import2 from '../../../../../app/components/content/listing/sort.component';
import * as import3 from '../../../../../app/components/content/listing/list.component';
import * as import4 from '@angular/router';
import * as import5 from '@angular/common';
import * as import6 from './list-item.component.ngfactory';
import * as import7 from '../../../../../app/components/content/listing/list-item.component';
import * as import8 from '../../../../../app/services/data.service';
import * as import9 from 'angulartics2/dist/providers/ga/angulartics2-ga';
import * as import10 from 'angulartics2/dist/core/angulartics2';
import * as import11 from '../../../../../app/components/content/listing/filter.component';
import * as import12 from '../../../../../app/pipes/pagination.pipe';
import * as import13 from '../../../../../app/pipes/image.pipe';
import * as import14 from './filter.component.ngfactory';
import * as import15 from '../../../../../app/services/list.service';
import * as import16 from '@angular/forms';
import * as import17 from '../../shared/events.component.ngfactory';
import * as import18 from '../../../../../app/components/shared/events.component';
const styles_ListingComponent:any[] = ([] as any[]);
export const RenderType_ListingComponent:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 2,
  styles: styles_ListingComponent,
  data: {}
}
);
function View_ListingComponent_1(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'span',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '(',
      ' ',
      ')'
    ]
    ))
  ]
  ,(null as any),(ck,v) => {
    const currVal_0:any = import0.ɵnov(v.parent,5).itemsTotal;
    const currVal_1:any = import0.ɵnov(v.parent,5).itemsTotalLabel;
    ck(v,1,0,currVal_0,currVal_1);
  });
}
function View_ListingComponent_2(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'listing-sort',[[
        'class',
        'hidden-lg-down'
      ]
    ],(null as any),(null as any),(null as any),import1.View_ListingSortComponent_0,import1.RenderType_ListingSortComponent)),
    import0.ɵdid(24576,(null as any),0,import2.ListingSortComponent,[
      import3.ListingComponent,
      import4.ActivatedRoute,
      import4.Router,
      import5.Location
    ]
    ,(null as any),(null as any))
  ]
  ,(null as any),(null as any));
}
function View_ListingComponent_3(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),4,'div',[[
        'class',
        'row grid-row content-grid'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n      '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'div',[[
        'class',
        'list-item m-b-3'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n        No results.\n      '])),
    (l()(),import0.ɵted((null as any),['\n    ']))
  ]
  ,(null as any),(null as any));
}
function View_ListingComponent_4(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),3,'div',[[
        'class',
        'row grid-row content-grid loading-grid'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n      '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),0,'div',[[
        'class',
        'spinner'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n    ']))
  ]
  ,(null as any),(null as any));
}
function View_ListingComponent_5(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),5,'app-list-item',([] as any[]),(null as any),(null as any),(null as any),import6.View_ListItemComponent_0,import6.RenderType_ListItemComponent)),
    import0.ɵdid(139264,(null as any),0,import5.NgClass,[
      import0.IterableDiffers,
      import0.KeyValueDiffers,
      import0.ElementRef,
      import0.Renderer
    ]
      ,{ngClass: [
        0,
        'ngClass'
      ]
    },(null as any)),
    import0.ɵpod([
      'row',
      'grid-row',
      'list-row',
      'content-grid'
    ]
    ),
    import0.ɵdid(319488,(null as any),0,import7.ListItemComponent,[
      import4.ActivatedRoute,
      import8.DataService,
      import9.Angulartics2GoogleAnalytics,
      import10.Angulartics2,
      import11.ListFilterComponent
    ]
    ,{
      items: [
        0,
        'items'
      ]
      ,
      paginationData: [
        1,
        'paginationData'
      ]

    }
    ,(null as any)),
    import0.ɵprd(2304,(null as any),import12.PaginationPipe,import12.PaginationPipe,([] as any[])),
    import0.ɵprd(2304,(null as any),import13.ImagePipe,import13.ImagePipe,([] as any[]))
  ]
  ,(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = ck(v,2,0,true,co.displayGrid,co.displayList,true);
    ck(v,1,0,currVal_0);
    const currVal_1:any = co.items;
    const currVal_2:any = co.paginationData;
    ck(v,3,0,currVal_1,currVal_2);
  },(null as any));
}
function View_ListingComponent_6(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'listing-sort',[[
        'class',
        'last-sort'
      ]
    ],(null as any),(null as any),(null as any),import1.View_ListingSortComponent_0,import1.RenderType_ListingSortComponent)),
    import0.ɵdid(24576,(null as any),0,import2.ListingSortComponent,[
      import3.ListingComponent,
      import4.ActivatedRoute,
      import4.Router,
      import5.Location
    ]
    ,(null as any),(null as any))
  ]
  ,(null as any),(null as any));
}
export function View_ListingComponent_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),40,'div',[[
        'class',
        'row'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n  '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),8,'div',[[
        'class',
        'col-xs-12 col-ml-12 col-xl-3 col-xl-p-right'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),2,'app-filter',([] as any[]),(null as any),(null as any),(null as any),import14.View_ListFilterComponent_0,import14.RenderType_ListFilterComponent)),
      import0.ɵdid(57344,[[
        'filter',
        4
      ]
    ],0,import11.ListFilterComponent,[
      import15.ListService,
      import4.ActivatedRoute,
      import4.Router,
      import3.ListingComponent,
      import8.DataService,
      import5.Location,
      import16.FormBuilder,
      import9.Angulartics2GoogleAnalytics,
      import10.Angulartics2
    ]
    ,(null as any),(null as any)),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵted((null as any),['\n    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'app-events-block',[[
        'class',
        'hidden-lg-down'
      ]
    ],(null as any),(null as any),(null as any),import17.View_EventsBlockComponent_0,import17.RenderType_EventsBlockComponent)),
    import0.ɵdid(57344,(null as any),0,import18.EventsBlockComponent,[
      import8.DataService,
      import9.Angulartics2GoogleAnalytics,
      import10.Angulartics2
    ]
    ,(null as any),(null as any)),
    (l()(),import0.ɵted((null as any),['\n\n  '])),
    (l()(),import0.ɵted((null as any),['\n  '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),27,'div',[[
        'class',
        'col-xs-12 col-ml-12 col-xl-9 col-xl-p-left m-t-1'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(139264,(null as any),0,import5.NgClass,[
      import0.IterableDiffers,
      import0.KeyValueDiffers,
      import0.ElementRef,
      import0.Renderer
    ]
    ,{
      klass: [
        0,
        'klass'
      ]
      ,
      ngClass: [
        1,
        'ngClass'
      ]

    }
    ,(null as any)),
    import0.ɵpod(['sticky']),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),4,'h1',[
      [
        'class',
        'page-title col-xl-12'
      ]
      ,
      [
        'data-offset-bottom',
        '200'
      ]
      ,
      [
        'data-offset-top',
        '60'
      ]
      ,
      [
        'data-spy',
        'affix'
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '\n      ',
      '\n      '
    ]
    )),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_ListingComponent_1)),
    import0.ɵdid(8192,(null as any),0,import5.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_ListingComponent_2)),
    import0.ɵdid(8192,(null as any),0,import5.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_ListingComponent_3)),
    import0.ɵdid(8192,(null as any),0,import5.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n\n    '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_ListingComponent_4)),
    import0.ɵdid(8192,(null as any),0,import5.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n      '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_ListingComponent_5)),
    import0.ɵdid(8192,(null as any),0,import5.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_ListingComponent_6)),
    import0.ɵdid(8192,(null as any),0,import5.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'app-events-block',[[
        'class',
        'hidden-lg-up'
      ]
    ],(null as any),(null as any),(null as any),import17.View_EventsBlockComponent_0,import17.RenderType_EventsBlockComponent)),
    import0.ɵdid(57344,(null as any),0,import18.EventsBlockComponent,[
      import8.DataService,
      import9.Angulartics2GoogleAnalytics,
      import10.Angulartics2
    ]
    ,(null as any),(null as any)),
    (l()(),import0.ɵted((null as any),['\n\n  '])),
    (l()(),import0.ɵted((null as any),['\n'])),
    (l()(),import0.ɵted((null as any),['\n']))
  ]
  ,(ck,v) => {
    var co:import3.ListingComponent = v.component;
    ck(v,5,0);
    ck(v,9,0);
    const currVal_0:any = 'col-xs-12 col-ml-12 col-xl-9 col-xl-p-left m-t-1';
    const currVal_1:any = ck(v,14,0,(co.stickyTitle === true));
    ck(v,13,0,currVal_0,currVal_1);
    const currVal_3:any = (import0.ɵnov(v,5).itemsTotal !== 0);
    ck(v,19,0,currVal_3);
    const currVal_4:any = (co.itemCount !== 0);
    ck(v,23,0,currVal_4);
    const currVal_5:any = (co.itemCount === 0);
    ck(v,26,0,currVal_5);
    const currVal_6:any = (import0.ɵnov(v,5).contentLoading === true);
    ck(v,29,0,currVal_6);
    const currVal_7:any = (import0.ɵnov(v,5).contentLoading === false);
    ck(v,32,0,currVal_7);
    const currVal_8:any = (co.itemCount !== 0);
    ck(v,35,0,currVal_8);
    ck(v,38,0);
  },(ck,v) => {
    var co:import3.ListingComponent = v.component;
    const currVal_2:any = co.pageTitle(import0.ɵnov(v,5).filterSubjects,import0.ɵnov(v,5).keystages,import0.ɵnov(v,5).types,import0.ɵnov(v,5).filter.value.term,import0.ɵnov(v,5).category,import0.ɵnov(v,5).topics);
    ck(v,17,0,currVal_2);
  });
}
function View_ListingComponent_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),3,'app-list',([] as any[]),(null as any),[[
        'window',
        'scroll'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      if (('window:scroll' === en)) {
        const pd_0:any = ((<any>import0.ɵnov(v,2).scroll($event)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },View_ListingComponent_0,RenderType_ListingComponent)),
    import0.ɵprd(256,(null as any),import15.ListService,import15.ListService,([] as any[])),
    import0.ɵdid(24576,(null as any),0,import3.ListingComponent,[
      import8.DataService,
      import15.ListService,
      import4.ActivatedRoute
    ]
    ,(null as any),(null as any)),
    import0.ɵprd(2304,(null as any),import12.PaginationPipe,import12.PaginationPipe,([] as any[]))
  ]
  ,(null as any),(null as any));
}
export const ListingComponentNgFactory:import0.ComponentFactory<import3.ListingComponent> = import0.ɵccf('app-list',import3.ListingComponent,View_ListingComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL3RicC9Eb2N1bWVudHMvR2l0aHViL2N0dmMvdHJ1ZS10dWJlL3NyYy9hcHAvY29tcG9uZW50cy9jb250ZW50L2xpc3RpbmcvbGlzdC5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vVXNlcnMvdGJwL0RvY3VtZW50cy9HaXRodWIvY3R2Yy90cnVlLXR1YmUvc3JjL2FwcC9jb21wb25lbnRzL2NvbnRlbnQvbGlzdGluZy9saXN0LmNvbXBvbmVudC50cyIsIm5nOi8vL1VzZXJzL3RicC9Eb2N1bWVudHMvR2l0aHViL2N0dmMvdHJ1ZS10dWJlL3NyYy9hcHAvY29tcG9uZW50cy9jb250ZW50L2xpc3RpbmcvbGlzdC5jb21wb25lbnQuaHRtbCIsIm5nOi8vL1VzZXJzL3RicC9Eb2N1bWVudHMvR2l0aHViL2N0dmMvdHJ1ZS10dWJlL3NyYy9hcHAvY29tcG9uZW50cy9jb250ZW50L2xpc3RpbmcvbGlzdC5jb21wb25lbnQudHMuTGlzdGluZ0NvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtbWwtMTIgY29sLXhsLTMgY29sLXhsLXAtcmlnaHRcIj5cbiAgICA8YXBwLWZpbHRlciAjZmlsdGVyPlxuICAgIDwvYXBwLWZpbHRlcj5cbiAgICA8YXBwLWV2ZW50cy1ibG9jayBjbGFzcz1cImhpZGRlbi1sZy1kb3duXCI+PC9hcHAtZXZlbnRzLWJsb2NrPlxuXG4gIDwvZGl2PlxuICA8ZGl2IFtuZ0NsYXNzXT1cIntzdGlja3k6IHN0aWNreVRpdGxlID09PSB0cnVlfVwiIGNsYXNzPVwiY29sLXhzLTEyIGNvbC1tbC0xMiBjb2wteGwtOSBjb2wteGwtcC1sZWZ0IG0tdC0xXCI+XG4gICAgPGgxIGNsYXNzPVwicGFnZS10aXRsZSBjb2wteGwtMTJcIiBkYXRhLXNweT1cImFmZml4XCIgZGF0YS1vZmZzZXQtdG9wPVwiNjBcIiBkYXRhLW9mZnNldC1ib3R0b209XCIyMDBcIj5cbiAgICAgIHt7cGFnZVRpdGxlKGZpbHRlci5maWx0ZXJTdWJqZWN0cywgZmlsdGVyLmtleXN0YWdlcywgZmlsdGVyLnR5cGVzLCBmaWx0ZXIuZmlsdGVyLnZhbHVlLnRlcm0sIGZpbHRlci5jYXRlZ29yeSwgZmlsdGVyLnRvcGljcyl9fVxuICAgICAgPHNwYW4gKm5nSWY9XCJmaWx0ZXIuaXRlbXNUb3RhbCAhPT0gMFwiPih7e2ZpbHRlci5pdGVtc1RvdGFsfX0ge3tmaWx0ZXIuaXRlbXNUb3RhbExhYmVsfX0pPC9zcGFuPlxuICAgIDwvaDE+XG4gICAgPGxpc3Rpbmctc29ydCBjbGFzcz1cImhpZGRlbi1sZy1kb3duXCIgKm5nSWY9XCJpdGVtQ291bnQgIT09IDBcIj48L2xpc3Rpbmctc29ydD5cbiAgICA8ZGl2IGNsYXNzPVwicm93IGdyaWQtcm93IGNvbnRlbnQtZ3JpZFwiICpuZ0lmPVwiaXRlbUNvdW50ID09PSAwXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibGlzdC1pdGVtIG0tYi0zXCI+XG4gICAgICAgIE5vIHJlc3VsdHMuXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJyb3cgZ3JpZC1yb3cgY29udGVudC1ncmlkIGxvYWRpbmctZ3JpZFwiICpuZ0lmPVwiZmlsdGVyLmNvbnRlbnRMb2FkaW5nID09PSB0cnVlXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lclwiPjwvZGl2PlxuICAgIDwvZGl2PlxuICAgICAgPGFwcC1saXN0LWl0ZW0gW25nQ2xhc3NdPVwieydyb3cnOiB0cnVlLCAnZ3JpZC1yb3cnOiBkaXNwbGF5R3JpZCwgJ2xpc3Qtcm93JzogZGlzcGxheUxpc3QsICdjb250ZW50LWdyaWQnOiB0cnVlfVwiICpuZ0lmPVwiZmlsdGVyLmNvbnRlbnRMb2FkaW5nID09PSBmYWxzZVwiIFtpdGVtc109XCJpdGVtc1wiIFtwYWdpbmF0aW9uRGF0YV09XCJwYWdpbmF0aW9uRGF0YVwiPjwvYXBwLWxpc3QtaXRlbT5cbiAgICA8bGlzdGluZy1zb3J0IGNsYXNzPVwibGFzdC1zb3J0XCIgKm5nSWY9XCJpdGVtQ291bnQgIT09IDBcIj48L2xpc3Rpbmctc29ydD5cbiAgICA8YXBwLWV2ZW50cy1ibG9jayBjbGFzcz1cImhpZGRlbi1sZy11cFwiPjwvYXBwLWV2ZW50cy1ibG9jaz5cblxuICA8L2Rpdj5cbjwvZGl2PlxuIiwiPGFwcC1saXN0PjwvYXBwLWxpc3Q+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDVU07SUFBc0M7TUFBQTtNQUFBO01BQUE7SUFBQTtJQUFBOzs7SUFBQTtJQUFBO0lBQUE7Ozs7O01BRXhDO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQUE7Ozs7O0lBQUE7S0FBQTs7Ozs7O01BQ0E7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUErRDtNQUM3RDtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQTZCO0lBRXZCOzs7Ozs7TUFHUjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQTJGO01BQ3pGO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBMkI7Ozs7OztJQUUzQjtnQkFBQTs7Ozs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQWU7TUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0lBQUE7Z0JBQWY7Ozs7OztJQUFBO0tBQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO2dCQUFBO2dCQUFBOzs7O0lBQWU7SUFBZixTQUFlLFNBQWY7SUFBeUo7SUFBZ0I7SUFBekssU0FBeUosVUFBZ0IsU0FBeks7Ozs7O01BQ0Y7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBQTs7Ozs7SUFBQTtLQUFBOzs7Ozs7TUF2Qko7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUFpQjtNQUNmO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBeUQ7SUFDdkQ7a0JBQUE7UUFBQTtRQUFBO01BQUE7SUFBQTs7Ozs7Ozs7OztJQUFBO0tBQUE7SUFBb0I7SUFDUDtNQUNiO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQUE7Ozs7SUFBQTtLQUFBO0lBQTREO0lBRXhEO01BQ047UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBQTs7Ozs7SUFBQTtLQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtnQkFBSztJQUFvRztJQUN2RztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7SUFBZ0c7TUFBQTtNQUFBO0lBQUE7SUFBQTtJQUU5RjtnQkFBQTs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQStGO0lBQzVGO0lBQ0w7Z0JBQUE7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUE0RTtJQUM1RTtnQkFBQTs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBSU07SUFFTjtnQkFBQTs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBRU07SUFDSjtnQkFBQTs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQTJOO0lBQzdOO2dCQUFBOzs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBdUU7TUFDdkU7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBQTs7OztJQUFBO0tBQUE7SUFBMEQ7SUFFdEQ7SUFDRjs7OztJQXpCRjtJQUVBO0lBRzhDO0lBQTNDO0lBQUwsVUFBZ0QsVUFBM0MsU0FBTDtJQUdVO0lBQU4sVUFBTSxTQUFOO0lBRW1DO0lBQXJDLFVBQXFDLFNBQXJDO0lBQ3VDO0lBQXZDLFVBQXVDLFNBQXZDO0lBTW9EO0lBQXBELFVBQW9ELFNBQXBEO0lBR21IO0lBQWpILFVBQWlILFNBQWpIO0lBQzhCO0lBQWhDLFVBQWdDLFNBQWhDO0lBQ0E7OztJQWhCZ0c7SUFBQTs7Ozs7TUNScEc7UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7TUFBQTtJQUFBO2dCQUFBO2dCQUFBOzs7O0lBQUE7S0FBQTtnQkFBQTs7OzsifQ==
