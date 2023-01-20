goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__18472,res){
var map__18474 = p__18472;
var map__18474__$1 = cljs.core.__destructure_map(map__18474);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18474__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18474__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__18475 = res;
var G__18475__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18475,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__18475);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18475__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__18475__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__18477 = arguments.length;
switch (G__18477) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__18479,msg,handlers,timeout_after_ms){
var map__18480 = p__18479;
var map__18480__$1 = cljs.core.__destructure_map(map__18480);
var runtime = map__18480__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18480__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18918 = arguments.length;
var i__5770__auto___18922 = (0);
while(true){
if((i__5770__auto___18922 < len__5769__auto___18918)){
args__5775__auto__.push((arguments[i__5770__auto___18922]));

var G__18923 = (i__5770__auto___18922 + (1));
i__5770__auto___18922 = G__18923;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__18566,ev,args){
var map__18567 = p__18566;
var map__18567__$1 = cljs.core.__destructure_map(map__18567);
var runtime = map__18567__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18567__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__18568 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__18571 = null;
var count__18572 = (0);
var i__18573 = (0);
while(true){
if((i__18573 < count__18572)){
var ext = chunk__18571.cljs$core$IIndexed$_nth$arity$2(null,i__18573);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__18932 = seq__18568;
var G__18933 = chunk__18571;
var G__18934 = count__18572;
var G__18935 = (i__18573 + (1));
seq__18568 = G__18932;
chunk__18571 = G__18933;
count__18572 = G__18934;
i__18573 = G__18935;
continue;
} else {
var G__18940 = seq__18568;
var G__18941 = chunk__18571;
var G__18942 = count__18572;
var G__18943 = (i__18573 + (1));
seq__18568 = G__18940;
chunk__18571 = G__18941;
count__18572 = G__18942;
i__18573 = G__18943;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18568);
if(temp__5804__auto__){
var seq__18568__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18568__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18568__$1);
var G__18947 = cljs.core.chunk_rest(seq__18568__$1);
var G__18948 = c__5568__auto__;
var G__18949 = cljs.core.count(c__5568__auto__);
var G__18950 = (0);
seq__18568 = G__18947;
chunk__18571 = G__18948;
count__18572 = G__18949;
i__18573 = G__18950;
continue;
} else {
var ext = cljs.core.first(seq__18568__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__18955 = cljs.core.next(seq__18568__$1);
var G__18956 = null;
var G__18957 = (0);
var G__18958 = (0);
seq__18568 = G__18955;
chunk__18571 = G__18956;
count__18572 = G__18957;
i__18573 = G__18958;
continue;
} else {
var G__18962 = cljs.core.next(seq__18568__$1);
var G__18963 = null;
var G__18964 = (0);
var G__18965 = (0);
seq__18568 = G__18962;
chunk__18571 = G__18963;
count__18572 = G__18964;
i__18573 = G__18965;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq18538){
var G__18539 = cljs.core.first(seq18538);
var seq18538__$1 = cljs.core.next(seq18538);
var G__18540 = cljs.core.first(seq18538__$1);
var seq18538__$2 = cljs.core.next(seq18538__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18539,G__18540,seq18538__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__18629,p__18630){
var map__18631 = p__18629;
var map__18631__$1 = cljs.core.__destructure_map(map__18631);
var runtime = map__18631__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18631__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__18632 = p__18630;
var map__18632__$1 = cljs.core.__destructure_map(map__18632);
var msg = map__18632__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18632__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__18633 = cljs.core.deref(state_ref);
var map__18633__$1 = cljs.core.__destructure_map(map__18633);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18633__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18633__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__18643){
var map__18644 = p__18643;
var map__18644__$1 = cljs.core.__destructure_map(map__18644);
var runtime = map__18644__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18644__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__18647,msg){
var map__18649 = p__18647;
var map__18649__$1 = cljs.core.__destructure_map(map__18649);
var runtime = map__18649__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18649__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__18690,key,p__18691){
var map__18692 = p__18690;
var map__18692__$1 = cljs.core.__destructure_map(map__18692);
var state = map__18692__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18692__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__18693 = p__18691;
var map__18693__$1 = cljs.core.__destructure_map(map__18693);
var spec = map__18693__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18693__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__18795,key,spec){
var map__18796 = p__18795;
var map__18796__$1 = cljs.core.__destructure_map(map__18796);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18796__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__18801_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__18801_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__18802_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__18802_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__18803_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__18803_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__18804_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__18804_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__18805_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__18805_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__18807,key){
var map__18808 = p__18807;
var map__18808__$1 = cljs.core.__destructure_map(map__18808);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18808__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__18814,msg){
var map__18815 = p__18814;
var map__18815__$1 = cljs.core.__destructure_map(map__18815);
var runtime = map__18815__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18815__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__18861,p__18862){
var map__18863 = p__18861;
var map__18863__$1 = cljs.core.__destructure_map(map__18863);
var runtime = map__18863__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18863__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__18865 = p__18862;
var map__18865__$1 = cljs.core.__destructure_map(map__18865);
var msg = map__18865__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18865__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18865__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__18873 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__18875 = null;
var count__18876 = (0);
var i__18877 = (0);
while(true){
if((i__18877 < count__18876)){
var map__18889 = chunk__18875.cljs$core$IIndexed$_nth$arity$2(null,i__18877);
var map__18889__$1 = cljs.core.__destructure_map(map__18889);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18889__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__18978 = seq__18873;
var G__18979 = chunk__18875;
var G__18980 = count__18876;
var G__18981 = (i__18877 + (1));
seq__18873 = G__18978;
chunk__18875 = G__18979;
count__18876 = G__18980;
i__18877 = G__18981;
continue;
} else {
var G__18982 = seq__18873;
var G__18983 = chunk__18875;
var G__18984 = count__18876;
var G__18985 = (i__18877 + (1));
seq__18873 = G__18982;
chunk__18875 = G__18983;
count__18876 = G__18984;
i__18877 = G__18985;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18873);
if(temp__5804__auto__){
var seq__18873__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18873__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18873__$1);
var G__18986 = cljs.core.chunk_rest(seq__18873__$1);
var G__18987 = c__5568__auto__;
var G__18988 = cljs.core.count(c__5568__auto__);
var G__18989 = (0);
seq__18873 = G__18986;
chunk__18875 = G__18987;
count__18876 = G__18988;
i__18877 = G__18989;
continue;
} else {
var map__18894 = cljs.core.first(seq__18873__$1);
var map__18894__$1 = cljs.core.__destructure_map(map__18894);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18894__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__18991 = cljs.core.next(seq__18873__$1);
var G__18992 = null;
var G__18993 = (0);
var G__18994 = (0);
seq__18873 = G__18991;
chunk__18875 = G__18992;
count__18876 = G__18993;
i__18877 = G__18994;
continue;
} else {
var G__18995 = cljs.core.next(seq__18873__$1);
var G__18996 = null;
var G__18997 = (0);
var G__18998 = (0);
seq__18873 = G__18995;
chunk__18875 = G__18996;
count__18876 = G__18997;
i__18877 = G__18998;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
