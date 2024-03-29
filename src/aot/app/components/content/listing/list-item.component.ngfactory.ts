/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '@angular/router';
import * as import2 from '@angular/common';
import * as import3 from 'angulartics2/dist/core/angulartics2On';
import * as import4 from 'angulartics2/dist/core/angulartics2';
import * as import5 from '@angular/platform-browser';
import * as import6 from '../../../../../app/pipes/pagination.pipe';
import * as import7 from '../../../../../app/components/content/listing/list-item.component';
import * as import8 from '../../../../../app/services/data.service';
import * as import9 from 'angulartics2/dist/providers/ga/angulartics2-ga';
import * as import10 from '../../../../../app/components/content/listing/filter.component';
import * as import11 from '../../../../../app/pipes/image.pipe';
const styles_ListItemComponent:any[] = ([] as any[]);
export const RenderType_ListItemComponent:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 2,
  styles: styles_ListItemComponent,
  data: {}
}
);
function View_ListItemComponent_3(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'div',[[
        'class',
        'listing-time'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '\n        ',
      '\n      '
    ]
    ))
  ]
  ,(null as any),(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = co.dataService.duration(v.parent.parent.context.$implicit._source.duration);
    ck(v,1,0,currVal_0);
  });
}
function View_ListItemComponent_4(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'span',[[
        'class',
        'advisory-warning'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['ADVISORY']))
  ]
  ,(null as any),(null as any));
}
function View_ListItemComponent_2(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),25,'div',[[
        'class',
        'block-media__media'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),22,'a',[
      [
        'angulartics2On',
        'click'
      ]
      ,
      [
        'angularticsCategory',
        'List Item Image'
      ]
      ,
      [
        'angularticsEvent',
        'Navigate'
      ]
      ,
      [
        'class',
        'block-media__link'
      ]

    ]
    ,[
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
    ,{
      queryParams: [
        0,
        'queryParams'
      ]
      ,
      routerLink: [
        1,
        'routerLink'
      ]

    }
    ,(null as any)),
    import0.ɵpad(1),
    import0.ɵdid(532480,(null as any),0,import3.Angulartics2On,[
      import0.ElementRef,
      import4.Angulartics2,
      import5.EventManager
    ]
    ,{
      angulartics2On: [
        0,
        'angulartics2On'
      ]
      ,
      angularticsEvent: [
        1,
        'angularticsEvent'
      ]
      ,
      angularticsCategory: [
        2,
        'angularticsCategory'
      ]
      ,
      angularticsProperties: [
        3,
        'angularticsProperties'
      ]

    }
    ,(null as any)),
    import0.ɵpod(['label']),
    (l()(),import0.ɵted((null as any),['\n      '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),9,'picture',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n        '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),0,'source',[[
        'media',
        '(min-width: 1024px)'
      ]
      ],[[
        8,
        'srcset',
        4
      ]
    ],(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n        '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),0,'source',[[
        'media',
        '(min-width: 769px)'
      ]
      ],[[
        8,
        'srcset',
        4
      ]
    ],(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n        '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),0,'source',[[
        'media',
        '(min-width: 0px)'
      ]
      ],[[
        8,
        'srcset',
        4
      ]
    ],(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n        '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),0,'img',([] as any[]),[[
        8,
        'srcset',
        4
      ]
    ],(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n      '])),
    (l()(),import0.ɵted((null as any),['\n      '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_ListItemComponent_3)),
    import0.ɵdid(8192,(null as any),0,import2.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n      '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_ListItemComponent_4)),
    import0.ɵdid(8192,(null as any),0,import2.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n\n    '])),
    (l()(),import0.ɵted((null as any),['\n  ']))
  ]
  ,(ck,v) => {
    var co:any = v.component;
    const currVal_2:any = co.currentType;
    const currVal_3:any = ck(v,4,0,v.parent.context.$implicit._source.slug);
    ck(v,3,0,currVal_2,currVal_3);
    const currVal_4:any = 'click';
    const currVal_5:any = 'Navigate';
    const currVal_6:any = 'List Item Image';
    const currVal_7:any = ck(v,6,0,v.parent.context.$implicit._source.title);
    ck(v,5,0,currVal_4,currVal_5,currVal_6,currVal_7);
    const currVal_12:any = v.parent.context.$implicit._source.duration;
    ck(v,20,0,currVal_12);
    const currVal_13:any = (v.parent.context.$implicit.advisory === true);
    ck(v,23,0,currVal_13);
  },(ck,v) => {
    const currVal_0:any = import0.ɵnov(v,3).target;
    const currVal_1:any = import0.ɵnov(v,3).href;
    ck(v,2,0,currVal_0,currVal_1);
    const currVal_8:any = import0.ɵinlineInterpolate(1,'',v.parent.context.$implicit._source.thumbnail[0].styles.small,'');
    ck(v,10,0,currVal_8);
    const currVal_9:any = import0.ɵinlineInterpolate(1,'',v.parent.context.$implicit._source.thumbnail[0].styles.large,'');
    ck(v,12,0,currVal_9);
    const currVal_10:any = import0.ɵinlineInterpolate(1,'',v.parent.context.$implicit._source.thumbnail[0].styles.medium,'');
    ck(v,14,0,currVal_10);
    const currVal_11:any = import0.ɵinlineInterpolate(1,'',v.parent.context.$implicit._source.thumbnail[0].styles.medium,'');
    ck(v,16,0,currVal_11);
  });
}
function View_ListItemComponent_5(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'h6',[[
        'class',
        'block-media__headline'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '\n        ',
      '\n      '
    ]
    ))
  ]
  ,(null as any),(ck,v) => {
    const currVal_0:any = v.parent.context.$implicit._source.title;
    ck(v,1,0,currVal_0);
  });
}
function View_ListItemComponent_7(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),8,'a',[
      [
        'angulartics2On',
        'click'
      ]
      ,
      [
        'angularticsCategory',
        'List Item Type'
      ]

    ]
    ,[
      [
        8,
        'className',
        0
      ]
      ,
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
        const pd_0:any = ((<any>import0.ɵnov(v,1).onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import0.ɵdid(335872,(null as any),0,import1.RouterLinkWithHref,[
      import1.Router,
      import1.ActivatedRoute,
      import2.LocationStrategy
    ]
    ,{
      queryParams: [
        0,
        'queryParams'
      ]
      ,
      routerLink: [
        1,
        'routerLink'
      ]

    }
    ,(null as any)),
    import0.ɵpad(1),
    import0.ɵdid(532480,(null as any),0,import3.Angulartics2On,[
      import0.ElementRef,
      import4.Angulartics2,
      import5.EventManager
    ]
    ,{
      angulartics2On: [
        0,
        'angulartics2On'
      ]
      ,
      angularticsEvent: [
        1,
        'angularticsEvent'
      ]
      ,
      angularticsCategory: [
        2,
        'angularticsCategory'
      ]
      ,
      angularticsProperties: [
        3,
        'angularticsProperties'
      ]

    }
    ,(null as any)),
    import0.ɵpod(['label']),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'span',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '\n          ',
      '\n        '
    ]
    )),
    (l()(),import0.ɵted((null as any),['\n      ']))
  ]
  ,(ck,v) => {
    const currVal_3:any = v.context.$implicit.query;
    const currVal_4:any = ck(v,2,0,v.parent.parent.context.$implicit._source.slug);
    ck(v,1,0,currVal_3,currVal_4);
    const currVal_5:any = 'click';
    const currVal_6:any = import0.ɵinlineInterpolate(1,'',v.context.$implicit.label,'');
    const currVal_7:any = 'List Item Type';
    const currVal_8:any = ck(v,4,0,v.parent.parent.context.$implicit._source.title);
    ck(v,3,0,currVal_5,currVal_6,currVal_7,currVal_8);
  },(ck,v) => {
    const currVal_0:any = import0.ɵinlineInterpolate(1,'btn btn-sm ',v.context.$implicit.class,'');
    const currVal_1:any = import0.ɵnov(v,1).target;
    const currVal_2:any = import0.ɵnov(v,1).href;
    ck(v,0,0,currVal_0,currVal_1,currVal_2);
    const currVal_9:any = v.context.$implicit.label;
    ck(v,7,0,currVal_9);
  });
}
function View_ListItemComponent_6(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),4,'div',[[
        'class',
        'block-media__types'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n      '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_ListItemComponent_7)),
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
    (l()(),import0.ɵted((null as any),['\n    ']))
  ]
  ,(ck,v) => {
    const currVal_0:any = v.parent.context.$implicit.contenttypes;
    ck(v,3,0,currVal_0);
  },(null as any));
}
function View_ListItemComponent_1(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),23,'div',[[
        'class',
        'list-item'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n  '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_ListItemComponent_2)),
    import0.ɵdid(8192,(null as any),0,import2.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n  '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),17,'div',[[
        'class',
        'block-media__body'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),8,'a',[
      [
        'angulartics2On',
        'click'
      ]
      ,
      [
        'angularticsCategory',
        'List Item Title'
      ]
      ,
      [
        'angularticsEvent',
        'Navigate'
      ]
      ,
      [
        'class',
        'block-media__link'
      ]

    ]
    ,[
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
        const pd_0:any = ((<any>import0.ɵnov(v,8).onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
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
    import0.ɵpad(1),
    import0.ɵdid(532480,(null as any),0,import3.Angulartics2On,[
      import0.ElementRef,
      import4.Angulartics2,
      import5.EventManager
    ]
    ,{
      angulartics2On: [
        0,
        'angulartics2On'
      ]
      ,
      angularticsEvent: [
        1,
        'angularticsEvent'
      ]
      ,
      angularticsCategory: [
        2,
        'angularticsCategory'
      ]
      ,
      angularticsProperties: [
        3,
        'angularticsProperties'
      ]

    }
    ,(null as any)),
    import0.ɵpod(['label']),
    (l()(),import0.ɵted((null as any),['\n      '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_ListItemComponent_5)),
    import0.ɵdid(8192,(null as any),0,import2.NgIf,[
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
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'p',[[
        'class',
        'block-media__description'
      ]
      ],[[
        8,
        'innerHTML',
        1
      ]
    ],(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_ListItemComponent_6)),
    import0.ɵdid(8192,(null as any),0,import2.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n  '])),
    (l()(),import0.ɵted((null as any),['\n']))
  ]
  ,(ck,v) => {
    const currVal_0:any = v.context.$implicit._source.thumbnail;
    ck(v,3,0,currVal_0);
    const currVal_3:any = ck(v,9,0,v.context.$implicit._source.slug);
    ck(v,8,0,currVal_3);
    const currVal_4:any = 'click';
    const currVal_5:any = 'Navigate';
    const currVal_6:any = 'List Item Title';
    const currVal_7:any = ck(v,11,0,v.context.$implicit._source.title);
    ck(v,10,0,currVal_4,currVal_5,currVal_6,currVal_7);
    const currVal_8:any = v.context.$implicit._source.title;
    ck(v,14,0,currVal_8);
    const currVal_10:any = v.context.$implicit.contenttypes;
    ck(v,21,0,currVal_10);
  },(ck,v) => {
    const currVal_1:any = import0.ɵnov(v,8).target;
    const currVal_2:any = import0.ɵnov(v,8).href;
    ck(v,7,0,currVal_1,currVal_2);
    const currVal_9:any = v.context.$implicit._source.description;
    ck(v,17,0,currVal_9);
  });
}
export function View_ListItemComponent_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵand(8388608,(null as any),(null as any),2,(null as any),View_ListItemComponent_1)),
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
    import0.ɵpid(0,import6.PaginationPipe,([] as any[])),
    (l()(),import0.ɵted((null as any),['\n']))
  ]
  ,(ck,v) => {
    var co:import7.ListItemComponent = v.component;
    const currVal_0:any = import0.ɵunv(v,1,0,import0.ɵnov(v,2).transform(co.items,co.paginationData));
    ck(v,1,0,currVal_0);
  },(null as any));
}
function View_ListItemComponent_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),3,'app-list-item',([] as any[]),(null as any),(null as any),(null as any),View_ListItemComponent_0,RenderType_ListItemComponent)),
    import0.ɵdid(319488,(null as any),0,import7.ListItemComponent,[
      import1.ActivatedRoute,
      import8.DataService,
      import9.Angulartics2GoogleAnalytics,
      import4.Angulartics2,
      import10.ListFilterComponent
    ]
    ,(null as any),(null as any)),
    import0.ɵprd(2304,(null as any),import6.PaginationPipe,import6.PaginationPipe,([] as any[])),
    import0.ɵprd(2304,(null as any),import11.ImagePipe,import11.ImagePipe,([] as any[]))
  ]
  ,(ck,v) => {
    ck(v,1,0);
  },(null as any));
}
export const ListItemComponentNgFactory:import0.ComponentFactory<import7.ListItemComponent> = import0.ɵccf('app-list-item',import7.ListItemComponent,View_ListItemComponent_Host_0,{
  items: 'items',
  paginationData: 'paginationData'
}
,{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL3RicC9Eb2N1bWVudHMvR2l0aHViL2N0dmMvdHJ1ZS10dWJlL3NyYy9hcHAvY29tcG9uZW50cy9jb250ZW50L2xpc3RpbmcvbGlzdC1pdGVtLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9Vc2Vycy90YnAvRG9jdW1lbnRzL0dpdGh1Yi9jdHZjL3RydWUtdHViZS9zcmMvYXBwL2NvbXBvbmVudHMvY29udGVudC9saXN0aW5nL2xpc3QtaXRlbS5jb21wb25lbnQudHMiLCJuZzovLy9Vc2Vycy90YnAvRG9jdW1lbnRzL0dpdGh1Yi9jdHZjL3RydWUtdHViZS9zcmMvYXBwL2NvbXBvbmVudHMvY29udGVudC9saXN0aW5nL2xpc3QtaXRlbS5jb21wb25lbnQuaHRtbCIsIm5nOi8vL1VzZXJzL3RicC9Eb2N1bWVudHMvR2l0aHViL2N0dmMvdHJ1ZS10dWJlL3NyYy9hcHAvY29tcG9uZW50cy9jb250ZW50L2xpc3RpbmcvbGlzdC1pdGVtLmNvbXBvbmVudC50cy5MaXN0SXRlbUNvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxkaXYgY2xhc3M9XCJsaXN0LWl0ZW1cIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtcyB8IFBhZ2luYXRpb25QaXBlOnBhZ2luYXRpb25EYXRhXCI+XG4gIDxkaXYgY2xhc3M9XCJibG9jay1tZWRpYV9fbWVkaWFcIiAqbmdJZj1cIml0ZW0uX3NvdXJjZS50aHVtYm5haWxcIj5cbiAgICA8YSBbcm91dGVyTGlua109XCJbaXRlbS5fc291cmNlLnNsdWddXCIgW3F1ZXJ5UGFyYW1zXT1cImN1cnJlbnRUeXBlXCIgY2xhc3M9XCJibG9jay1tZWRpYV9fbGlua1wiIGFuZ3VsYXJ0aWNzMk9uPVwiY2xpY2tcIiBhbmd1bGFydGljc0V2ZW50PVwiTmF2aWdhdGVcIiBhbmd1bGFydGljc0NhdGVnb3J5PVwiTGlzdCBJdGVtIEltYWdlXCIgW2FuZ3VsYXJ0aWNzUHJvcGVydGllc109XCJ7bGFiZWw6IGl0ZW0uX3NvdXJjZS50aXRsZX1cIj5cbiAgICAgIDxwaWN0dXJlPlxuICAgICAgICA8c291cmNlIHNyY3NldD1cInt7aXRlbS5fc291cmNlLnRodW1ibmFpbFswXS5zdHlsZXMuc21hbGx9fVwiIG1lZGlhPVwiKG1pbi13aWR0aDogMTAyNHB4KVwiPlxuICAgICAgICA8c291cmNlIHNyY3NldD1cInt7aXRlbS5fc291cmNlLnRodW1ibmFpbFswXS5zdHlsZXMubGFyZ2V9fVwiIG1lZGlhPVwiKG1pbi13aWR0aDogNzY5cHgpXCI+XG4gICAgICAgIDxzb3VyY2Ugc3Jjc2V0PVwie3tpdGVtLl9zb3VyY2UudGh1bWJuYWlsWzBdLnN0eWxlcy5tZWRpdW19fVwiIG1lZGlhPVwiKG1pbi13aWR0aDogMHB4KVwiPlxuICAgICAgICA8aW1nIHNyY3NldD1cInt7aXRlbS5fc291cmNlLnRodW1ibmFpbFswXS5zdHlsZXMubWVkaXVtfX1cIj5cbiAgICAgIDwvcGljdHVyZT5cbiAgICAgIDxkaXYgY2xhc3M9XCJsaXN0aW5nLXRpbWVcIiAqbmdJZj1cIml0ZW0uX3NvdXJjZS5kdXJhdGlvblwiPlxuICAgICAgICB7eyBkYXRhU2VydmljZS5kdXJhdGlvbihpdGVtLl9zb3VyY2UuZHVyYXRpb24pIH19XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiYWR2aXNvcnktd2FybmluZ1wiICpuZ0lmPVwiaXRlbS5hZHZpc29yeSA9PT0gdHJ1ZVwiPkFEVklTT1JZPC9zcGFuPlxuXG4gICAgPC9hPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImJsb2NrLW1lZGlhX19ib2R5XCI+XG4gICAgPGEgW3JvdXRlckxpbmtdPVwiW2l0ZW0uX3NvdXJjZS5zbHVnXVwiIGNsYXNzPVwiYmxvY2stbWVkaWFfX2xpbmtcIiBhbmd1bGFydGljczJPbj1cImNsaWNrXCIgYW5ndWxhcnRpY3NFdmVudD1cIk5hdmlnYXRlXCIgYW5ndWxhcnRpY3NDYXRlZ29yeT1cIkxpc3QgSXRlbSBUaXRsZVwiIFthbmd1bGFydGljc1Byb3BlcnRpZXNdPVwie2xhYmVsOiBpdGVtLl9zb3VyY2UudGl0bGV9XCI+XG4gICAgICA8aDYgY2xhc3M9XCJibG9jay1tZWRpYV9faGVhZGxpbmVcIiAqbmdJZj1cIml0ZW0uX3NvdXJjZS50aXRsZVwiPlxuICAgICAgICB7eyBpdGVtLl9zb3VyY2UudGl0bGUgfX1cbiAgICAgIDwvaDY+XG4gICAgPC9hPlxuICAgIDxwIGNsYXNzPVwiYmxvY2stbWVkaWFfX2Rlc2NyaXB0aW9uXCIgW2lubmVySFRNTF09XCJpdGVtLl9zb3VyY2UuZGVzY3JpcHRpb25cIj5cbiAgICA8L3A+XG4gICAgPGRpdiBjbGFzcz1cImJsb2NrLW1lZGlhX190eXBlc1wiICpuZ0lmPVwiaXRlbS5jb250ZW50dHlwZXNcIj5cbiAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIltpdGVtLl9zb3VyY2Uuc2x1Z11cIiBbcXVlcnlQYXJhbXNdPVwidHlwZS5xdWVyeVwiICpuZ0Zvcj1cImxldCB0eXBlIG9mIGl0ZW0uY29udGVudHR5cGVzXCIgY2xhc3M9XCJidG4gYnRuLXNtIHt7IHR5cGUuY2xhc3MgfX1cIiBhbmd1bGFydGljczJPbj1cImNsaWNrXCIgYW5ndWxhcnRpY3NFdmVudD1cInt7dHlwZS5sYWJlbH19XCIgYW5ndWxhcnRpY3NDYXRlZ29yeT1cIkxpc3QgSXRlbSBUeXBlXCIgW2FuZ3VsYXJ0aWNzUHJvcGVydGllc109XCJ7bGFiZWw6IGl0ZW0uX3NvdXJjZS50aXRsZX1cIj5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAge3sgdHlwZS5sYWJlbCB9fVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2E+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG4iLCI8YXBwLWxpc3QtaXRlbT48L2FwcC1saXN0LWl0ZW0+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUNTTTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQXdEO01BQUE7TUFBQTtJQUFBO0lBQUE7Ozs7SUFBQTtJQUFBOzs7OztNQUd4RDtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQThEOzs7Ozs7TUFYbEU7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUErRDtJQUM3RDtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO0lBQUE7Z0JBQUE7Ozs7SUFBQTtLQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtnQkFBRztnQkFBSDs7OztJQUFBO0tBQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO2dCQUFxTDtJQUFzRDtJQUN6TztJQUFTO01BQ1A7UUFBQTtRQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBd0Y7TUFDeEY7UUFBQTtRQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBdUY7TUFDdkY7UUFBQTtRQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBc0Y7TUFDdEY7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQTBEO0lBQ2xEO0lBQ1Y7Z0JBQUE7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUVNO0lBQ047Z0JBQUE7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUE2RTtJQUUzRTs7OztJQVprQztJQUFuQztJQUFILFNBQXNDLFVBQW5DLFNBQUg7SUFBNEY7SUFBdUI7SUFBNEI7SUFBc0M7SUFBckwsU0FBNEYsVUFBdUIsVUFBNEIsVUFBc0MsU0FBckw7SUFPNEI7SUFBMUIsVUFBMEIsVUFBMUI7SUFHK0I7SUFBL0IsVUFBK0IsVUFBL0I7O0lBVkY7SUFBQTtJQUFBLFNBQUEsbUJBQUE7SUFFWTtJQUFSLFVBQVEsU0FBUjtJQUNRO0lBQVIsVUFBUSxTQUFSO0lBQ1E7SUFBUixVQUFRLFVBQVI7SUFDSztJQUFMLFVBQUssVUFBTDs7Ozs7TUFXRjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQTZEO01BQUE7TUFBQTtJQUFBO0lBQUE7OztJQUFBO0lBQUE7Ozs7O0lBTzdEO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7TUFBQTtJQUFBO2dCQUFBOzs7O0lBQUE7S0FBQTtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7Z0JBQUc7Z0JBQUg7Ozs7SUFBQTtLQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtnQkFBME87SUFBc0Q7SUFDOVI7SUFBTTtNQUFBO01BQUE7SUFBQTtJQUFBO0lBRUM7OztJQUg2QjtJQUFuQztJQUFILFNBQXNDLFVBQW5DLFNBQUg7SUFBNEk7SUFBdUI7SUFBa0M7SUFBcUM7SUFBMU8sU0FBNEksVUFBdUIsVUFBa0MsVUFBcUMsU0FBMU87O0lBQXdHO0lBQXhHO0lBQUE7SUFBQSxTQUF3RyxVQUF4RyxtQkFBQTtJQUNRO0lBQUE7Ozs7O01BRlY7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUEwRDtJQUN4RDtnQkFBQTs7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUlJOzs7SUFKNkQ7SUFBakUsU0FBaUUsU0FBakU7Ozs7O01BekJOO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBa0Y7SUFDaEY7Z0JBQUE7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQWNNO01BQ047UUFBQTtRQUFBO01BQUE7SUFBQTtJQUErQjtJQUM3QjtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO0lBQUE7Z0JBQUE7Ozs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQUc7Z0JBQUg7Ozs7SUFBQTtLQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtnQkFBeUo7SUFBc0Q7SUFDN007Z0JBQUE7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUVLO0lBQ0g7TUFDSjtRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUEyRTtJQUN2RTtJQUNKO2dCQUFBOzs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFNTTtJQUNGOzs7SUE5QjBCO0lBQWhDLFNBQWdDLFNBQWhDO0lBZ0JLO0lBQUgsU0FBRyxTQUFIO0lBQWdFO0lBQXVCO0lBQTRCO0lBQXNDO0lBQXpKLFVBQWdFLFVBQXVCLFVBQTRCLFVBQXNDLFNBQXpKO0lBQ29DO0lBQWxDLFVBQWtDLFNBQWxDO0lBTThCO0lBQWhDLFVBQWdDLFVBQWhDOztJQVBBO0lBQUE7SUFBQSxTQUFBLG1CQUFBO0lBS29DO0lBQXBDLFVBQW9DLFNBQXBDOzs7OztJQXRCSjtnQkFBQTs7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBdUI7SUFnQ2pCOzs7O0lBaENpQjtJQUF2QixTQUF1QixTQUF2Qjs7Ozs7SUNBQTtnQkFBQTs7Ozs7O0lBQUE7S0FBQTtnQkFBQTtnQkFBQTs7O0lBQUE7Ozs7Ozs7In0=
