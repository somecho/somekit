goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21170 = arguments.length;
var i__5770__auto___21171 = (0);
while(true){
if((i__5770__auto___21171 < len__5769__auto___21170)){
args__5775__auto__.push((arguments[i__5770__auto___21171]));

var G__21172 = (i__5770__auto___21171 + (1));
i__5770__auto___21171 = G__21172;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq20675){
var G__20676 = cljs.core.first(seq20675);
var seq20675__$1 = cljs.core.next(seq20675);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20676,seq20675__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__20679 = cljs.core.seq(sources);
var chunk__20680 = null;
var count__20681 = (0);
var i__20682 = (0);
while(true){
if((i__20682 < count__20681)){
var map__20694 = chunk__20680.cljs$core$IIndexed$_nth$arity$2(null,i__20682);
var map__20694__$1 = cljs.core.__destructure_map(map__20694);
var src = map__20694__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20694__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20694__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20694__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20694__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20695){var e_21173 = e20695;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21173);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21173.message)].join('')));
}

var G__21174 = seq__20679;
var G__21175 = chunk__20680;
var G__21176 = count__20681;
var G__21177 = (i__20682 + (1));
seq__20679 = G__21174;
chunk__20680 = G__21175;
count__20681 = G__21176;
i__20682 = G__21177;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20679);
if(temp__5804__auto__){
var seq__20679__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20679__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20679__$1);
var G__21178 = cljs.core.chunk_rest(seq__20679__$1);
var G__21179 = c__5568__auto__;
var G__21180 = cljs.core.count(c__5568__auto__);
var G__21181 = (0);
seq__20679 = G__21178;
chunk__20680 = G__21179;
count__20681 = G__21180;
i__20682 = G__21181;
continue;
} else {
var map__20696 = cljs.core.first(seq__20679__$1);
var map__20696__$1 = cljs.core.__destructure_map(map__20696);
var src = map__20696__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20696__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20696__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20696__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20696__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20698){var e_21182 = e20698;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21182);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21182.message)].join('')));
}

var G__21183 = cljs.core.next(seq__20679__$1);
var G__21184 = null;
var G__21185 = (0);
var G__21186 = (0);
seq__20679 = G__21183;
chunk__20680 = G__21184;
count__20681 = G__21185;
i__20682 = G__21186;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__20706 = cljs.core.seq(js_requires);
var chunk__20707 = null;
var count__20708 = (0);
var i__20709 = (0);
while(true){
if((i__20709 < count__20708)){
var js_ns = chunk__20707.cljs$core$IIndexed$_nth$arity$2(null,i__20709);
var require_str_21187 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21187);


var G__21188 = seq__20706;
var G__21189 = chunk__20707;
var G__21190 = count__20708;
var G__21191 = (i__20709 + (1));
seq__20706 = G__21188;
chunk__20707 = G__21189;
count__20708 = G__21190;
i__20709 = G__21191;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20706);
if(temp__5804__auto__){
var seq__20706__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20706__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20706__$1);
var G__21192 = cljs.core.chunk_rest(seq__20706__$1);
var G__21193 = c__5568__auto__;
var G__21194 = cljs.core.count(c__5568__auto__);
var G__21195 = (0);
seq__20706 = G__21192;
chunk__20707 = G__21193;
count__20708 = G__21194;
i__20709 = G__21195;
continue;
} else {
var js_ns = cljs.core.first(seq__20706__$1);
var require_str_21196 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21196);


