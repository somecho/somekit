goog.provide('shadow.test');
/**
 * like ct/test-vars-block but more generic
 * groups vars by namespace, executes fixtures
 */
shadow.test.test_vars_grouped_block = (function shadow$test$test_vars_grouped_block(vars){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__20731){
var vec__20732 = p__20731;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20732,(0),null);
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20732,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
}),(function (){
return cljs.test.block((function (){var env = cljs.test.get_current_env();
var once_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167),ns], null));
var each_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977),ns], null));
var G__20741 = cljs.test.execution_strategy(once_fixtures,each_fixtures);
var G__20741__$1 = (((G__20741 instanceof cljs.core.Keyword))?G__20741.fqn:null);
switch (G__20741__$1) {
case "async":
return cljs.test.wrap_map_fixtures(once_fixtures,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.test.wrap_map_fixtures,each_fixtures),cljs.test.test_var_block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),cljs.core.meta),vars__$1)], 0)));

break;
case "sync":
var each_fixture_fn = cljs.test.join_fixtures(each_fixtures);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var G__20744 = (function (){
var seq__20745 = cljs.core.seq(vars__$1);
var chunk__20746 = null;
var count__20747 = (0);
var i__20748 = (0);
while(true){
if((i__20748 < count__20747)){
var v = chunk__20746.cljs$core$IIndexed$_nth$arity$2(null,i__20748);
var temp__5804__auto___20900 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5804__auto___20900)){
var t_20901 = temp__5804__auto___20900;
var G__20752_20902 = ((function (seq__20745,chunk__20746,count__20747,i__20748,t_20901,temp__5804__auto___20900,v,each_fixture_fn,G__20741,G__20741__$1,env,once_fixtures,each_fixtures,vec__20732,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_20901)));
});})(seq__20745,chunk__20746,count__20747,i__20748,t_20901,temp__5804__auto___20900,v,each_fixture_fn,G__20741,G__20741__$1,env,once_fixtures,each_fixtures,vec__20732,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__20752_20902) : each_fixture_fn.call(null,G__20752_20902));
} else {
}


var G__20909 = seq__20745;
var G__20910 = chunk__20746;
var G__20911 = count__20747;
var G__20912 = (i__20748 + (1));
seq__20745 = G__20909;
chunk__20746 = G__20910;
count__20747 = G__20911;
i__20748 = G__20912;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20745);
if(temp__5804__auto__){
var seq__20745__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20745__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20745__$1);
var G__20913 = cljs.core.chunk_rest(seq__20745__$1);
var G__20914 = c__5568__auto__;
var G__20915 = cljs.core.count(c__5568__auto__);
var G__20916 = (0);
seq__20745 = G__20913;
chunk__20746 = G__20914;
count__20747 = G__20915;
i__20748 = G__20916;
continue;
} else {
var v = cljs.core.first(seq__20745__$1);
var temp__5804__auto___20917__$1 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5804__auto___20917__$1)){
var t_20919 = temp__5804__auto___20917__$1;
var G__20757_20920 = ((function (seq__20745,chunk__20746,count__20747,i__20748,t_20919,temp__5804__auto___20917__$1,v,seq__20745__$1,temp__5804__auto__,each_fixture_fn,G__20741,G__20741__$1,env,once_fixtures,each_fixtures,vec__20732,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_20919)));
});})(seq__20745,chunk__20746,count__20747,i__20748,t_20919,temp__5804__auto___20917__$1,v,seq__20745__$1,temp__5804__auto__,each_fixture_fn,G__20741,G__20741__$1,env,once_fixtures,each_fixtures,vec__20732,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__20757_20920) : each_fixture_fn.call(null,G__20757_20920));
} else {
}


var G__20921 = cljs.core.next(seq__20745__$1);
var G__20922 = null;
var G__20923 = (0);
var G__20924 = (0);
seq__20745 = G__20921;
chunk__20746 = G__20922;
count__20747 = G__20923;
i__20748 = G__20924;
continue;
}
} else {
return null;
}
}
break;
}
});
var fexpr__20743 = cljs.test.join_fixtures(once_fixtures);
return (fexpr__20743.cljs$core$IFn$_invoke$arity$1 ? fexpr__20743.cljs$core$IFn$_invoke$arity$1(G__20744) : fexpr__20743.call(null,G__20744));
})], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20741__$1)].join('')));

}
})());
}),(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
})], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by((function (p1__20727_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__20727_SHARP_));
}),vars))], 0));
});
/**
 * Like test-ns, but returns a block for further composition and
 *   later execution.  Does not clear the current env.
 */
