goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19082){
var map__19083 = p__19082;
var map__19083__$1 = cljs.core.__destructure_map(map__19083);
var m = map__19083__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19083__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19083__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19084_19422 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19085_19423 = null;
var count__19086_19424 = (0);
var i__19087_19425 = (0);
while(true){
if((i__19087_19425 < count__19086_19424)){
var f_19426 = chunk__19085_19423.cljs$core$IIndexed$_nth$arity$2(null,i__19087_19425);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19426], 0));


var G__19427 = seq__19084_19422;
var G__19428 = chunk__19085_19423;
var G__19429 = count__19086_19424;
var G__19430 = (i__19087_19425 + (1));
seq__19084_19422 = G__19427;
chunk__19085_19423 = G__19428;
count__19086_19424 = G__19429;
i__19087_19425 = G__19430;
continue;
} else {
var temp__5804__auto___19431 = cljs.core.seq(seq__19084_19422);
if(temp__5804__auto___19431){
var seq__19084_19432__$1 = temp__5804__auto___19431;
if(cljs.core.chunked_seq_QMARK_(seq__19084_19432__$1)){
var c__5568__auto___19433 = cljs.core.chunk_first(seq__19084_19432__$1);
var G__19434 = cljs.core.chunk_rest(seq__19084_19432__$1);
var G__19435 = c__5568__auto___19433;
var G__19436 = cljs.core.count(c__5568__auto___19433);
var G__19437 = (0);
seq__19084_19422 = G__19434;
chunk__19085_19423 = G__19435;
count__19086_19424 = G__19436;
i__19087_19425 = G__19437;
continue;
} else {
var f_19438 = cljs.core.first(seq__19084_19432__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19438], 0));


var G__19439 = cljs.core.next(seq__19084_19432__$1);
var G__19440 = null;
var G__19441 = (0);
var G__19442 = (0);
seq__19084_19422 = G__19439;
chunk__19085_19423 = G__19440;
count__19086_19424 = G__19441;
i__19087_19425 = G__19442;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19443 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19443], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19443)))?cljs.core.second(arglists_19443):arglists_19443)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19100_19444 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19101_19445 = null;
var count__19102_19446 = (0);
var i__19103_19447 = (0);
while(true){
if((i__19103_19447 < count__19102_19446)){
var vec__19114_19448 = chunk__19101_19445.cljs$core$IIndexed$_nth$arity$2(null,i__19103_19447);
var name_19449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19114_19448,(0),null);
var map__19117_19450 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19114_19448,(1),null);
var map__19117_19451__$1 = cljs.core.__destructure_map(map__19117_19450);
var doc_19452 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19117_19451__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19453 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19117_19451__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19449], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19453], 0));

if(cljs.core.truth_(doc_19452)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19452], 0));
} else {
}


var G__19454 = seq__19100_19444;
var G__19455 = chunk__19101_19445;
var G__19456 = count__19102_19446;
var G__19457 = (i__19103_19447 + (1));
seq__19100_19444 = G__19454;
chunk__19101_19445 = G__19455;
count__19102_19446 = G__19456;
i__19103_19447 = G__19457;
continue;
} else {
var temp__5804__auto___19458 = cljs.core.seq(seq__19100_19444);
if(temp__5804__auto___19458){
var seq__19100_19459__$1 = temp__5804__auto___19458;
if(cljs.core.chunked_seq_QMARK_(seq__19100_19459__$1)){
var c__5568__auto___19461 = cljs.core.chunk_first(seq__19100_19459__$1);
var G__19462 = cljs.core.chunk_rest(seq__19100_19459__$1);
var G__19463 = c__5568__auto___19461;
var G__19464 = cljs.core.count(c__5568__auto___19461);
var G__19465 = (0);
seq__19100_19444 = G__19462;
chunk__19101_19445 = G__19463;
count__19102_19446 = G__19464;
i__19103_19447 = G__19465;
continue;
} else {
var vec__19119_19466 = cljs.core.first(seq__19100_19459__$1);
var name_19467 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19119_19466,(0),null);
var map__19122_19468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19119_19466,(1),null);
var map__19122_19469__$1 = cljs.core.__destructure_map(map__19122_19468);
var doc_19470 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19122_19469__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19471 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19122_19469__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19467], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19471], 0));

if(cljs.core.truth_(doc_19470)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19470], 0));
} else {
}


var G__19476 = cljs.core.next(seq__19100_19459__$1);
var G__19477 = null;
var G__19478 = (0);
var G__19479 = (0);
seq__19100_19444 = G__19476;
chunk__19101_19445 = G__19477;
count__19102_19446 = G__19478;
i__19103_19447 = G__19479;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__19132 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19133 = null;
var count__19134 = (0);
var i__19135 = (0);
while(true){
if((i__19135 < count__19134)){
var role = chunk__19133.cljs$core$IIndexed$_nth$arity$2(null,i__19135);
var temp__5804__auto___19484__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19484__$1)){
var spec_19485 = temp__5804__auto___19484__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19485)], 0));
} else {
}


