/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../../../app/components/content/pages/page.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../../../app/services/data.service';
import * as import9 from '@angular/router/src/router_state';
import * as import10 from '../../../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import11 from '@angular/core/src/linker/view_container';
import * as import12 from '@angular/core/src/change_detection/change_detection_util';
import * as import13 from '@angular/router/src/router';
import * as import14 from '@angular/common/src/location/location_strategy';
import * as import15 from '@angular/router/src/directives/router_link';
import * as import16 from '@angular/core/src/security';
import * as import17 from '../../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import18 from '@angular/core/src/linker/template_ref';
import * as import19 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import20 from '@angular/common/src/directives/ng_for';
export class Wrapper_PageComponent {
  /*private*/ _eventHandler:Function;
  context:import0.PageComponent;
  /*private*/ _changed:boolean;
  constructor(p0:any,p1:any) {
    this._changed = false;
    this.context = new import0.PageComponent(p0,p1);
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
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
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_PageComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_PageComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.PageComponent>;
  _PageComponent_0_3:Wrapper_PageComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_PageComponent_Host0,renderType_PageComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'app-page',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_PageComponent0(this.viewUtils,this,0,this._el_0);
    this._PageComponent_0_3 = new Wrapper_PageComponent(this.injectorGet(import8.DataService,this.parentIndex),this.injectorGet(import9.ActivatedRoute,this.parentIndex));
    this.compView_0.create(this._PageComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._PageComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.PageComponent) && (0 === requestNodeIndex))) { return this._PageComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._PageComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const PageComponentNgFactory:import7.ComponentFactory<import0.PageComponent> = new import7.ComponentFactory<import0.PageComponent>('app-page',View_PageComponent_Host0,import0.PageComponent);
const styles_PageComponent:any[] = ([] as any[]);
class View_PageComponent1 extends import1.AppView<any> {
  _el_0:any;
  _RouterLinkWithHref_0_3:import10.Wrapper_RouterLinkWithHref;
  _text_1:any;
  /*private*/ _expr_3:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import11.ViewContainer) {
    super(View_PageComponent1,renderType_PageComponent,import5.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_3 = import12.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'a',new import3.InlineArray4(4,'class','menu-item','href','#'),(null as any));
    this._RouterLinkWithHref_0_3 = new import10.Wrapper_RouterLinkWithHref(this.parentView.parentView.injectorGet(import13.Router,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import9.ActivatedRoute,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import14.LocationStrategy,this.parentView.parentIndex));
    this._text_1 = this.renderer.createText(this._el_0,'',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_0));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import15.RouterLinkWithHref) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._RouterLinkWithHref_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this.context.$implicit.path;
    this._RouterLinkWithHref_0_3.check_routerLink(currVal_0_0_0,throwOnChange,false);
    this._RouterLinkWithHref_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this._RouterLinkWithHref_0_3.checkHost(this,this,this._el_0,throwOnChange);
    const currVal_3:any = import3.inlineInterpolate(1,'',this.context.$implicit._source.title,'');
    if (import3.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setText(this._text_1,currVal_3);
      this._expr_3 = currVal_3;
    }
  }
  destroyInternal():void {
    this._RouterLinkWithHref_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLinkWithHref_0_3.handleEvent(eventName,$event) && result);
    return result;
  }
}
class View_PageComponent2 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _text_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import11.ViewContainer) {
    super(View_PageComponent2,renderType_PageComponent,import5.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_8 = import12.UNINITIALIZED;
    this._expr_9 = import12.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',new import3.InlineArray2(2,'class','col-xs-12 col-ml-12 col-xl-9 col-xl-p-left'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'h1',new import3.InlineArray2(2,'class','page-title'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray2(2,'class','content'),(null as any));
    this._text_6 = this.renderer.createText(this._el_5,'\n    ',(null as any));
    this._text_7 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7
    ]
    ),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_8:any = import3.inlineInterpolate(1,'\n      ',this.context.$implicit._source.title,'\n    ');
    if (import3.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this.renderer.setText(this._text_3,currVal_8);
      this._expr_8 = currVal_8;
    }
    const currVal_9:any = this.context.$implicit._source.description;
    if (import3.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this.renderer.setElementProperty(this._el_5,'innerHTML',this.viewUtils.sanitizer.sanitize(import16.SecurityContext.HTML,currVal_9));
      this._expr_9 = currVal_9;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
var renderType_PageComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,styles_PageComponent,{});
export class View_PageComponent0 extends import1.AppView<import0.PageComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _anchor_4:any;
  /*private*/ _vc_4:import11.ViewContainer;
  _TemplateRef_4_5:any;
  _NgFor_4_6:import17.Wrapper_NgFor;
  _text_5:any;
  _text_6:any;
  _anchor_7:any;
  /*private*/ _vc_7:import11.ViewContainer;
  _TemplateRef_7_5:any;
  _NgFor_7_6:import17.Wrapper_NgFor;
  _text_8:any;
  _text_9:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_PageComponent0,renderType_PageComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','row info-page'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray2(2,'class','col-xs-12 col-ml-12 col-xl-3 col-xl-p-right'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._anchor_4 = this.renderer.createTemplateAnchor(this._el_2,(null as any));
    this._vc_4 = new import11.ViewContainer(4,2,this,this._anchor_4);
    this._TemplateRef_4_5 = new import18.TemplateRef_(this,4,this._anchor_4);
    this._NgFor_4_6 = new import17.Wrapper_NgFor(this._vc_4.vcRef,this._TemplateRef_4_5,this.parentView.injectorGet(import19.IterableDiffers,this.parentIndex),this.ref);
    this._text_5 = this.renderer.createText(this._el_2,'\n  ',(null as any));
    this._text_6 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._anchor_7 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._vc_7 = new import11.ViewContainer(7,0,this,this._anchor_7);
    this._TemplateRef_7_5 = new import18.TemplateRef_(this,7,this._anchor_7);
    this._NgFor_7_6 = new import17.Wrapper_NgFor(this._vc_7.vcRef,this._TemplateRef_7_5,this.parentView.injectorGet(import19.IterableDiffers,this.parentIndex),this.ref);
    this._text_8 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_9 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._anchor_4,
      this._text_5,
      this._text_6,
      this._anchor_7,
      this._text_8,
      this._text_9
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import18.TemplateRef) && (4 === requestNodeIndex))) { return this._TemplateRef_4_5; }
    if (((token === import20.NgFor) && (4 === requestNodeIndex))) { return this._NgFor_4_6.context; }
    if (((token === import18.TemplateRef) && (7 === requestNodeIndex))) { return this._TemplateRef_7_5; }
    if (((token === import20.NgFor) && (7 === requestNodeIndex))) { return this._NgFor_7_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_4_0_0:any = this.context.menu;
    this._NgFor_4_6.check_ngForOf(currVal_4_0_0,throwOnChange,false);
    this._NgFor_4_6.ngDoCheck(this,this._anchor_4,throwOnChange);
    const currVal_7_0_0:any = this.context.content;
    this._NgFor_7_6.check_ngForOf(currVal_7_0_0,throwOnChange,false);
    this._NgFor_7_6.ngDoCheck(this,this._anchor_7,throwOnChange);
    this._vc_4.detectChangesInNestedViews(throwOnChange);
    this._vc_7.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_4.destroyNestedViews();
    this._vc_7.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import1.AppView<any> {
    if ((nodeIndex == 4)) { return new View_PageComponent1(this.viewUtils,this,4,this._anchor_4,this._vc_4); }
    if ((nodeIndex == 7)) { return new View_PageComponent2(this.viewUtils,this,7,this._anchor_7,this._vc_7); }
    return (null as any);
  }
}