shadow.test.test_ns_block = (function shadow$test$test_ns_block(ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

var map__20760 = shadow.test.env.get_test_ns_info(ns);
var map__20760__$1 = cljs.core.__destructure_map(map__20760);
var test_ns = map__20760__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20760__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
if(cljs.core.not(test_ns)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)," not found, no tests to run."].join('')], 0));
})], null);
} else {
return shadow.test.test_vars_grouped_block(vars);
}
});
shadow.test.prepare_test_run = (function shadow$test$prepare_test_run(p__20764,vars){
var map__20766 = p__20764;
var map__20766__$1 = cljs.core.__destructure_map(map__20766);
var env = map__20766__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20766__$1,new cljs.core.Keyword(null,"report-fn","report-fn",-549046115));
var orig_report = cljs.test.report;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061),orig_report));

if(cljs.core.truth_(report_fn)){
(cljs.test.report = report_fn);
} else {
}

var seq__20767_20928 = cljs.core.seq(shadow.test.env.get_tests());
var chunk__20769_20929 = null;
var count__20770_20930 = (0);
var i__20771_20931 = (0);
while(true){
if((i__20771_20931 < count__20770_20930)){
var vec__20811_20932 = chunk__20769_20929.cljs$core$IIndexed$_nth$arity$2(null,i__20771_20931);
var test_ns_20933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20811_20932,(0),null);
var ns_info_20934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20811_20932,(1),null);
var map__20814_20935 = ns_info_20934;
var map__20814_20936__$1 = cljs.core.__destructure_map(map__20814_20935);
var fixtures_20937 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20814_20936__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5804__auto___20938 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_20937);
if(cljs.core.truth_(temp__5804__auto___20938)){
var fix_20939 = temp__5804__auto___20938;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_20933,fix_20939], 0));
} else {
}

var temp__5804__auto___20940 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_20937);
if(cljs.core.truth_(temp__5804__auto___20940)){
var fix_20941 = temp__5804__auto___20940;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_20933,fix_20941], 0));
} else {
}


var G__20942 = seq__20767_20928;
var G__20943 = chunk__20769_20929;
var G__20944 = count__20770_20930;
var G__20945 = (i__20771_20931 + (1));
seq__20767_20928 = G__20942;
chunk__20769_20929 = G__20943;
count__20770_20930 = G__20944;
i__20771_20931 = G__20945;
continue;
} else {
var temp__5804__auto___20946 = cljs.core.seq(seq__20767_20928);
if(temp__5804__auto___20946){
var seq__20767_20947__$1 = temp__5804__auto___20946;
if(cljs.core.chunked_seq_QMARK_(seq__20767_20947__$1)){
var c__5568__auto___20948 = cljs.core.chunk_first(seq__20767_20947__$1);
var G__20949 = cljs.core.chunk_rest(seq__20767_20947__$1);
var G__20950 = c__5568__auto___20948;
var G__20951 = cljs.core.count(c__5568__auto___20948);
var G__20952 = (0);
seq__20767_20928 = G__20949;
chunk__20769_20929 = G__20950;
count__20770_20930 = G__20951;
i__20771_20931 = G__20952;
continue;
} else {
var vec__20846_20953 = cljs.core.first(seq__20767_20947__$1);
var test_ns_20954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20846_20953,(0),null);
var ns_info_20955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20846_20953,(1),null);
var map__20850_20956 = ns_info_20955;
var map__20850_20957__$1 = cljs.core.__destructure_map(map__20850_20956);
var fixtures_20958 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20850_20957__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5804__auto___20959__$1 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_20958);
if(cljs.core.truth_(temp__5804__auto___20959__$1)){
var fix_20960 = temp__5804__auto___20959__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_20954,fix_20960], 0));
} else {
}