var G__21197 = cljs.core.next(seq__20706__$1);
var G__21198 = null;
var G__21199 = (0);
var G__21200 = (0);
seq__20706 = G__21197;
chunk__20707 = G__21198;
count__20708 = G__21199;
i__20709 = G__21200;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__20729){
var map__20730 = p__20729;
var map__20730__$1 = cljs.core.__destructure_map(map__20730);
var msg = map__20730__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20730__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20730__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20735(s__20736){
return (new cljs.core.LazySeq(null,(function (){
var s__20736__$1 = s__20736;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20736__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__20742 = cljs.core.first(xs__6360__auto__);
var map__20742__$1 = cljs.core.__destructure_map(map__20742);
var src = map__20742__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20742__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20742__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__20736__$1,map__20742,map__20742__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20730,map__20730__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20735_$_iter__20737(s__20738){
return (new cljs.core.LazySeq(null,((function (s__20736__$1,map__20742,map__20742__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20730,map__20730__$1,msg,info,reload_info){
return (function (){
var s__20738__$1 = s__20738;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__20738__$1);
if(temp__5804__auto____$1){
var s__20738__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20738__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__20738__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__20740 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__20739 = (0);
while(true){
if((i__20739 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__20739);
cljs.core.chunk_append(b__20740,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21201 = (i__20739 + (1));
i__20739 = G__21201;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20740),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20735_$_iter__20737(cljs.core.chunk_rest(s__20738__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20740),null);
}
} else {
var warning = cljs.core.first(s__20738__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20735_$_iter__20737(cljs.core.rest(s__20738__$2)));
}
} else {
return null;
}
break;
}
});})(s__20736__$1,map__20742,map__20742__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20730,map__20730__$1,msg,info,reload_info))
,null,null));
});})(s__20736__$1,map__20742,map__20742__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20730,map__20730__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20735(cljs.core.rest(s__20736__$1)));
} else {
var G__21202 = cljs.core.rest(s__20736__$1);
s__20736__$1 = G__21202;
continue;
}
} else {
var G__21203 = cljs.core.rest(s__20736__$1);
s__20736__$1 = G__21203;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__20753_21204 = cljs.core.seq(warnings);
var chunk__20754_21205 = null;
var count__20755_21206 = (0);
var i__20756_21207 = (0);
while(true){
if((i__20756_21207 < count__20755_21206)){
var map__20765_21208 = chunk__20754_21205.cljs$core$IIndexed$_nth$arity$2(null,i__20756_21207);
var map__20765_21209__$1 = cljs.core.__destructure_map(map__20765_21208);
var w_21210 = map__20765_21209__$1;
var msg_21211__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20765_21209__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21212 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20765_21209__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21213 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20765_21209__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21214 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20765_21209__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21214)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21212),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21213),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21211__$1)].join(''));


var G__21215 = seq__20753_21204;
var G__21216 = chunk__20754_21205;
var G__21217 = count__20755_21206;
var G__21218 = (i__20756_21207 + (1));
seq__20753_21204 = G__21215;
chunk__20754_21205 = G__21216;
count__20755_21206 = G__21217;
i__20756_21207 = G__21218;
continue;
} else {
var temp__5804__auto___21219 = cljs.core.seq(seq__20753_21204);
if(temp__5804__auto___21219){
var seq__20753_21220__$1 = temp__5804__auto___21219;
if(cljs.core.chunked_seq_QMARK_(seq__20753_21220__$1)){
var c__5568__auto___21221 = cljs.core.chunk_first(seq__20753_21220__$1);
var G__21222 = cljs.core.chunk_rest(seq__20753_21220__$1);
var G__21223 = c__5568__auto___21221;
var G__21224 = cljs.core.count(c__5568__auto___21221);
var G__21225 = (0);
seq__20753_21204 = G__21222;
chunk__20754_21205 = G__21223;
count__20755_21206 = G__21224;
i__20756_21207 = G__21225;
continue;
} else {
var map__20782_21226 = cljs.core.first(seq__20753_21220__$1);
var map__20782_21227__$1 = cljs.core.__destructure_map(map__20782_21226);
var w_21228 = map__20782_21227__$1;
var msg_21229__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20782_21227__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21230 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20782_21227__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21231 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20782_21227__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21232 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20782_21227__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21232)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21230),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21231),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21229__$1)].join(''));


