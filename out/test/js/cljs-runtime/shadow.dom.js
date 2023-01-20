goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_18243 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_18243(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_18249 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_18249(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__16762 = coll;
var G__16763 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__16762,G__16763) : shadow.dom.lazy_native_coll_seq.call(null,G__16762,G__16763));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__16820 = arguments.length;
switch (G__16820) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__16872 = arguments.length;
switch (G__16872) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__16892 = arguments.length;
switch (G__16892) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__16917 = arguments.length;
switch (G__16917) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__16951 = arguments.length;
switch (G__16951) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__17025 = arguments.length;
switch (G__17025) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e17039){if((e17039 instanceof Object)){
var e = e17039;
return console.log("didnt support attachEvent",el,e);
} else {
throw e17039;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__17056 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__17057 = null;
var count__17058 = (0);
var i__17059 = (0);
while(true){
if((i__17059 < count__17058)){
var el = chunk__17057.cljs$core$IIndexed$_nth$arity$2(null,i__17059);
var handler_18272__$1 = ((function (seq__17056,chunk__17057,count__17058,i__17059,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__17056,chunk__17057,count__17058,i__17059,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_18272__$1);


var G__18273 = seq__17056;
var G__18274 = chunk__17057;
var G__18275 = count__17058;
var G__18276 = (i__17059 + (1));
seq__17056 = G__18273;
chunk__17057 = G__18274;
count__17058 = G__18275;
i__17059 = G__18276;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17056);
if(temp__5804__auto__){
var seq__17056__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17056__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17056__$1);
var G__18277 = cljs.core.chunk_rest(seq__17056__$1);
var G__18278 = c__5568__auto__;
var G__18279 = cljs.core.count(c__5568__auto__);
var G__18280 = (0);
seq__17056 = G__18277;
chunk__17057 = G__18278;
count__17058 = G__18279;
i__17059 = G__18280;
continue;
} else {
var el = cljs.core.first(seq__17056__$1);
var handler_18281__$1 = ((function (seq__17056,chunk__17057,count__17058,i__17059,el,seq__17056__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__17056,chunk__17057,count__17058,i__17059,el,seq__17056__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_18281__$1);


var G__18283 = cljs.core.next(seq__17056__$1);
var G__18284 = null;
var G__18285 = (0);
var G__18286 = (0);
seq__17056 = G__18283;
chunk__17057 = G__18284;
count__17058 = G__18285;
i__17059 = G__18286;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__17099 = arguments.length;
switch (G__17099) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__17173 = cljs.core.seq(events);
var chunk__17174 = null;
var count__17175 = (0);
var i__17176 = (0);
while(true){
if((i__17176 < count__17175)){
var vec__17196 = chunk__17174.cljs$core$IIndexed$_nth$arity$2(null,i__17176);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17196,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17196,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__18288 = seq__17173;
var G__18289 = chunk__17174;
var G__18290 = count__17175;
var G__18291 = (i__17176 + (1));
seq__17173 = G__18288;
chunk__17174 = G__18289;
count__17175 = G__18290;
i__17176 = G__18291;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17173);
if(temp__5804__auto__){
var seq__17173__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17173__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17173__$1);
var G__18292 = cljs.core.chunk_rest(seq__17173__$1);
var G__18293 = c__5568__auto__;
var G__18294 = cljs.core.count(c__5568__auto__);
var G__18295 = (0);
seq__17173 = G__18292;
chunk__17174 = G__18293;
count__17175 = G__18294;
i__17176 = G__18295;
continue;
} else {
var vec__17217 = cljs.core.first(seq__17173__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17217,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17217,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__18296 = cljs.core.next(seq__17173__$1);
var G__18297 = null;
var G__18298 = (0);
var G__18299 = (0);
seq__17173 = G__18296;
chunk__17174 = G__18297;
count__17175 = G__18298;
i__17176 = G__18299;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__17232 = cljs.core.seq(styles);
var chunk__17233 = null;
var count__17234 = (0);
var i__17235 = (0);
while(true){
if((i__17235 < count__17234)){
var vec__17261 = chunk__17233.cljs$core$IIndexed$_nth$arity$2(null,i__17235);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17261,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17261,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__18304 = seq__17232;
var G__18305 = chunk__17233;
var G__18306 = count__17234;
var G__18307 = (i__17235 + (1));
seq__17232 = G__18304;
chunk__17233 = G__18305;
count__17234 = G__18306;
i__17235 = G__18307;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17232);
if(temp__5804__auto__){
var seq__17232__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17232__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17232__$1);
var G__18309 = cljs.core.chunk_rest(seq__17232__$1);
var G__18310 = c__5568__auto__;
var G__18311 = cljs.core.count(c__5568__auto__);
var G__18312 = (0);
seq__17232 = G__18309;
chunk__17233 = G__18310;
count__17234 = G__18311;
i__17235 = G__18312;
continue;
} else {
var vec__17296 = cljs.core.first(seq__17232__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17296,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17296,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__18313 = cljs.core.next(seq__17232__$1);
var G__18314 = null;
var G__18315 = (0);
var G__18316 = (0);
seq__17232 = G__18313;
chunk__17233 = G__18314;
count__17234 = G__18315;
i__17235 = G__18316;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__17308_18317 = key;
var G__17308_18318__$1 = (((G__17308_18317 instanceof cljs.core.Keyword))?G__17308_18317.fqn:null);
switch (G__17308_18318__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_18329 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_18329,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_18329,"aria-");
}
})())){
el.setAttribute(ks_18329,value);
} else {
(el[ks_18329] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__17344){
var map__17345 = p__17344;
var map__17345__$1 = cljs.core.__destructure_map(map__17345);
var props = map__17345__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17345__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__17347 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17347,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17347,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17347,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__17350 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__17350,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__17350;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__17357 = arguments.length;
switch (G__17357) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__17364){
var vec__17365 = p__17364;
var seq__17366 = cljs.core.seq(vec__17365);
var first__17367 = cljs.core.first(seq__17366);
var seq__17366__$1 = cljs.core.next(seq__17366);
var nn = first__17367;
var first__17367__$1 = cljs.core.first(seq__17366__$1);
var seq__17366__$2 = cljs.core.next(seq__17366__$1);
var np = first__17367__$1;
var nc = seq__17366__$2;
var node = vec__17365;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17369 = nn;
var G__17370 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__17369,G__17370) : create_fn.call(null,G__17369,G__17370));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17373 = nn;
var G__17374 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__17373,G__17374) : create_fn.call(null,G__17373,G__17374));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__17377 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17377,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17377,(1),null);
var seq__17380_18370 = cljs.core.seq(node_children);
var chunk__17381_18371 = null;
var count__17382_18372 = (0);
var i__17383_18373 = (0);
while(true){
if((i__17383_18373 < count__17382_18372)){
var child_struct_18374 = chunk__17381_18371.cljs$core$IIndexed$_nth$arity$2(null,i__17383_18373);
var children_18375 = shadow.dom.dom_node(child_struct_18374);
if(cljs.core.seq_QMARK_(children_18375)){
var seq__17543_18376 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_18375));
var chunk__17545_18377 = null;
var count__17546_18378 = (0);
var i__17547_18379 = (0);
while(true){
if((i__17547_18379 < count__17546_18378)){
var child_18380 = chunk__17545_18377.cljs$core$IIndexed$_nth$arity$2(null,i__17547_18379);
if(cljs.core.truth_(child_18380)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18380);


var G__18385 = seq__17543_18376;
var G__18386 = chunk__17545_18377;
var G__18387 = count__17546_18378;
var G__18388 = (i__17547_18379 + (1));
seq__17543_18376 = G__18385;
chunk__17545_18377 = G__18386;
count__17546_18378 = G__18387;
i__17547_18379 = G__18388;
continue;
} else {
var G__18389 = seq__17543_18376;
var G__18390 = chunk__17545_18377;
var G__18391 = count__17546_18378;
var G__18392 = (i__17547_18379 + (1));
seq__17543_18376 = G__18389;
chunk__17545_18377 = G__18390;
count__17546_18378 = G__18391;
i__17547_18379 = G__18392;
continue;
}
} else {
var temp__5804__auto___18393 = cljs.core.seq(seq__17543_18376);
if(temp__5804__auto___18393){
var seq__17543_18394__$1 = temp__5804__auto___18393;
if(cljs.core.chunked_seq_QMARK_(seq__17543_18394__$1)){
var c__5568__auto___18395 = cljs.core.chunk_first(seq__17543_18394__$1);
var G__18396 = cljs.core.chunk_rest(seq__17543_18394__$1);
var G__18397 = c__5568__auto___18395;
var G__18398 = cljs.core.count(c__5568__auto___18395);
var G__18399 = (0);
seq__17543_18376 = G__18396;
chunk__17545_18377 = G__18397;
count__17546_18378 = G__18398;
i__17547_18379 = G__18399;
continue;
} else {
var child_18400 = cljs.core.first(seq__17543_18394__$1);
if(cljs.core.truth_(child_18400)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18400);


var G__18401 = cljs.core.next(seq__17543_18394__$1);
var G__18402 = null;
var G__18403 = (0);
var G__18404 = (0);
seq__17543_18376 = G__18401;
chunk__17545_18377 = G__18402;
count__17546_18378 = G__18403;
i__17547_18379 = G__18404;
continue;
} else {
var G__18405 = cljs.core.next(seq__17543_18394__$1);
var G__18406 = null;
var G__18407 = (0);
var G__18408 = (0);
seq__17543_18376 = G__18405;
chunk__17545_18377 = G__18406;
count__17546_18378 = G__18407;
i__17547_18379 = G__18408;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_18375);
}


var G__18409 = seq__17380_18370;
var G__18410 = chunk__17381_18371;
var G__18411 = count__17382_18372;
var G__18412 = (i__17383_18373 + (1));
seq__17380_18370 = G__18409;
chunk__17381_18371 = G__18410;
count__17382_18372 = G__18411;
i__17383_18373 = G__18412;
continue;
} else {
var temp__5804__auto___18413 = cljs.core.seq(seq__17380_18370);
if(temp__5804__auto___18413){
var seq__17380_18414__$1 = temp__5804__auto___18413;
if(cljs.core.chunked_seq_QMARK_(seq__17380_18414__$1)){
var c__5568__auto___18415 = cljs.core.chunk_first(seq__17380_18414__$1);
var G__18416 = cljs.core.chunk_rest(seq__17380_18414__$1);
var G__18417 = c__5568__auto___18415;
var G__18418 = cljs.core.count(c__5568__auto___18415);
var G__18419 = (0);
seq__17380_18370 = G__18416;
chunk__17381_18371 = G__18417;
count__17382_18372 = G__18418;
i__17383_18373 = G__18419;
continue;
} else {
var child_struct_18420 = cljs.core.first(seq__17380_18414__$1);
var children_18421 = shadow.dom.dom_node(child_struct_18420);
if(cljs.core.seq_QMARK_(children_18421)){
var seq__17581_18422 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_18421));
var chunk__17583_18423 = null;
var count__17584_18424 = (0);
var i__17585_18425 = (0);
while(true){
if((i__17585_18425 < count__17584_18424)){
var child_18426 = chunk__17583_18423.cljs$core$IIndexed$_nth$arity$2(null,i__17585_18425);
if(cljs.core.truth_(child_18426)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18426);


var G__18427 = seq__17581_18422;
var G__18428 = chunk__17583_18423;
var G__18429 = count__17584_18424;
var G__18430 = (i__17585_18425 + (1));
seq__17581_18422 = G__18427;
chunk__17583_18423 = G__18428;
count__17584_18424 = G__18429;
i__17585_18425 = G__18430;
continue;
} else {
var G__18431 = seq__17581_18422;
var G__18432 = chunk__17583_18423;
var G__18433 = count__17584_18424;
var G__18434 = (i__17585_18425 + (1));
seq__17581_18422 = G__18431;
chunk__17583_18423 = G__18432;
count__17584_18424 = G__18433;
i__17585_18425 = G__18434;
continue;
}
} else {
var temp__5804__auto___18435__$1 = cljs.core.seq(seq__17581_18422);
if(temp__5804__auto___18435__$1){
var seq__17581_18436__$1 = temp__5804__auto___18435__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17581_18436__$1)){
var c__5568__auto___18437 = cljs.core.chunk_first(seq__17581_18436__$1);
var G__18438 = cljs.core.chunk_rest(seq__17581_18436__$1);
var G__18439 = c__5568__auto___18437;
var G__18440 = cljs.core.count(c__5568__auto___18437);
var G__18441 = (0);
seq__17581_18422 = G__18438;
chunk__17583_18423 = G__18439;
count__17584_18424 = G__18440;
i__17585_18425 = G__18441;
continue;
} else {
var child_18442 = cljs.core.first(seq__17581_18436__$1);
if(cljs.core.truth_(child_18442)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18442);


var G__18443 = cljs.core.next(seq__17581_18436__$1);
var G__18444 = null;
var G__18445 = (0);
var G__18446 = (0);
seq__17581_18422 = G__18443;
chunk__17583_18423 = G__18444;
count__17584_18424 = G__18445;
i__17585_18425 = G__18446;
continue;
} else {
var G__18447 = cljs.core.next(seq__17581_18436__$1);
var G__18448 = null;
var G__18449 = (0);
var G__18450 = (0);
seq__17581_18422 = G__18447;
chunk__17583_18423 = G__18448;
count__17584_18424 = G__18449;
i__17585_18425 = G__18450;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_18421);
}


var G__18451 = cljs.core.next(seq__17380_18414__$1);
var G__18452 = null;
var G__18453 = (0);
var G__18454 = (0);
seq__17380_18370 = G__18451;
chunk__17381_18371 = G__18452;
count__17382_18372 = G__18453;
i__17383_18373 = G__18454;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__17621 = cljs.core.seq(node);
var chunk__17622 = null;
var count__17623 = (0);
var i__17624 = (0);
while(true){
if((i__17624 < count__17623)){
var n = chunk__17622.cljs$core$IIndexed$_nth$arity$2(null,i__17624);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__18455 = seq__17621;
var G__18456 = chunk__17622;
var G__18457 = count__17623;
var G__18458 = (i__17624 + (1));
seq__17621 = G__18455;
chunk__17622 = G__18456;
count__17623 = G__18457;
i__17624 = G__18458;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17621);
if(temp__5804__auto__){
var seq__17621__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17621__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17621__$1);
var G__18459 = cljs.core.chunk_rest(seq__17621__$1);
var G__18460 = c__5568__auto__;
var G__18461 = cljs.core.count(c__5568__auto__);
var G__18462 = (0);
seq__17621 = G__18459;
chunk__17622 = G__18460;
count__17623 = G__18461;
i__17624 = G__18462;
continue;
} else {
var n = cljs.core.first(seq__17621__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__18463 = cljs.core.next(seq__17621__$1);
var G__18464 = null;
var G__18465 = (0);
var G__18466 = (0);
seq__17621 = G__18463;
chunk__17622 = G__18464;
count__17623 = G__18465;
i__17624 = G__18466;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__17653 = arguments.length;
switch (G__17653) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__17663 = arguments.length;
switch (G__17663) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__17665 = arguments.length;
switch (G__17665) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18510 = arguments.length;
var i__5770__auto___18513 = (0);
while(true){
if((i__5770__auto___18513 < len__5769__auto___18510)){
args__5775__auto__.push((arguments[i__5770__auto___18513]));

var G__18514 = (i__5770__auto___18513 + (1));
i__5770__auto___18513 = G__18514;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__17734_18517 = cljs.core.seq(nodes);
var chunk__17735_18518 = null;
var count__17736_18519 = (0);
var i__17737_18520 = (0);
while(true){
if((i__17737_18520 < count__17736_18519)){
var node_18521 = chunk__17735_18518.cljs$core$IIndexed$_nth$arity$2(null,i__17737_18520);
fragment.appendChild(shadow.dom._to_dom(node_18521));


var G__18522 = seq__17734_18517;
var G__18523 = chunk__17735_18518;
var G__18524 = count__17736_18519;
var G__18525 = (i__17737_18520 + (1));
seq__17734_18517 = G__18522;
chunk__17735_18518 = G__18523;
count__17736_18519 = G__18524;
i__17737_18520 = G__18525;
continue;
} else {
var temp__5804__auto___18526 = cljs.core.seq(seq__17734_18517);
if(temp__5804__auto___18526){
var seq__17734_18527__$1 = temp__5804__auto___18526;
if(cljs.core.chunked_seq_QMARK_(seq__17734_18527__$1)){
var c__5568__auto___18528 = cljs.core.chunk_first(seq__17734_18527__$1);
var G__18529 = cljs.core.chunk_rest(seq__17734_18527__$1);
var G__18530 = c__5568__auto___18528;
var G__18531 = cljs.core.count(c__5568__auto___18528);
var G__18532 = (0);
seq__17734_18517 = G__18529;
chunk__17735_18518 = G__18530;
count__17736_18519 = G__18531;
i__17737_18520 = G__18532;
continue;
} else {
var node_18533 = cljs.core.first(seq__17734_18527__$1);
fragment.appendChild(shadow.dom._to_dom(node_18533));


var G__18534 = cljs.core.next(seq__17734_18527__$1);
var G__18535 = null;
var G__18536 = (0);
var G__18537 = (0);
seq__17734_18517 = G__18534;
chunk__17735_18518 = G__18535;
count__17736_18519 = G__18536;
i__17737_18520 = G__18537;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq17722){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17722));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__17760_18541 = cljs.core.seq(scripts);
var chunk__17761_18542 = null;
var count__17762_18543 = (0);
var i__17763_18544 = (0);
while(true){
if((i__17763_18544 < count__17762_18543)){
var vec__17775_18545 = chunk__17761_18542.cljs$core$IIndexed$_nth$arity$2(null,i__17763_18544);
var script_tag_18546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17775_18545,(0),null);
var script_body_18547 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17775_18545,(1),null);
eval(script_body_18547);


var G__18548 = seq__17760_18541;
var G__18549 = chunk__17761_18542;
var G__18550 = count__17762_18543;
var G__18551 = (i__17763_18544 + (1));
seq__17760_18541 = G__18548;
chunk__17761_18542 = G__18549;
count__17762_18543 = G__18550;
i__17763_18544 = G__18551;
continue;
} else {
var temp__5804__auto___18552 = cljs.core.seq(seq__17760_18541);
if(temp__5804__auto___18552){
var seq__17760_18553__$1 = temp__5804__auto___18552;
if(cljs.core.chunked_seq_QMARK_(seq__17760_18553__$1)){
var c__5568__auto___18554 = cljs.core.chunk_first(seq__17760_18553__$1);
var G__18555 = cljs.core.chunk_rest(seq__17760_18553__$1);
var G__18556 = c__5568__auto___18554;
var G__18557 = cljs.core.count(c__5568__auto___18554);
var G__18558 = (0);
seq__17760_18541 = G__18555;
chunk__17761_18542 = G__18556;
count__17762_18543 = G__18557;
i__17763_18544 = G__18558;
continue;
} else {
var vec__17789_18559 = cljs.core.first(seq__17760_18553__$1);
var script_tag_18560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17789_18559,(0),null);
var script_body_18561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17789_18559,(1),null);
eval(script_body_18561);


var G__18562 = cljs.core.next(seq__17760_18553__$1);
var G__18563 = null;
var G__18564 = (0);
var G__18565 = (0);
seq__17760_18541 = G__18562;
chunk__17761_18542 = G__18563;
count__17762_18543 = G__18564;
i__17763_18544 = G__18565;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__17794){
var vec__17795 = p__17794;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17795,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17795,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__17815 = arguments.length;
switch (G__17815) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__17848 = cljs.core.seq(style_keys);
var chunk__17849 = null;
var count__17850 = (0);
var i__17851 = (0);
while(true){
if((i__17851 < count__17850)){
var it = chunk__17849.cljs$core$IIndexed$_nth$arity$2(null,i__17851);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__18579 = seq__17848;
var G__18580 = chunk__17849;
var G__18581 = count__17850;
var G__18582 = (i__17851 + (1));
seq__17848 = G__18579;
chunk__17849 = G__18580;
count__17850 = G__18581;
i__17851 = G__18582;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17848);
if(temp__5804__auto__){
var seq__17848__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17848__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17848__$1);
var G__18583 = cljs.core.chunk_rest(seq__17848__$1);
var G__18584 = c__5568__auto__;
var G__18585 = cljs.core.count(c__5568__auto__);
var G__18586 = (0);
seq__17848 = G__18583;
chunk__17849 = G__18584;
count__17850 = G__18585;
i__17851 = G__18586;
continue;
} else {
var it = cljs.core.first(seq__17848__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__18587 = cljs.core.next(seq__17848__$1);
var G__18588 = null;
var G__18589 = (0);
var G__18590 = (0);
seq__17848 = G__18587;
chunk__17849 = G__18588;
count__17850 = G__18589;
i__17851 = G__18590;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k17874,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__17885 = k17874;
var G__17885__$1 = (((G__17885 instanceof cljs.core.Keyword))?G__17885.fqn:null);
switch (G__17885__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17874,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__17889){
var vec__17890 = p__17889;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17890,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17890,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17873){
var self__ = this;
var G__17873__$1 = this;
return (new cljs.core.RecordIter((0),G__17873__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17875,other17876){
var self__ = this;
var this17875__$1 = this;
return (((!((other17876 == null)))) && ((((this17875__$1.constructor === other17876.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17875__$1.x,other17876.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17875__$1.y,other17876.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17875__$1.__extmap,other17876.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k17874){
var self__ = this;
var this__5350__auto____$1 = this;
var G__17919 = k17874;
var G__17919__$1 = (((G__17919 instanceof cljs.core.Keyword))?G__17919.fqn:null);
switch (G__17919__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k17874);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__17873){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__17932 = cljs.core.keyword_identical_QMARK_;
var expr__17933 = k__5352__auto__;
if(cljs.core.truth_((pred__17932.cljs$core$IFn$_invoke$arity$2 ? pred__17932.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__17933) : pred__17932.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__17933)))){
return (new shadow.dom.Coordinate(G__17873,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__17932.cljs$core$IFn$_invoke$arity$2 ? pred__17932.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__17933) : pred__17932.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__17933)))){
return (new shadow.dom.Coordinate(self__.x,G__17873,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__17873),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__17873){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__17873,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__17882){
var extmap__5385__auto__ = (function (){var G__17944 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17882,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__17882)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__17944);
} else {
return G__17944;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__17882),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__17882),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k17949,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__17956 = k17949;
var G__17956__$1 = (((G__17956 instanceof cljs.core.Keyword))?G__17956.fqn:null);
switch (G__17956__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17949,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__17958){
var vec__17959 = p__17958;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17959,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17959,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17948){
var self__ = this;
var G__17948__$1 = this;
return (new cljs.core.RecordIter((0),G__17948__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17950,other17951){
var self__ = this;
var this17950__$1 = this;
return (((!((other17951 == null)))) && ((((this17950__$1.constructor === other17951.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17950__$1.w,other17951.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17950__$1.h,other17951.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17950__$1.__extmap,other17951.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k17949){
var self__ = this;
var this__5350__auto____$1 = this;
var G__17975 = k17949;
var G__17975__$1 = (((G__17975 instanceof cljs.core.Keyword))?G__17975.fqn:null);
switch (G__17975__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k17949);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__17948){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__17977 = cljs.core.keyword_identical_QMARK_;
var expr__17978 = k__5352__auto__;
if(cljs.core.truth_((pred__17977.cljs$core$IFn$_invoke$arity$2 ? pred__17977.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__17978) : pred__17977.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__17978)))){
return (new shadow.dom.Size(G__17948,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__17977.cljs$core$IFn$_invoke$arity$2 ? pred__17977.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__17978) : pred__17977.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__17978)))){
return (new shadow.dom.Size(self__.w,G__17948,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__17948),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__17948){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__17948,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__17954){
var extmap__5385__auto__ = (function (){var G__17988 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17954,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__17954)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__17988);
} else {
return G__17988;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__17954),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__17954),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__18701 = (i + (1));
var G__18702 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__18701;
ret = G__18702;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__18047){
var vec__18052 = p__18047;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18052,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18052,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__18056 = arguments.length;
switch (G__18056) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__18704 = ps;
var G__18705 = (i + (1));
el__$1 = G__18704;
i = G__18705;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__18071 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18071,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18071,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18071,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__18074_18707 = cljs.core.seq(props);
var chunk__18075_18708 = null;
var count__18076_18709 = (0);
var i__18077_18710 = (0);
while(true){
if((i__18077_18710 < count__18076_18709)){
var vec__18096_18711 = chunk__18075_18708.cljs$core$IIndexed$_nth$arity$2(null,i__18077_18710);
var k_18712 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18096_18711,(0),null);
var v_18713 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18096_18711,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_18712);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_18712),v_18713);


var G__18714 = seq__18074_18707;
var G__18715 = chunk__18075_18708;
var G__18716 = count__18076_18709;
var G__18717 = (i__18077_18710 + (1));
seq__18074_18707 = G__18714;
chunk__18075_18708 = G__18715;
count__18076_18709 = G__18716;
i__18077_18710 = G__18717;
continue;
} else {
var temp__5804__auto___18718 = cljs.core.seq(seq__18074_18707);
if(temp__5804__auto___18718){
var seq__18074_18719__$1 = temp__5804__auto___18718;
if(cljs.core.chunked_seq_QMARK_(seq__18074_18719__$1)){
var c__5568__auto___18720 = cljs.core.chunk_first(seq__18074_18719__$1);
var G__18721 = cljs.core.chunk_rest(seq__18074_18719__$1);
var G__18722 = c__5568__auto___18720;
var G__18723 = cljs.core.count(c__5568__auto___18720);
var G__18724 = (0);
seq__18074_18707 = G__18721;
chunk__18075_18708 = G__18722;
count__18076_18709 = G__18723;
i__18077_18710 = G__18724;
continue;
} else {
var vec__18100_18725 = cljs.core.first(seq__18074_18719__$1);
var k_18726 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18100_18725,(0),null);
var v_18727 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18100_18725,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_18726);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_18726),v_18727);


var G__18728 = cljs.core.next(seq__18074_18719__$1);
var G__18729 = null;
var G__18730 = (0);
var G__18731 = (0);
seq__18074_18707 = G__18728;
chunk__18075_18708 = G__18729;
count__18076_18709 = G__18730;
i__18077_18710 = G__18731;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__18116 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18116,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18116,(1),null);
var seq__18119_18732 = cljs.core.seq(node_children);
var chunk__18121_18733 = null;
var count__18122_18734 = (0);
var i__18123_18735 = (0);
while(true){
if((i__18123_18735 < count__18122_18734)){
var child_struct_18736 = chunk__18121_18733.cljs$core$IIndexed$_nth$arity$2(null,i__18123_18735);
if((!((child_struct_18736 == null)))){
if(typeof child_struct_18736 === 'string'){
var text_18737 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_18737),child_struct_18736].join(''));
} else {
var children_18738 = shadow.dom.svg_node(child_struct_18736);
if(cljs.core.seq_QMARK_(children_18738)){
var seq__18152_18739 = cljs.core.seq(children_18738);
var chunk__18154_18740 = null;
var count__18155_18741 = (0);
var i__18156_18742 = (0);
while(true){
if((i__18156_18742 < count__18155_18741)){
var child_18743 = chunk__18154_18740.cljs$core$IIndexed$_nth$arity$2(null,i__18156_18742);
if(cljs.core.truth_(child_18743)){
node.appendChild(child_18743);


var G__18744 = seq__18152_18739;
var G__18745 = chunk__18154_18740;
var G__18746 = count__18155_18741;
var G__18747 = (i__18156_18742 + (1));
seq__18152_18739 = G__18744;
chunk__18154_18740 = G__18745;
count__18155_18741 = G__18746;
i__18156_18742 = G__18747;
continue;
} else {
var G__18748 = seq__18152_18739;
var G__18749 = chunk__18154_18740;
var G__18750 = count__18155_18741;
var G__18751 = (i__18156_18742 + (1));
seq__18152_18739 = G__18748;
chunk__18154_18740 = G__18749;
count__18155_18741 = G__18750;
i__18156_18742 = G__18751;
continue;
}
} else {
var temp__5804__auto___18753 = cljs.core.seq(seq__18152_18739);
if(temp__5804__auto___18753){
var seq__18152_18754__$1 = temp__5804__auto___18753;
if(cljs.core.chunked_seq_QMARK_(seq__18152_18754__$1)){
var c__5568__auto___18755 = cljs.core.chunk_first(seq__18152_18754__$1);
var G__18756 = cljs.core.chunk_rest(seq__18152_18754__$1);
var G__18757 = c__5568__auto___18755;
var G__18758 = cljs.core.count(c__5568__auto___18755);
var G__18759 = (0);
seq__18152_18739 = G__18756;
chunk__18154_18740 = G__18757;
count__18155_18741 = G__18758;
i__18156_18742 = G__18759;
continue;
} else {
var child_18760 = cljs.core.first(seq__18152_18754__$1);
if(cljs.core.truth_(child_18760)){
node.appendChild(child_18760);


var G__18761 = cljs.core.next(seq__18152_18754__$1);
var G__18762 = null;
var G__18763 = (0);
var G__18764 = (0);
seq__18152_18739 = G__18761;
chunk__18154_18740 = G__18762;
count__18155_18741 = G__18763;
i__18156_18742 = G__18764;
continue;
} else {
var G__18765 = cljs.core.next(seq__18152_18754__$1);
var G__18766 = null;
var G__18767 = (0);
var G__18768 = (0);
seq__18152_18739 = G__18765;
chunk__18154_18740 = G__18766;
count__18155_18741 = G__18767;
i__18156_18742 = G__18768;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_18738);
}
}


var G__18769 = seq__18119_18732;
var G__18770 = chunk__18121_18733;
var G__18771 = count__18122_18734;
var G__18772 = (i__18123_18735 + (1));
seq__18119_18732 = G__18769;
chunk__18121_18733 = G__18770;
count__18122_18734 = G__18771;
i__18123_18735 = G__18772;
continue;
} else {
var G__18773 = seq__18119_18732;
var G__18774 = chunk__18121_18733;
var G__18775 = count__18122_18734;
var G__18776 = (i__18123_18735 + (1));
seq__18119_18732 = G__18773;
chunk__18121_18733 = G__18774;
count__18122_18734 = G__18775;
i__18123_18735 = G__18776;
continue;
}
} else {
var temp__5804__auto___18777 = cljs.core.seq(seq__18119_18732);
if(temp__5804__auto___18777){
var seq__18119_18778__$1 = temp__5804__auto___18777;
if(cljs.core.chunked_seq_QMARK_(seq__18119_18778__$1)){
var c__5568__auto___18779 = cljs.core.chunk_first(seq__18119_18778__$1);
var G__18780 = cljs.core.chunk_rest(seq__18119_18778__$1);
var G__18781 = c__5568__auto___18779;
var G__18782 = cljs.core.count(c__5568__auto___18779);
var G__18783 = (0);
seq__18119_18732 = G__18780;
chunk__18121_18733 = G__18781;
count__18122_18734 = G__18782;
i__18123_18735 = G__18783;
continue;
} else {
var child_struct_18787 = cljs.core.first(seq__18119_18778__$1);
if((!((child_struct_18787 == null)))){
if(typeof child_struct_18787 === 'string'){
var text_18788 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_18788),child_struct_18787].join(''));
} else {
var children_18789 = shadow.dom.svg_node(child_struct_18787);
if(cljs.core.seq_QMARK_(children_18789)){
var seq__18159_18790 = cljs.core.seq(children_18789);
var chunk__18161_18791 = null;
var count__18162_18792 = (0);
var i__18163_18793 = (0);
while(true){
if((i__18163_18793 < count__18162_18792)){
var child_18794 = chunk__18161_18791.cljs$core$IIndexed$_nth$arity$2(null,i__18163_18793);
if(cljs.core.truth_(child_18794)){
node.appendChild(child_18794);


var G__18797 = seq__18159_18790;
var G__18798 = chunk__18161_18791;
var G__18799 = count__18162_18792;
var G__18800 = (i__18163_18793 + (1));
seq__18159_18790 = G__18797;
chunk__18161_18791 = G__18798;
count__18162_18792 = G__18799;
i__18163_18793 = G__18800;
continue;
} else {
var G__18817 = seq__18159_18790;
var G__18818 = chunk__18161_18791;
var G__18819 = count__18162_18792;
var G__18820 = (i__18163_18793 + (1));
seq__18159_18790 = G__18817;
chunk__18161_18791 = G__18818;
count__18162_18792 = G__18819;
i__18163_18793 = G__18820;
continue;
}
} else {
var temp__5804__auto___18821__$1 = cljs.core.seq(seq__18159_18790);
if(temp__5804__auto___18821__$1){
var seq__18159_18822__$1 = temp__5804__auto___18821__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18159_18822__$1)){
var c__5568__auto___18823 = cljs.core.chunk_first(seq__18159_18822__$1);
var G__18824 = cljs.core.chunk_rest(seq__18159_18822__$1);
var G__18825 = c__5568__auto___18823;
var G__18826 = cljs.core.count(c__5568__auto___18823);
var G__18827 = (0);
seq__18159_18790 = G__18824;
chunk__18161_18791 = G__18825;
count__18162_18792 = G__18826;
i__18163_18793 = G__18827;
continue;
} else {
var child_18828 = cljs.core.first(seq__18159_18822__$1);
if(cljs.core.truth_(child_18828)){
node.appendChild(child_18828);


var G__18829 = cljs.core.next(seq__18159_18822__$1);
var G__18830 = null;
var G__18831 = (0);
var G__18832 = (0);
seq__18159_18790 = G__18829;
chunk__18161_18791 = G__18830;
count__18162_18792 = G__18831;
i__18163_18793 = G__18832;
continue;
} else {
var G__18833 = cljs.core.next(seq__18159_18822__$1);
var G__18834 = null;
var G__18835 = (0);
var G__18836 = (0);
seq__18159_18790 = G__18833;
chunk__18161_18791 = G__18834;
count__18162_18792 = G__18835;
i__18163_18793 = G__18836;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_18789);
}
}


var G__18837 = cljs.core.next(seq__18119_18778__$1);
var G__18838 = null;
var G__18839 = (0);
var G__18840 = (0);
seq__18119_18732 = G__18837;
chunk__18121_18733 = G__18838;
count__18122_18734 = G__18839;
i__18123_18735 = G__18840;
continue;
} else {
var G__18841 = cljs.core.next(seq__18119_18778__$1);
var G__18842 = null;
var G__18843 = (0);
var G__18844 = (0);
seq__18119_18732 = G__18841;
chunk__18121_18733 = G__18842;
count__18122_18734 = G__18843;
i__18123_18735 = G__18844;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18849 = arguments.length;
var i__5770__auto___18850 = (0);
while(true){
if((i__5770__auto___18850 < len__5769__auto___18849)){
args__5775__auto__.push((arguments[i__5770__auto___18850]));

var G__18851 = (i__5770__auto___18850 + (1));
i__5770__auto___18850 = G__18851;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq18197){
var G__18198 = cljs.core.first(seq18197);
var seq18197__$1 = cljs.core.next(seq18197);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18198,seq18197__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__18204 = arguments.length;
switch (G__18204) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__13484__auto___18860 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13485__auto__ = (function (){var switch__13247__auto__ = (function (state_18220){
var state_val_18221 = (state_18220[(1)]);
if((state_val_18221 === (1))){
var state_18220__$1 = state_18220;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18220__$1,(2),once_or_cleanup);
} else {
if((state_val_18221 === (2))){
var inst_18215 = (state_18220[(2)]);
var inst_18218 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_18220__$1 = (function (){var statearr_18226 = state_18220;
(statearr_18226[(7)] = inst_18215);

return statearr_18226;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18220__$1,inst_18218);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__13248__auto__ = null;
var shadow$dom$state_machine__13248__auto____0 = (function (){
var statearr_18228 = [null,null,null,null,null,null,null,null];
(statearr_18228[(0)] = shadow$dom$state_machine__13248__auto__);

(statearr_18228[(1)] = (1));

return statearr_18228;
});
var shadow$dom$state_machine__13248__auto____1 = (function (state_18220){
while(true){
var ret_value__13249__auto__ = (function (){try{while(true){
var result__13250__auto__ = switch__13247__auto__(state_18220);
if(cljs.core.keyword_identical_QMARK_(result__13250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13250__auto__;
}
break;
}
}catch (e18230){var ex__13251__auto__ = e18230;
var statearr_18231_18866 = state_18220;
(statearr_18231_18866[(2)] = ex__13251__auto__);


if(cljs.core.seq((state_18220[(4)]))){
var statearr_18237_18867 = state_18220;
(statearr_18237_18867[(1)] = cljs.core.first((state_18220[(4)])));

} else {
throw ex__13251__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18871 = state_18220;
state_18220 = G__18871;
continue;
} else {
return ret_value__13249__auto__;
}
break;
}
});
shadow$dom$state_machine__13248__auto__ = function(state_18220){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__13248__auto____0.call(this);
case 1:
return shadow$dom$state_machine__13248__auto____1.call(this,state_18220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__13248__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__13248__auto____0;
shadow$dom$state_machine__13248__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__13248__auto____1;
return shadow$dom$state_machine__13248__auto__;
})()
})();
var state__13486__auto__ = (function (){var statearr_18238 = f__13485__auto__();
(statearr_18238[(6)] = c__13484__auto___18860);

return statearr_18238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13486__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