var temp__5804__auto___20961__$1 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_20958);
if(cljs.core.truth_(temp__5804__auto___20961__$1)){
var fix_20962 = temp__5804__auto___20961__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_20954,fix_20962], 0));
} else {
}


var G__20963 = cljs.core.next(seq__20767_20947__$1);
var G__20964 = null;
var G__20965 = (0);
var G__20966 = (0);
seq__20767_20928 = G__20963;
chunk__20769_20929 = G__20964;
count__20770_20930 = G__20965;
i__20771_20931 = G__20966;
continue;
}
} else {
}
}
break;
}

return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-run-tests","begin-run-tests",309363062),new cljs.core.Keyword(null,"var-count","var-count",-1513152110),cljs.core.count(vars),new cljs.core.Keyword(null,"ns-count","ns-count",-1269070724),cljs.core.count(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20763_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__20763_SHARP_));
}),vars)))], null));
})], null);
});
shadow.test.finish_test_run = (function shadow$test$finish_test_run(block){
if(cljs.core.vector_QMARK_(block)){
} else {
throw (new Error("Assert failed: (vector? block)"));
}

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(block,(function (){
var map__20863 = cljs.test.get_current_env();
var map__20863__$1 = cljs.core.__destructure_map(map__20863);
var env = map__20863__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20863__$1,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061));
var report_counters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20863__$1,new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242));
cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952)));

cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return (cljs.test.report = report_fn);
}));
});
/**
 * tests all vars grouped by namespace, expects seq of test vars, can be obtained from env
 */
shadow.test.run_test_vars = (function shadow$test$run_test_vars(var_args){
var G__20868 = arguments.length;
switch (G__20868) {
case 1:
return shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$1 = (function (test_vars){
return shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$2(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),test_vars);
}));

(shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$2 = (function (env,vars){
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.run_test_vars.cljs$lang$maxFixedArity = 2);

/**
 * test all vars for given namespace symbol
 */
shadow.test.test_ns = (function shadow$test$test_ns(var_args){
var G__20872 = arguments.length;
switch (G__20872) {
case 1:
return shadow.test.test_ns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.test_ns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.test_ns.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return shadow.test.test_ns.cljs$core$IFn$_invoke$arity$2(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),ns);
}));

(shadow.test.test_ns.cljs$core$IFn$_invoke$arity$2 = (function (env,ns){
var map__20875 = shadow.test.env.get_test_ns_info(ns);
var map__20875__$1 = cljs.core.__destructure_map(map__20875);
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20875__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.test_ns.cljs$lang$maxFixedArity = 2);

/**
 * test all vars in specified namespace symbol set
 */
shadow.test.run_tests = (function shadow$test$run_tests(var_args){
var G__20885 = arguments.length;
switch (G__20885) {
case 0:
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.run_tests.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$1(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0());
}));

(shadow.test.run_tests.cljs$core$IFn$_invoke$arity$1 = (function (env){
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,shadow.test.env.get_test_namespaces());
}));

(shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2 = (function (env,namespaces){
if(cljs.core.set_QMARK_(namespaces)){
} else {
throw (new Error("Assert failed: (set? namespaces)"));
}

var vars = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__20878_SHARP_){
return cljs.core.contains_QMARK_(namespaces,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__20878_SHARP_)));
}),shadow.test.env.get_test_vars());
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.run_tests.cljs$lang$maxFixedArity = 2);

/**
 * Runs all tests in all namespaces; prints results.
 *   Optional argument is a regular expression; only namespaces with
 *   names matching the regular expression (with re-matches) will be
 *   tested.
 */
shadow.test.run_all_tests = (function shadow$test$run_all_tests(var_args){
var G__20894 = arguments.length;
switch (G__20894) {
case 0:
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),null);
}));

(shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$1 = (function (env){
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2(env,null);
}));

(shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2 = (function (env,re){
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__20890_SHARP_){
var or__5045__auto__ = (re == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return cljs.core.re_matches(re,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__20890_SHARP_));
}
}),shadow.test.env.get_test_namespaces())));
}));

(shadow.test.run_all_tests.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=shadow.test.js.map