var G__19486 = seq__19132;
var G__19487 = chunk__19133;
var G__19488 = count__19134;
var G__19489 = (i__19135 + (1));
seq__19132 = G__19486;
chunk__19133 = G__19487;
count__19134 = G__19488;
i__19135 = G__19489;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__19132);
if(temp__5804__auto____$1){
var seq__19132__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19132__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19132__$1);
var G__19495 = cljs.core.chunk_rest(seq__19132__$1);
var G__19496 = c__5568__auto__;
var G__19497 = cljs.core.count(c__5568__auto__);
var G__19498 = (0);
seq__19132 = G__19495;
chunk__19133 = G__19496;
count__19134 = G__19497;
i__19135 = G__19498;
continue;
} else {
var role = cljs.core.first(seq__19132__$1);
var temp__5804__auto___19499__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19499__$2)){
var spec_19500 = temp__5804__auto___19499__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19500)], 0));
} else {
}


var G__19501 = cljs.core.next(seq__19132__$1);
var G__19502 = null;
var G__19503 = (0);
var G__19504 = (0);
seq__19132 = G__19501;
chunk__19133 = G__19502;
count__19134 = G__19503;
i__19135 = G__19504;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__19505 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__19506 = cljs.core.ex_cause(t);
via = G__19505;
t = G__19506;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__19246 = datafied_throwable;
var map__19246__$1 = cljs.core.__destructure_map(map__19246);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19246__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19246__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19246__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19247 = cljs.core.last(via);
var map__19247__$1 = cljs.core.__destructure_map(map__19247);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19247__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19247__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19247__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19248 = data;
var map__19248__$1 = cljs.core.__destructure_map(map__19248);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19248__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19248__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19248__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19249 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__19249__$1 = cljs.core.__destructure_map(map__19249);
var top_data = map__19249__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19249__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__19254 = phase;
var G__19254__$1 = (((G__19254 instanceof cljs.core.Keyword))?G__19254.fqn:null);
switch (G__19254__$1) {
case "read-source":
var map__19262 = data;
var map__19262__$1 = cljs.core.__destructure_map(map__19262);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19262__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19262__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19275 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__19275__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19275,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19275);
var G__19275__$2 = (cljs.core.truth_((function (){var fexpr__19280 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19280.cljs$core$IFn$_invoke$arity$1 ? fexpr__19280.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19280.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19275__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19275__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19275__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19275__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19281 = top_data;
var G__19281__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19281,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19281);
var G__19281__$2 = (cljs.core.truth_((function (){var fexpr__19283 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19283.cljs$core$IFn$_invoke$arity$1 ? fexpr__19283.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19283.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19281__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19281__$1);
var G__19281__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19281__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19281__$2);
var G__19281__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19281__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19281__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19281__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19281__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19286 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19286,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19286,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19286,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19286,(3),null);
var G__19289 = top_data;
var G__19289__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19289,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19289);
var G__19289__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19289__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19289__$1);
var G__19289__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19289__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19289__$2);
var G__19289__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19289__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19289__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19289__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19289__$4;
}

break;
case "execution":
var vec__19291 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19291,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19291,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19291,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19291,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__19244_SHARP_){
var or__5045__auto__ = (p1__19244_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__19294 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19294.cljs$core$IFn$_invoke$arity$1 ? fexpr__19294.cljs$core$IFn$_invoke$arity$1(p1__19244_SHARP_) : fexpr__19294.call(null,p1__19244_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__19295 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19295__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19295,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19295);
var G__19295__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19295__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19295__$1);
var G__19295__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19295__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19295__$2);
var G__19295__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19295__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19295__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19295__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19295__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19254__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19337){
var map__19340 = p__19337;
var map__19340__$1 = cljs.core.__destructure_map(map__19340);
var triage_data = map__19340__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19340__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19340__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19340__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19340__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19340__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19340__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19340__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19340__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__19347 = phase;
var G__19347__$1 = (((G__19347 instanceof cljs.core.Keyword))?G__19347.fqn:null);
switch (G__19347__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19348 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19349 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19350 = loc;
var G__19351 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19355_19519 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19356_19520 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19357_19521 = true;
var _STAR_print_fn_STAR__temp_val__19358_19522 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19357_19521);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19358_19522);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19335_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19335_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19356_19520);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19355_19519);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19348,G__19349,G__19350,G__19351) : format.call(null,G__19348,G__19349,G__19350,G__19351));

break;
case "macroexpansion":
var G__19363 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19364 = cause_type;
var G__19365 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19366 = loc;
var G__19367 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19363,G__19364,G__19365,G__19366,G__19367) : format.call(null,G__19363,G__19364,G__19365,G__19366,G__19367));

break;
case "compile-syntax-check":
var G__19375 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19376 = cause_type;
var G__19377 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19378 = loc;
var G__19379 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19375,G__19376,G__19377,G__19378,G__19379) : format.call(null,G__19375,G__19376,G__19377,G__19378,G__19379));

break;
case "compilation":
var G__19381 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19382 = cause_type;
var G__19383 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19384 = loc;
var G__19385 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19381,G__19382,G__19383,G__19384,G__19385) : format.call(null,G__19381,G__19382,G__19383,G__19384,G__19385));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19386 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19387 = symbol;
var G__19388 = loc;
var G__19389 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19394_19530 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19397_19531 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19398_19532 = true;
var _STAR_print_fn_STAR__temp_val__19399_19533 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19398_19532);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19399_19533);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19336_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19336_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19397_19531);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19394_19530);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19386,G__19387,G__19388,G__19389) : format.call(null,G__19386,G__19387,G__19388,G__19389));
} else {
var G__19406 = "Execution error%s at %s(%s).\n%s\n";
var G__19407 = cause_type;
var G__19408 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19409 = loc;
var G__19410 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19406,G__19407,G__19408,G__19409,G__19410) : format.call(null,G__19406,G__19407,G__19408,G__19409,G__19410));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19347__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
