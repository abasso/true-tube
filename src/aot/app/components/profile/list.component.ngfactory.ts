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
import * as import6 from 'angular-confirmation-popover/dist/esm/src/confirmationPopover.directive';
import * as import7 from 'angular-confirmation-popover/dist/esm/src/confirmationPopoverOptions.provider';
import * as import8 from 'positioning/dist/positioning';
import * as import9 from '../navigation/user-nav.component.ngfactory';
import * as import10 from '../../../../app/components/navigation/user-nav.component';
import * as import11 from 'angulartics2/dist/providers/ga/angulartics2-ga';
import * as import12 from '../../../../app/components/profile/list.component';
import * as import13 from '../../../../app/services/data.service';
import * as import14 from 'angular2-jwt/angular2-jwt';
const styles_UserListComponent:any[] = ([] as any[]);
export const RenderType_UserListComponent:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 2,
  styles: styles_UserListComponent,
  data: {}
}
);
function View_UserListComponent_3(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'div',[[
        'class',
        'listing-time'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '\n                ',
      '\n              '
    ]
    ))
  ]
  ,(null as any),(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = co.dataService.duration(v.parent.parent.context.$implicit.duration);
    ck(v,1,0,currVal_0);
  });
}
function View_UserListComponent_2(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),13,'div',[[
        'class',
        'block-media__media'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),10,'a',[
      [
        'angulartics2On',
        'click'
      ]
      ,
      [
        'angularticsCategory',
        'User List'
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
    (l()(),import0.ɵted((null as any),['\n              '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),0,'img',[[
        'alt',
        'item.thumbnail[0].alt'
      ]
      ],[[
        8,
        'src',
        4
      ]
    ],(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n              '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_UserListComponent_3)),
    import0.ɵdid(8192,(null as any),0,import2.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵted((null as any),['\n          ']))
  ]
  ,(ck,v) => {
    const currVal_2:any = ck(v,4,0,v.parent.context.$implicit.slug);
    ck(v,3,0,currVal_2);
    const currVal_3:any = 'click';
    const currVal_4:any = 'Navigate';
    const currVal_5:any = 'User List';
    const currVal_6:any = ck(v,6,0,v.parent.context.$implicit.title);
    ck(v,5,0,currVal_3,currVal_4,currVal_5,currVal_6);
    const currVal_8:any = v.parent.context.$implicit.duration;
    ck(v,11,0,currVal_8);
  },(ck,v) => {
    const currVal_0:any = import0.ɵnov(v,3).target;
    const currVal_1:any = import0.ɵnov(v,3).href;
    ck(v,2,0,currVal_0,currVal_1);
    const currVal_7:any = v.parent.context.$implicit.thumbnail[0].url;
    ck(v,8,0,currVal_7);
  });
}
function View_UserListComponent_4(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),7,'h6',[[
        'class',
        'block-media__headline'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '\n                ',
      '\n                '
    ]
    )),
    (l()(),import0.ɵeld(8388608,(null as any),(null as any),4,'a',[
      [
        'angulartics2On',
        'click'
      ]
      ,
      [
        'angularticsCategory',
        'User List Remove'
      ]
      ,
      [
        'angularticsEvent',
        'Action'
      ]
      ,
      [
        'class',
        'btn btn-assembly-plan user-list-delete btn-sm'
      ]
      ,
      [
        'href',
        '#'
      ]
      ,
      [
        'mwlConfirmationPopover',
        ''
      ]
      ,
      [
        'placement',
        'left'
      ]

    ]
    ,(null as any),[
      [
        (null as any),
        'click'
      ]
      ,
      [
        (null as any),
        'blur'
      ]
      ,
      [
        (null as any),
        'confirm'
      ]
      ,
      [
        (null as any),
        'cancel'
      ]
      ,
      [
        'document',
        'click'
      ]
      ,
      [
        'document',
        'touchend'
      ]
      ,
      [
        'window',
        'resize'
      ]

    ]
    ,(v,en,$event) => {
      var ad:boolean = true;
      var co:any = v.component;
      if (('document:click' === en)) {
        const pd_0:any = ((<any>import0.ɵnov(v,3).onDocumentClick($event.target)) !== false);
        ad = (pd_0 && ad);
      }
      if (('document:touchend' === en)) {
        const pd_1:any = ((<any>import0.ɵnov(v,3).onDocumentClick($event.target)) !== false);
        ad = (pd_1 && ad);
      }
      if (('click' === en)) {
        const pd_2:any = ((<any>import0.ɵnov(v,3).togglePopover()) !== false);
        ad = (pd_2 && ad);
      }
      if (('window:resize' === en)) {
        const pd_3:any = ((<any>import0.ɵnov(v,3).onResize()) !== false);
        ad = (pd_3 && ad);
      }
      if (('click' === en)) {
        const pd_4:any = ((<any>co.highlightRow($event,v.parent.context.$implicit.title)) !== false);
        ad = (pd_4 && ad);
      }
      if (('blur' === en)) {
        const pd_5:any = ((<any>co.unHighlightRow(v.parent.context.$implicit.title)) !== false);
        ad = (pd_5 && ad);
      }
      if (('confirm' === en)) {
        const pd_6:any = ((<any>co.removeItem($event,v.parent.context.$implicit.id)) !== false);
        ad = (pd_6 && ad);
      }
      if (('cancel' === en)) {
        const pd_7:any = ((<any>co.unHighlightRow(co.list.title)) !== false);
        ad = (pd_7 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import0.ɵdid(368640,(null as any),0,import6.ConfirmationPopover,[
      import0.ViewContainerRef,
      import0.ElementRef,
      import7.ConfirmationPopoverOptions,
      import0.ComponentFactoryResolver,
      import8.Positioning,
      import0.Renderer2,
      import5.DOCUMENT
    ]
    ,{
      title: [
        0,
        'title'
      ]
      ,
      placement: [
        1,
        'placement'
      ]

    }
    ,{
      confirm: 'confirm',
      cancel: 'cancel'
    }
    ),
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
    (l()(),import0.ɵted((null as any),['Remove'])),
    (l()(),import0.ɵted((null as any),['\n              ']))
  ]
  ,(ck,v) => {
    var co:any = v.component;
    const currVal_1:any = co.deleteDialogTitle;
    const currVal_2:any = 'left';
    ck(v,3,0,currVal_1,currVal_2);
    const currVal_3:any = 'click';
    const currVal_4:any = 'Action';
    const currVal_5:any = 'User List Remove';
    const currVal_6:any = ck(v,5,0,v.parent.context.$implicit.title);
    ck(v,4,0,currVal_3,currVal_4,currVal_5,currVal_6);
  },(ck,v) => {
    const currVal_0:any = v.parent.context.$implicit.title;
    ck(v,1,0,currVal_0);
  });
}
function View_UserListComponent_6(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),8,'a',[
      [
        'angulartics2On',
        'click'
      ]
      ,
      [
        'angularticsCategory',
        'User List Type'
      ]
      ,
      [
        'angularticsEvent',
        'Navigate'
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
    (l()(),import0.ɵted((null as any),['\n                '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'span',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '\n                  ',
      '\n                '
    ]
    )),
    (l()(),import0.ɵted((null as any),['\n              ']))
  ]
  ,(ck,v) => {
    const currVal_3:any = v.context.$implicit.query;
    const currVal_4:any = ck(v,2,0,v.parent.parent.context.$implicit.slug);
    ck(v,1,0,currVal_3,currVal_4);
    const currVal_5:any = 'click';
    const currVal_6:any = 'Navigate';
    const currVal_7:any = 'User List Type';
    const currVal_8:any = ck(v,4,0,((v.parent.parent.context.$implicit.title + ' ') + v.context.$implicit.label));
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
function View_UserListComponent_5(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),4,'div',[[
        'class',
        'block-media__types'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n              '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_UserListComponent_6)),
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
    (l()(),import0.ɵted((null as any),['\n            ']))
  ]
  ,(ck,v) => {
    const currVal_0:any = v.parent.context.$implicit.contenttypes;
    ck(v,3,0,currVal_0);
  },(null as any));
}
function View_UserListComponent_1(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),16,'div',[[
        'class',
        'list-item'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n          '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_UserListComponent_2)),
    import0.ɵdid(8192,(null as any),0,import2.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n          '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),10,'div',[[
        'class',
        'block-media__body'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n              '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_UserListComponent_4)),
    import0.ɵdid(8192,(null as any),0,import2.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n\n            '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'p',[[
        'class',
        'block-media__description small'
      ]
      ],[[
        8,
        'innerHTML',
        1
      ]
    ],(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_UserListComponent_5)),
    import0.ɵdid(8192,(null as any),0,import2.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n          '])),
    (l()(),import0.ɵted((null as any),['\n        ']))
  ]
  ,(ck,v) => {
    const currVal_0:any = v.context.$implicit.thumbnail;
    ck(v,3,0,currVal_0);
    const currVal_1:any = v.context.$implicit.title;
    ck(v,8,0,currVal_1);
    const currVal_3:any = v.context.$implicit.contenttypes;
    ck(v,14,0,currVal_3);
  },(ck,v) => {
    const currVal_2:any = v.context.$implicit.description;
    ck(v,10,0,currVal_2);
  });
}
export function View_UserListComponent_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵted((null as any),['\n\n\n'])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),27,'div',[[
        'class',
        'row profile profile-list'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n  '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'app-user-nav',[[
        'class',
        'col-xs-12 col-md-12 col-lg-3 col-xl-3 col-lg-p-right m-t-2'
      ]
    ],(null as any),(null as any),(null as any),import9.View_UserNavComponent_0,import9.RenderType_UserNavComponent)),
    import0.ɵdid(57344,(null as any),0,import10.UserNavComponent,[
      import1.ActivatedRoute,
      import1.Router,
      import11.Angulartics2GoogleAnalytics,
      import4.Angulartics2
    ]
    ,(null as any),(null as any)),
    (l()(),import0.ɵted((null as any),['\n    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),21,'div',[[
        'class',
        'col-xs-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-lg-p-left m-t-1'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n      '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'h1',[[
        'class',
        'page-title'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '\n        ',
      '\n      '
    ]
    )),
    (l()(),import0.ɵted((null as any),['\n      '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),7,'div',[[
        'class',
        'notification-wrapper'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(139264,(null as any),0,import2.NgClass,[
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
    import0.ɵpod([
      'visible',
      'remove'
    ]
    ),
    (l()(),import0.ɵted((null as any),['\n        '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),2,'div',[[
        'class',
        'notification'
      ]
      ],[[
        8,
        'innerHTML',
        1
      ]
    ],(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(139264,(null as any),0,import2.NgClass,[
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
    import0.ɵpod([
      'visible',
      'remove'
    ]
    ),
    (l()(),import0.ɵted((null as any),['\n      '])),
    (l()(),import0.ɵted((null as any),['\n      '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),6,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(139264,(null as any),0,import2.NgClass,[
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
      'list-row',
      'content-grid'
    ]
    ),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_UserListComponent_1)),
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
    (l()(),import0.ɵted((null as any),['\n      '])),
    (l()(),import0.ɵted((null as any),['\n\n\n\n  '])),
    (l()(),import0.ɵted((null as any),['\n']))
  ]
  ,(ck,v) => {
    var co:import12.UserListComponent = v.component;
    ck(v,4,0);
    const currVal_1:any = 'notification-wrapper';
    const currVal_2:any = ck(v,13,0,co.showNotification,co.notificationRemove);
    ck(v,12,0,currVal_1,currVal_2);
    const currVal_4:any = 'notification';
    const currVal_5:any = ck(v,17,0,co.showNotification,co.notificationRemove);
    ck(v,16,0,currVal_4,currVal_5);
    const currVal_6:any = ck(v,22,0,true,true,true);
    ck(v,21,0,currVal_6);
    const currVal_7:any = co.items;
    ck(v,25,0,currVal_7);
  },(ck,v) => {
    var co:import12.UserListComponent = v.component;
    const currVal_0:any = co.title;
    ck(v,9,0,currVal_0);
    const currVal_3:any = co.notificationMessage;
    ck(v,15,0,currVal_3);
  });
}
function View_UserListComponent_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'app-list',([] as any[]),(null as any),(null as any),(null as any),View_UserListComponent_0,RenderType_UserListComponent)),
    import0.ɵdid(24576,(null as any),0,import12.UserListComponent,[
      import1.ActivatedRoute,
      import13.DataService,
      import14.AuthHttp,
      import11.Angulartics2GoogleAnalytics,
      import4.Angulartics2
    ]
    ,(null as any),(null as any))
  ]
  ,(null as any),(null as any));
}
export const UserListComponentNgFactory:import0.ComponentFactory<import12.UserListComponent> = import0.ɵccf('app-list',import12.UserListComponent,View_UserListComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL3RicC9Eb2N1bWVudHMvR2l0aHViL2N0dmMvdHJ1ZS10dWJlL3NyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL2xpc3QuY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL1VzZXJzL3RicC9Eb2N1bWVudHMvR2l0aHViL2N0dmMvdHJ1ZS10dWJlL3NyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL2xpc3QuY29tcG9uZW50LnRzIiwibmc6Ly8vVXNlcnMvdGJwL0RvY3VtZW50cy9HaXRodWIvY3R2Yy90cnVlLXR1YmUvc3JjL2FwcC9jb21wb25lbnRzL3Byb2ZpbGUvbGlzdC5jb21wb25lbnQuaHRtbCIsIm5nOi8vL1VzZXJzL3RicC9Eb2N1bWVudHMvR2l0aHViL2N0dmMvdHJ1ZS10dWJlL3NyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL2xpc3QuY29tcG9uZW50LnRzLlVzZXJMaXN0Q29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPCEtLVxuPGgxPkhlbGxvIHt7IHByb2ZpbGUubmFtZSB9fTwvaDE+XG5cbjxwcmU+e3sgcHJvZmlsZSB8IGpzb24gfX08L3ByZT4gLS0+XG5cblxuPGRpdiBjbGFzcz1cInJvdyBwcm9maWxlIHByb2ZpbGUtbGlzdFwiPlxuICA8YXBwLXVzZXItbmF2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1tZC0xMiBjb2wtbGctMyBjb2wteGwtMyBjb2wtbGctcC1yaWdodCBtLXQtMlwiPjwvYXBwLXVzZXItbmF2PlxuICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0xMiBjb2wtbGctOSBjb2wteGwtOSBjb2wtbGctcC1sZWZ0IG0tdC0xXCI+XG4gICAgICA8aDEgY2xhc3M9XCJwYWdlLXRpdGxlXCI+XG4gICAgICAgIHt7dGl0bGV9fVxuICAgICAgPC9oMT5cbiAgICAgIDxkaXYgY2xhc3M9XCJub3RpZmljYXRpb24td3JhcHBlclwiIFtuZ0NsYXNzXT1cInsndmlzaWJsZSc6IHNob3dOb3RpZmljYXRpb24sICdyZW1vdmUnOiBub3RpZmljYXRpb25SZW1vdmV9XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJub3RpZmljYXRpb25cIiBbbmdDbGFzc109XCJ7J3Zpc2libGUnOiBzaG93Tm90aWZpY2F0aW9uLCAncmVtb3ZlJzogbm90aWZpY2F0aW9uUmVtb3ZlfVwiIFtpbm5lckhUTUxdPVwibm90aWZpY2F0aW9uTWVzc2FnZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IFtuZ0NsYXNzXT1cInsncm93JzogdHJ1ZSwgJ2xpc3Qtcm93JzogdHJ1ZSwgJ2NvbnRlbnQtZ3JpZCc6IHRydWV9XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0LWl0ZW1cIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtc1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJibG9jay1tZWRpYV9fbWVkaWFcIiAqbmdJZj1cIml0ZW0udGh1bWJuYWlsXCI+XG4gICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbaXRlbS5zbHVnXVwiIGNsYXNzPVwiYmxvY2stbWVkaWFfX2xpbmtcIiBhbmd1bGFydGljczJPbj1cImNsaWNrXCIgYW5ndWxhcnRpY3NFdmVudD1cIk5hdmlnYXRlXCIgYW5ndWxhcnRpY3NDYXRlZ29yeT1cIlVzZXIgTGlzdFwiIFthbmd1bGFydGljc1Byb3BlcnRpZXNdPVwie2xhYmVsOiBpdGVtLnRpdGxlfVwiPlxuICAgICAgICAgICAgICA8aW1nIFtzcmNdPVwiaXRlbS50aHVtYm5haWxbMF0udXJsXCIgYWx0PVwiaXRlbS50aHVtYm5haWxbMF0uYWx0XCIgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3RpbmctdGltZVwiICpuZ0lmPVwiaXRlbS5kdXJhdGlvblwiPlxuICAgICAgICAgICAgICAgIHt7IGRhdGFTZXJ2aWNlLmR1cmF0aW9uKGl0ZW0uZHVyYXRpb24pIH19XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJibG9jay1tZWRpYV9fYm9keVwiPlxuICAgICAgICAgICAgICA8aDYgY2xhc3M9XCJibG9jay1tZWRpYV9faGVhZGxpbmVcIiAqbmdJZj1cIml0ZW0udGl0bGVcIj5cbiAgICAgICAgICAgICAgICB7eyBpdGVtLnRpdGxlIH19XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiAoY2xpY2spPSdoaWdobGlnaHRSb3coJGV2ZW50LCBpdGVtLnRpdGxlKScgKGJsdXIpPVwidW5IaWdobGlnaHRSb3coaXRlbS50aXRsZSlcIiBjbGFzcz1cImJ0biBidG4tYXNzZW1ibHktcGxhbiB1c2VyLWxpc3QtZGVsZXRlIGJ0bi1zbVwiXG4gICAgICAgICAgICAgICAgbXdsQ29uZmlybWF0aW9uUG9wb3ZlclxuICAgICAgICAgICAgICAgIFt0aXRsZV09XCJkZWxldGVEaWFsb2dUaXRsZVwiXG4gICAgICAgICAgICAgICAgcGxhY2VtZW50PVwibGVmdFwiXG4gICAgICAgICAgICAgICAgKGNvbmZpcm0pPVwicmVtb3ZlSXRlbSgkZXZlbnQsIGl0ZW0uaWQpXCJcbiAgICAgICAgICAgICAgICAoY2FuY2VsKT1cInVuSGlnaGxpZ2h0Um93KGxpc3QudGl0bGUpXCJcbiAgICAgICAgICAgICAgICBhbmd1bGFydGljczJPbj1cImNsaWNrXCIgYW5ndWxhcnRpY3NFdmVudD1cIkFjdGlvblwiIGFuZ3VsYXJ0aWNzQ2F0ZWdvcnk9XCJVc2VyIExpc3QgUmVtb3ZlXCIgW2FuZ3VsYXJ0aWNzUHJvcGVydGllc109XCJ7bGFiZWw6IGl0ZW0udGl0bGV9XCJcbiAgICAgICAgICAgID5SZW1vdmU8L2E+XG4gICAgICAgICAgICAgIDwvaDY+XG5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiYmxvY2stbWVkaWFfX2Rlc2NyaXB0aW9uIHNtYWxsXCIgW2lubmVySFRNTF09XCJpdGVtLmRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvY2stbWVkaWFfX3R5cGVzXCIgKm5nSWY9XCJpdGVtLmNvbnRlbnR0eXBlc1wiPlxuICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbaXRlbS5zbHVnXVwiIFtxdWVyeVBhcmFtc109XCJ0eXBlLnF1ZXJ5XCIgKm5nRm9yPVwibGV0IHR5cGUgb2YgaXRlbS5jb250ZW50dHlwZXNcIiBjbGFzcz1cImJ0biBidG4tc20ge3sgdHlwZS5jbGFzcyB9fVwiIGFuZ3VsYXJ0aWNzMk9uPVwiY2xpY2tcIiBhbmd1bGFydGljc0V2ZW50PVwiTmF2aWdhdGVcIiBhbmd1bGFydGljc0NhdGVnb3J5PVwiVXNlciBMaXN0IFR5cGVcIiBbYW5ndWxhcnRpY3NQcm9wZXJ0aWVzXT1cIntsYWJlbDogaXRlbS50aXRsZSArICcgJyArIHR5cGUubGFiZWx9XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICB7eyB0eXBlLmxhYmVsIH19XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuXG5cbiAgPC9kaXY+XG4iLCI8YXBwLWxpc3Q+PC9hcHAtbGlzdD4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQ29CYztRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQWdEO01BQUE7TUFBQTtJQUFBO0lBQUE7Ozs7SUFBQTtJQUFBOzs7OztNQUhwRDtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQXVEO0lBQ3JEO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO01BQUE7SUFBQTtnQkFBQTs7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBRztnQkFBSDs7OztJQUFBO0tBQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO2dCQUEySTtJQUE4QztNQUN2TDtRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUFpRTtJQUNqRTtnQkFBQTs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBRU07SUFDSjs7O0lBTEQ7SUFBSCxTQUFHLFNBQUg7SUFBd0Q7SUFBdUI7SUFBNEI7SUFBZ0M7SUFBM0ksU0FBd0QsVUFBdUIsVUFBNEIsVUFBZ0MsU0FBM0k7SUFFNEI7SUFBMUIsVUFBMEIsU0FBMUI7O0lBRkY7SUFBQTtJQUFBLFNBQUEsbUJBQUE7SUFDTztJQUFMLFNBQUssU0FBTDs7Ozs7TUFPQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQXFEO01BQUE7TUFBQTtJQUFBO0lBQUE7SUFFbkQ7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtNQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFZO1FBQUE7UUFBQTtNQUFBO01BQTJDO1FBQUE7UUFBQTtNQUFBO01BSXZEO1FBQUE7UUFBQTtNQUFBO01BQ0E7UUFBQTtRQUFBO01BQUE7TUFMQTtJQUFBO2dCQUFBOzs7Ozs7OztJQUFBO0tBQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO01BQUE7TUFBQTtJQUFBO0lBQUE7Z0JBQUE7Ozs7SUFBQTtLQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtnQkFNd0Y7SUFDM0Y7SUFBVTs7OztJQUxQO0lBQ0E7SUFIQSxTQUVBLFVBQ0EsU0FIQTtJQU1BO0lBQXVCO0lBQTBCO0lBQXVDO0lBTnhGLFNBTUEsVUFBdUIsVUFBMEIsVUFBdUMsU0FOeEY7O0lBRm1EO0lBQUE7Ozs7O0lBZXJEO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7TUFBQTtJQUFBO2dCQUFBOzs7O0lBQUE7S0FBQTtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7Z0JBQUc7Z0JBQUg7Ozs7SUFBQTtLQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFB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