var G__21233 = cljs.core.next(seq__20753_21220__$1);
var G__21234 = null;
var G__21235 = (0);
var G__21236 = (0);
seq__20753_21204 = G__21233;
chunk__20754_21205 = G__21234;
count__20755_21206 = G__21235;
i__20756_21207 = G__21236;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__20728_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__20728_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__20815){
var map__20816 = p__20815;
var map__20816__$1 = cljs.core.__destructure_map(map__20816);
var msg = map__20816__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20816__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20816__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__20817 = cljs.core.seq(updates);
var chunk__20819 = null;
var count__20820 = (0);
var i__20821 = (0);
while(true){
if((i__20821 < count__20820)){
var path = chunk__20819.cljs$core$IIndexed$_nth$arity$2(null,i__20821);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21042_21237 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21046_21238 = null;
var count__21047_21239 = (0);
var i__21048_21240 = (0);
while(true){
if((i__21048_21240 < count__21047_21239)){
var node_21241 = chunk__21046_21238.cljs$core$IIndexed$_nth$arity$2(null,i__21048_21240);
if(cljs.core.not(node_21241.shadow$old)){
var path_match_21242 = shadow.cljs.devtools.client.browser.match_paths(node_21241.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21242)){
var new_link_21243 = (function (){var G__21074 = node_21241.cloneNode(true);
G__21074.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21242),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21074;
})();
(node_21241.shadow$old = true);

(new_link_21243.onload = ((function (seq__21042_21237,chunk__21046_21238,count__21047_21239,i__21048_21240,seq__20817,chunk__20819,count__20820,i__20821,new_link_21243,path_match_21242,node_21241,path,map__20816,map__20816__$1,msg,updates,reload_info){
return (function (e){
var seq__21075_21244 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21077_21245 = null;
var count__21078_21246 = (0);
var i__21079_21247 = (0);
while(true){
if((i__21079_21247 < count__21078_21246)){
var map__21083_21248 = chunk__21077_21245.cljs$core$IIndexed$_nth$arity$2(null,i__21079_21247);
var map__21083_21249__$1 = cljs.core.__destructure_map(map__21083_21248);
var task_21250 = map__21083_21249__$1;
var fn_str_21251 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21083_21249__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21252 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21083_21249__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21253 = goog.getObjectByName(fn_str_21251,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21252)].join(''));

(fn_obj_21253.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21253.cljs$core$IFn$_invoke$arity$2(path,new_link_21243) : fn_obj_21253.call(null,path,new_link_21243));


var G__21254 = seq__21075_21244;
var G__21255 = chunk__21077_21245;
var G__21256 = count__21078_21246;
var G__21257 = (i__21079_21247 + (1));
seq__21075_21244 = G__21254;
chunk__21077_21245 = G__21255;
count__21078_21246 = G__21256;
i__21079_21247 = G__21257;
continue;
} else {
var temp__5804__auto___21258 = cljs.core.seq(seq__21075_21244);
if(temp__5804__auto___21258){
var seq__21075_21259__$1 = temp__5804__auto___21258;
if(cljs.core.chunked_seq_QMARK_(seq__21075_21259__$1)){
var c__5568__auto___21260 = cljs.core.chunk_first(seq__21075_21259__$1);
var G__21261 = cljs.core.chunk_rest(seq__21075_21259__$1);
var G__21262 = c__5568__auto___21260;
var G__21263 = cljs.core.count(c__5568__auto___21260);
var G__21264 = (0);
seq__21075_21244 = G__21261;
chunk__21077_21245 = G__21262;
count__21078_21246 = G__21263;
i__21079_21247 = G__21264;
continue;
} else {
var map__21084_21265 = cljs.core.first(seq__21075_21259__$1);
var map__21084_21266__$1 = cljs.core.__destructure_map(map__21084_21265);
var task_21267 = map__21084_21266__$1;
var fn_str_21268 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21084_21266__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21269 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21084_21266__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21270 = goog.getObjectByName(fn_str_21268,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21269)].join(''));

(fn_obj_21270.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21270.cljs$core$IFn$_invoke$arity$2(path,new_link_21243) : fn_obj_21270.call(null,path,new_link_21243));


var G__21271 = cljs.core.next(seq__21075_21259__$1);
var G__21272 = null;
var G__21273 = (0);
var G__21274 = (0);
seq__21075_21244 = G__21271;
chunk__21077_21245 = G__21272;
count__21078_21246 = G__21273;
i__21079_21247 = G__21274;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21241);
});})(seq__21042_21237,chunk__21046_21238,count__21047_21239,i__21048_21240,seq__20817,chunk__20819,count__20820,i__20821,new_link_21243,path_match_21242,node_21241,path,map__20816,map__20816__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21242], 0));

goog.dom.insertSiblingAfter(new_link_21243,node_21241);


var G__21275 = seq__21042_21237;
var G__21276 = chunk__21046_21238;
var G__21277 = count__21047_21239;
var G__21278 = (i__21048_21240 + (1));
seq__21042_21237 = G__21275;
chunk__21046_21238 = G__21276;
count__21047_21239 = G__21277;
i__21048_21240 = G__21278;
continue;
} else {
var G__21279 = seq__21042_21237;
var G__21280 = chunk__21046_21238;
var G__21281 = count__21047_21239;
var G__21282 = (i__21048_21240 + (1));
seq__21042_21237 = G__21279;
chunk__21046_21238 = G__21280;
count__21047_21239 = G__21281;
i__21048_21240 = G__21282;
continue;
}
} else {
var G__21283 = seq__21042_21237;
var G__21284 = chunk__21046_21238;
var G__21285 = count__21047_21239;
var G__21286 = (i__21048_21240 + (1));
seq__21042_21237 = G__21283;
chunk__21046_21238 = G__21284;
count__21047_21239 = G__21285;
i__21048_21240 = G__21286;
continue;
}
} else {
var temp__5804__auto___21287 = cljs.core.seq(seq__21042_21237);
if(temp__5804__auto___21287){
var seq__21042_21288__$1 = temp__5804__auto___21287;
if(cljs.core.chunked_seq_QMARK_(seq__21042_21288__$1)){
var c__5568__auto___21289 = cljs.core.chunk_first(seq__21042_21288__$1);
var G__21290 = cljs.core.chunk_rest(seq__21042_21288__$1);
var G__21291 = c__5568__auto___21289;
var G__21292 = cljs.core.count(c__5568__auto___21289);
var G__21293 = (0);
seq__21042_21237 = G__21290;
chunk__21046_21238 = G__21291;
count__21047_21239 = G__21292;
i__21048_21240 = G__21293;
continue;
} else {
var node_21294 = cljs.core.first(seq__21042_21288__$1);
if(cljs.core.not(node_21294.shadow$old)){
var path_match_21295 = shadow.cljs.devtools.client.browser.match_paths(node_21294.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21295)){
var new_link_21296 = (function (){var G__21085 = node_21294.cloneNode(true);
G__21085.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21295),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21085;
})();
(node_21294.shadow$old = true);

(new_link_21296.onload = ((function (seq__21042_21237,chunk__21046_21238,count__21047_21239,i__21048_21240,seq__20817,chunk__20819,count__20820,i__20821,new_link_21296,path_match_21295,node_21294,seq__21042_21288__$1,temp__5804__auto___21287,path,map__20816,map__20816__$1,msg,updates,reload_info){
return (function (e){
var seq__21086_21297 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21088_21298 = null;
var count__21089_21299 = (0);
var i__21090_21300 = (0);
while(true){
if((i__21090_21300 < count__21089_21299)){
var map__21094_21301 = chunk__21088_21298.cljs$core$IIndexed$_nth$arity$2(null,i__21090_21300);
var map__21094_21302__$1 = cljs.core.__destructure_map(map__21094_21301);
var task_21303 = map__21094_21302__$1;
var fn_str_21304 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21094_21302__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21305 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21094_21302__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21306 = goog.getObjectByName(fn_str_21304,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21305)].join(''));

(fn_obj_21306.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21306.cljs$core$IFn$_invoke$arity$2(path,new_link_21296) : fn_obj_21306.call(null,path,new_link_21296));


var G__21307 = seq__21086_21297;
var G__21308 = chunk__21088_21298;
var G__21309 = count__21089_21299;
var G__21310 = (i__21090_21300 + (1));
seq__21086_21297 = G__21307;
chunk__21088_21298 = G__21308;
count__21089_21299 = G__21309;
i__21090_21300 = G__21310;
continue;
} else {
var temp__5804__auto___21311__$1 = cljs.core.seq(seq__21086_21297);
if(temp__5804__auto___21311__$1){
var seq__21086_21312__$1 = temp__5804__auto___21311__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21086_21312__$1)){
var c__5568__auto___21313 = cljs.core.chunk_first(seq__21086_21312__$1);
var G__21314 = cljs.core.chunk_rest(seq__21086_21312__$1);
var G__21315 = c__5568__auto___21313;
var G__21316 = cljs.core.count(c__5568__auto___21313);
var G__21317 = (0);
seq__21086_21297 = G__21314;
chunk__21088_21298 = G__21315;
count__21089_21299 = G__21316;
i__21090_21300 = G__21317;
continue;
} else {
var map__21095_21318 = cljs.core.first(seq__21086_21312__$1);
var map__21095_21319__$1 = cljs.core.__destructure_map(map__21095_21318);
var task_21320 = map__21095_21319__$1;
var fn_str_21321 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21095_21319__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21322 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21095_21319__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21323 = goog.getObjectByName(fn_str_21321,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21322)].join(''));

(fn_obj_21323.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21323.cljs$core$IFn$_invoke$arity$2(path,new_link_21296) : fn_obj_21323.call(null,path,new_link_21296));


var G__21324 = cljs.core.next(seq__21086_21312__$1);
var G__21325 = null;
var G__21326 = (0);
var G__21327 = (0);
seq__21086_21297 = G__21324;
chunk__21088_21298 = G__21325;
count__21089_21299 = G__21326;
i__21090_21300 = G__21327;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21294);
});})(seq__21042_21237,chunk__21046_21238,count__21047_21239,i__21048_21240,seq__20817,chunk__20819,count__20820,i__20821,new_link_21296,path_match_21295,node_21294,seq__21042_21288__$1,temp__5804__auto___21287,path,map__20816,map__20816__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21295], 0));

goog.dom.insertSiblingAfter(new_link_21296,node_21294);


var G__21328 = cljs.core.next(seq__21042_21288__$1);
var G__21329 = null;
var G__21330 = (0);
var G__21331 = (0);
seq__21042_21237 = G__21328;
chunk__21046_21238 = G__21329;
count__21047_21239 = G__21330;
i__21048_21240 = G__21331;
continue;
} else {
var G__21332 = cljs.core.next(seq__21042_21288__$1);
var G__21333 = null;
var G__21334 = (0);
var G__21335 = (0);
seq__21042_21237 = G__21332;
chunk__21046_21238 = G__21333;
count__21047_21239 = G__21334;
i__21048_21240 = G__21335;
continue;
}
} else {
var G__21336 = cljs.core.next(seq__21042_21288__$1);
var G__21337 = null;
var G__21338 = (0);
var G__21339 = (0);
seq__21042_21237 = G__21336;
chunk__21046_21238 = G__21337;
count__21047_21239 = G__21338;
i__21048_21240 = G__21339;
continue;
}
}
} else {
}
}
break;
}


