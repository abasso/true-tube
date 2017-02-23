/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../../app/components/navigation/pages-nav.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../../app/services/data.service';
import * as import9 from 'angulartics2/dist/providers/ga/angulartics2-ga';
import * as import10 from 'angulartics2/dist/core/angulartics2';
import * as import11 from '../../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import12 from '../../../node_modules/angulartics2/dist/core/angulartics2On.ngfactory';
import * as import13 from '@angular/core/src/linker/view_container';
import * as import14 from '@angular/core/src/change_detection/change_detection_util';
import * as import15 from '@angular/router/src/router';
import * as import16 from '@angular/router/src/router_state';
import * as import17 from '@angular/common/src/location/location_strategy';
import * as import18 from '@angular/core/src/linker/element_ref';
import * as import19 from '@angular/platform-browser/src/dom/events/event_manager';
import * as import20 from '@angular/router/src/directives/router_link';
import * as import21 from 'angulartics2/dist/core/angulartics2On';
import * as import22 from '../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import23 from '@angular/core/src/linker/template_ref';
import * as import24 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import25 from '@angular/common/src/directives/ng_for';
export class Wrapper_PagesNavComponent {
  /*private*/ _eventHandler:Function;
  context:import0.PagesNavComponent;
  /*private*/ _changed:boolean;
  constructor(p0:any,p1:any,p2:any) {
    this._changed = false;
    this.context = new import0.PagesNavComponent(p0,p1,p2);
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
var renderType_PagesNavComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_PagesNavComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.PagesNavComponent>;
  _PagesNavComponent_0_3:Wrapper_PagesNavComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_PagesNavComponent_Host0,renderType_PagesNavComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'app-pages-nav',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_PagesNavComponent0(this.viewUtils,this,0,this._el_0);
    this._PagesNavComponent_0_3 = new Wrapper_PagesNavComponent(this.injectorGet(import8.DataService,this.parentIndex),this.injectorGet(import9.Angulartics2GoogleAnalytics,this.parentIndex),this.injectorGet(import10.Angulartics2,this.parentIndex));
    this.compView_0.create(this._PagesNavComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._PagesNavComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.PagesNavComponent) && (0 === requestNodeIndex))) { return this._PagesNavComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._PagesNavComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const PagesNavComponentNgFactory:import7.ComponentFactory<import0.PagesNavComponent> = new import7.ComponentFactory<import0.PagesNavComponent>('app-pages-nav',View_PagesNavComponent_Host0,import0.PagesNavComponent);
const styles_PagesNavComponent:any[] = ([] as any[]);
class View_PagesNavComponent1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _RouterLinkWithHref_2_3:import11.Wrapper_RouterLinkWithHref;
  _Angulartics2On_2_4:import12.Wrapper_Angulartics2On;
  _text_3:any;
  _text_4:any;
  _map_7:any;
  /*private*/ _expr_8:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import13.ViewContainer) {
    super(View_PagesNavComponent1,renderType_PagesNavComponent,import5.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._map_7 = import3.pureProxy1((p0:any):{[key: string]:any} => {
      return {label: p0};
    });
    this._expr_8 = import14.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'li',new import3.InlineArray2(2,'class','menu-item'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'a',new import3.InlineArray16(10,'angulartics2On','click','angularticsCategory','Pages','angularticsEvent','Navigate','class','text-link','href','#'),(null as any));
    this._RouterLinkWithHref_2_3 = new import11.Wrapper_RouterLinkWithHref(this.parentView.parentView.injectorGet(import15.Router,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import16.ActivatedRoute,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import17.LocationStrategy,this.parentView.parentIndex));
    this._Angulartics2On_2_4 = new import12.Wrapper_Angulartics2On(new import18.ElementRef(this._el_2),this.parentView.parentView.injectorGet(import10.Angulartics2,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import19.EventManager,this.parentView.parentIndex));
    this._text_3 = this.renderer.createText(this._el_2,'',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_2,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_2));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import20.RouterLinkWithHref) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._RouterLinkWithHref_2_3.context; }
    if (((token === import21.Angulartics2On) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._Angulartics2On_2_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2_0_0:any = this.context.$implicit.uri;
    this._RouterLinkWithHref_2_3.check_routerLink(currVal_2_0_0,throwOnChange,false);
    this._RouterLinkWithHref_2_3.ngDoCheck(this,this._el_2,throwOnChange);
    const currVal_2_1_0:any = 'click';
    this._Angulartics2On_2_4.check_angulartics2On(currVal_2_1_0,throwOnChange,false);
    const currVal_2_1_1:any = 'Navigate';
    this._Angulartics2On_2_4.check_angularticsEvent(currVal_2_1_1,throwOnChange,false);
    const currVal_2_1_2:any = 'Pages';
    this._Angulartics2On_2_4.check_angularticsCategory(currVal_2_1_2,throwOnChange,false);
    const currVal_2_1_3:any = this._map_7(this.context.$implicit.title);
    this._Angulartics2On_2_4.check_angularticsProperties(currVal_2_1_3,throwOnChange,false);
    this._Angulartics2On_2_4.ngDoCheck(this,this._el_2,throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Angulartics2On_2_4.context.ngAfterContentInit(); } }
    this._RouterLinkWithHref_2_3.checkHost(this,this,this._el_2,throwOnChange);
    const currVal_8:any = import3.inlineInterpolate(1,'',this.context.$implicit.title,'');
    if (import3.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this.renderer.setText(this._text_3,currVal_8);
      this._expr_8 = currVal_8;
    }
  }
  destroyInternal():void {
    this._RouterLinkWithHref_2_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_2(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLinkWithHref_2_3.handleEvent(eventName,$event) && result);
    return result;
  }
}
var renderType_PagesNavComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,styles_PagesNavComponent,{});
export class View_PagesNavComponent0 extends import1.AppView<import0.PagesNavComponent> {
  _el_0:any;
  _text_1:any;
  _anchor_2:any;
  /*private*/ _vc_2:import13.ViewContainer;
  _TemplateRef_2_5:any;
  _NgFor_2_6:import22.Wrapper_NgFor;
  _text_3:any;
  _text_4:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_PagesNavComponent0,renderType_PagesNavComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'ul',new import3.InlineArray2(2,'class','p-a-0'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._vc_2 = new import13.ViewContainer(2,0,this,this._anchor_2);
    this._TemplateRef_2_5 = new import23.TemplateRef_(this,2,this._anchor_2);
    this._NgFor_2_6 = new import22.Wrapper_NgFor(this._vc_2.vcRef,this._TemplateRef_2_5,this.parentView.injectorGet(import24.IterableDiffers,this.parentIndex),this.ref);
    this._text_3 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_4 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._anchor_2,
      this._text_3,
      this._text_4
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import23.TemplateRef) && (2 === requestNodeIndex))) { return this._TemplateRef_2_5; }
    if (((token === import25.NgFor) && (2 === requestNodeIndex))) { return this._NgFor_2_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2_0_0:any = this.context.menu;
    this._NgFor_2_6.check_ngForOf(currVal_2_0_0,throwOnChange,false);
    this._NgFor_2_6.ngDoCheck(this,this._anchor_2,throwOnChange);
    this._vc_2.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_2.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import1.AppView<any> {
    if ((nodeIndex == 2)) { return new View_PagesNavComponent1(this.viewUtils,this,2,this._anchor_2,this._vc_2); }
    return (null as any);
  }
}