/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../../app/components/navigation/primary-nav.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../../app/components/content/listing/filter.component';
import * as import9 from '../../../../app/services/list.service';
import * as import10 from '../../../../app/services/auth.service';
import * as import11 from '../../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import12 from '@angular/core/src/linker/view_container';
import * as import13 from '@angular/core/src/change_detection/change_detection_util';
import * as import14 from '@angular/router/src/router';
import * as import15 from '@angular/router/src/router_state';
import * as import16 from '@angular/common/src/location/location_strategy';
import * as import17 from '@angular/router/src/directives/router_link';
import * as import18 from '../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import19 from '../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import20 from '../../../../app/components/navigation/search.component';
import * as import21 from '../../../node_modules/@angular/common/src/directives/ng_class.ngfactory';
import * as import22 from './search.component.ngfactory';
import * as import23 from '../../../../app/pipes/query-string.pipe';
import * as import24 from '@angular/core/src/linker/template_ref';
import * as import25 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import26 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import27 from '@angular/core/src/linker/element_ref';
import * as import28 from '@angular/common/src/directives/ng_for';
import * as import29 from '@angular/common/src/directives/ng_if';
import * as import30 from '@angular/common/src/directives/ng_class';
export class Wrapper_PrimaryNavComponent {
  /*private*/ _eventHandler:Function;
  context:import0.PrimaryNavComponent;
  /*private*/ _changed:boolean;
  subscription0:any;
  constructor(p0:any,p1:any,p2:any) {
    this._changed = false;
    this.context = new import0.PrimaryNavComponent(p0,p1,p2);
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    (this.subscription0 && this.subscription0.unsubscribe());
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any,emit0:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.searchSubmitted.subscribe(_eventHandler.bind(view,'searchSubmitted'))); }
  }
}
var renderType_PrimaryNavComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_PrimaryNavComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.PrimaryNavComponent>;
  _PrimaryNavComponent_0_3:Wrapper_PrimaryNavComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_PrimaryNavComponent_Host0,renderType_PrimaryNavComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'app-primary-nav',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_PrimaryNavComponent0(this.viewUtils,this,0,this._el_0);
    this._PrimaryNavComponent_0_3 = new Wrapper_PrimaryNavComponent(this.injectorGet(import8.ListFilter,this.parentIndex),this.injectorGet(import9.ListService,this.parentIndex),this.injectorGet(import10.Auth,this.parentIndex));
    this.compView_0.create(this._PrimaryNavComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._PrimaryNavComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.PrimaryNavComponent) && (0 === requestNodeIndex))) { return this._PrimaryNavComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._PrimaryNavComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._PrimaryNavComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const PrimaryNavComponentNgFactory:import7.ComponentFactory<import0.PrimaryNavComponent> = new import7.ComponentFactory<import0.PrimaryNavComponent>('app-primary-nav',View_PrimaryNavComponent_Host0,import0.PrimaryNavComponent);
const styles_PrimaryNavComponent:any[] = ([] as any[]);
class View_PrimaryNavComponent1 extends import1.AppView<any> {
  _el_0:any;
  _el_1:any;
  _RouterLinkWithHref_1_3:import11.Wrapper_RouterLinkWithHref;
  _text_2:any;
  _arr_4:any;
  /*private*/ _expr_5:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import12.ViewContainer) {
    super(View_PrimaryNavComponent1,renderType_PrimaryNavComponent,import5.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._arr_4 = import3.pureProxy1((p0:any):any[] => {
      return [p0];
    });
    this._expr_5 = import13.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',new import3.InlineArray2(2,'class','primary-nav__item'),(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,this._el_0,'a',new import3.InlineArray2(2,'class','primary-nav__link'),(null as any));
    this._RouterLinkWithHref_1_3 = new import11.Wrapper_RouterLinkWithHref(this.parentView.parentView.injectorGet(import14.Router,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import15.ActivatedRoute,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import16.LocationStrategy,this.parentView.parentIndex));
    this._text_2 = this.renderer.createText(this._el_1,'',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_1,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_1));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._el_1,
      this._text_2
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import17.RouterLinkWithHref) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 2)))) { return this._RouterLinkWithHref_1_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1_0_0:any = this.context.$implicit.query;
    this._RouterLinkWithHref_1_3.check_queryParams(currVal_1_0_0,throwOnChange,false);
    const currVal_1_0_1:any = this._arr_4('/list');
    this._RouterLinkWithHref_1_3.check_routerLink(currVal_1_0_1,throwOnChange,false);
    this._RouterLinkWithHref_1_3.ngDoCheck(this,this._el_1,throwOnChange);
    this._RouterLinkWithHref_1_3.checkHost(this,this,this._el_1,throwOnChange);
    const currVal_5:any = import3.inlineInterpolate(1,'',this.context.$implicit.label,'');
    if (import3.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setText(this._text_2,currVal_5);
      this._expr_5 = currVal_5;
    }
  }
  destroyInternal():void {
    this._RouterLinkWithHref_1_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_1(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLinkWithHref_1_3.handleEvent(eventName,$event) && result);
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.parentView.context.resetRootPath($event,this.context.$implicit.query)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
class View_PrimaryNavComponent2 extends import1.AppView<any> {
  _el_0:any;
  _el_1:any;
  _text_2:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import12.ViewContainer) {
    super(View_PrimaryNavComponent2,renderType_PrimaryNavComponent,import5.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',new import3.InlineArray2(2,'class','primary-nav__item primary-nav__account'),(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,this._el_0,'a',new import3.InlineArray4(4,'class','primary-nav__link','href','/patterns/03-pages-04-register/03-pages-04-register.html'),(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'Logout',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_0));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._el_1,
      this._text_2
    ]
    ),[disposable_0]);
    return (null as any);
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.parentView.context.auth.logout()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
class View_PrimaryNavComponent3 extends import1.AppView<any> {
  _el_0:any;
  _el_1:any;
  _text_2:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import12.ViewContainer) {
    super(View_PrimaryNavComponent3,renderType_PrimaryNavComponent,import5.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',new import3.InlineArray2(2,'class','primary-nav__item primary-nav__account'),(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,this._el_0,'a',new import3.InlineArray8(8,'class','primary-nav__link','data-target','#modalLogin','data-toggle','modal','href',''),(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'Login',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_0));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._el_1,
      this._text_2
    ]
    ),[disposable_0]);
    return (null as any);
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.parentView.context.login()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
class View_PrimaryNavComponent4 extends import1.AppView<any> {
  _el_0:any;
  _el_1:any;
  _text_2:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import12.ViewContainer) {
    super(View_PrimaryNavComponent4,renderType_PrimaryNavComponent,import5.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',new import3.InlineArray2(2,'class','primary-nav__item primary-nav__account'),(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,this._el_0,'a',new import3.InlineArray4(4,'class','primary-nav__link','href','/patterns/03-pages-04-register/03-pages-04-register.html'),(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'Register',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._el_1,
      this._text_2
    ]
    ),(null as any));
    return (null as any);
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
var renderType_PrimaryNavComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,styles_PrimaryNavComponent,{});
export class View_PrimaryNavComponent0 extends import1.AppView<import0.PrimaryNavComponent> {
  _el_0:any;
  _text_1:any;
  _anchor_2:any;
  /*private*/ _vc_2:import12.ViewContainer;
  _TemplateRef_2_5:any;
  _NgFor_2_6:import18.Wrapper_NgFor;
  _text_3:any;
  _text_4:any;
  _anchor_5:any;
  /*private*/ _vc_5:import12.ViewContainer;
  _TemplateRef_5_5:any;
  _NgIf_5_6:import19.Wrapper_NgIf;
  _text_6:any;
  _anchor_7:any;
  /*private*/ _vc_7:import12.ViewContainer;
  _TemplateRef_7_5:any;
  _NgIf_7_6:import19.Wrapper_NgIf;
  _text_8:any;
  _anchor_9:any;
  /*private*/ _vc_9:import12.ViewContainer;
  _TemplateRef_9_5:any;
  _NgIf_9_6:import19.Wrapper_NgIf;
  _text_10:any;
  _el_11:any;
  compView_11:import1.AppView<import20.SearchComponent>;
  _NgClass_11_3:import21.Wrapper_NgClass;
  _SearchComponent_11_4:import22.Wrapper_SearchComponent;
  _text_12:any;
  _pipe_QueryStringPipe_0:import23.QueryStringPipe;
  _pipe_QueryStringPipe_0_0:any;
  _map_30:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_PrimaryNavComponent0,renderType_PrimaryNavComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
    this._map_30 = import3.pureProxy1((p0:any):{[key: string]:any} => {
      return {active: p0};
    });
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','primary-nav__wrapper'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._vc_2 = new import12.ViewContainer(2,0,this,this._anchor_2);
    this._TemplateRef_2_5 = new import24.TemplateRef_(this,2,this._anchor_2);
    this._NgFor_2_6 = new import18.Wrapper_NgFor(this._vc_2.vcRef,this._TemplateRef_2_5,this.parentView.injectorGet(import25.IterableDiffers,this.parentIndex),this.ref);
    this._text_3 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_4 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._anchor_5 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._vc_5 = new import12.ViewContainer(5,(null as any),this,this._anchor_5);
    this._TemplateRef_5_5 = new import24.TemplateRef_(this,5,this._anchor_5);
    this._NgIf_5_6 = new import19.Wrapper_NgIf(this._vc_5.vcRef,this._TemplateRef_5_5);
    this._text_6 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._anchor_7 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._vc_7 = new import12.ViewContainer(7,(null as any),this,this._anchor_7);
    this._TemplateRef_7_5 = new import24.TemplateRef_(this,7,this._anchor_7);
    this._NgIf_7_6 = new import19.Wrapper_NgIf(this._vc_7.vcRef,this._TemplateRef_7_5);
    this._text_8 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._anchor_9 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._vc_9 = new import12.ViewContainer(9,(null as any),this,this._anchor_9);
    this._TemplateRef_9_5 = new import24.TemplateRef_(this,9,this._anchor_9);
    this._NgIf_9_6 = new import19.Wrapper_NgIf(this._vc_9.vcRef,this._TemplateRef_9_5);
    this._text_10 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_11 = import3.createRenderElement(this.renderer,parentRenderNode,'app-search',new import3.InlineArray2(2,'class','primary-nav__search'),(null as any));
    this.compView_11 = new import22.View_SearchComponent0(this.viewUtils,this,11,this._el_11);
    this._NgClass_11_3 = new import21.Wrapper_NgClass(this.parentView.injectorGet(import25.IterableDiffers,this.parentIndex),this.parentView.injectorGet(import26.KeyValueDiffers,this.parentIndex),new import27.ElementRef(this._el_11),this.renderer);
    this._SearchComponent_11_4 = new import22.Wrapper_SearchComponent(this.parentView.injectorGet(import14.Router,this.parentIndex));
    this.compView_11.create(this._SearchComponent_11_4.context);
    this._text_12 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._pipe_QueryStringPipe_0 = new import23.QueryStringPipe();
    this._pipe_QueryStringPipe_0_0 = import3.pureProxy2(this._pipe_QueryStringPipe_0.transform.bind(this._pipe_QueryStringPipe_0));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_11,new import3.InlineArray2(2,'searchSubmitted',(null as any)),this.eventHandler(this.handleEvent_11));
    this._SearchComponent_11_4.subscribe(this,this.eventHandler(this.handleEvent_11),true);
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._anchor_2,
      this._text_3,
      this._text_4,
      this._anchor_5,
      this._text_6,
      this._anchor_7,
      this._text_8,
      this._anchor_9,
      this._text_10,
      this._el_11,
      this._text_12
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import24.TemplateRef) && (2 === requestNodeIndex))) { return this._TemplateRef_2_5; }
    if (((token === import28.NgFor) && (2 === requestNodeIndex))) { return this._NgFor_2_6.context; }
    if (((token === import24.TemplateRef) && (5 === requestNodeIndex))) { return this._TemplateRef_5_5; }
    if (((token === import29.NgIf) && (5 === requestNodeIndex))) { return this._NgIf_5_6.context; }
    if (((token === import24.TemplateRef) && (7 === requestNodeIndex))) { return this._TemplateRef_7_5; }
    if (((token === import29.NgIf) && (7 === requestNodeIndex))) { return this._NgIf_7_6.context; }
    if (((token === import24.TemplateRef) && (9 === requestNodeIndex))) { return this._TemplateRef_9_5; }
    if (((token === import29.NgIf) && (9 === requestNodeIndex))) { return this._NgIf_9_6.context; }
    if (((token === import30.NgClass) && (11 === requestNodeIndex))) { return this._NgClass_11_3.context; }
    if (((token === import20.SearchComponent) && (11 === requestNodeIndex))) { return this._SearchComponent_11_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const valUnwrapper:any = new import13.ValueUnwrapper();
    valUnwrapper.reset();
    const currVal_2_0_0:any = valUnwrapper.unwrap(import3.castByValue(this._pipe_QueryStringPipe_0_0,this._pipe_QueryStringPipe_0.transform)(this.context.items,'content types'));
    this._NgFor_2_6.check_ngForOf(currVal_2_0_0,throwOnChange,valUnwrapper.hasWrappedValue);
    this._NgFor_2_6.ngDoCheck(this,this._anchor_2,throwOnChange);
    const currVal_5_0_0:any = this.context.auth.authenticated();
    this._NgIf_5_6.check_ngIf(currVal_5_0_0,throwOnChange,false);
    this._NgIf_5_6.ngDoCheck(this,this._anchor_5,throwOnChange);
    const currVal_7_0_0:boolean = !this.context.auth.authenticated();
    this._NgIf_7_6.check_ngIf(currVal_7_0_0,throwOnChange,false);
    this._NgIf_7_6.ngDoCheck(this,this._anchor_7,throwOnChange);
    const currVal_9_0_0:boolean = !this.context.auth.authenticated();
    this._NgIf_9_6.check_ngIf(currVal_9_0_0,throwOnChange,false);
    this._NgIf_9_6.ngDoCheck(this,this._anchor_9,throwOnChange);
    const currVal_11_0_0:any = 'primary-nav__search';
    this._NgClass_11_3.check_klass(currVal_11_0_0,throwOnChange,false);
    const currVal_11_0_1:any = this._map_30(this._SearchComponent_11_4.context.focussed);
    this._NgClass_11_3.check_ngClass(currVal_11_0_1,throwOnChange,false);
    this._NgClass_11_3.ngDoCheck(this,this._el_11,throwOnChange);
    this._SearchComponent_11_4.ngDoCheck(this,this._el_11,throwOnChange);
    this._vc_2.detectChangesInNestedViews(throwOnChange);
    this._vc_5.detectChangesInNestedViews(throwOnChange);
    this._vc_7.detectChangesInNestedViews(throwOnChange);
    this._vc_9.detectChangesInNestedViews(throwOnChange);
    this.compView_11.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this._vc_2.destroyNestedViews();
    this._vc_5.destroyNestedViews();
    this._vc_7.destroyNestedViews();
    this._vc_9.destroyNestedViews();
    this.compView_11.destroy();
    this._SearchComponent_11_4.ngOnDestroy();
  }
  createEmbeddedViewInternal(nodeIndex:number):import1.AppView<any> {
    if ((nodeIndex == 2)) { return new View_PrimaryNavComponent1(this.viewUtils,this,2,this._anchor_2,this._vc_2); }
    if ((nodeIndex == 5)) { return new View_PrimaryNavComponent2(this.viewUtils,this,5,this._anchor_5,this._vc_5); }
    if ((nodeIndex == 7)) { return new View_PrimaryNavComponent3(this.viewUtils,this,7,this._anchor_7,this._vc_7); }
    if ((nodeIndex == 9)) { return new View_PrimaryNavComponent4(this.viewUtils,this,9,this._anchor_9,this._vc_9); }
    return (null as any);
  }
  handleEvent_11(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'searchSubmitted')) {
      const pd_sub_0:any = ((<any>this.context.searchDone($event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}