var G__21340 = seq__20817;
var G__21341 = chunk__20819;
var G__21342 = count__20820;
var G__21343 = (i__20821 + (1));
seq__20817 = G__21340;
chunk__20819 = G__21341;
count__20820 = G__21342;
i__20821 = G__21343;
continue;
} else {
var G__21344 = seq__20817;
var G__21345 = chunk__20819;
var G__21346 = count__20820;
var G__21347 = (i__20821 + (1));
seq__20817 = G__21344;
chunk__20819 = G__21345;
count__20820 = G__21346;
i__20821 = G__21347;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20817);
if(temp__5804__auto__){
var seq__20817__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20817__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20817__$1);
var G__21348 = cljs.core.chunk_rest(seq__20817__$1);
var G__21349 = c__5568__auto__;
var G__21350 = cljs.core.count(c__5568__auto__);
var G__21351 = (0);
seq__20817 = G__21348;
chunk__20819 = G__21349;
count__20820 = G__21350;
i__20821 = G__21351;
continue;
} else {
var path = cljs.core.first(seq__20817__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21096_21352 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21100_21353 = null;
var count__21101_21354 = (0);
var i__21102_21355 = (0);
while(true){
if((i__21102_21355 < count__21101_21354)){
var node_21356 = chunk__21100_21353.cljs$core$IIndexed$_nth$arity$2(null,i__21102_21355);
if(cljs.core.not(node_21356.shadow$old)){
var path_match_21357 = shadow.cljs.devtools.client.browser.match_paths(node_21356.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21357)){
var new_link_21358 = (function (){var G__21128 = node_21356.cloneNode(true);
G__21128.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21357),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21128;
})();
(node_21356.shadow$old = true);

(new_link_21358.onload = ((function (seq__21096_21352,chunk__21100_21353,count__21101_21354,i__21102_21355,seq__20817,chunk__20819,count__20820,i__20821,new_link_21358,path_match_21357,node_21356,path,seq__20817__$1,temp__5804__auto__,map__20816,map__20816__$1,msg,updates,reload_info){
return (function (e){
var seq__21129_21359 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21131_21360 = null;
var count__21132_21361 = (0);
var i__21133_21362 = (0);
while(true){
if((i__21133_21362 < count__21132_21361)){
var map__21137_21363 = chunk__21131_21360.cljs$core$IIndexed$_nth$arity$2(null,i__21133_21362);
var map__21137_21364__$1 = cljs.core.__destructure_map(map__21137_21363);
var task_21365 = map__21137_21364__$1;
var fn_str_21366 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21137_21364__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21367 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21137_21364__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21368 = goog.getObjectByName(fn_str_21366,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21367)].join(''));

(fn_obj_21368.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21368.cljs$core$IFn$_invoke$arity$2(path,new_link_21358) : fn_obj_21368.call(null,path,new_link_21358));


var G__21369 = seq__21129_21359;
var G__21370 = chunk__21131_21360;
var G__21371 = count__21132_21361;
var G__21372 = (i__21133_21362 + (1));
seq__21129_21359 = G__21369;
chunk__21131_21360 = G__21370;
count__21132_21361 = G__21371;
i__21133_21362 = G__21372;
continue;
} else {
var temp__5804__auto___21373__$1 = cljs.core.seq(seq__21129_21359);
if(temp__5804__auto___21373__$1){
var seq__21129_21374__$1 = temp__5804__auto___21373__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21129_21374__$1)){
var c__5568__auto___21375 = cljs.core.chunk_first(seq__21129_21374__$1);
var G__21376 = cljs.core.chunk_rest(seq__21129_21374__$1);
var G__21377 = c__5568__auto___21375;
var G__21378 = cljs.core.count(c__5568__auto___21375);
var G__21379 = (0);
seq__21129_21359 = G__21376;
chunk__21131_21360 = G__21377;
count__21132_21361 = G__21378;
i__21133_21362 = G__21379;
continue;
} else {
var map__21138_21380 = cljs.core.first(seq__21129_21374__$1);
var map__21138_21381__$1 = cljs.core.__destructure_map(map__21138_21380);
var task_21382 = map__21138_21381__$1;
var fn_str_21383 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21138_21381__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21384 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21138_21381__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21385 = goog.getObjectByName(fn_str_21383,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21384)].join(''));

(fn_obj_21385.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21385.cljs$core$IFn$_invoke$arity$2(path,new_link_21358) : fn_obj_21385.call(null,path,new_link_21358));


var G__21386 = cljs.core.next(seq__21129_21374__$1);
var G__21387 = null;
var G__21388 = (0);
var G__21389 = (0);
seq__21129_21359 = G__21386;
chunk__21131_21360 = G__21387;
count__21132_21361 = G__21388;
i__21133_21362 = G__21389;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21356);
});})(seq__21096_21352,chunk__21100_21353,count__21101_21354,i__21102_21355,seq__20817,chunk__20819,count__20820,i__20821,new_link_21358,path_match_21357,node_21356,path,seq__20817__$1,temp__5804__auto__,map__20816,map__20816__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21357], 0));

goog.dom.insertSiblingAfter(new_link_21358,node_21356);


var G__21390 = seq__21096_21352;
var G__21391 = chunk__21100_21353;
var G__21392 = count__21101_21354;
var G__21393 = (i__21102_21355 + (1));
seq__21096_21352 = G__21390;
chunk__21100_21353 = G__21391;
count__21101_21354 = G__21392;
i__21102_21355 = G__21393;
continue;
} else {
var G__21394 = seq__21096_21352;
var G__21395 = chunk__21100_21353;
var G__21396 = count__21101_21354;
var G__21397 = (i__21102_21355 + (1));
seq__21096_21352 = G__21394;
chunk__21100_21353 = G__21395;
count__21101_21354 = G__21396;
i__21102_21355 = G__21397;
continue;
}
} else {
var G__21398 = seq__21096_21352;
var G__21399 = chunk__21100_21353;
var G__21400 = count__21101_21354;
var G__21401 = (i__21102_21355 + (1));
seq__21096_21352 = G__21398;
chunk__21100_21353 = G__21399;
count__21101_21354 = G__21400;
i__21102_21355 = G__21401;
continue;
}
} else {
var temp__5804__auto___21402__$1 = cljs.core.seq(seq__21096_21352);
if(temp__5804__auto___21402__$1){
var seq__21096_21403__$1 = temp__5804__auto___21402__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21096_21403__$1)){
var c__5568__auto___21404 = cljs.core.chunk_first(seq__21096_21403__$1);
var G__21405 = cljs.core.chunk_rest(seq__21096_21403__$1);
var G__21406 = c__5568__auto___21404;
var G__21407 = cljs.core.count(c__5568__auto___21404);
var G__21408 = (0);
seq__21096_21352 = G__21405;
chunk__21100_21353 = G__21406;
count__21101_21354 = G__21407;
i__21102_21355 = G__21408;
continue;
} else {
var node_21409 = cljs.core.first(seq__21096_21403__$1);
if(cljs.core.not(node_21409.shadow$old)){
var path_match_21410 = shadow.cljs.devtools.client.browser.match_paths(node_21409.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21410)){
var new_link_21411 = (function (){var G__21139 = node_21409.cloneNode(true);
G__21139.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21410),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21139;
})();
(node_21409.shadow$old = true);

(new_link_21411.onload = ((function (seq__21096_21352,chunk__21100_21353,count__21101_21354,i__21102_21355,seq__20817,chunk__20819,count__20820,i__20821,new_link_21411,path_match_21410,node_21409,seq__21096_21403__$1,temp__5804__auto___21402__$1,path,seq__20817__$1,temp__5804__auto__,map__20816,map__20816__$1,msg,updates,reload_info){
return (function (e){
var seq__21140_21412 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21142_21413 = null;
var count__21143_21414 = (0);
var i__21144_21415 = (0);
while(true){
if((i__21144_21415 < count__21143_21414)){
var map__21148_21416 = chunk__21142_21413.cljs$core$IIndexed$_nth$arity$2(null,i__21144_21415);
var map__21148_21417__$1 = cljs.core.__destructure_map(map__21148_21416);
var task_21418 = map__21148_21417__$1;
var fn_str_21419 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21148_21417__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21420 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21148_21417__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21421 = goog.getObjectByName(fn_str_21419,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21420)].join(''));

(fn_obj_21421.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21421.cljs$core$IFn$_invoke$arity$2(path,new_link_21411) : fn_obj_21421.call(null,path,new_link_21411));


var G__21422 = seq__21140_21412;
var G__21423 = chunk__21142_21413;
var G__21424 = count__21143_21414;
var G__21425 = (i__21144_21415 + (1));
seq__21140_21412 = G__21422;
chunk__21142_21413 = G__21423;
count__21143_21414 = G__21424;
i__21144_21415 = G__21425;
continue;
} else {
var temp__5804__auto___21426__$2 = cljs.core.seq(seq__21140_21412);
if(temp__5804__auto___21426__$2){
var seq__21140_21427__$1 = temp__5804__auto___21426__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21140_21427__$1)){
var c__5568__auto___21428 = cljs.core.chunk_first(seq__21140_21427__$1);
var G__21429 = cljs.core.chunk_rest(seq__21140_21427__$1);
var G__21430 = c__5568__auto___21428;
var G__21431 = cljs.core.count(c__5568__auto___21428);
var G__21432 = (0);
seq__21140_21412 = G__21429;
chunk__21142_21413 = G__21430;
count__21143_21414 = G__21431;
i__21144_21415 = G__21432;
continue;
} else {
var map__21149_21433 = cljs.core.first(seq__21140_21427__$1);
var map__21149_21434__$1 = cljs.core.__destructure_map(map__21149_21433);
var task_21435 = map__21149_21434__$1;
var fn_str_21436 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21149_21434__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21437 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21149_21434__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21438 = goog.getObjectByName(fn_str_21436,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21437)].join(''));

(fn_obj_21438.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21438.cljs$core$IFn$_invoke$arity$2(path,new_link_21411) : fn_obj_21438.call(null,path,new_link_21411));


var G__21439 = cljs.core.next(seq__21140_21427__$1);
var G__21440 = null;
var G__21441 = (0);
var G__21442 = (0);
seq__21140_21412 = G__21439;
chunk__21142_21413 = G__21440;
count__21143_21414 = G__21441;
i__21144_21415 = G__21442;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21409);
});})(seq__21096_21352,chunk__21100_21353,count__21101_21354,i__21102_21355,seq__20817,chunk__20819,count__20820,i__20821,new_link_21411,path_match_21410,node_21409,seq__21096_21403__$1,temp__5804__auto___21402__$1,path,seq__20817__$1,temp__5804__auto__,map__20816,map__20816__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21410], 0));

