/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../../../app/components/content/listing/list.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '../../../../../app/services/list.service';
import * as import6 from '../../../../../app/pipes/pagination.pipe';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/constants';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '../../../../../app/services/data.service';
import * as import11 from '@angular/router/src/router_state';
import * as import12 from '@angular/core/src/linker/view_container';
import * as import13 from '@angular/core/src/change_detection/change_detection_util';
import * as import14 from '../../../../../app/components/content/listing/sort.component';
import * as import15 from './sort.component.ngfactory';
import * as import16 from '@angular/router/src/router';
import * as import17 from '@angular/common/src/location/location';
import * as import18 from '../../../../../app/components/content/listing/list-item.component';
import * as import19 from '../../../../node_modules/@angular/common/src/directives/ng_class.ngfactory';
import * as import20 from './list-item.component.ngfactory';
import * as import21 from '../../../../../app/pipes/image.pipe';
import * as import22 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import23 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import24 from '@angular/core/src/linker/element_ref';
import * as import25 from 'angulartics2/dist/providers/ga/angulartics2-ga';
import * as import26 from 'angulartics2/dist/core/angulartics2';
import * as import27 from '../../../../../app/components/content/listing/filter.component';
import * as import28 from '@angular/common/src/directives/ng_class';
import * as import29 from './filter.component.ngfactory';
import * as import30 from '../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import31 from '@angular/forms/src/form_builder';
import * as import32 from '@angular/core/src/linker/template_ref';
import * as import33 from '@angular/common/src/directives/ng_if';
export class Wrapper_ListingComponent {
  /*private*/ _eventHandler:Function;
  context:import0.ListingComponent;
  /*private*/ _changed:boolean;
  constructor(p0:any,p1:any,p2:any) {
    this._changed = false;
    this.context = new import0.ListingComponent(p0,p1,p2);
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    if ((eventName == 'window:scroll')) {
      const pd_sub_0:any = ((<any>this.context.scroll($event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_ListingComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_ListingComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.ListingComponent>;
  _ListService_0_3:import5.ListService;
  _ListingComponent_0_4:Wrapper_ListingComponent;
  __PaginationPipe_0_5:import6.PaginationPipe;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_ListingComponent_Host0,renderType_ListingComponent_Host,import7.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways);
  }
  get _PaginationPipe_0_5():import6.PaginationPipe {
    if ((this.__PaginationPipe_0_5 == null)) { (this.__PaginationPipe_0_5 = new import6.PaginationPipe()); }
    return this.__PaginationPipe_0_5;
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'app-list',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_ListingComponent0(this.viewUtils,this,0,this._el_0);
    this._ListService_0_3 = new import5.ListService();
    this._ListingComponent_0_4 = new Wrapper_ListingComponent(this.injectorGet(import10.DataService,this.parentIndex),this._ListService_0_3,this.injectorGet(import11.ActivatedRoute,this.parentIndex));
    this.compView_0.create(this._ListingComponent_0_4.context);
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray2(2,'scroll','window'),this.eventHandler(this.handleEvent_0));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),[disposable_0]);
    return new import9.ComponentRef_<any>(0,this,this._el_0,this._ListingComponent_0_4.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import5.ListService) && (0 === requestNodeIndex))) { return this._ListService_0_3; }
    if (((token === import0.ListingComponent) && (0 === requestNodeIndex))) { return this._ListingComponent_0_4.context; }
    if (((token === import6.PaginationPipe) && (0 === requestNodeIndex))) { return this._PaginationPipe_0_5; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._ListingComponent_0_4.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.compView_0.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._ListingComponent_0_4.handleEvent(eventName,$event) && result);
    return result;
  }
}
export const ListingComponentNgFactory:import9.ComponentFactory<import0.ListingComponent> = new import9.ComponentFactory<import0.ListingComponent>('app-list',View_ListingComponent_Host0,import0.ListingComponent);
const styles_ListingComponent:any[] = ([] as any[]);
class View_ListingComponent1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import12.ViewContainer) {
    super(View_ListingComponent1,renderType_ListingComponent,import7.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_2 = import13.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'span',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2:any = import3.inlineInterpolate(2,'(',(<View_ListingComponent0>this.parentView)._ListFilterComponent_4_3.context.itemsTotal,' ',(<View_ListingComponent0>this.parentView)._ListFilterComponent_4_3.context.itemsTotalLabel,')');
    if (import3.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setText(this._text_1,currVal_2);
      this._expr_2 = currVal_2;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
class View_ListingComponent2 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import14.ListingSortComponent>;
  _ListingSortComponent_0_3:import15.Wrapper_ListingSortComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import12.ViewContainer) {
    super(View_ListingComponent2,renderType_ListingComponent,import7.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'listing-sort',new import3.InlineArray2(2,'class','hidden-lg-down'),(null as any));
    this.compView_0 = new import15.View_ListingSortComponent0(this.viewUtils,this,0,this._el_0);
    this._ListingSortComponent_0_3 = new import15.Wrapper_ListingSortComponent(this.parentView.parentView.injectorGet(import0.ListingComponent,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import11.ActivatedRoute,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import16.Router,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import17.Location,this.parentView.parentIndex));
    this.compView_0.create(this._ListingSortComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.ListingSortComponent) && (0 === requestNodeIndex))) { return this._ListingSortComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._ListingSortComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
class View_ListingComponent3 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import12.ViewContainer) {
    super(View_ListingComponent3,renderType_ListingComponent,import7.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',new import3.InlineArray2(2,'class','row grid-row content-grid'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n      ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray2(2,'class','list-item m-b-3'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n        No results.\n      ',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4
    ]
    ),(null as any));
    return (null as any);
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
class View_ListingComponent4 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import12.ViewContainer) {
    super(View_ListingComponent4,renderType_ListingComponent,import7.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',new import3.InlineArray2(2,'class','row grid-row content-grid loading-grid'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n      ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray2(2,'class','spinner'),(null as any));
    this._text_3 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3
    ]
    ),(null as any));
    return (null as any);
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
class View_ListingComponent5 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import18.ListItemComponent>;
  _NgClass_0_3:import19.Wrapper_NgClass;
  _ListItemComponent_0_4:import20.Wrapper_ListItemComponent;
  __PaginationPipe_0_5:import6.PaginationPipe;
  __ImagePipe_0_6:import21.ImagePipe;
  _map_6:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import12.ViewContainer) {
    super(View_ListingComponent5,renderType_ListingComponent,import7.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._map_6 = import3.pureProxy4((p0:any,p1:any,p2:any,p3:any):{[key: string]:any} => {
      return {
        row: p0,
        'grid-row': p1,
        'list-row': p2,
        'content-grid': p3
      }
      ;
    });
  }
  get _PaginationPipe_0_5():import6.PaginationPipe {
    if ((this.__PaginationPipe_0_5 == null)) { (this.__PaginationPipe_0_5 = new import6.PaginationPipe()); }
    return this.__PaginationPipe_0_5;
  }
  get _ImagePipe_0_6():import21.ImagePipe {
    if ((this.__ImagePipe_0_6 == null)) { (this.__ImagePipe_0_6 = new import21.ImagePipe()); }
    return this.__ImagePipe_0_6;
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'app-list-item',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_0 = new import20.View_ListItemComponent0(this.viewUtils,this,0,this._el_0);
    this._NgClass_0_3 = new import19.Wrapper_NgClass(this.parentView.parentView.injectorGet(import22.IterableDiffers,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import23.KeyValueDiffers,this.parentView.parentIndex),new import24.ElementRef(this._el_0),this.renderer);
    this._ListItemComponent_0_4 = new import20.Wrapper_ListItemComponent(this.parentView.parentView.injectorGet(import11.ActivatedRoute,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import10.DataService,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import25.Angulartics2GoogleAnalytics,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import26.Angulartics2,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import27.ListFilterComponent,this.parentView.parentIndex));
    this.compView_0.create(this._ListItemComponent_0_4.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import28.NgClass) && (0 === requestNodeIndex))) { return this._NgClass_0_3.context; }
    if (((token === import18.ListItemComponent) && (0 === requestNodeIndex))) { return this._ListItemComponent_0_4.context; }
    if (((token === import6.PaginationPipe) && (0 === requestNodeIndex))) { return this._PaginationPipe_0_5; }
    if (((token === import21.ImagePipe) && (0 === requestNodeIndex))) { return this._ImagePipe_0_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this._map_6(true,this.parentView.context.displayGrid,this.parentView.context.displayList,true);
    this._NgClass_0_3.check_ngClass(currVal_0_0_0,throwOnChange,false);
    this._NgClass_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    const currVal_0_1_0:any = this.parentView.context.items;
    this._ListItemComponent_0_4.check_items(currVal_0_1_0,throwOnChange,false);
    const currVal_0_1_1:any = this.parentView.context.paginationData;
    this._ListItemComponent_0_4.check_paginationData(currVal_0_1_1,throwOnChange,false);
    this._ListItemComponent_0_4.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
class View_ListingComponent6 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import14.ListingSortComponent>;
  _ListingSortComponent_0_3:import15.Wrapper_ListingSortComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import12.ViewContainer) {
    super(View_ListingComponent6,renderType_ListingComponent,import7.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'listing-sort',new import3.InlineArray2(2,'class','last-sort'),(null as any));
    this.compView_0 = new import15.View_ListingSortComponent0(this.viewUtils,this,0,this._el_0);
    this._ListingSortComponent_0_3 = new import15.Wrapper_ListingSortComponent(this.parentView.parentView.injectorGet(import0.ListingComponent,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import11.ActivatedRoute,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import16.Router,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import17.Location,this.parentView.parentIndex));
    this.compView_0.create(this._ListingSortComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.ListingSortComponent) && (0 === requestNodeIndex))) { return this._ListingSortComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._ListingSortComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
var renderType_ListingComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,styles_ListingComponent,{});
export class View_ListingComponent0 extends import1.AppView<import0.ListingComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  compView_4:import1.AppView<import27.ListFilterComponent>;
  _ListFilterComponent_4_3:import29.Wrapper_ListFilterComponent;
  _text_5:any;
  _text_6:any;
  _text_7:any;
  _el_8:any;
  _NgClass_8_3:import19.Wrapper_NgClass;
  _text_9:any;
  _el_10:any;
  _text_11:any;
  _anchor_12:any;
  /*private*/ _vc_12:import12.ViewContainer;
  _TemplateRef_12_5:any;
  _NgIf_12_6:import30.Wrapper_NgIf;
  _text_13:any;
  _text_14:any;
  _anchor_15:any;
  /*private*/ _vc_15:import12.ViewContainer;
  _TemplateRef_15_5:any;
  _NgIf_15_6:import30.Wrapper_NgIf;
  _text_16:any;
  _anchor_17:any;
  /*private*/ _vc_17:import12.ViewContainer;
  _TemplateRef_17_5:any;
  _NgIf_17_6:import30.Wrapper_NgIf;
  _text_18:any;
  _anchor_19:any;
  /*private*/ _vc_19:import12.ViewContainer;
  _TemplateRef_19_5:any;
  _NgIf_19_6:import30.Wrapper_NgIf;
  _text_20:any;
  _anchor_21:any;
  /*private*/ _vc_21:import12.ViewContainer;
  _TemplateRef_21_5:any;
  _NgIf_21_6:import30.Wrapper_NgIf;
  _text_22:any;
  _anchor_23:any;
  /*private*/ _vc_23:import12.ViewContainer;
  _TemplateRef_23_5:any;
  _NgIf_23_6:import30.Wrapper_NgIf;
  _text_24:any;
  _text_25:any;
  _text_26:any;
  _map_48:any;
  /*private*/ _expr_49:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_ListingComponent0,renderType_ListingComponent,import7.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways);
    this._map_48 = import3.pureProxy1((p0:any):{[key: string]:any} => {
      return {sticky: p0};
    });
    this._expr_49 = import13.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','row'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray2(2,'class','col-xs-12 col-ml-12 col-xl-3 col-xl-p-right'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_2,'app-filter',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_4 = new import29.View_ListFilterComponent0(this.viewUtils,this,4,this._el_4);
    this._ListFilterComponent_4_3 = new import29.Wrapper_ListFilterComponent(this.parentView.injectorGet(import5.ListService,this.parentIndex),this.parentView.injectorGet(import11.ActivatedRoute,this.parentIndex),this.parentView.injectorGet(import16.Router,this.parentIndex),this.parentView.injectorGet(import0.ListingComponent,this.parentIndex),this.parentView.injectorGet(import10.DataService,this.parentIndex),this.parentView.injectorGet(import17.Location,this.parentIndex),this.parentView.injectorGet(import31.FormBuilder,this.parentIndex),this.parentView.injectorGet(import25.Angulartics2GoogleAnalytics,this.parentIndex),this.parentView.injectorGet(import26.Angulartics2,this.parentIndex));
    this._text_5 = this.renderer.createText((null as any),'\n    ',(null as any));
    this.compView_4.create(this._ListFilterComponent_4_3.context);
    this._text_6 = this.renderer.createText(this._el_2,'\n  ',(null as any));
    this._text_7 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_8 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray2(2,'class','col-xs-12 col-ml-12 col-xl-9 col-xl-p-left m-t-1'),(null as any));
    this._NgClass_8_3 = new import19.Wrapper_NgClass(this.parentView.injectorGet(import22.IterableDiffers,this.parentIndex),this.parentView.injectorGet(import23.KeyValueDiffers,this.parentIndex),new import24.ElementRef(this._el_8),this.renderer);
    this._text_9 = this.renderer.createText(this._el_8,'\n    ',(null as any));
    this._el_10 = import3.createRenderElement(this.renderer,this._el_8,'h1',new import3.InlineArray8(8,'class','page-title col-xl-12','data-offset-bottom','200','data-offset-top','60','data-spy','affix'),(null as any));
    this._text_11 = this.renderer.createText(this._el_10,'',(null as any));
    this._anchor_12 = this.renderer.createTemplateAnchor(this._el_10,(null as any));
    this._vc_12 = new import12.ViewContainer(12,10,this,this._anchor_12);
    this._TemplateRef_12_5 = new import32.TemplateRef_(this,12,this._anchor_12);
    this._NgIf_12_6 = new import30.Wrapper_NgIf(this._vc_12.vcRef,this._TemplateRef_12_5);
    this._text_13 = this.renderer.createText(this._el_10,'\n    ',(null as any));
    this._text_14 = this.renderer.createText(this._el_8,'\n    ',(null as any));
    this._anchor_15 = this.renderer.createTemplateAnchor(this._el_8,(null as any));
    this._vc_15 = new import12.ViewContainer(15,8,this,this._anchor_15);
    this._TemplateRef_15_5 = new import32.TemplateRef_(this,15,this._anchor_15);
    this._NgIf_15_6 = new import30.Wrapper_NgIf(this._vc_15.vcRef,this._TemplateRef_15_5);
    this._text_16 = this.renderer.createText(this._el_8,'\n    ',(null as any));
    this._anchor_17 = this.renderer.createTemplateAnchor(this._el_8,(null as any));
    this._vc_17 = new import12.ViewContainer(17,8,this,this._anchor_17);
    this._TemplateRef_17_5 = new import32.TemplateRef_(this,17,this._anchor_17);
    this._NgIf_17_6 = new import30.Wrapper_NgIf(this._vc_17.vcRef,this._TemplateRef_17_5);
    this._text_18 = this.renderer.createText(this._el_8,'\n\n    ',(null as any));
    this._anchor_19 = this.renderer.createTemplateAnchor(this._el_8,(null as any));
    this._vc_19 = new import12.ViewContainer(19,8,this,this._anchor_19);
    this._TemplateRef_19_5 = new import32.TemplateRef_(this,19,this._anchor_19);
    this._NgIf_19_6 = new import30.Wrapper_NgIf(this._vc_19.vcRef,this._TemplateRef_19_5);
    this._text_20 = this.renderer.createText(this._el_8,'\n      ',(null as any));
    this._anchor_21 = this.renderer.createTemplateAnchor(this._el_8,(null as any));
    this._vc_21 = new import12.ViewContainer(21,8,this,this._anchor_21);
    this._TemplateRef_21_5 = new import32.TemplateRef_(this,21,this._anchor_21);
    this._NgIf_21_6 = new import30.Wrapper_NgIf(this._vc_21.vcRef,this._TemplateRef_21_5);
    this._text_22 = this.renderer.createText(this._el_8,'\n    ',(null as any));
    this._anchor_23 = this.renderer.createTemplateAnchor(this._el_8,(null as any));
    this._vc_23 = new import12.ViewContainer(23,8,this,this._anchor_23);
    this._TemplateRef_23_5 = new import32.TemplateRef_(this,23,this._anchor_23);
    this._NgIf_23_6 = new import30.Wrapper_NgIf(this._vc_23.vcRef,this._TemplateRef_23_5);
    this._text_24 = this.renderer.createText(this._el_8,'\n  ',(null as any));
    this._text_25 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_26 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._anchor_12,
      this._text_13,
      this._text_14,
      this._anchor_15,
      this._text_16,
      this._anchor_17,
      this._text_18,
      this._anchor_19,
      this._text_20,
      this._anchor_21,
      this._text_22,
      this._anchor_23,
      this._text_24,
      this._text_25,
      this._text_26
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import27.ListFilterComponent) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._ListFilterComponent_4_3.context; }
    if (((token === import32.TemplateRef) && (12 === requestNodeIndex))) { return this._TemplateRef_12_5; }
    if (((token === import33.NgIf) && (12 === requestNodeIndex))) { return this._NgIf_12_6.context; }
    if (((token === import32.TemplateRef) && (15 === requestNodeIndex))) { return this._TemplateRef_15_5; }
    if (((token === import33.NgIf) && (15 === requestNodeIndex))) { return this._NgIf_15_6.context; }
    if (((token === import32.TemplateRef) && (17 === requestNodeIndex))) { return this._TemplateRef_17_5; }
    if (((token === import33.NgIf) && (17 === requestNodeIndex))) { return this._NgIf_17_6.context; }
    if (((token === import32.TemplateRef) && (19 === requestNodeIndex))) { return this._TemplateRef_19_5; }
    if (((token === import33.NgIf) && (19 === requestNodeIndex))) { return this._NgIf_19_6.context; }
    if (((token === import32.TemplateRef) && (21 === requestNodeIndex))) { return this._TemplateRef_21_5; }
    if (((token === import33.NgIf) && (21 === requestNodeIndex))) { return this._NgIf_21_6.context; }
    if (((token === import32.TemplateRef) && (23 === requestNodeIndex))) { return this._TemplateRef_23_5; }
    if (((token === import33.NgIf) && (23 === requestNodeIndex))) { return this._NgIf_23_6.context; }
    if (((token === import28.NgClass) && ((8 <= requestNodeIndex) && (requestNodeIndex <= 24)))) { return this._NgClass_8_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._ListFilterComponent_4_3.ngDoCheck(this,this._el_4,throwOnChange);
    const currVal_8_0_0:any = 'col-xs-12 col-ml-12 col-xl-9 col-xl-p-left m-t-1';
    this._NgClass_8_3.check_klass(currVal_8_0_0,throwOnChange,false);
    const currVal_8_0_1:any = this._map_48((this.context.stickyTitle === true));
    this._NgClass_8_3.check_ngClass(currVal_8_0_1,throwOnChange,false);
    this._NgClass_8_3.ngDoCheck(this,this._el_8,throwOnChange);
    const currVal_12_0_0:any = (this._ListFilterComponent_4_3.context.itemsTotal !== 0);
    this._NgIf_12_6.check_ngIf(currVal_12_0_0,throwOnChange,false);
    this._NgIf_12_6.ngDoCheck(this,this._anchor_12,throwOnChange);
    const currVal_15_0_0:any = (this.context.itemCount !== 0);
    this._NgIf_15_6.check_ngIf(currVal_15_0_0,throwOnChange,false);
    this._NgIf_15_6.ngDoCheck(this,this._anchor_15,throwOnChange);
    const currVal_17_0_0:any = (this.context.itemCount === 0);
    this._NgIf_17_6.check_ngIf(currVal_17_0_0,throwOnChange,false);
    this._NgIf_17_6.ngDoCheck(this,this._anchor_17,throwOnChange);
    const currVal_19_0_0:any = (this._ListFilterComponent_4_3.context.contentLoading === true);
    this._NgIf_19_6.check_ngIf(currVal_19_0_0,throwOnChange,false);
    this._NgIf_19_6.ngDoCheck(this,this._anchor_19,throwOnChange);
    const currVal_21_0_0:any = (this._ListFilterComponent_4_3.context.contentLoading === false);
    this._NgIf_21_6.check_ngIf(currVal_21_0_0,throwOnChange,false);
    this._NgIf_21_6.ngDoCheck(this,this._anchor_21,throwOnChange);
    const currVal_23_0_0:any = (this.context.itemCount !== 0);
    this._NgIf_23_6.check_ngIf(currVal_23_0_0,throwOnChange,false);
    this._NgIf_23_6.ngDoCheck(this,this._anchor_23,throwOnChange);
    this._vc_12.detectChangesInNestedViews(throwOnChange);
    this._vc_15.detectChangesInNestedViews(throwOnChange);
    this._vc_17.detectChangesInNestedViews(throwOnChange);
    this._vc_19.detectChangesInNestedViews(throwOnChange);
    this._vc_21.detectChangesInNestedViews(throwOnChange);
    this._vc_23.detectChangesInNestedViews(throwOnChange);
    const currVal_49:any = import3.inlineInterpolate(1,'\n      ',this.context.pageTitle(this._ListFilterComponent_4_3.context.filterSubjects,this._ListFilterComponent_4_3.context.keystages,this._ListFilterComponent_4_3.context.types,this._ListFilterComponent_4_3.context.filter.value.term,this._ListFilterComponent_4_3.context.category,this._ListFilterComponent_4_3.context.topics),'\n      ');
    if (import3.checkBinding(throwOnChange,this._expr_49,currVal_49)) {
      this.renderer.setText(this._text_11,currVal_49);
      this._expr_49 = currVal_49;
    }
    this.compView_4.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this._vc_12.destroyNestedViews();
    this._vc_15.destroyNestedViews();
    this._vc_17.destroyNestedViews();
    this._vc_19.destroyNestedViews();
    this._vc_21.destroyNestedViews();
    this._vc_23.destroyNestedViews();
    this.compView_4.destroy();
  }
  createEmbeddedViewInternal(nodeIndex:number):import1.AppView<any> {
    if ((nodeIndex == 12)) { return new View_ListingComponent1(this.viewUtils,this,12,this._anchor_12,this._vc_12); }
    if ((nodeIndex == 15)) { return new View_ListingComponent2(this.viewUtils,this,15,this._anchor_15,this._vc_15); }
    if ((nodeIndex == 17)) { return new View_ListingComponent3(this.viewUtils,this,17,this._anchor_17,this._vc_17); }
    if ((nodeIndex == 19)) { return new View_ListingComponent4(this.viewUtils,this,19,this._anchor_19,this._vc_19); }
    if ((nodeIndex == 21)) { return new View_ListingComponent5(this.viewUtils,this,21,this._anchor_21,this._vc_21); }
    if ((nodeIndex == 23)) { return new View_ListingComponent6(this.viewUtils,this,23,this._anchor_23,this._vc_23); }
    return (null as any);
  }
}