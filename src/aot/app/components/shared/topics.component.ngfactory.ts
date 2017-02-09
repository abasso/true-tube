/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../../app/components/shared/topics.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/router/src/router';
export class Wrapper_TopicsComponent {
  /*private*/ _eventHandler:Function;
  context:import0.TopicsComponent;
  /*private*/ _changed:boolean;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import0.TopicsComponent(p0);
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
var renderType_TopicsComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_TopicsComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.TopicsComponent>;
  _TopicsComponent_0_3:Wrapper_TopicsComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_TopicsComponent_Host0,renderType_TopicsComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'app-topics-block',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_TopicsComponent0(this.viewUtils,this,0,this._el_0);
    this._TopicsComponent_0_3 = new Wrapper_TopicsComponent(this.injectorGet(import8.Router,this.parentIndex));
    this.compView_0.create(this._TopicsComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._TopicsComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.TopicsComponent) && (0 === requestNodeIndex))) { return this._TopicsComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._TopicsComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const TopicsComponentNgFactory:import7.ComponentFactory<import0.TopicsComponent> = new import7.ComponentFactory<import0.TopicsComponent>('app-topics-block',View_TopicsComponent_Host0,import0.TopicsComponent);
const styles_TopicsComponent:any[] = ([] as any[]);
var renderType_TopicsComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,styles_TopicsComponent,{});
export class View_TopicsComponent0 extends import1.AppView<import0.TopicsComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _text_7:any;
  _el_8:any;
  _text_9:any;
  _text_10:any;
  _el_11:any;
  _text_12:any;
  _text_13:any;
  _el_14:any;
  _text_15:any;
  _text_16:any;
  _text_17:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_TopicsComponent0,renderType_TopicsComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','popular-block'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n      ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'h3',new import3.InlineArray2(2,'class','section-title'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n        Popular Topics\n      ',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_0,'a',new import3.InlineArray4(4,'class','block-event__link','href','#'),(null as any));
    this._text_6 = this.renderer.createText(this._el_5,'\n    	Customs & Traditions\n    ',(null as any));
    this._text_7 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_8 = import3.createRenderElement(this.renderer,this._el_0,'a',new import3.InlineArray4(4,'class','block-event__link','href','#'),(null as any));
    this._text_9 = this.renderer.createText(this._el_8,'\n    	Sexual Equality\n    ',(null as any));
    this._text_10 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_11 = import3.createRenderElement(this.renderer,this._el_0,'a',new import3.InlineArray4(4,'class','block-event__link','href','#'),(null as any));
    this._text_12 = this.renderer.createText(this._el_11,'\n    	The Nature of God\n    ',(null as any));
    this._text_13 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_14 = import3.createRenderElement(this.renderer,this._el_0,'a',new import3.InlineArray4(4,'class','block-event__link','href','#'),(null as any));
    this._text_15 = this.renderer.createText(this._el_14,'\n    	Multiculturalism\n    ',(null as any));
    this._text_16 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._text_17 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_5,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_5));
    var disposable_1:Function = import3.subscribeToRenderElement(this,this._el_8,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_8));
    var disposable_2:Function = import3.subscribeToRenderElement(this,this._el_11,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_11));
    var disposable_3:Function = import3.subscribeToRenderElement(this,this._el_14,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_14));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._text_16,
      this._text_17
    ]
    ),[
      disposable_0,
      disposable_1,
      disposable_2,
      disposable_3
    ]
    );
    return (null as any);
  }
  handleEvent_5(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.navigate($event,'customs and traditions')) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_8(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.navigate($event,'sexual equality')) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_11(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.navigate($event,'the nature of god')) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_14(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.navigate($event,'multiculturalism')) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}