goog.dom.insertSiblingAfter(new_link_21411,node_21409);


var G__21443 = cljs.core.next(seq__21096_21403__$1);
var G__21444 = null;
var G__21445 = (0);
var G__21446 = (0);
seq__21096_21352 = G__21443;
chunk__21100_21353 = G__21444;
count__21101_21354 = G__21445;
i__21102_21355 = G__21446;
continue;
} else {
var G__21447 = cljs.core.next(seq__21096_21403__$1);
var G__21448 = null;
var G__21449 = (0);
var G__21450 = (0);
seq__21096_21352 = G__21447;
chunk__21100_21353 = G__21448;
count__21101_21354 = G__21449;
i__21102_21355 = G__21450;
continue;
}
} else {
var G__21451 = cljs.core.next(seq__21096_21403__$1);
var G__21452 = null;
var G__21453 = (0);
var G__21454 = (0);
seq__21096_21352 = G__21451;
chunk__21100_21353 = G__21452;
count__21101_21354 = G__21453;
i__21102_21355 = G__21454;
continue;
}
}
} else {
}
}
break;
}


var G__21455 = cljs.core.next(seq__20817__$1);
var G__21456 = null;
var G__21457 = (0);
var G__21458 = (0);
seq__20817 = G__21455;
chunk__20819 = G__21456;
count__20820 = G__21457;
i__20821 = G__21458;
continue;
} else {
var G__21459 = cljs.core.next(seq__20817__$1);
var G__21460 = null;
var G__21461 = (0);
var G__21462 = (0);
seq__20817 = G__21459;
chunk__20819 = G__21460;
count__20820 = G__21461;
i__20821 = G__21462;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__21150){
var map__21151 = p__21150;
var map__21151__$1 = cljs.core.__destructure_map(map__21151);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21151__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__21152){
var map__21153 = p__21152;
var map__21153__$1 = cljs.core.__destructure_map(map__21153);
var _ = map__21153__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21153__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21154,done,error){
var map__21155 = p__21154;
var map__21155__$1 = cljs.core.__destructure_map(map__21155);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21155__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21156,done,error){
var map__21157 = p__21156;
var map__21157__$1 = cljs.core.__destructure_map(map__21157);
var msg = map__21157__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21157__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21157__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21157__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21158){
var map__21159 = p__21158;
var map__21159__$1 = cljs.core.__destructure_map(map__21159);
var src = map__21159__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21159__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21160 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21160) : done.call(null,G__21160));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21161){
var map__21162 = p__21161;
var map__21162__$1 = cljs.core.__destructure_map(map__21162);
var msg__$1 = map__21162__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21162__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21163){var ex = e21163;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21164){
var map__21165 = p__21164;
var map__21165__$1 = cljs.core.__destructure_map(map__21165);
var env = map__21165__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21165__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21166){
var map__21167 = p__21166;
var map__21167__$1 = cljs.core.__destructure_map(map__21167);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21167__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21167__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21168){
var map__21169 = p__21168;
var map__21169__$1 = cljs.core.__destructure_map(map__21169);
var svc = map__21169__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21169__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
