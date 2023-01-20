goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__13578 = arguments.length;
switch (G__13578) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13585 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13585 = (function (f,blockable,meta13586){
this.f = f;
this.blockable = blockable;
this.meta13586 = meta13586;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13587,meta13586__$1){
var self__ = this;
var _13587__$1 = this;
return (new cljs.core.async.t_cljs$core$async13585(self__.f,self__.blockable,meta13586__$1));
}));

(cljs.core.async.t_cljs$core$async13585.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13587){
var self__ = this;
var _13587__$1 = this;
return self__.meta13586;
}));

(cljs.core.async.t_cljs$core$async13585.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13585.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13585.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async13585.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async13585.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta13586","meta13586",-728470335,null)], null);
}));

(cljs.core.async.t_cljs$core$async13585.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13585.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13585");

(cljs.core.async.t_cljs$core$async13585.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13585");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13585.
 */
cljs.core.async.__GT_t_cljs$core$async13585 = (function cljs$core$async$__GT_t_cljs$core$async13585(f__$1,blockable__$1,meta13586){
return (new cljs.core.async.t_cljs$core$async13585(f__$1,blockable__$1,meta13586));
});

}

return (new cljs.core.async.t_cljs$core$async13585(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__13623 = arguments.length;
switch (G__13623) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__13647 = arguments.length;
switch (G__13647) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__13662 = arguments.length;
switch (G__13662) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_16718 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16718) : fn1.call(null,val_16718));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16718) : fn1.call(null,val_16718));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__13664 = arguments.length;
switch (G__13664) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___16723 = n;
var x_16724 = (0);
while(true){
if((x_16724 < n__5636__auto___16723)){
(a[x_16724] = x_16724);

var G__16725 = (x_16724 + (1));
x_16724 = G__16725;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13675 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13675 = (function (flag,meta13676){
this.flag = flag;
this.meta13676 = meta13676;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13675.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13677,meta13676__$1){
var self__ = this;
var _13677__$1 = this;
return (new cljs.core.async.t_cljs$core$async13675(self__.flag,meta13676__$1));
}));

(cljs.core.async.t_cljs$core$async13675.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13677){
var self__ = this;
var _13677__$1 = this;
return self__.meta13676;
}));

(cljs.core.async.t_cljs$core$async13675.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13675.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async13675.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13675.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async13675.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta13676","meta13676",-1221247671,null)], null);
}));

(cljs.core.async.t_cljs$core$async13675.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13675.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13675");

(cljs.core.async.t_cljs$core$async13675.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13675");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13675.
 */
cljs.core.async.__GT_t_cljs$core$async13675 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async13675(flag__$1,meta13676){
return (new cljs.core.async.t_cljs$core$async13675(flag__$1,meta13676));
});

}

return (new cljs.core.async.t_cljs$core$async13675(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13691 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13691 = (function (flag,cb,meta13692){
this.flag = flag;
this.cb = cb;
this.meta13692 = meta13692;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13691.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13693,meta13692__$1){
var self__ = this;
var _13693__$1 = this;
return (new cljs.core.async.t_cljs$core$async13691(self__.flag,self__.cb,meta13692__$1));
}));

(cljs.core.async.t_cljs$core$async13691.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13693){
var self__ = this;
var _13693__$1 = this;
return self__.meta13692;
}));

(cljs.core.async.t_cljs$core$async13691.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13691.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async13691.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13691.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async13691.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta13692","meta13692",-1106881814,null)], null);
}));

(cljs.core.async.t_cljs$core$async13691.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13691.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13691");

(cljs.core.async.t_cljs$core$async13691.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13691");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13691.
 */
cljs.core.async.__GT_t_cljs$core$async13691 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async13691(flag__$1,cb__$1,meta13692){
return (new cljs.core.async.t_cljs$core$async13691(flag__$1,cb__$1,meta13692));
});

}

return (new cljs.core.async.t_cljs$core$async13691(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13705_SHARP_){
var G__13717 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13705_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13717) : fret.call(null,G__13717));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13711_SHARP_){
var G__13718 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13711_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13718) : fret.call(null,G__13718));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__16761 = (i + (1));
i = G__16761;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___16765 = arguments.length;
var i__5770__auto___16766 = (0);
while(true){
if((i__5770__auto___16766 < len__5769__auto___16765)){
args__5775__auto__.push((arguments[i__5770__auto___16766]));

var G__16767 = (i__5770__auto___16766 + (1));
i__5770__auto___16766 = G__16767;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13740){
var map__13741 = p__13740;
var map__13741__$1 = cljs.core.__destructure_map(map__13741);
var opts = map__13741__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13730){
var G__13731 = cljs.core.first(seq13730);
var seq13730__$1 = cljs.core.next(seq13730);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13731,seq13730__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__13753 = arguments.length;
switch (G__13753) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__13484__auto___16777 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13485__auto__ = (function (){var switch__13247__auto__ = (function (state_13835){
var state_val_13839 = (state_13835[(1)]);
if((state_val_13839 === (7))){
var inst_13826 = (state_13835[(2)]);
var state_13835__$1 = state_13835;
var statearr_13862_16779 = state_13835__$1;
(statearr_13862_16779[(2)] = inst_13826);

(statearr_13862_16779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13839 === (1))){
var state_13835__$1 = state_13835;
var statearr_13870_16780 = state_13835__$1;
(statearr_13870_16780[(2)] = null);

(statearr_13870_16780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13839 === (4))){
var inst_13787 = (state_13835[(7)]);
var inst_13787__$1 = (state_13835[(2)]);
var inst_13798 = (inst_13787__$1 == null);
var state_13835__$1 = (function (){var statearr_13881 = state_13835;
(statearr_13881[(7)] = inst_13787__$1);

return statearr_13881;
})();
if(cljs.core.truth_(inst_13798)){
var statearr_13883_16781 = state_13835__$1;
(statearr_13883_16781[(1)] = (5));

} else {
var statearr_13884_16782 = state_13835__$1;
(statearr_13884_16782[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13839 === (13))){
var state_13835__$1 = state_13835;
var statearr_13894_16783 = state_13835__$1;
(statearr_13894_16783[(2)] = null);

(statearr_13894_16783[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13839 === (6))){
var inst_13787 = (state_13835[(7)]);
var state_13835__$1 = state_13835;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13835__$1,(11),to,inst_13787);
} else {
if((state_val_13839 === (3))){
var inst_13829 = (state_13835[(2)]);
var state_13835__$1 = state_13835;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13835__$1,inst_13829);
} else {
if((state_val_13839 === (12))){
var state_13835__$1 = state_13835;
var statearr_13922_16786 = state_13835__$1;
(statearr_13922_16786[(2)] = null);

(statearr_13922_16786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13839 === (2))){
var state_13835__$1 = state_13835;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13835__$1,(4),from);
} else {
if((state_val_13839 === (11))){
var inst_13819 = (state_13835[(2)]);
var state_13835__$1 = state_13835;
if(cljs.core.truth_(inst_13819)){
var statearr_13925_16791 = state_13835__$1;
(statearr_13925_16791[(1)] = (12));

} else {
var statearr_13926_16793 = state_13835__$1;
(statearr_13926_16793[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13839 === (9))){
var state_13835__$1 = state_13835;
var statearr_13928_16794 = state_13835__$1;
(statearr_13928_16794[(2)] = null);

(statearr_13928_16794[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13839 === (5))){
var state_13835__$1 = state_13835;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13939_16795 = state_13835__$1;
(statearr_13939_16795[(1)] = (8));

} else {
var statearr_13942_16796 = state_13835__$1;
(statearr_13942_16796[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13839 === (14))){
var inst_13824 = (state_13835[(2)]);
var state_13835__$1 = state_13835;
var statearr_13952_16800 = state_13835__$1;
(statearr_13952_16800[(2)] = inst_13824);

(statearr_13952_16800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13839 === (10))){
var inst_13815 = (state_13835[(2)]);
var state_13835__$1 = state_13835;
var statearr_13961_16801 = state_13835__$1;
(statearr_13961_16801[(2)] = inst_13815);

(statearr_13961_16801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13839 === (8))){
var inst_13812 = cljs.core.async.close_BANG_(to);
var state_13835__$1 = state_13835;
var statearr_13968_16804 = state_13835__$1;
(statearr_13968_16804[(2)] = inst_13812);

(statearr_13968_16804[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13248__auto__ = null;
var cljs$core$async$state_machine__13248__auto____0 = (function (){
var statearr_13981 = [null,null,null,null,null,null,null,null];
(statearr_13981[(0)] = cljs$core$async$state_machine__13248__auto__);

(statearr_13981[(1)] = (1));

return statearr_13981;
});
var cljs$core$async$state_machine__13248__auto____1 = (function (state_13835){
while(true){
var ret_value__13249__auto__ = (function (){try{while(true){
var result__13250__auto__ = switch__13247__auto__(state_13835);
if(cljs.core.keyword_identical_QMARK_(result__13250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13250__auto__;
}
break;
}
}catch (e13982){var ex__13251__auto__ = e13982;
var statearr_13983_16805 = state_13835;
(statearr_13983_16805[(2)] = ex__13251__auto__);


if(cljs.core.seq((state_13835[(4)]))){
var statearr_13984_16807 = state_13835;
(statearr_13984_16807[(1)] = cljs.core.first((state_13835[(4)])));

} else {
throw ex__13251__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16814 = state_13835;
state_13835 = G__16814;
continue;
} else {
return ret_value__13249__auto__;
}
break;
}
});
cljs$core$async$state_machine__13248__auto__ = function(state_13835){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13248__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13248__auto____1.call(this,state_13835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13248__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13248__auto____0;
cljs$core$async$state_machine__13248__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13248__auto____1;
return cljs$core$async$state_machine__13248__auto__;
})()
})();
var state__13486__auto__ = (function (){var statearr_13986 = f__13485__auto__();
(statearr_13986[(6)] = c__13484__auto___16777);

return statearr_13986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13486__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__13989){
var vec__13990 = p__13989;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13990,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13990,(1),null);
var job = vec__13990;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__13484__auto___16821 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13485__auto__ = (function (){var switch__13247__auto__ = (function (state_13998){
var state_val_13999 = (state_13998[(1)]);
if((state_val_13999 === (1))){
var state_13998__$1 = state_13998;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13998__$1,(2),res,v);
} else {
if((state_val_13999 === (2))){
var inst_13995 = (state_13998[(2)]);
var inst_13996 = cljs.core.async.close_BANG_(res);
var state_13998__$1 = (function (){var statearr_14004 = state_13998;
(statearr_14004[(7)] = inst_13995);

return statearr_14004;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_13998__$1,inst_13996);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13248__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13248__auto____0 = (function (){
var statearr_14005 = [null,null,null,null,null,null,null,null];
(statearr_14005[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13248__auto__);

(statearr_14005[(1)] = (1));

return statearr_14005;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13248__auto____1 = (function (state_13998){
while(true){
var ret_value__13249__auto__ = (function (){try{while(true){
var result__13250__auto__ = switch__13247__auto__(state_13998);
if(cljs.core.keyword_identical_QMARK_(result__13250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13250__auto__;
}
break;
}
}catch (e14006){var ex__13251__auto__ = e14006;
var statearr_14007_16830 = state_13998;
(statearr_14007_16830[(2)] = ex__13251__auto__);


if(cljs.core.seq((state_13998[(4)]))){
var statearr_14008_16831 = state_13998;
(statearr_14008_16831[(1)] = cljs.core.first((state_13998[(4)])));

} else {
throw ex__13251__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16844 = state_13998;
state_13998 = G__16844;
continue;
} else {
return ret_value__13249__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13248__auto__ = function(state_13998){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13248__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13248__auto____1.call(this,state_13998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13248__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13248__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13248__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13248__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13248__auto__;
})()
})();
var state__13486__auto__ = (function (){var statearr_14027 = f__13485__auto__();
(statearr_14027[(6)] = c__13484__auto___16821);

return statearr_14027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13486__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__14031){
var vec__14032 = p__14031;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14032,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14032,(1),null);
var job = vec__14032;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___16848 = n;
var __16849 = (0);
while(true){
if((__16849 < n__5636__auto___16848)){
var G__14036_16850 = type;
var G__14036_16851__$1 = (((G__14036_16850 instanceof cljs.core.Keyword))?G__14036_16850.fqn:null);
switch (G__14036_16851__$1) {
case "compute":
var c__13484__auto___16853 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16849,c__13484__auto___16853,G__14036_16850,G__14036_16851__$1,n__5636__auto___16848,jobs,results,process__$1,async){
return (function (){
var f__13485__auto__ = (function (){var switch__13247__auto__ = ((function (__16849,c__13484__auto___16853,G__14036_16850,G__14036_16851__$1,n__5636__auto___16848,jobs,results,process__$1,async){
return (function (state_14049){
var state_val_14050 = (state_14049[(1)]);
if((state_val_14050 === (1))){
var state_14049__$1 = state_14049;
var statearr_14052_16857 = state_14049__$1;
(statearr_14052_16857[(2)] = null);

(statearr_14052_16857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14050 === (2))){
var state_14049__$1 = state_14049;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14049__$1,(4),jobs);
} else {
if((state_val_14050 === (3))){
var inst_14047 = (state_14049[(2)]);
var state_14049__$1 = state_14049;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14049__$1,inst_14047);
} else {
if((state_val_14050 === (4))){
var inst_14039 = (state_14049[(2)]);
var inst_14040 = process__$1(inst_14039);
var state_14049__$1 = state_14049;
if(cljs.core.truth_(inst_14040)){
var statearr_14057_16864 = state_14049__$1;
(statearr_14057_16864[(1)] = (5));

} else {
var statearr_14058_16865 = state_14049__$1;
(statearr_14058_16865[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14050 === (5))){
var state_14049__$1 = state_14049;
var statearr_14062_16867 = state_14049__$1;
(statearr_14062_16867[(2)] = null);

(statearr_14062_16867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14050 === (6))){
var state_14049__$1 = state_14049;
var statearr_14063_16869 = state_14049__$1;
(statearr_14063_16869[(2)] = null);

(statearr_14063_16869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14050 === (7))){
var inst_14045 = (state_14049[(2)]);
var state_14049__$1 = state_14049;
var statearr_14066_16871 = state_14049__$1;
(statearr_14066_16871[(2)] = inst_14045);

(statearr_14066_16871[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__16849,c__13484__auto___16853,G__14036_16850,G__14036_16851__$1,n__5636__auto___16848,jobs,results,process__$1,async))
;
return ((function (__16849,switch__13247__auto__,c__13484__auto___16853,G__14036_16850,G__14036_16851__$1,n__5636__auto___16848,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13248__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13248__auto____0 = (function (){
var statearr_14068 = [null,null,null,null,null,null,null];
(statearr_14068[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13248__auto__);

(statearr_14068[(1)] = (1));

return statearr_14068;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13248__auto____1 = (function (state_14049){
while(true){
var ret_value__13249__auto__ = (function (){try{while(true){
var result__13250__auto__ = switch__13247__auto__(state_14049);
if(cljs.core.keyword_identical_QMARK_(result__13250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13250__auto__;
}
break;
}
}catch (e14069){var ex__13251__auto__ = e14069;
var statearr_14070_16873 = state_14049;
(statearr_14070_16873[(2)] = ex__13251__auto__);


if(cljs.core.seq((state_14049[(4)]))){
var statearr_14074_16874 = state_14049;
(statearr_14074_16874[(1)] = cljs.core.first((state_14049[(4)])));

} else {
throw ex__13251__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16878 = state_14049;
state_14049 = G__16878;
continue;
} else {
return ret_value__13249__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13248__auto__ = function(state_14049){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13248__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13248__auto____1.call(this,state_14049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13248__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13248__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13248__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13248__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13248__auto__;
})()
;})(__16849,switch__13247__auto__,c__13484__auto___16853,G__14036_16850,G__14036_16851__$1,n__5636__auto___16848,jobs,results,process__$1,async))
})();
var state__13486__auto__ = (function (){var statearr_14078 = f__13485__auto__();
(statearr_14078[(6)] = c__13484__auto___16853);

return statearr_14078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13486__auto__);
});})(__16849,c__13484__auto___16853,G__14036_16850,G__14036_16851__$1,n__5636__auto___16848,jobs,results,process__$1,async))
);


break;
case "async":
var c__13484__auto___16883 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16849,c__13484__auto___16883,G__14036_16850,G__14036_16851__$1,n__5636__auto___16848,jobs,results,process__$1,async){
return (function (){
var f__13485__auto__ = (function (){var switch__13247__auto__ = ((function (__16849,c__13484__auto___16883,G__14036_16850,G__14036_16851__$1,n__5636__auto___16848,jobs,results,process__$1,async){
return (function (state_14099){
var state_val_14100 = (state_14099[(1)]);
if((state_val_14100 === (1))){
var state_14099__$1 = state_14099;
var statearr_14101_16887 = state_14099__$1;
(statearr_14101_16887[(2)] = null);

(statearr_14101_16887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14100 === (2))){
var state_14099__$1 = state_14099;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14099__$1,(4),jobs);
} else {
if((state_val_14100 === (3))){
var inst_14093 = (state_14099[(2)]);
var state_14099__$1 = state_14099;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14099__$1,inst_14093);
} else {
if((state_val_14100 === (4))){
var inst_14085 = (state_14099[(2)]);
var inst_14086 = async(inst_14085);
var state_14099__$1 = state_14099;
if(cljs.core.truth_(inst_14086)){
var statearr_14112_16889 = state_14099__$1;
(statearr_14112_16889[(1)] = (5));

} else {
var statearr_14115_16890 = state_14099__$1;
(statearr_14115_16890[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14100 === (5))){
var state_14099__$1 = state_14099;
var statearr_14133_16891 = state_14099__$1;
(statearr_14133_16891[(2)] = null);

(statearr_14133_16891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14100 === (6))){
var state_14099__$1 = state_14099;
var statearr_14140_16895 = state_14099__$1;
(statearr_14140_16895[(2)] = null);

(statearr_14140_16895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14100 === (7))){
var inst_14091 = (state_14099[(2)]);
var state_14099__$1 = state_14099;
var statearr_14146_16897 = state_14099__$1;
(statearr_14146_16897[(2)] = inst_14091);

(statearr_14146_16897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__16849,c__13484__auto___16883,G__14036_16850,G__14036_16851__$1,n__5636__auto___16848,jobs,results,process__$1,async))
;
return ((function (__16849,switch__13247__auto__,c__13484__auto___16883,G__14036_16850,G__14036_16851__$1,n__5636__auto___16848,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13248__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13248__auto____0 = (function (){
var statearr_14148 = [null,null,null,null,null,null,null];
(statearr_14148[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13248__auto__);

(statearr_14148[(1)] = (1));

return statearr_14148;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13248__auto____1 = (function (state_14099){
while(true){
var ret_value__13249__auto__ = (function (){try{while(true){
var result__13250__auto__ = switch__13247__auto__(state_14099);
if(cljs.core.keyword_identical_QMARK_(result__13250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13250__auto__;
}
break;
}
}catch (e14149){var ex__13251__auto__ = e14149;
var statearr_14152_16901 = state_14099;
(statearr_14152_16901[(2)] = ex__13251__auto__);


if(cljs.core.seq((state_14099[(4)]))){
var statearr_14154_16902 = state_14099;
(statearr_14154_16902[(1)] = cljs.core.first((state_14099[(4)])));

} else {
throw ex__13251__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16903 = state_14099;
state_14099 = G__16903;
continue;
} else {
return ret_value__13249__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13248__auto__ = function(state_14099){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13248__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13248__auto____1.call(this,state_14099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13248__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13248__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13248__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13248__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13248__auto__;
})()
;})(__16849,switch__13247__auto__,c__13484__auto___16883,G__14036_16850,G__14036_16851__$1,n__5636__auto___16848,jobs,results,process__$1,async))
})();
var state__13486__auto__ = (function (){var statearr_14163 = f__13485__auto__();
(statearr_14163[(6)] = c__13484__auto___16883);

return statearr_14163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13486__auto__);
});})(__16849,c__13484__auto___16883,G__14036_16850,G__14036_16851__$1,n__5636__auto___16848,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14036_16851__$1)].join('')));

}

var G__16904 = (__16849 + (1));
__16849 = G__16904;
continue;
} else {
}
break;
}

var c__13484__auto___16905 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13485__auto__ = (function (){var switch__13247__auto__ = (function (state_14202){
var state_val_14203 = (state_14202[(1)]);
if((state_val_14203 === (7))){
var inst_14197 = (state_14202[(2)]);
var state_14202__$1 = state_14202;
var statearr_14232_16913 = state_14202__$1;
(statearr_14232_16913[(2)] = inst_14197);

(statearr_14232_16913[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14203 === (1))){
var state_14202__$1 = state_14202;
var statearr_14238_16914 = state_14202__$1;
(statearr_14238_16914[(2)] = null);

(statearr_14238_16914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14203 === (4))){
var inst_14178 = (state_14202[(7)]);
var inst_14178__$1 = (state_14202[(2)]);
var inst_14179 = (inst_14178__$1 == null);
var state_14202__$1 = (function (){var statearr_14239 = state_14202;
(statearr_14239[(7)] = inst_14178__$1);

return statearr_14239;
})();
if(cljs.core.truth_(inst_14179)){
var statearr_14247_16916 = state_14202__$1;
(statearr_14247_16916[(1)] = (5));

} else {
var statearr_14253_16918 = state_14202__$1;
(statearr_14253_16918[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14203 === (6))){
var inst_14178 = (state_14202[(7)]);
var inst_14183 = (state_14202[(8)]);
var inst_14183__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14185 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14187 = [inst_14178,inst_14183__$1];
var inst_14189 = (new cljs.core.PersistentVector(null,2,(5),inst_14185,inst_14187,null));
var state_14202__$1 = (function (){var statearr_14266 = state_14202;
(statearr_14266[(8)] = inst_14183__$1);

return statearr_14266;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14202__$1,(8),jobs,inst_14189);
} else {
if((state_val_14203 === (3))){
var inst_14200 = (state_14202[(2)]);
var state_14202__$1 = state_14202;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14202__$1,inst_14200);
} else {
if((state_val_14203 === (2))){
var state_14202__$1 = state_14202;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14202__$1,(4),from);
} else {
if((state_val_14203 === (9))){
var inst_14193 = (state_14202[(2)]);
var state_14202__$1 = (function (){var statearr_14293 = state_14202;
(statearr_14293[(9)] = inst_14193);

return statearr_14293;
})();
var statearr_14294_16928 = state_14202__$1;
(statearr_14294_16928[(2)] = null);

(statearr_14294_16928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14203 === (5))){
var inst_14181 = cljs.core.async.close_BANG_(jobs);
var state_14202__$1 = state_14202;
var statearr_14295_16929 = state_14202__$1;
(statearr_14295_16929[(2)] = inst_14181);

(statearr_14295_16929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14203 === (8))){
var inst_14183 = (state_14202[(8)]);
var inst_14191 = (state_14202[(2)]);
var state_14202__$1 = (function (){var statearr_14298 = state_14202;
(statearr_14298[(10)] = inst_14191);

return statearr_14298;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14202__$1,(9),results,inst_14183);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13248__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13248__auto____0 = (function (){
var statearr_14305 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14305[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13248__auto__);

(statearr_14305[(1)] = (1));

return statearr_14305;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13248__auto____1 = (function (state_14202){
while(true){
var ret_value__13249__auto__ = (function (){try{while(true){
var result__13250__auto__ = switch__13247__auto__(state_14202);
if(cljs.core.keyword_identical_QMARK_(result__13250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13250__auto__;
}
break;
}
}catch (e14308){var ex__13251__auto__ = e14308;
var statearr_14309_16932 = state_14202;
(statearr_14309_16932[(2)] = ex__13251__auto__);


if(cljs.core.seq((state_14202[(4)]))){
var statearr_14310_16933 = state_14202;
(statearr_14310_16933[(1)] = cljs.core.first((state_14202[(4)])));

} else {
throw ex__13251__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16934 = state_14202;
state_14202 = G__16934;
continue;
} else {
return ret_value__13249__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13248__auto__ = function(state_14202){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13248__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13248__auto____1.call(this,state_14202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13248__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13248__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13248__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13248__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13248__auto__;
})()
})();
var state__13486__auto__ = (function (){var statearr_14314 = f__13485__auto__();
(statearr_14314[(6)] = c__13484__auto___16905);

return statearr_14314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13486__auto__);
}));


var c__13484__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13485__auto__ = (function (){var switch__13247__auto__ = (function (state_14373){
var state_val_14374 = (state_14373[(1)]);
if((state_val_14374 === (7))){
var inst_14369 = (state_14373[(2)]);
var state_14373__$1 = state_14373;
var statearr_14375_16935 = state_14373__$1;
(statearr_14375_16935[(2)] = inst_14369);

(statearr_14375_16935[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14374 === (20))){
var state_14373__$1 = state_14373;
var statearr_14376_16937 = state_14373__$1;
(statearr_14376_16937[(2)] = null);

(statearr_14376_16937[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14374 === (1))){
var state_14373__$1 = state_14373;
var statearr_14383_16938 = state_14373__$1;
(statearr_14383_16938[(2)] = null);

(statearr_14383_16938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14374 === (4))){
var inst_14319 = (state_14373[(7)]);
var inst_14319__$1 = (state_14373[(2)]);
var inst_14324 = (inst_14319__$1 == null);
var state_14373__$1 = (function (){var statearr_14389 = state_14373;
(statearr_14389[(7)] = inst_14319__$1);

return statearr_14389;
})();
if(cljs.core.truth_(inst_14324)){
var statearr_14390_16939 = state_14373__$1;
(statearr_14390_16939[(1)] = (5));

} else {
var statearr_14391_16940 = state_14373__$1;
(statearr_14391_16940[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14374 === (15))){
var inst_14345 = (state_14373[(8)]);
var state_14373__$1 = state_14373;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14373__$1,(18),to,inst_14345);
} else {
if((state_val_14374 === (21))){
var inst_14363 = (state_14373[(2)]);
var state_14373__$1 = state_14373;
var statearr_14396_16944 = state_14373__$1;
(statearr_14396_16944[(2)] = inst_14363);

(statearr_14396_16944[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14374 === (13))){
var inst_14365 = (state_14373[(2)]);
var state_14373__$1 = (function (){var statearr_14398 = state_14373;
(statearr_14398[(9)] = inst_14365);

return statearr_14398;
})();
var statearr_14400_16945 = state_14373__$1;
(statearr_14400_16945[(2)] = null);

(statearr_14400_16945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14374 === (6))){
var inst_14319 = (state_14373[(7)]);
var state_14373__$1 = state_14373;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14373__$1,(11),inst_14319);
} else {
if((state_val_14374 === (17))){
var inst_14358 = (state_14373[(2)]);
var state_14373__$1 = state_14373;
if(cljs.core.truth_(inst_14358)){
var statearr_14405_16948 = state_14373__$1;
(statearr_14405_16948[(1)] = (19));

} else {
var statearr_14406_16949 = state_14373__$1;
(statearr_14406_16949[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14374 === (3))){
var inst_14371 = (state_14373[(2)]);
var state_14373__$1 = state_14373;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14373__$1,inst_14371);
} else {
if((state_val_14374 === (12))){
var inst_14338 = (state_14373[(10)]);
var state_14373__$1 = state_14373;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14373__$1,(14),inst_14338);
} else {
if((state_val_14374 === (2))){
var state_14373__$1 = state_14373;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14373__$1,(4),results);
} else {
if((state_val_14374 === (19))){
var state_14373__$1 = state_14373;
var statearr_14410_16952 = state_14373__$1;
(statearr_14410_16952[(2)] = null);

(statearr_14410_16952[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14374 === (11))){
var inst_14338 = (state_14373[(2)]);
var state_14373__$1 = (function (){var statearr_14411 = state_14373;
(statearr_14411[(10)] = inst_14338);

return statearr_14411;
})();
var statearr_14412_16960 = state_14373__$1;
(statearr_14412_16960[(2)] = null);

(statearr_14412_16960[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14374 === (9))){
var state_14373__$1 = state_14373;
var statearr_14413_16961 = state_14373__$1;
(statearr_14413_16961[(2)] = null);

(statearr_14413_16961[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14374 === (5))){
var state_14373__$1 = state_14373;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14414_16968 = state_14373__$1;
(statearr_14414_16968[(1)] = (8));

} else {
var statearr_14415_16970 = state_14373__$1;
(statearr_14415_16970[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14374 === (14))){
var inst_14345 = (state_14373[(8)]);
var inst_14349 = (state_14373[(11)]);
var inst_14345__$1 = (state_14373[(2)]);
var inst_14348 = (inst_14345__$1 == null);
var inst_14349__$1 = cljs.core.not(inst_14348);
var state_14373__$1 = (function (){var statearr_14417 = state_14373;
(statearr_14417[(8)] = inst_14345__$1);

(statearr_14417[(11)] = inst_14349__$1);

return statearr_14417;
})();
if(inst_14349__$1){
var statearr_14419_16978 = state_14373__$1;
(statearr_14419_16978[(1)] = (15));

} else {
var statearr_14420_16983 = state_14373__$1;
(statearr_14420_16983[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14374 === (16))){
var inst_14349 = (state_14373[(11)]);
var state_14373__$1 = state_14373;
var statearr_14422_16984 = state_14373__$1;
(statearr_14422_16984[(2)] = inst_14349);

(statearr_14422_16984[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14374 === (10))){
var inst_14334 = (state_14373[(2)]);
var state_14373__$1 = state_14373;
var statearr_14424_16990 = state_14373__$1;
(statearr_14424_16990[(2)] = inst_14334);

(statearr_14424_16990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14374 === (18))){
var inst_14355 = (state_14373[(2)]);
var state_14373__$1 = state_14373;
var statearr_14427_16996 = state_14373__$1;
(statearr_14427_16996[(2)] = inst_14355);

(statearr_14427_16996[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14374 === (8))){
var inst_14327 = cljs.core.async.close_BANG_(to);
var state_14373__$1 = state_14373;
var statearr_14428_17009 = state_14373__$1;
(statearr_14428_17009[(2)] = inst_14327);

(statearr_14428_17009[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13248__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13248__auto____0 = (function (){
var statearr_14430 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14430[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13248__auto__);

(statearr_14430[(1)] = (1));

return statearr_14430;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13248__auto____1 = (function (state_14373){
while(true){
var ret_value__13249__auto__ = (function (){try{while(true){
var result__13250__auto__ = switch__13247__auto__(state_14373);
if(cljs.core.keyword_identical_QMARK_(result__13250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13250__auto__;
}
break;
}
}catch (e14436){var ex__13251__auto__ = e14436;
var statearr_14438_17016 = state_14373;
(statearr_14438_17016[(2)] = ex__13251__auto__);


if(cljs.core.seq((state_14373[(4)]))){
var statearr_14439_17017 = state_14373;
(statearr_14439_17017[(1)] = cljs.core.first((state_14373[(4)])));

} else {
throw ex__13251__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17018 = state_14373;
state_14373 = G__17018;
continue;
} else {
return ret_value__13249__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13248__auto__ = function(state_14373){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13248__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13248__auto____1.call(this,state_14373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13248__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13248__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13248__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13248__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13248__auto__;
})()
})();
var state__13486__auto__ = (function (){var statearr_14442 = f__13485__auto__();
(statearr_14442[(6)] = c__13484__auto__);

return statearr_14442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13486__auto__);
}));

return c__13484__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__14446 = arguments.length;
switch (G__14446) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__14457 = arguments.length;
switch (G__14457) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__14468 = arguments.length;
switch (G__14468) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__13484__auto___17028 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13485__auto__ = (function (){var switch__13247__auto__ = (function (state_14505){
var state_val_14506 = (state_14505[(1)]);
if((state_val_14506 === (7))){
var inst_14501 = (state_14505[(2)]);
var state_14505__$1 = state_14505;
var statearr_14507_17032 = state_14505__$1;
(statearr_14507_17032[(2)] = inst_14501);

(statearr_14507_17032[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (1))){
var state_14505__$1 = state_14505;
var statearr_14509_17034 = state_14505__$1;
(statearr_14509_17034[(2)] = null);

(statearr_14509_17034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (4))){
var inst_14476 = (state_14505[(7)]);
var inst_14476__$1 = (state_14505[(2)]);
var inst_14480 = (inst_14476__$1 == null);
var state_14505__$1 = (function (){var statearr_14510 = state_14505;
(statearr_14510[(7)] = inst_14476__$1);

return statearr_14510;
})();
if(cljs.core.truth_(inst_14480)){
var statearr_14511_17036 = state_14505__$1;
(statearr_14511_17036[(1)] = (5));

} else {
var statearr_14513_17038 = state_14505__$1;
(statearr_14513_17038[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (13))){
var state_14505__$1 = state_14505;
var statearr_14514_17041 = state_14505__$1;
(statearr_14514_17041[(2)] = null);

(statearr_14514_17041[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (6))){
var inst_14476 = (state_14505[(7)]);
var inst_14486 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14476) : p.call(null,inst_14476));
var state_14505__$1 = state_14505;
if(cljs.core.truth_(inst_14486)){
var statearr_14515_17045 = state_14505__$1;
(statearr_14515_17045[(1)] = (9));

} else {
var statearr_14518_17046 = state_14505__$1;
(statearr_14518_17046[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (3))){
var inst_14503 = (state_14505[(2)]);
var state_14505__$1 = state_14505;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14505__$1,inst_14503);
} else {
if((state_val_14506 === (12))){
var state_14505__$1 = state_14505;
var statearr_14521_17048 = state_14505__$1;
(statearr_14521_17048[(2)] = null);

(statearr_14521_17048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (2))){
var state_14505__$1 = state_14505;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14505__$1,(4),ch);
} else {
if((state_val_14506 === (11))){
var inst_14476 = (state_14505[(7)]);
var inst_14490 = (state_14505[(2)]);
var state_14505__$1 = state_14505;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14505__$1,(8),inst_14490,inst_14476);
} else {
if((state_val_14506 === (9))){
var state_14505__$1 = state_14505;
var statearr_14522_17049 = state_14505__$1;
(statearr_14522_17049[(2)] = tc);

(statearr_14522_17049[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (5))){
var inst_14483 = cljs.core.async.close_BANG_(tc);
var inst_14484 = cljs.core.async.close_BANG_(fc);
var state_14505__$1 = (function (){var statearr_14523 = state_14505;
(statearr_14523[(8)] = inst_14483);

return statearr_14523;
})();
var statearr_14525_17051 = state_14505__$1;
(statearr_14525_17051[(2)] = inst_14484);

(statearr_14525_17051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (14))){
var inst_14499 = (state_14505[(2)]);
var state_14505__$1 = state_14505;
var statearr_14529_17052 = state_14505__$1;
(statearr_14529_17052[(2)] = inst_14499);

(statearr_14529_17052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (10))){
var state_14505__$1 = state_14505;
var statearr_14530_17053 = state_14505__$1;
(statearr_14530_17053[(2)] = fc);

(statearr_14530_17053[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (8))){
var inst_14492 = (state_14505[(2)]);
var state_14505__$1 = state_14505;
if(cljs.core.truth_(inst_14492)){
var statearr_14531_17054 = state_14505__$1;
(statearr_14531_17054[(1)] = (12));

} else {
var statearr_14532_17055 = state_14505__$1;
(statearr_14532_17055[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13248__auto__ = null;
var cljs$core$async$state_machine__13248__auto____0 = (function (){
var statearr_14534 = [null,null,null,null,null,null,null,null,null];
(statearr_14534[(0)] = cljs$core$async$state_machine__13248__auto__);

(statearr_14534[(1)] = (1));

return statearr_14534;
});
var cljs$core$async$state_machine__13248__auto____1 = (function (state_14505){
while(true){
var ret_value__13249__auto__ = (function (){try{while(true){
var result__13250__auto__ = switch__13247__auto__(state_14505);
if(cljs.core.keyword_identical_QMARK_(result__13250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13250__auto__;
}
break;
}
}catch (e14536){var ex__13251__auto__ = e14536;
var statearr_14537_17060 = state_14505;
(statearr_14537_17060[(2)] = ex__13251__auto__);


if(cljs.core.seq((state_14505[(4)]))){
var statearr_14538_17061 = state_14505;
(statearr_14538_17061[(1)] = cljs.core.first((state_14505[(4)])));

} else {
throw ex__13251__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17062 = state_14505;
state_14505 = G__17062;
continue;
} else {
return ret_value__13249__auto__;
}
break;
}
});
cljs$core$async$state_machine__13248__auto__ = function(state_14505){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13248__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13248__auto____1.call(this,state_14505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13248__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13248__auto____0;
cljs$core$async$state_machine__13248__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13248__auto____1;
return cljs$core$async$state_machine__13248__auto__;
})()
})();
var state__13486__auto__ = (function (){var statearr_14539 = f__13485__auto__();
(statearr_14539[(6)] = c__13484__auto___17028);

return statearr_14539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13486__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__13484__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13485__auto__ = (function (){var switch__13247__auto__ = (function (state_14575){
var state_val_14576 = (state_14575[(1)]);
if((state_val_14576 === (7))){
var inst_14571 = (state_14575[(2)]);
var state_14575__$1 = state_14575;
var statearr_14579_17067 = state_14575__$1;
(statearr_14579_17067[(2)] = inst_14571);

(statearr_14579_17067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14576 === (1))){
var inst_14547 = init;
var inst_14548 = inst_14547;
var state_14575__$1 = (function (){var statearr_14581 = state_14575;
(statearr_14581[(7)] = inst_14548);

return statearr_14581;
})();
var statearr_14583_17069 = state_14575__$1;
(statearr_14583_17069[(2)] = null);

(statearr_14583_17069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14576 === (4))){
var inst_14556 = (state_14575[(8)]);
var inst_14556__$1 = (state_14575[(2)]);
var inst_14557 = (inst_14556__$1 == null);
var state_14575__$1 = (function (){var statearr_14587 = state_14575;
(statearr_14587[(8)] = inst_14556__$1);

return statearr_14587;
})();
if(cljs.core.truth_(inst_14557)){
var statearr_14588_17074 = state_14575__$1;
(statearr_14588_17074[(1)] = (5));

} else {
var statearr_14589_17075 = state_14575__$1;
(statearr_14589_17075[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14576 === (6))){
var inst_14561 = (state_14575[(9)]);
var inst_14548 = (state_14575[(7)]);
var inst_14556 = (state_14575[(8)]);
var inst_14561__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_14548,inst_14556) : f.call(null,inst_14548,inst_14556));
var inst_14562 = cljs.core.reduced_QMARK_(inst_14561__$1);
var state_14575__$1 = (function (){var statearr_14590 = state_14575;
(statearr_14590[(9)] = inst_14561__$1);

return statearr_14590;
})();
if(inst_14562){
var statearr_14592_17076 = state_14575__$1;
(statearr_14592_17076[(1)] = (8));

} else {
var statearr_14593_17077 = state_14575__$1;
(statearr_14593_17077[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14576 === (3))){
var inst_14573 = (state_14575[(2)]);
var state_14575__$1 = state_14575;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14575__$1,inst_14573);
} else {
if((state_val_14576 === (2))){
var state_14575__$1 = state_14575;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14575__$1,(4),ch);
} else {
if((state_val_14576 === (9))){
var inst_14561 = (state_14575[(9)]);
var inst_14548 = inst_14561;
var state_14575__$1 = (function (){var statearr_14595 = state_14575;
(statearr_14595[(7)] = inst_14548);

return statearr_14595;
})();
var statearr_14596_17078 = state_14575__$1;
(statearr_14596_17078[(2)] = null);

(statearr_14596_17078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14576 === (5))){
var inst_14548 = (state_14575[(7)]);
var state_14575__$1 = state_14575;
var statearr_14598_17084 = state_14575__$1;
(statearr_14598_17084[(2)] = inst_14548);

(statearr_14598_17084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14576 === (10))){
var inst_14569 = (state_14575[(2)]);
var state_14575__$1 = state_14575;
var statearr_14602_17085 = state_14575__$1;
(statearr_14602_17085[(2)] = inst_14569);

(statearr_14602_17085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14576 === (8))){
var inst_14561 = (state_14575[(9)]);
var inst_14565 = cljs.core.deref(inst_14561);
var state_14575__$1 = state_14575;
var statearr_14603_17087 = state_14575__$1;
(statearr_14603_17087[(2)] = inst_14565);

(statearr_14603_17087[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__13248__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13248__auto____0 = (function (){
var statearr_14605 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14605[(0)] = cljs$core$async$reduce_$_state_machine__13248__auto__);

(statearr_14605[(1)] = (1));

return statearr_14605;
});
var cljs$core$async$reduce_$_state_machine__13248__auto____1 = (function (state_14575){
while(true){
var ret_value__13249__auto__ = (function (){try{while(true){
var result__13250__auto__ = switch__13247__auto__(state_14575);
if(cljs.core.keyword_identical_QMARK_(result__13250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13250__auto__;
}
break;
}
}catch (e14608){var ex__13251__auto__ = e14608;
var statearr_14610_17088 = state_14575;
(statearr_14610_17088[(2)] = ex__13251__auto__);


if(cljs.core.seq((state_14575[(4)]))){
var statearr_14611_17091 = state_14575;
(statearr_14611_17091[(1)] = cljs.core.first((state_14575[(4)])));

} else {
throw ex__13251__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17093 = state_14575;
state_14575 = G__17093;
continue;
} else {
return ret_value__13249__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13248__auto__ = function(state_14575){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13248__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13248__auto____1.call(this,state_14575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13248__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13248__auto____0;
cljs$core$async$reduce_$_state_machine__13248__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13248__auto____1;
return cljs$core$async$reduce_$_state_machine__13248__auto__;
})()
})();
var state__13486__auto__ = (function (){var statearr_14616 = f__13485__auto__();
(statearr_14616[(6)] = c__13484__auto__);

return statearr_14616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13486__auto__);
}));

return c__13484__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__13484__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13485__auto__ = (function (){var switch__13247__auto__ = (function (state_14623){
var state_val_14624 = (state_14623[(1)]);
if((state_val_14624 === (1))){
var inst_14618 = cljs.core.async.reduce(f__$1,init,ch);
var state_14623__$1 = state_14623;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14623__$1,(2),inst_14618);
} else {
if((state_val_14624 === (2))){
var inst_14620 = (state_14623[(2)]);
var inst_14621 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_14620) : f__$1.call(null,inst_14620));
var state_14623__$1 = state_14623;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14623__$1,inst_14621);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13248__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13248__auto____0 = (function (){
var statearr_14634 = [null,null,null,null,null,null,null];
(statearr_14634[(0)] = cljs$core$async$transduce_$_state_machine__13248__auto__);

(statearr_14634[(1)] = (1));

return statearr_14634;
});
var cljs$core$async$transduce_$_state_machine__13248__auto____1 = (function (state_14623){
while(true){
var ret_value__13249__auto__ = (function (){try{while(true){
var result__13250__auto__ = switch__13247__auto__(state_14623);
if(cljs.core.keyword_identical_QMARK_(result__13250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13250__auto__;
}
break;
}
}catch (e14635){var ex__13251__auto__ = e14635;
var statearr_14636_17101 = state_14623;
(statearr_14636_17101[(2)] = ex__13251__auto__);


if(cljs.core.seq((state_14623[(4)]))){
var statearr_14637_17102 = state_14623;
(statearr_14637_17102[(1)] = cljs.core.first((state_14623[(4)])));

} else {
throw ex__13251__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17103 = state_14623;
state_14623 = G__17103;
continue;
} else {
return ret_value__13249__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13248__auto__ = function(state_14623){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13248__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13248__auto____1.call(this,state_14623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13248__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13248__auto____0;
cljs$core$async$transduce_$_state_machine__13248__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13248__auto____1;
return cljs$core$async$transduce_$_state_machine__13248__auto__;
})()
})();
var state__13486__auto__ = (function (){var statearr_14640 = f__13485__auto__();
(statearr_14640[(6)] = c__13484__auto__);

return statearr_14640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13486__auto__);
}));

return c__13484__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__14646 = arguments.length;
switch (G__14646) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__13484__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13485__auto__ = (function (){var switch__13247__auto__ = (function (state_14678){
var state_val_14679 = (state_14678[(1)]);
if((state_val_14679 === (7))){
var inst_14660 = (state_14678[(2)]);
var state_14678__$1 = state_14678;
var statearr_14684_17107 = state_14678__$1;
(statearr_14684_17107[(2)] = inst_14660);

(statearr_14684_17107[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14679 === (1))){
var inst_14652 = cljs.core.seq(coll);
var inst_14653 = inst_14652;
var state_14678__$1 = (function (){var statearr_14685 = state_14678;
(statearr_14685[(7)] = inst_14653);

return statearr_14685;
})();
var statearr_14686_17108 = state_14678__$1;
(statearr_14686_17108[(2)] = null);

(statearr_14686_17108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14679 === (4))){
var inst_14653 = (state_14678[(7)]);
var inst_14658 = cljs.core.first(inst_14653);
var state_14678__$1 = state_14678;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14678__$1,(7),ch,inst_14658);
} else {
if((state_val_14679 === (13))){
var inst_14672 = (state_14678[(2)]);
var state_14678__$1 = state_14678;
var statearr_14688_17109 = state_14678__$1;
(statearr_14688_17109[(2)] = inst_14672);

(statearr_14688_17109[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14679 === (6))){
var inst_14663 = (state_14678[(2)]);
var state_14678__$1 = state_14678;
if(cljs.core.truth_(inst_14663)){
var statearr_14690_17110 = state_14678__$1;
(statearr_14690_17110[(1)] = (8));

} else {
var statearr_14694_17111 = state_14678__$1;
(statearr_14694_17111[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14679 === (3))){
var inst_14676 = (state_14678[(2)]);
var state_14678__$1 = state_14678;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14678__$1,inst_14676);
} else {
if((state_val_14679 === (12))){
var state_14678__$1 = state_14678;
var statearr_14696_17112 = state_14678__$1;
(statearr_14696_17112[(2)] = null);

(statearr_14696_17112[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14679 === (2))){
var inst_14653 = (state_14678[(7)]);
var state_14678__$1 = state_14678;
if(cljs.core.truth_(inst_14653)){
var statearr_14700_17114 = state_14678__$1;
(statearr_14700_17114[(1)] = (4));

} else {
var statearr_14704_17118 = state_14678__$1;
(statearr_14704_17118[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14679 === (11))){
var inst_14669 = cljs.core.async.close_BANG_(ch);
var state_14678__$1 = state_14678;
var statearr_14705_17119 = state_14678__$1;
(statearr_14705_17119[(2)] = inst_14669);

(statearr_14705_17119[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14679 === (9))){
var state_14678__$1 = state_14678;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14706_17122 = state_14678__$1;
(statearr_14706_17122[(1)] = (11));

} else {
var statearr_14708_17123 = state_14678__$1;
(statearr_14708_17123[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14679 === (5))){
var inst_14653 = (state_14678[(7)]);
var state_14678__$1 = state_14678;
var statearr_14710_17124 = state_14678__$1;
(statearr_14710_17124[(2)] = inst_14653);

(statearr_14710_17124[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14679 === (10))){
var inst_14674 = (state_14678[(2)]);
var state_14678__$1 = state_14678;
var statearr_14711_17125 = state_14678__$1;
(statearr_14711_17125[(2)] = inst_14674);

(statearr_14711_17125[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14679 === (8))){
var inst_14653 = (state_14678[(7)]);
var inst_14665 = cljs.core.next(inst_14653);
var inst_14653__$1 = inst_14665;
var state_14678__$1 = (function (){var statearr_14712 = state_14678;
(statearr_14712[(7)] = inst_14653__$1);

return statearr_14712;
})();
var statearr_14715_17126 = state_14678__$1;
(statearr_14715_17126[(2)] = null);

(statearr_14715_17126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13248__auto__ = null;
var cljs$core$async$state_machine__13248__auto____0 = (function (){
var statearr_14718 = [null,null,null,null,null,null,null,null];
(statearr_14718[(0)] = cljs$core$async$state_machine__13248__auto__);

(statearr_14718[(1)] = (1));

return statearr_14718;
});
var cljs$core$async$state_machine__13248__auto____1 = (function (state_14678){
while(true){
var ret_value__13249__auto__ = (function (){try{while(true){
var result__13250__auto__ = switch__13247__auto__(state_14678);
if(cljs.core.keyword_identical_QMARK_(result__13250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13250__auto__;
}
break;
}
}catch (e14720){var ex__13251__auto__ = e14720;
var statearr_14721_17127 = state_14678;
(statearr_14721_17127[(2)] = ex__13251__auto__);


if(cljs.core.seq((state_14678[(4)]))){
var statearr_14722_17131 = state_14678;
(statearr_14722_17131[(1)] = cljs.core.first((state_14678[(4)])));

} else {
throw ex__13251__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17132 = state_14678;
state_14678 = G__17132;
continue;
} else {
return ret_value__13249__auto__;
}
break;
}
});
cljs$core$async$state_machine__13248__auto__ = function(state_14678){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13248__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13248__auto____1.call(this,state_14678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13248__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13248__auto____0;
cljs$core$async$state_machine__13248__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13248__auto____1;
return cljs$core$async$state_machine__13248__auto__;
})()
})();
var state__13486__auto__ = (function (){var statearr_14723 = f__13485__auto__();
(statearr_14723[(6)] = c__13484__auto__);

return statearr_14723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13486__auto__);
}));

return c__13484__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__14730 = arguments.length;
switch (G__14730) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_17138 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_17138(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_17141 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_17141(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_17154 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_17154(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_17159 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_17159(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14751 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14751 = (function (ch,cs,meta14752){
this.ch = ch;
this.cs = cs;
this.meta14752 = meta14752;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14751.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14753,meta14752__$1){
var self__ = this;
var _14753__$1 = this;
return (new cljs.core.async.t_cljs$core$async14751(self__.ch,self__.cs,meta14752__$1));
}));

(cljs.core.async.t_cljs$core$async14751.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14753){
var self__ = this;
var _14753__$1 = this;
return self__.meta14752;
}));

(cljs.core.async.t_cljs$core$async14751.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14751.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async14751.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14751.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async14751.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async14751.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async14751.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta14752","meta14752",-1259385417,null)], null);
}));

(cljs.core.async.t_cljs$core$async14751.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14751.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14751");

(cljs.core.async.t_cljs$core$async14751.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14751");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14751.
 */
cljs.core.async.__GT_t_cljs$core$async14751 = (function cljs$core$async$mult_$___GT_t_cljs$core$async14751(ch__$1,cs__$1,meta14752){
return (new cljs.core.async.t_cljs$core$async14751(ch__$1,cs__$1,meta14752));
});

}

return (new cljs.core.async.t_cljs$core$async14751(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__13484__auto___17168 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13485__auto__ = (function (){var switch__13247__auto__ = (function (state_14904){
var state_val_14905 = (state_14904[(1)]);
if((state_val_14905 === (7))){
var inst_14900 = (state_14904[(2)]);
var state_14904__$1 = state_14904;
var statearr_14907_17170 = state_14904__$1;
(statearr_14907_17170[(2)] = inst_14900);

(statearr_14907_17170[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14905 === (20))){
var inst_14794 = (state_14904[(7)]);
var inst_14807 = cljs.core.first(inst_14794);
var inst_14808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14807,(0),null);
var inst_14809 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14807,(1),null);
var state_14904__$1 = (function (){var statearr_14909 = state_14904;
(statearr_14909[(8)] = inst_14808);

return statearr_14909;
})();
if(cljs.core.truth_(inst_14809)){
var statearr_14911_17171 = state_14904__$1;
(statearr_14911_17171[(1)] = (22));

} else {
var statearr_14915_17172 = state_14904__$1;
(statearr_14915_17172[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14905 === (27))){
var inst_14762 = (state_14904[(9)]);
var inst_14844 = (state_14904[(10)]);
var inst_14849 = (state_14904[(11)]);
var inst_14842 = (state_14904[(12)]);
var inst_14849__$1 = cljs.core._nth(inst_14842,inst_14844);
var inst_14850 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_14849__$1,inst_14762,done);
var state_14904__$1 = (function (){var statearr_14918 = state_14904;
(statearr_14918[(11)] = inst_14849__$1);

return statearr_14918;
})();
if(cljs.core.truth_(inst_14850)){
var statearr_14919_17178 = state_14904__$1;
(statearr_14919_17178[(1)] = (30));

} else {
var statearr_14920_17179 = state_14904__$1;
(statearr_14920_17179[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14905 === (1))){
var state_14904__$1 = state_14904;
var statearr_14922_17186 = state_14904__$1;
(statearr_14922_17186[(2)] = null);

(statearr_14922_17186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14905 === (24))){
var inst_14794 = (state_14904[(7)]);
var inst_14815 = (state_14904[(2)]);
var inst_14816 = cljs.core.next(inst_14794);
var inst_14771 = inst_14816;
var inst_14772 = null;
var inst_14773 = (0);
var inst_14774 = (0);
var state_14904__$1 = (function (){var statearr_14924 = state_14904;
(statearr_14924[(13)] = inst_14771);

(statearr_14924[(14)] = inst_14772);

(statearr_14924[(15)] = inst_14774);

(statearr_14924[(16)] = inst_14815);

(statearr_14924[(17)] = inst_14773);

return statearr_14924;
})();
var statearr_14925_17188 = state_14904__$1;
(statearr_14925_17188[(2)] = null);

(statearr_14925_17188[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14905 === (39))){
var state_14904__$1 = state_14904;
var statearr_14929_17189 = state_14904__$1;
(statearr_14929_17189[(2)] = null);

(statearr_14929_17189[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14905 === (4))){
var inst_14762 = (state_14904[(9)]);
var inst_14762__$1 = (state_14904[(2)]);
var inst_14763 = (inst_14762__$1 == null);
var state_14904__$1 = (function (){var statearr_14936 = state_14904;
(statearr_14936[(9)] = inst_14762__$1);

return statearr_14936;
})();
if(cljs.core.truth_(inst_14763)){
var statearr_14937_17194 = state_14904__$1;
(statearr_14937_17194[(1)] = (5));

} else {
var statearr_14939_17195 = state_14904__$1;
(statearr_14939_17195[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14905 === (15))){
var inst_14771 = (state_14904[(13)]);
var inst_14772 = (state_14904[(14)]);
var inst_14774 = (state_14904[(15)]);
var inst_14773 = (state_14904[(17)]);
var inst_14789 = (state_14904[(2)]);
var inst_14790 = (inst_14774 + (1));
var tmp14926 = inst_14771;
var tmp14927 = inst_14772;
var tmp14928 = inst_14773;
var inst_14771__$1 = tmp14926;
var inst_14772__$1 = tmp14927;
var inst_14773__$1 = tmp14928;
var inst_14774__$1 = inst_14790;
var state_14904__$1 = (function (){var statearr_14940 = state_14904;
(statearr_14940[(13)] = inst_14771__$1);

(statearr_14940[(14)] = inst_14772__$1);

(statearr_14940[(15)] = inst_14774__$1);

(statearr_14940[(18)] = inst_14789);

(statearr_14940[(17)] = inst_14773__$1);

return statearr_14940;
})();
var statearr_14941_17200 = state_14904__$1;
(statearr_14941_17200[(2)] = null);

(statearr_14941_17200[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14905 === (21))){
var inst_14820 = (state_14904[(2)]);
var state_14904__$1 = state_14904;
var statearr_14945_17201 = state_14904__$1;
(statearr_14945_17201[(2)] = inst_14820);

(statearr_14945_17201[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14905 === (31))){
var inst_14849 = (state_14904[(11)]);
var inst_14853 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_14849);
var state_14904__$1 = state_14904;
var statearr_14946_17202 = state_14904__$1;
(statearr_14946_17202[(2)] = inst_14853);

(statearr_14946_17202[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14905 === (32))){
var inst_14844 = (state_14904[(10)]);
var inst_14843 = (state_14904[(19)]);
var inst_14841 = (state_14904[(20)]);
var inst_14842 = (state_14904[(12)]);
var inst_14855 = (state_14904[(2)]);
var inst_14856 = (inst_14844 + (1));
var tmp14942 = inst_14843;
var tmp14943 = inst_14841;
var tmp14944 = inst_14842;
var inst_14841__$1 = tmp14943;
var inst_14842__$1 = tmp14944;
var inst_14843__$1 = tmp14942;
var inst_14844__$1 = inst_14856;
var state_14904__$1 = (function (){var statearr_14947 = state_14904;
(statearr_14947[(21)] = inst_14855);

(statearr_14947[(10)] = inst_14844__$1);

(statearr_14947[(19)] = inst_14843__$1);

(statearr_14947[(20)] = inst_14841__$1);

(statearr_14947[(12)] = inst_14842__$1);

return statearr_14947;
})();
var statearr_14949_17220 = state_14904__$1;
(statearr_14949_17220[(2)] = null);

(statearr_14949_17220[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14905 === (40))){
var inst_14872 = (state_14904[(22)]);
var inst_14876 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_14872);
var state_14904__$1 = state_14904;
var statearr_14950_17221 = state_14904__$1;
(statearr_14950_17221[(2)] = inst_14876);

(statearr_14950_17221[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14905 === (33))){
var inst_14859 = (state_14904[(23)]);
var inst_14861 = cljs.core.chunked_seq_QMARK_(inst_14859);
var state_14904__$1 = state_14904;
if(inst_14861){
var statearr_14954_17228 = state_14904__$1;
(statearr_14954_17228[(1)] = (36));

} else {
var statearr_14955_17229 = state_14904__$1;
(statearr_14955_17229[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14905 === (13))){
var inst_14783 = (state_14904[(24)]);
var inst_14786 = cljs.core.async.close_BANG_(inst_14783);
var state_14904__$1 = state_14904;
var statearr_14959_17231 = state_14904__$1;
(statearr_14959_17231[(2)] = inst_14786);

(statearr_14959_17231[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14905 === (22))){
var inst_14808 = (state_14904[(8)]);
var inst_14812 = cljs.core.async.close_BANG_(inst_14808);
var state_14904__$1 = state_14904;
var statearr_14960_17236 = state_14904__$1;
(statearr_14960_17236[(2)] = inst_14812);

(statearr_14960_17236[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14905 === (36))){
var inst_14859 = (state_14904[(23)]);
var inst_14863 = cljs.core.chunk_first(inst_14859);
var inst_14864 = cljs.core.chunk_rest(inst_14859);
var inst_14865 = cljs.core.count(inst_14863);
var inst_14841 = inst_14864;
var inst_14842 = inst_14863;
var inst_14843 = inst_14865;
var inst_14844 = (0);
var state_14904__$1 = (function (){var statearr_14961 = state_14904;
(statearr_14961[(10)] = inst_14844);

(statearr_14961[(19)] = inst_14843);

(statearr_14961[(20)] = inst_14841);

(statearr_14961[(12)] = inst_14842);

return statearr_14961;
})();
var statearr_14963_17240 = state_14904__$1;
(statearr_14963_17240[(2)] = null);

(statearr_14963_17240[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14905 === (41))){
var inst_14859 = (state_14904[(23)]);
var inst_14878 = (state_14904[(2)]);
var inst_14879 = cljs.core.next(inst_14859);
var inst_14841 = inst_14879;
var inst_14842 = null;
var inst_14843 = (0);
var inst_14844 = (0);
var state_14904__$1 = (function (){var statearr_14964 = state_14904;
(statearr_14964[(10)] = inst_14844);

(statearr_14964[(19)] = inst_14843);

(statearr_14964[(25)] = inst_14878);

(statearr_14964[(20)] = inst_14841);

(statearr_14964[(12)] = inst_14842);

return statearr_14964;
})();
var statearr_14965_17251 = state_14904__$1;
(statearr_14965_17251[(2)] = null);

(statearr_14965_17251[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14905 === (43))){
var state_14904__$1 = state_14904;
var statearr_14966_17252 = state_14904__$1;
(statearr_14966_17252[(2)] = null);

(statearr_14966_17252[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14905 === (29))){
var inst_14888 = (state_14904[(2)]);
var state_14904__$1 = state_14904;
var statearr_14967_17253 = state_14904__$1;
(statearr_14967_17253[(2)] = inst_14888);

(statearr_14967_17253[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14905 === (44))){
var inst_14897 = (state_14904[(2)]);
var state_14904__$1 = (function (){var statearr_14968 = state_14904;
(statearr_14968[(26)] = inst_14897);

return statearr_14968;
})();
var statearr_14970_17260 = state_14904__$1;
(statearr_14970_17260[(2)] = null);

(statearr_14970_17260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14905 === (6))){
var inst_14833 = (state_14904[(27)]);
var inst_14832 = cljs.core.deref(cs);
var inst_14833__$1 = cljs.core.keys(inst_14832);
var inst_14834 = cljs.core.count(inst_14833__$1);
var inst_14835 = cljs.core.reset_BANG_(dctr,inst_14834);
var inst_14840 = cljs.core.seq(inst_14833__$1);
var inst_14841 = inst_14840;
var inst_14842 = null;
var inst_14843 = (0);
var inst_14844 = (0);
var state_14904__$1 = (function (){var statearr_14972 = state_14904;
(statearr_14972[(10)] = inst_14844);

(statearr_14972[(28)] = inst_14835);

(statearr_14972[(19)] = inst_14843);

(statearr_14972[(20)] = inst_14841);

(statearr_14972[(27)] = inst_14833__$1);

(statearr_14972[(12)] = inst_14842);

return statearr_14972;
})();
var statearr_14973_17264 = state_14904__$1;
(statearr_14973_17264[(2)] = null);

(statearr_14973_17264[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14905 === (28))){
var inst_14841 = (state_14904[(20)]);
var inst_14859 = (state_14904[(23)]);
var inst_14859__$1 = cljs.core.seq(inst_14841);
var state_14904__$1 = (function (){var statearr_14974 = state_14904;
(statearr_14974[(23)] = inst_14859__$1);

return statearr_14974;
})();
if(inst_14859__$1){
var statearr_14975_17265 = state_14904__$1;
(statearr_14975_17265[(1)] = (33));

} else {
var statearr_14976_17266 = state_14904__$1;
(statearr_14976_17266[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14905 === (25))){
var inst_14844 = (state_14904[(10)]);
var inst_14843 = (state_14904[(19)]);
var inst_14846 = (inst_14844 < inst_14843);
var inst_14847 = inst_14846;
var state_14904__$1 = state_14904;
if(cljs.core.truth_(inst_14847)){
var statearr_14982_17270 = state_14904__$1;
(statearr_14982_17270[(1)] = (27));

} else {
var statearr_14983_17271 = state_14904__$1;
(statearr_14983_17271[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14905 === (34))){
var state_14904__$1 = state_14904;
var statearr_14986_17275 = state_14904__$1;
(statearr_14986_17275[(2)] = null);

(statearr_14986_17275[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14905 === (17))){
var state_14904__$1 = state_14904;
var statearr_14987_17276 = state_14904__$1;
(statearr_14987_17276[(2)] = null);

(statearr_14987_17276[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14905 === (3))){
var inst_14902 = (state_14904[(2)]);
var state_14904__$1 = state_14904;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14904__$1,inst_14902);
} else {
if((state_val_14905 === (12))){
var inst_14828 = (state_14904[(2)]);
var state_14904__$1 = state_14904;
var statearr_14988_17277 = state_14904__$1;
(statearr_14988_17277[(2)] = inst_14828);

(statearr_14988_17277[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14905 === (2))){
var state_14904__$1 = state_14904;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14904__$1,(4),ch);
} else {
if((state_val_14905 === (23))){
var state_14904__$1 = state_14904;
var statearr_14990_17278 = state_14904__$1;
(statearr_14990_17278[(2)] = null);

(statearr_14990_17278[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14905 === (35))){
var inst_14885 = (state_14904[(2)]);
var state_14904__$1 = state_14904;
var statearr_14993_17279 = state_14904__$1;
(statearr_14993_17279[(2)] = inst_14885);

(statearr_14993_17279[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14905 === (19))){
var inst_14794 = (state_14904[(7)]);
var inst_14799 = cljs.core.chunk_first(inst_14794);
var inst_14800 = cljs.core.chunk_rest(inst_14794);
var inst_14801 = cljs.core.count(inst_14799);
var inst_14771 = inst_14800;
var inst_14772 = inst_14799;
var inst_14773 = inst_14801;
var inst_14774 = (0);
var state_14904__$1 = (function (){var statearr_14999 = state_14904;
(statearr_14999[(13)] = inst_14771);

(statearr_14999[(14)] = inst_14772);

(statearr_14999[(15)] = inst_14774);

(statearr_14999[(17)] = inst_14773);

return statearr_14999;
})();
var statearr_15000_17280 = state_14904__$1;
(statearr_15000_17280[(2)] = null);

(statearr_15000_17280[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14905 === (11))){
var inst_14771 = (state_14904[(13)]);
var inst_14794 = (state_14904[(7)]);
var inst_14794__$1 = cljs.core.seq(inst_14771);
var state_14904__$1 = (function (){var statearr_15001 = state_14904;
(statearr_15001[(7)] = inst_14794__$1);

return statearr_15001;
})();
if(inst_14794__$1){
var statearr_15002_17281 = state_14904__$1;
(statearr_15002_17281[(1)] = (16));

} else {
var statearr_15003_17282 = state_14904__$1;
(statearr_15003_17282[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14905 === (9))){
var inst_14830 = (state_14904[(2)]);
var state_14904__$1 = state_14904;
var statearr_15005_17283 = state_14904__$1;
(statearr_15005_17283[(2)] = inst_14830);

(statearr_15005_17283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14905 === (5))){
var inst_14769 = cljs.core.deref(cs);
var inst_14770 = cljs.core.seq(inst_14769);
var inst_14771 = inst_14770;
var inst_14772 = null;
var inst_14773 = (0);
var inst_14774 = (0);
var state_14904__$1 = (function (){var statearr_15007 = state_14904;
(statearr_15007[(13)] = inst_14771);

(statearr_15007[(14)] = inst_14772);

(statearr_15007[(15)] = inst_14774);

(statearr_15007[(17)] = inst_14773);

return statearr_15007;
})();
var statearr_15009_17284 = state_14904__$1;
(statearr_15009_17284[(2)] = null);

(statearr_15009_17284[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14905 === (14))){
var state_14904__$1 = state_14904;
var statearr_15010_17288 = state_14904__$1;
(statearr_15010_17288[(2)] = null);

(statearr_15010_17288[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14905 === (45))){
var inst_14894 = (state_14904[(2)]);
var state_14904__$1 = state_14904;
var statearr_15011_17289 = state_14904__$1;
(statearr_15011_17289[(2)] = inst_14894);

(statearr_15011_17289[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14905 === (26))){
var inst_14833 = (state_14904[(27)]);
var inst_14890 = (state_14904[(2)]);
var inst_14891 = cljs.core.seq(inst_14833);
var state_14904__$1 = (function (){var statearr_15012 = state_14904;
(statearr_15012[(29)] = inst_14890);

return statearr_15012;
})();
if(inst_14891){
var statearr_15013_17294 = state_14904__$1;
(statearr_15013_17294[(1)] = (42));

} else {
var statearr_15014_17295 = state_14904__$1;
(statearr_15014_17295[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14905 === (16))){
var inst_14794 = (state_14904[(7)]);
var inst_14797 = cljs.core.chunked_seq_QMARK_(inst_14794);
var state_14904__$1 = state_14904;
if(inst_14797){
var statearr_15015_17299 = state_14904__$1;
(statearr_15015_17299[(1)] = (19));

} else {
var statearr_15016_17300 = state_14904__$1;
(statearr_15016_17300[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14905 === (38))){
var inst_14882 = (state_14904[(2)]);
var state_14904__$1 = state_14904;
var statearr_15017_17301 = state_14904__$1;
(statearr_15017_17301[(2)] = inst_14882);

(statearr_15017_17301[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14905 === (30))){
var state_14904__$1 = state_14904;
var statearr_15019_17302 = state_14904__$1;
(statearr_15019_17302[(2)] = null);

(statearr_15019_17302[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14905 === (10))){
var inst_14772 = (state_14904[(14)]);
var inst_14774 = (state_14904[(15)]);
var inst_14782 = cljs.core._nth(inst_14772,inst_14774);
var inst_14783 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14782,(0),null);
var inst_14784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14782,(1),null);
var state_14904__$1 = (function (){var statearr_15020 = state_14904;
(statearr_15020[(24)] = inst_14783);

return statearr_15020;
})();
if(cljs.core.truth_(inst_14784)){
var statearr_15021_17306 = state_14904__$1;
(statearr_15021_17306[(1)] = (13));

} else {
var statearr_15022_17307 = state_14904__$1;
(statearr_15022_17307[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14905 === (18))){
var inst_14826 = (state_14904[(2)]);
var state_14904__$1 = state_14904;
var statearr_15023_17309 = state_14904__$1;
(statearr_15023_17309[(2)] = inst_14826);

(statearr_15023_17309[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14905 === (42))){
var state_14904__$1 = state_14904;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14904__$1,(45),dchan);
} else {
if((state_val_14905 === (37))){
var inst_14872 = (state_14904[(22)]);
var inst_14762 = (state_14904[(9)]);
var inst_14859 = (state_14904[(23)]);
var inst_14872__$1 = cljs.core.first(inst_14859);
var inst_14873 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_14872__$1,inst_14762,done);
var state_14904__$1 = (function (){var statearr_15024 = state_14904;
(statearr_15024[(22)] = inst_14872__$1);

return statearr_15024;
})();
if(cljs.core.truth_(inst_14873)){
var statearr_15025_17310 = state_14904__$1;
(statearr_15025_17310[(1)] = (39));

} else {
var statearr_15027_17311 = state_14904__$1;
(statearr_15027_17311[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14905 === (8))){
var inst_14774 = (state_14904[(15)]);
var inst_14773 = (state_14904[(17)]);
var inst_14776 = (inst_14774 < inst_14773);
var inst_14777 = inst_14776;
var state_14904__$1 = state_14904;
if(cljs.core.truth_(inst_14777)){
var statearr_15032_17312 = state_14904__$1;
(statearr_15032_17312[(1)] = (10));

} else {
var statearr_15033_17313 = state_14904__$1;
(statearr_15033_17313[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__13248__auto__ = null;
var cljs$core$async$mult_$_state_machine__13248__auto____0 = (function (){
var statearr_15040 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15040[(0)] = cljs$core$async$mult_$_state_machine__13248__auto__);

(statearr_15040[(1)] = (1));

return statearr_15040;
});
var cljs$core$async$mult_$_state_machine__13248__auto____1 = (function (state_14904){
while(true){
var ret_value__13249__auto__ = (function (){try{while(true){
var result__13250__auto__ = switch__13247__auto__(state_14904);
if(cljs.core.keyword_identical_QMARK_(result__13250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13250__auto__;
}
break;
}
}catch (e15041){var ex__13251__auto__ = e15041;
var statearr_15042_17314 = state_14904;
(statearr_15042_17314[(2)] = ex__13251__auto__);


if(cljs.core.seq((state_14904[(4)]))){
var statearr_15045_17315 = state_14904;
(statearr_15045_17315[(1)] = cljs.core.first((state_14904[(4)])));

} else {
throw ex__13251__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17316 = state_14904;
state_14904 = G__17316;
continue;
} else {
return ret_value__13249__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13248__auto__ = function(state_14904){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13248__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13248__auto____1.call(this,state_14904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13248__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13248__auto____0;
cljs$core$async$mult_$_state_machine__13248__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13248__auto____1;
return cljs$core$async$mult_$_state_machine__13248__auto__;
})()
})();
var state__13486__auto__ = (function (){var statearr_15046 = f__13485__auto__();
(statearr_15046[(6)] = c__13484__auto___17168);

return statearr_15046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13486__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__15049 = arguments.length;
switch (G__15049) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_17322 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_17322(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_17325 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_17325(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_17327 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_17327(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_17329 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_17329(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_17333 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_17333(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17334 = arguments.length;
var i__5770__auto___17335 = (0);
while(true){
if((i__5770__auto___17335 < len__5769__auto___17334)){
args__5775__auto__.push((arguments[i__5770__auto___17335]));

var G__17336 = (i__5770__auto___17335 + (1));
i__5770__auto___17335 = G__17336;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15084){
var map__15085 = p__15084;
var map__15085__$1 = cljs.core.__destructure_map(map__15085);
var opts = map__15085__$1;
var statearr_15086_17337 = state;
(statearr_15086_17337[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_15087_17341 = state;
(statearr_15087_17341[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_15088_17342 = state;
(statearr_15088_17342[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15080){
var G__15081 = cljs.core.first(seq15080);
var seq15080__$1 = cljs.core.next(seq15080);
var G__15082 = cljs.core.first(seq15080__$1);
var seq15080__$2 = cljs.core.next(seq15080__$1);
var G__15083 = cljs.core.first(seq15080__$2);
var seq15080__$3 = cljs.core.next(seq15080__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15081,G__15082,G__15083,seq15080__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15111 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15111 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15112){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15112 = meta15112;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15111.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15113,meta15112__$1){
var self__ = this;
var _15113__$1 = this;
return (new cljs.core.async.t_cljs$core$async15111(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15112__$1));
}));

(cljs.core.async.t_cljs$core$async15111.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15113){
var self__ = this;
var _15113__$1 = this;
return self__.meta15112;
}));

(cljs.core.async.t_cljs$core$async15111.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15111.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async15111.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15111.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15111.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15111.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15111.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15111.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15111.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta15112","meta15112",459452257,null)], null);
}));

(cljs.core.async.t_cljs$core$async15111.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15111.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15111");

(cljs.core.async.t_cljs$core$async15111.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15111");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15111.
 */
cljs.core.async.__GT_t_cljs$core$async15111 = (function cljs$core$async$mix_$___GT_t_cljs$core$async15111(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15112){
return (new cljs.core.async.t_cljs$core$async15111(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15112));
});

}

return (new cljs.core.async.t_cljs$core$async15111(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13484__auto___17368 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13485__auto__ = (function (){var switch__13247__auto__ = (function (state_15220){
var state_val_15221 = (state_15220[(1)]);
if((state_val_15221 === (7))){
var inst_15172 = (state_15220[(2)]);
var state_15220__$1 = state_15220;
if(cljs.core.truth_(inst_15172)){
var statearr_15227_17371 = state_15220__$1;
(statearr_15227_17371[(1)] = (8));

} else {
var statearr_15229_17372 = state_15220__$1;
(statearr_15229_17372[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15221 === (20))){
var inst_15163 = (state_15220[(7)]);
var state_15220__$1 = state_15220;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15220__$1,(23),out,inst_15163);
} else {
if((state_val_15221 === (1))){
var inst_15140 = calc_state();
var inst_15143 = cljs.core.__destructure_map(inst_15140);
var inst_15144 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15143,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15146 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15143,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15147 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15143,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15148 = inst_15140;
var state_15220__$1 = (function (){var statearr_15232 = state_15220;
(statearr_15232[(8)] = inst_15146);

(statearr_15232[(9)] = inst_15147);

(statearr_15232[(10)] = inst_15148);

(statearr_15232[(11)] = inst_15144);

return statearr_15232;
})();
var statearr_15233_17375 = state_15220__$1;
(statearr_15233_17375[(2)] = null);

(statearr_15233_17375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15221 === (24))){
var inst_15152 = (state_15220[(12)]);
var inst_15148 = inst_15152;
var state_15220__$1 = (function (){var statearr_15234 = state_15220;
(statearr_15234[(10)] = inst_15148);

return statearr_15234;
})();
var statearr_15235_17376 = state_15220__$1;
(statearr_15235_17376[(2)] = null);

(statearr_15235_17376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15221 === (4))){
var inst_15163 = (state_15220[(7)]);
var inst_15167 = (state_15220[(13)]);
var inst_15162 = (state_15220[(2)]);
var inst_15163__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15162,(0),null);
var inst_15164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15162,(1),null);
var inst_15167__$1 = (inst_15163__$1 == null);
var state_15220__$1 = (function (){var statearr_15242 = state_15220;
(statearr_15242[(7)] = inst_15163__$1);

(statearr_15242[(14)] = inst_15164);

(statearr_15242[(13)] = inst_15167__$1);

return statearr_15242;
})();
if(cljs.core.truth_(inst_15167__$1)){
var statearr_15244_17384 = state_15220__$1;
(statearr_15244_17384[(1)] = (5));

} else {
var statearr_15245_17385 = state_15220__$1;
(statearr_15245_17385[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15221 === (15))){
var inst_15155 = (state_15220[(15)]);
var inst_15189 = (state_15220[(16)]);
var inst_15189__$1 = cljs.core.empty_QMARK_(inst_15155);
var state_15220__$1 = (function (){var statearr_15246 = state_15220;
(statearr_15246[(16)] = inst_15189__$1);

return statearr_15246;
})();
if(inst_15189__$1){
var statearr_15247_17386 = state_15220__$1;
(statearr_15247_17386[(1)] = (17));

} else {
var statearr_15248_17387 = state_15220__$1;
(statearr_15248_17387[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15221 === (21))){
var inst_15152 = (state_15220[(12)]);
var inst_15148 = inst_15152;
var state_15220__$1 = (function (){var statearr_15252 = state_15220;
(statearr_15252[(10)] = inst_15148);

return statearr_15252;
})();
var statearr_15253_17388 = state_15220__$1;
(statearr_15253_17388[(2)] = null);

(statearr_15253_17388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15221 === (13))){
var inst_15182 = (state_15220[(2)]);
var inst_15183 = calc_state();
var inst_15148 = inst_15183;
var state_15220__$1 = (function (){var statearr_15255 = state_15220;
(statearr_15255[(10)] = inst_15148);

(statearr_15255[(17)] = inst_15182);

return statearr_15255;
})();
var statearr_15256_17389 = state_15220__$1;
(statearr_15256_17389[(2)] = null);

(statearr_15256_17389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15221 === (22))){
var inst_15212 = (state_15220[(2)]);
var state_15220__$1 = state_15220;
var statearr_15257_17392 = state_15220__$1;
(statearr_15257_17392[(2)] = inst_15212);

(statearr_15257_17392[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15221 === (6))){
var inst_15164 = (state_15220[(14)]);
var inst_15170 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15164,change);
var state_15220__$1 = state_15220;
var statearr_15258_17397 = state_15220__$1;
(statearr_15258_17397[(2)] = inst_15170);

(statearr_15258_17397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15221 === (25))){
var state_15220__$1 = state_15220;
var statearr_15260_17398 = state_15220__$1;
(statearr_15260_17398[(2)] = null);

(statearr_15260_17398[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15221 === (17))){
var inst_15164 = (state_15220[(14)]);
var inst_15156 = (state_15220[(18)]);
var inst_15191 = (inst_15156.cljs$core$IFn$_invoke$arity$1 ? inst_15156.cljs$core$IFn$_invoke$arity$1(inst_15164) : inst_15156.call(null,inst_15164));
var inst_15192 = cljs.core.not(inst_15191);
var state_15220__$1 = state_15220;
var statearr_15262_17400 = state_15220__$1;
(statearr_15262_17400[(2)] = inst_15192);

(statearr_15262_17400[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15221 === (3))){
var inst_15216 = (state_15220[(2)]);
var state_15220__$1 = state_15220;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15220__$1,inst_15216);
} else {
if((state_val_15221 === (12))){
var state_15220__$1 = state_15220;
var statearr_15263_17401 = state_15220__$1;
(statearr_15263_17401[(2)] = null);

(statearr_15263_17401[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15221 === (2))){
var inst_15148 = (state_15220[(10)]);
var inst_15152 = (state_15220[(12)]);
var inst_15152__$1 = cljs.core.__destructure_map(inst_15148);
var inst_15155 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15152__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15156 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15152__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15157 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15152__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_15220__$1 = (function (){var statearr_15266 = state_15220;
(statearr_15266[(15)] = inst_15155);

(statearr_15266[(18)] = inst_15156);

(statearr_15266[(12)] = inst_15152__$1);

return statearr_15266;
})();
return cljs.core.async.ioc_alts_BANG_(state_15220__$1,(4),inst_15157);
} else {
if((state_val_15221 === (23))){
var inst_15202 = (state_15220[(2)]);
var state_15220__$1 = state_15220;
if(cljs.core.truth_(inst_15202)){
var statearr_15267_17404 = state_15220__$1;
(statearr_15267_17404[(1)] = (24));

} else {
var statearr_15268_17406 = state_15220__$1;
(statearr_15268_17406[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15221 === (19))){
var inst_15195 = (state_15220[(2)]);
var state_15220__$1 = state_15220;
var statearr_15269_17407 = state_15220__$1;
(statearr_15269_17407[(2)] = inst_15195);

(statearr_15269_17407[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15221 === (11))){
var inst_15164 = (state_15220[(14)]);
var inst_15179 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_15164);
var state_15220__$1 = state_15220;
var statearr_15271_17409 = state_15220__$1;
(statearr_15271_17409[(2)] = inst_15179);

(statearr_15271_17409[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15221 === (9))){
var inst_15164 = (state_15220[(14)]);
var inst_15155 = (state_15220[(15)]);
var inst_15186 = (state_15220[(19)]);
var inst_15186__$1 = (inst_15155.cljs$core$IFn$_invoke$arity$1 ? inst_15155.cljs$core$IFn$_invoke$arity$1(inst_15164) : inst_15155.call(null,inst_15164));
var state_15220__$1 = (function (){var statearr_15272 = state_15220;
(statearr_15272[(19)] = inst_15186__$1);

return statearr_15272;
})();
if(cljs.core.truth_(inst_15186__$1)){
var statearr_15273_17410 = state_15220__$1;
(statearr_15273_17410[(1)] = (14));

} else {
var statearr_15274_17411 = state_15220__$1;
(statearr_15274_17411[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15221 === (5))){
var inst_15167 = (state_15220[(13)]);
var state_15220__$1 = state_15220;
var statearr_15275_17412 = state_15220__$1;
(statearr_15275_17412[(2)] = inst_15167);

(statearr_15275_17412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15221 === (14))){
var inst_15186 = (state_15220[(19)]);
var state_15220__$1 = state_15220;
var statearr_15276_17413 = state_15220__$1;
(statearr_15276_17413[(2)] = inst_15186);

(statearr_15276_17413[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15221 === (26))){
var inst_15207 = (state_15220[(2)]);
var state_15220__$1 = state_15220;
var statearr_15277_17414 = state_15220__$1;
(statearr_15277_17414[(2)] = inst_15207);

(statearr_15277_17414[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15221 === (16))){
var inst_15197 = (state_15220[(2)]);
var state_15220__$1 = state_15220;
if(cljs.core.truth_(inst_15197)){
var statearr_15278_17416 = state_15220__$1;
(statearr_15278_17416[(1)] = (20));

} else {
var statearr_15279_17417 = state_15220__$1;
(statearr_15279_17417[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15221 === (10))){
var inst_15214 = (state_15220[(2)]);
var state_15220__$1 = state_15220;
var statearr_15281_17418 = state_15220__$1;
(statearr_15281_17418[(2)] = inst_15214);

(statearr_15281_17418[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15221 === (18))){
var inst_15189 = (state_15220[(16)]);
var state_15220__$1 = state_15220;
var statearr_15282_17420 = state_15220__$1;
(statearr_15282_17420[(2)] = inst_15189);

(statearr_15282_17420[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15221 === (8))){
var inst_15163 = (state_15220[(7)]);
var inst_15174 = (inst_15163 == null);
var state_15220__$1 = state_15220;
if(cljs.core.truth_(inst_15174)){
var statearr_15283_17421 = state_15220__$1;
(statearr_15283_17421[(1)] = (11));

} else {
var statearr_15284_17422 = state_15220__$1;
(statearr_15284_17422[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__13248__auto__ = null;
var cljs$core$async$mix_$_state_machine__13248__auto____0 = (function (){
var statearr_15289 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15289[(0)] = cljs$core$async$mix_$_state_machine__13248__auto__);

(statearr_15289[(1)] = (1));

return statearr_15289;
});
var cljs$core$async$mix_$_state_machine__13248__auto____1 = (function (state_15220){
while(true){
var ret_value__13249__auto__ = (function (){try{while(true){
var result__13250__auto__ = switch__13247__auto__(state_15220);
if(cljs.core.keyword_identical_QMARK_(result__13250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13250__auto__;
}
break;
}
}catch (e15290){var ex__13251__auto__ = e15290;
var statearr_15293_17427 = state_15220;
(statearr_15293_17427[(2)] = ex__13251__auto__);


if(cljs.core.seq((state_15220[(4)]))){
var statearr_15294_17434 = state_15220;
(statearr_15294_17434[(1)] = cljs.core.first((state_15220[(4)])));

} else {
throw ex__13251__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17435 = state_15220;
state_15220 = G__17435;
continue;
} else {
return ret_value__13249__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13248__auto__ = function(state_15220){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13248__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13248__auto____1.call(this,state_15220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13248__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13248__auto____0;
cljs$core$async$mix_$_state_machine__13248__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13248__auto____1;
return cljs$core$async$mix_$_state_machine__13248__auto__;
})()
})();
var state__13486__auto__ = (function (){var statearr_15295 = f__13485__auto__();
(statearr_15295[(6)] = c__13484__auto___17368);

return statearr_15295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13486__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_17436 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_17436(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_17440 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_17440(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_17447 = (function() {
var G__17448 = null;
var G__17448__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__17448__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__17448 = function(p,v){
switch(arguments.length){
case 1:
return G__17448__1.call(this,p);
case 2:
return G__17448__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17448.cljs$core$IFn$_invoke$arity$1 = G__17448__1;
G__17448.cljs$core$IFn$_invoke$arity$2 = G__17448__2;
return G__17448;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__15320 = arguments.length;
switch (G__15320) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17447(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17447(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__15328 = arguments.length;
switch (G__15328) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__15323_SHARP_){
if(cljs.core.truth_((p1__15323_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__15323_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__15323_SHARP_.call(null,topic)))){
return p1__15323_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__15323_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15334 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15334 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15335){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15335 = meta15335;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15334.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15336,meta15335__$1){
var self__ = this;
var _15336__$1 = this;
return (new cljs.core.async.t_cljs$core$async15334(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15335__$1));
}));

(cljs.core.async.t_cljs$core$async15334.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15336){
var self__ = this;
var _15336__$1 = this;
return self__.meta15335;
}));

(cljs.core.async.t_cljs$core$async15334.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15334.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15334.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15334.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async15334.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async15334.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async15334.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async15334.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta15335","meta15335",953200300,null)], null);
}));

(cljs.core.async.t_cljs$core$async15334.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15334.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15334");

(cljs.core.async.t_cljs$core$async15334.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15334");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15334.
 */
cljs.core.async.__GT_t_cljs$core$async15334 = (function cljs$core$async$__GT_t_cljs$core$async15334(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15335){
return (new cljs.core.async.t_cljs$core$async15334(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15335));
});

}

return (new cljs.core.async.t_cljs$core$async15334(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13484__auto___17514 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13485__auto__ = (function (){var switch__13247__auto__ = (function (state_15418){
var state_val_15419 = (state_15418[(1)]);
if((state_val_15419 === (7))){
var inst_15410 = (state_15418[(2)]);
var state_15418__$1 = state_15418;
var statearr_15421_17518 = state_15418__$1;
(statearr_15421_17518[(2)] = inst_15410);

(statearr_15421_17518[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15419 === (20))){
var state_15418__$1 = state_15418;
var statearr_15422_17523 = state_15418__$1;
(statearr_15422_17523[(2)] = null);

(statearr_15422_17523[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15419 === (1))){
var state_15418__$1 = state_15418;
var statearr_15423_17527 = state_15418__$1;
(statearr_15423_17527[(2)] = null);

(statearr_15423_17527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15419 === (24))){
var inst_15393 = (state_15418[(7)]);
var inst_15402 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_15393);
var state_15418__$1 = state_15418;
var statearr_15424_17531 = state_15418__$1;
(statearr_15424_17531[(2)] = inst_15402);

(statearr_15424_17531[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15419 === (4))){
var inst_15342 = (state_15418[(8)]);
var inst_15342__$1 = (state_15418[(2)]);
var inst_15343 = (inst_15342__$1 == null);
var state_15418__$1 = (function (){var statearr_15426 = state_15418;
(statearr_15426[(8)] = inst_15342__$1);

return statearr_15426;
})();
if(cljs.core.truth_(inst_15343)){
var statearr_15427_17534 = state_15418__$1;
(statearr_15427_17534[(1)] = (5));

} else {
var statearr_15428_17535 = state_15418__$1;
(statearr_15428_17535[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15419 === (15))){
var inst_15387 = (state_15418[(2)]);
var state_15418__$1 = state_15418;
var statearr_15432_17537 = state_15418__$1;
(statearr_15432_17537[(2)] = inst_15387);

(statearr_15432_17537[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15419 === (21))){
var inst_15407 = (state_15418[(2)]);
var state_15418__$1 = (function (){var statearr_15434 = state_15418;
(statearr_15434[(9)] = inst_15407);

return statearr_15434;
})();
var statearr_15435_17538 = state_15418__$1;
(statearr_15435_17538[(2)] = null);

(statearr_15435_17538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15419 === (13))){
var inst_15368 = (state_15418[(10)]);
var inst_15371 = cljs.core.chunked_seq_QMARK_(inst_15368);
var state_15418__$1 = state_15418;
if(inst_15371){
var statearr_15437_17539 = state_15418__$1;
(statearr_15437_17539[(1)] = (16));

} else {
var statearr_15438_17540 = state_15418__$1;
(statearr_15438_17540[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15419 === (22))){
var inst_15399 = (state_15418[(2)]);
var state_15418__$1 = state_15418;
if(cljs.core.truth_(inst_15399)){
var statearr_15440_17541 = state_15418__$1;
(statearr_15440_17541[(1)] = (23));

} else {
var statearr_15441_17542 = state_15418__$1;
(statearr_15441_17542[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15419 === (6))){
var inst_15342 = (state_15418[(8)]);
var inst_15395 = (state_15418[(11)]);
var inst_15393 = (state_15418[(7)]);
var inst_15393__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_15342) : topic_fn.call(null,inst_15342));
var inst_15394 = cljs.core.deref(mults);
var inst_15395__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15394,inst_15393__$1);
var state_15418__$1 = (function (){var statearr_15442 = state_15418;
(statearr_15442[(11)] = inst_15395__$1);

(statearr_15442[(7)] = inst_15393__$1);

return statearr_15442;
})();
if(cljs.core.truth_(inst_15395__$1)){
var statearr_15443_17549 = state_15418__$1;
(statearr_15443_17549[(1)] = (19));

} else {
var statearr_15444_17550 = state_15418__$1;
(statearr_15444_17550[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15419 === (25))){
var inst_15404 = (state_15418[(2)]);
var state_15418__$1 = state_15418;
var statearr_15446_17552 = state_15418__$1;
(statearr_15446_17552[(2)] = inst_15404);

(statearr_15446_17552[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15419 === (17))){
var inst_15368 = (state_15418[(10)]);
var inst_15378 = cljs.core.first(inst_15368);
var inst_15379 = cljs.core.async.muxch_STAR_(inst_15378);
var inst_15380 = cljs.core.async.close_BANG_(inst_15379);
var inst_15381 = cljs.core.next(inst_15368);
var inst_15352 = inst_15381;
var inst_15353 = null;
var inst_15354 = (0);
var inst_15355 = (0);
var state_15418__$1 = (function (){var statearr_15448 = state_15418;
(statearr_15448[(12)] = inst_15380);

(statearr_15448[(13)] = inst_15353);

(statearr_15448[(14)] = inst_15354);

(statearr_15448[(15)] = inst_15355);

(statearr_15448[(16)] = inst_15352);

return statearr_15448;
})();
var statearr_15451_17553 = state_15418__$1;
(statearr_15451_17553[(2)] = null);

(statearr_15451_17553[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15419 === (3))){
var inst_15412 = (state_15418[(2)]);
var state_15418__$1 = state_15418;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15418__$1,inst_15412);
} else {
if((state_val_15419 === (12))){
var inst_15389 = (state_15418[(2)]);
var state_15418__$1 = state_15418;
var statearr_15455_17554 = state_15418__$1;
(statearr_15455_17554[(2)] = inst_15389);

(statearr_15455_17554[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15419 === (2))){
var state_15418__$1 = state_15418;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15418__$1,(4),ch);
} else {
if((state_val_15419 === (23))){
var state_15418__$1 = state_15418;
var statearr_15456_17555 = state_15418__$1;
(statearr_15456_17555[(2)] = null);

(statearr_15456_17555[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15419 === (19))){
var inst_15342 = (state_15418[(8)]);
var inst_15395 = (state_15418[(11)]);
var inst_15397 = cljs.core.async.muxch_STAR_(inst_15395);
var state_15418__$1 = state_15418;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15418__$1,(22),inst_15397,inst_15342);
} else {
if((state_val_15419 === (11))){
var inst_15368 = (state_15418[(10)]);
var inst_15352 = (state_15418[(16)]);
var inst_15368__$1 = cljs.core.seq(inst_15352);
var state_15418__$1 = (function (){var statearr_15458 = state_15418;
(statearr_15458[(10)] = inst_15368__$1);

return statearr_15458;
})();
if(inst_15368__$1){
var statearr_15462_17556 = state_15418__$1;
(statearr_15462_17556[(1)] = (13));

} else {
var statearr_15463_17557 = state_15418__$1;
(statearr_15463_17557[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15419 === (9))){
var inst_15391 = (state_15418[(2)]);
var state_15418__$1 = state_15418;
var statearr_15464_17558 = state_15418__$1;
(statearr_15464_17558[(2)] = inst_15391);

(statearr_15464_17558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15419 === (5))){
var inst_15349 = cljs.core.deref(mults);
var inst_15350 = cljs.core.vals(inst_15349);
var inst_15351 = cljs.core.seq(inst_15350);
var inst_15352 = inst_15351;
var inst_15353 = null;
var inst_15354 = (0);
var inst_15355 = (0);
var state_15418__$1 = (function (){var statearr_15477 = state_15418;
(statearr_15477[(13)] = inst_15353);

(statearr_15477[(14)] = inst_15354);

(statearr_15477[(15)] = inst_15355);

(statearr_15477[(16)] = inst_15352);

return statearr_15477;
})();
var statearr_15478_17561 = state_15418__$1;
(statearr_15478_17561[(2)] = null);

(statearr_15478_17561[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15419 === (14))){
var state_15418__$1 = state_15418;
var statearr_15482_17562 = state_15418__$1;
(statearr_15482_17562[(2)] = null);

(statearr_15482_17562[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15419 === (16))){
var inst_15368 = (state_15418[(10)]);
var inst_15373 = cljs.core.chunk_first(inst_15368);
var inst_15374 = cljs.core.chunk_rest(inst_15368);
var inst_15375 = cljs.core.count(inst_15373);
var inst_15352 = inst_15374;
var inst_15353 = inst_15373;
var inst_15354 = inst_15375;
var inst_15355 = (0);
var state_15418__$1 = (function (){var statearr_15483 = state_15418;
(statearr_15483[(13)] = inst_15353);

(statearr_15483[(14)] = inst_15354);

(statearr_15483[(15)] = inst_15355);

(statearr_15483[(16)] = inst_15352);

return statearr_15483;
})();
var statearr_15485_17563 = state_15418__$1;
(statearr_15485_17563[(2)] = null);

(statearr_15485_17563[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15419 === (10))){
var inst_15353 = (state_15418[(13)]);
var inst_15354 = (state_15418[(14)]);
var inst_15355 = (state_15418[(15)]);
var inst_15352 = (state_15418[(16)]);
var inst_15361 = cljs.core._nth(inst_15353,inst_15355);
var inst_15362 = cljs.core.async.muxch_STAR_(inst_15361);
var inst_15363 = cljs.core.async.close_BANG_(inst_15362);
var inst_15364 = (inst_15355 + (1));
var tmp15479 = inst_15353;
var tmp15480 = inst_15354;
var tmp15481 = inst_15352;
var inst_15352__$1 = tmp15481;
var inst_15353__$1 = tmp15479;
var inst_15354__$1 = tmp15480;
var inst_15355__$1 = inst_15364;
var state_15418__$1 = (function (){var statearr_15486 = state_15418;
(statearr_15486[(13)] = inst_15353__$1);

(statearr_15486[(17)] = inst_15363);

(statearr_15486[(14)] = inst_15354__$1);

(statearr_15486[(15)] = inst_15355__$1);

(statearr_15486[(16)] = inst_15352__$1);

return statearr_15486;
})();
var statearr_15487_17565 = state_15418__$1;
(statearr_15487_17565[(2)] = null);

(statearr_15487_17565[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15419 === (18))){
var inst_15384 = (state_15418[(2)]);
var state_15418__$1 = state_15418;
var statearr_15488_17569 = state_15418__$1;
(statearr_15488_17569[(2)] = inst_15384);

(statearr_15488_17569[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15419 === (8))){
var inst_15354 = (state_15418[(14)]);
var inst_15355 = (state_15418[(15)]);
var inst_15358 = (inst_15355 < inst_15354);
var inst_15359 = inst_15358;
var state_15418__$1 = state_15418;
if(cljs.core.truth_(inst_15359)){
var statearr_15491_17570 = state_15418__$1;
(statearr_15491_17570[(1)] = (10));

} else {
var statearr_15492_17571 = state_15418__$1;
(statearr_15492_17571[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13248__auto__ = null;
var cljs$core$async$state_machine__13248__auto____0 = (function (){
var statearr_15493 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15493[(0)] = cljs$core$async$state_machine__13248__auto__);

(statearr_15493[(1)] = (1));

return statearr_15493;
});
var cljs$core$async$state_machine__13248__auto____1 = (function (state_15418){
while(true){
var ret_value__13249__auto__ = (function (){try{while(true){
var result__13250__auto__ = switch__13247__auto__(state_15418);
if(cljs.core.keyword_identical_QMARK_(result__13250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13250__auto__;
}
break;
}
}catch (e15494){var ex__13251__auto__ = e15494;
var statearr_15495_17572 = state_15418;
(statearr_15495_17572[(2)] = ex__13251__auto__);


if(cljs.core.seq((state_15418[(4)]))){
var statearr_15498_17573 = state_15418;
(statearr_15498_17573[(1)] = cljs.core.first((state_15418[(4)])));

} else {
throw ex__13251__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17574 = state_15418;
state_15418 = G__17574;
continue;
} else {
return ret_value__13249__auto__;
}
break;
}
});
cljs$core$async$state_machine__13248__auto__ = function(state_15418){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13248__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13248__auto____1.call(this,state_15418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13248__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13248__auto____0;
cljs$core$async$state_machine__13248__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13248__auto____1;
return cljs$core$async$state_machine__13248__auto__;
})()
})();
var state__13486__auto__ = (function (){var statearr_15500 = f__13485__auto__();
(statearr_15500[(6)] = c__13484__auto___17514);

return statearr_15500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13486__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__15502 = arguments.length;
switch (G__15502) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__15512 = arguments.length;
switch (G__15512) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__15516 = arguments.length;
switch (G__15516) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__13484__auto___17587 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13485__auto__ = (function (){var switch__13247__auto__ = (function (state_15569){
var state_val_15571 = (state_15569[(1)]);
if((state_val_15571 === (7))){
var state_15569__$1 = state_15569;
var statearr_15575_17588 = state_15569__$1;
(statearr_15575_17588[(2)] = null);

(statearr_15575_17588[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15571 === (1))){
var state_15569__$1 = state_15569;
var statearr_15579_17589 = state_15569__$1;
(statearr_15579_17589[(2)] = null);

(statearr_15579_17589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15571 === (4))){
var inst_15525 = (state_15569[(7)]);
var inst_15526 = (state_15569[(8)]);
var inst_15528 = (inst_15526 < inst_15525);
var state_15569__$1 = state_15569;
if(cljs.core.truth_(inst_15528)){
var statearr_15583_17590 = state_15569__$1;
(statearr_15583_17590[(1)] = (6));

} else {
var statearr_15584_17591 = state_15569__$1;
(statearr_15584_17591[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15571 === (15))){
var inst_15555 = (state_15569[(9)]);
var inst_15560 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_15555);
var state_15569__$1 = state_15569;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15569__$1,(17),out,inst_15560);
} else {
if((state_val_15571 === (13))){
var inst_15555 = (state_15569[(9)]);
var inst_15555__$1 = (state_15569[(2)]);
var inst_15556 = cljs.core.some(cljs.core.nil_QMARK_,inst_15555__$1);
var state_15569__$1 = (function (){var statearr_15587 = state_15569;
(statearr_15587[(9)] = inst_15555__$1);

return statearr_15587;
})();
if(cljs.core.truth_(inst_15556)){
var statearr_15588_17592 = state_15569__$1;
(statearr_15588_17592[(1)] = (14));

} else {
var statearr_15590_17593 = state_15569__$1;
(statearr_15590_17593[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15571 === (6))){
var state_15569__$1 = state_15569;
var statearr_15593_17594 = state_15569__$1;
(statearr_15593_17594[(2)] = null);

(statearr_15593_17594[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15571 === (17))){
var inst_15562 = (state_15569[(2)]);
var state_15569__$1 = (function (){var statearr_15600 = state_15569;
(statearr_15600[(10)] = inst_15562);

return statearr_15600;
})();
var statearr_15601_17595 = state_15569__$1;
(statearr_15601_17595[(2)] = null);

(statearr_15601_17595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15571 === (3))){
var inst_15567 = (state_15569[(2)]);
var state_15569__$1 = state_15569;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15569__$1,inst_15567);
} else {
if((state_val_15571 === (12))){
var _ = (function (){var statearr_15606 = state_15569;
(statearr_15606[(4)] = cljs.core.rest((state_15569[(4)])));

return statearr_15606;
})();
var state_15569__$1 = state_15569;
var ex15598 = (state_15569__$1[(2)]);
var statearr_15610_17596 = state_15569__$1;
(statearr_15610_17596[(5)] = ex15598);


if((ex15598 instanceof Object)){
var statearr_15616_17597 = state_15569__$1;
(statearr_15616_17597[(1)] = (11));

(statearr_15616_17597[(5)] = null);

} else {
throw ex15598;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15571 === (2))){
var inst_15524 = cljs.core.reset_BANG_(dctr,cnt);
var inst_15525 = cnt;
var inst_15526 = (0);
var state_15569__$1 = (function (){var statearr_15646 = state_15569;
(statearr_15646[(11)] = inst_15524);

(statearr_15646[(7)] = inst_15525);

(statearr_15646[(8)] = inst_15526);

return statearr_15646;
})();
var statearr_15650_17598 = state_15569__$1;
(statearr_15650_17598[(2)] = null);

(statearr_15650_17598[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15571 === (11))){
var inst_15533 = (state_15569[(2)]);
var inst_15534 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_15569__$1 = (function (){var statearr_15652 = state_15569;
(statearr_15652[(12)] = inst_15533);

return statearr_15652;
})();
var statearr_15653_17599 = state_15569__$1;
(statearr_15653_17599[(2)] = inst_15534);

(statearr_15653_17599[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15571 === (9))){
var inst_15526 = (state_15569[(8)]);
var _ = (function (){var statearr_15657 = state_15569;
(statearr_15657[(4)] = cljs.core.cons((12),(state_15569[(4)])));

return statearr_15657;
})();
var inst_15541 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_15526) : chs__$1.call(null,inst_15526));
var inst_15542 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_15526) : done.call(null,inst_15526));
var inst_15543 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_15541,inst_15542);
var ___$1 = (function (){var statearr_15660 = state_15569;
(statearr_15660[(4)] = cljs.core.rest((state_15569[(4)])));

return statearr_15660;
})();
var state_15569__$1 = state_15569;
var statearr_15662_17600 = state_15569__$1;
(statearr_15662_17600[(2)] = inst_15543);

(statearr_15662_17600[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15571 === (5))){
var inst_15553 = (state_15569[(2)]);
var state_15569__$1 = (function (){var statearr_15667 = state_15569;
(statearr_15667[(13)] = inst_15553);

return statearr_15667;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15569__$1,(13),dchan);
} else {
if((state_val_15571 === (14))){
var inst_15558 = cljs.core.async.close_BANG_(out);
var state_15569__$1 = state_15569;
var statearr_15675_17601 = state_15569__$1;
(statearr_15675_17601[(2)] = inst_15558);

(statearr_15675_17601[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15571 === (16))){
var inst_15565 = (state_15569[(2)]);
var state_15569__$1 = state_15569;
var statearr_15678_17602 = state_15569__$1;
(statearr_15678_17602[(2)] = inst_15565);

(statearr_15678_17602[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15571 === (10))){
var inst_15526 = (state_15569[(8)]);
var inst_15546 = (state_15569[(2)]);
var inst_15547 = (inst_15526 + (1));
var inst_15526__$1 = inst_15547;
var state_15569__$1 = (function (){var statearr_15680 = state_15569;
(statearr_15680[(14)] = inst_15546);

(statearr_15680[(8)] = inst_15526__$1);

return statearr_15680;
})();
var statearr_15684_17603 = state_15569__$1;
(statearr_15684_17603[(2)] = null);

(statearr_15684_17603[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15571 === (8))){
var inst_15551 = (state_15569[(2)]);
var state_15569__$1 = state_15569;
var statearr_15685_17604 = state_15569__$1;
(statearr_15685_17604[(2)] = inst_15551);

(statearr_15685_17604[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13248__auto__ = null;
var cljs$core$async$state_machine__13248__auto____0 = (function (){
var statearr_15692 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15692[(0)] = cljs$core$async$state_machine__13248__auto__);

(statearr_15692[(1)] = (1));

return statearr_15692;
});
var cljs$core$async$state_machine__13248__auto____1 = (function (state_15569){
while(true){
var ret_value__13249__auto__ = (function (){try{while(true){
var result__13250__auto__ = switch__13247__auto__(state_15569);
if(cljs.core.keyword_identical_QMARK_(result__13250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13250__auto__;
}
break;
}
}catch (e15693){var ex__13251__auto__ = e15693;
var statearr_15695_17605 = state_15569;
(statearr_15695_17605[(2)] = ex__13251__auto__);


if(cljs.core.seq((state_15569[(4)]))){
var statearr_15696_17606 = state_15569;
(statearr_15696_17606[(1)] = cljs.core.first((state_15569[(4)])));

} else {
throw ex__13251__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17607 = state_15569;
state_15569 = G__17607;
continue;
} else {
return ret_value__13249__auto__;
}
break;
}
});
cljs$core$async$state_machine__13248__auto__ = function(state_15569){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13248__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13248__auto____1.call(this,state_15569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13248__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13248__auto____0;
cljs$core$async$state_machine__13248__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13248__auto____1;
return cljs$core$async$state_machine__13248__auto__;
})()
})();
var state__13486__auto__ = (function (){var statearr_15703 = f__13485__auto__();
(statearr_15703[(6)] = c__13484__auto___17587);

return statearr_15703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13486__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__15714 = arguments.length;
switch (G__15714) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13484__auto___17609 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13485__auto__ = (function (){var switch__13247__auto__ = (function (state_15759){
var state_val_15760 = (state_15759[(1)]);
if((state_val_15760 === (7))){
var inst_15734 = (state_15759[(7)]);
var inst_15735 = (state_15759[(8)]);
var inst_15734__$1 = (state_15759[(2)]);
var inst_15735__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15734__$1,(0),null);
var inst_15736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15734__$1,(1),null);
var inst_15737 = (inst_15735__$1 == null);
var state_15759__$1 = (function (){var statearr_15765 = state_15759;
(statearr_15765[(7)] = inst_15734__$1);

(statearr_15765[(9)] = inst_15736);

(statearr_15765[(8)] = inst_15735__$1);

return statearr_15765;
})();
if(cljs.core.truth_(inst_15737)){
var statearr_15769_17610 = state_15759__$1;
(statearr_15769_17610[(1)] = (8));

} else {
var statearr_15770_17611 = state_15759__$1;
(statearr_15770_17611[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15760 === (1))){
var inst_15722 = cljs.core.vec(chs);
var inst_15723 = inst_15722;
var state_15759__$1 = (function (){var statearr_15772 = state_15759;
(statearr_15772[(10)] = inst_15723);

return statearr_15772;
})();
var statearr_15773_17612 = state_15759__$1;
(statearr_15773_17612[(2)] = null);

(statearr_15773_17612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15760 === (4))){
var inst_15723 = (state_15759[(10)]);
var state_15759__$1 = state_15759;
return cljs.core.async.ioc_alts_BANG_(state_15759__$1,(7),inst_15723);
} else {
if((state_val_15760 === (6))){
var inst_15755 = (state_15759[(2)]);
var state_15759__$1 = state_15759;
var statearr_15778_17613 = state_15759__$1;
(statearr_15778_17613[(2)] = inst_15755);

(statearr_15778_17613[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15760 === (3))){
var inst_15757 = (state_15759[(2)]);
var state_15759__$1 = state_15759;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15759__$1,inst_15757);
} else {
if((state_val_15760 === (2))){
var inst_15723 = (state_15759[(10)]);
var inst_15726 = cljs.core.count(inst_15723);
var inst_15727 = (inst_15726 > (0));
var state_15759__$1 = state_15759;
if(cljs.core.truth_(inst_15727)){
var statearr_15787_17614 = state_15759__$1;
(statearr_15787_17614[(1)] = (4));

} else {
var statearr_15788_17615 = state_15759__$1;
(statearr_15788_17615[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15760 === (11))){
var inst_15723 = (state_15759[(10)]);
var inst_15747 = (state_15759[(2)]);
var tmp15779 = inst_15723;
var inst_15723__$1 = tmp15779;
var state_15759__$1 = (function (){var statearr_15792 = state_15759;
(statearr_15792[(10)] = inst_15723__$1);

(statearr_15792[(11)] = inst_15747);

return statearr_15792;
})();
var statearr_15794_17616 = state_15759__$1;
(statearr_15794_17616[(2)] = null);

(statearr_15794_17616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15760 === (9))){
var inst_15735 = (state_15759[(8)]);
var state_15759__$1 = state_15759;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15759__$1,(11),out,inst_15735);
} else {
if((state_val_15760 === (5))){
var inst_15753 = cljs.core.async.close_BANG_(out);
var state_15759__$1 = state_15759;
var statearr_15811_17617 = state_15759__$1;
(statearr_15811_17617[(2)] = inst_15753);

(statearr_15811_17617[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15760 === (10))){
var inst_15750 = (state_15759[(2)]);
var state_15759__$1 = state_15759;
var statearr_15815_17619 = state_15759__$1;
(statearr_15815_17619[(2)] = inst_15750);

(statearr_15815_17619[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15760 === (8))){
var inst_15723 = (state_15759[(10)]);
var inst_15734 = (state_15759[(7)]);
var inst_15736 = (state_15759[(9)]);
var inst_15735 = (state_15759[(8)]);
var inst_15742 = (function (){var cs = inst_15723;
var vec__15730 = inst_15734;
var v = inst_15735;
var c = inst_15736;
return (function (p1__15709_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__15709_SHARP_);
});
})();
var inst_15743 = cljs.core.filterv(inst_15742,inst_15723);
var inst_15723__$1 = inst_15743;
var state_15759__$1 = (function (){var statearr_15826 = state_15759;
(statearr_15826[(10)] = inst_15723__$1);

return statearr_15826;
})();
var statearr_15827_17625 = state_15759__$1;
(statearr_15827_17625[(2)] = null);

(statearr_15827_17625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13248__auto__ = null;
var cljs$core$async$state_machine__13248__auto____0 = (function (){
var statearr_15833 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15833[(0)] = cljs$core$async$state_machine__13248__auto__);

(statearr_15833[(1)] = (1));

return statearr_15833;
});
var cljs$core$async$state_machine__13248__auto____1 = (function (state_15759){
while(true){
var ret_value__13249__auto__ = (function (){try{while(true){
var result__13250__auto__ = switch__13247__auto__(state_15759);
if(cljs.core.keyword_identical_QMARK_(result__13250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13250__auto__;
}
break;
}
}catch (e15835){var ex__13251__auto__ = e15835;
var statearr_15836_17629 = state_15759;
(statearr_15836_17629[(2)] = ex__13251__auto__);


if(cljs.core.seq((state_15759[(4)]))){
var statearr_15837_17630 = state_15759;
(statearr_15837_17630[(1)] = cljs.core.first((state_15759[(4)])));

} else {
throw ex__13251__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17631 = state_15759;
state_15759 = G__17631;
continue;
} else {
return ret_value__13249__auto__;
}
break;
}
});
cljs$core$async$state_machine__13248__auto__ = function(state_15759){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13248__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13248__auto____1.call(this,state_15759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13248__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13248__auto____0;
cljs$core$async$state_machine__13248__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13248__auto____1;
return cljs$core$async$state_machine__13248__auto__;
})()
})();
var state__13486__auto__ = (function (){var statearr_15843 = f__13485__auto__();
(statearr_15843[(6)] = c__13484__auto___17609);

return statearr_15843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13486__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__15859 = arguments.length;
switch (G__15859) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13484__auto___17639 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13485__auto__ = (function (){var switch__13247__auto__ = (function (state_15908){
var state_val_15909 = (state_15908[(1)]);
if((state_val_15909 === (7))){
var inst_15882 = (state_15908[(7)]);
var inst_15882__$1 = (state_15908[(2)]);
var inst_15885 = (inst_15882__$1 == null);
var inst_15887 = cljs.core.not(inst_15885);
var state_15908__$1 = (function (){var statearr_15918 = state_15908;
(statearr_15918[(7)] = inst_15882__$1);

return statearr_15918;
})();
if(inst_15887){
var statearr_15919_17640 = state_15908__$1;
(statearr_15919_17640[(1)] = (8));

} else {
var statearr_15922_17644 = state_15908__$1;
(statearr_15922_17644[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15909 === (1))){
var inst_15875 = (0);
var state_15908__$1 = (function (){var statearr_15927 = state_15908;
(statearr_15927[(8)] = inst_15875);

return statearr_15927;
})();
var statearr_15929_17645 = state_15908__$1;
(statearr_15929_17645[(2)] = null);

(statearr_15929_17645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15909 === (4))){
var state_15908__$1 = state_15908;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15908__$1,(7),ch);
} else {
if((state_val_15909 === (6))){
var inst_15898 = (state_15908[(2)]);
var state_15908__$1 = state_15908;
var statearr_15937_17646 = state_15908__$1;
(statearr_15937_17646[(2)] = inst_15898);

(statearr_15937_17646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15909 === (3))){
var inst_15900 = (state_15908[(2)]);
var inst_15901 = cljs.core.async.close_BANG_(out);
var state_15908__$1 = (function (){var statearr_15943 = state_15908;
(statearr_15943[(9)] = inst_15900);

return statearr_15943;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15908__$1,inst_15901);
} else {
if((state_val_15909 === (2))){
var inst_15875 = (state_15908[(8)]);
var inst_15878 = (inst_15875 < n);
var state_15908__$1 = state_15908;
if(cljs.core.truth_(inst_15878)){
var statearr_15950_17647 = state_15908__$1;
(statearr_15950_17647[(1)] = (4));

} else {
var statearr_15951_17648 = state_15908__$1;
(statearr_15951_17648[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15909 === (11))){
var inst_15875 = (state_15908[(8)]);
var inst_15890 = (state_15908[(2)]);
var inst_15891 = (inst_15875 + (1));
var inst_15875__$1 = inst_15891;
var state_15908__$1 = (function (){var statearr_15960 = state_15908;
(statearr_15960[(8)] = inst_15875__$1);

(statearr_15960[(10)] = inst_15890);

return statearr_15960;
})();
var statearr_15962_17649 = state_15908__$1;
(statearr_15962_17649[(2)] = null);

(statearr_15962_17649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15909 === (9))){
var state_15908__$1 = state_15908;
var statearr_15964_17651 = state_15908__$1;
(statearr_15964_17651[(2)] = null);

(statearr_15964_17651[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15909 === (5))){
var state_15908__$1 = state_15908;
var statearr_15969_17652 = state_15908__$1;
(statearr_15969_17652[(2)] = null);

(statearr_15969_17652[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15909 === (10))){
var inst_15895 = (state_15908[(2)]);
var state_15908__$1 = state_15908;
var statearr_15972_17654 = state_15908__$1;
(statearr_15972_17654[(2)] = inst_15895);

(statearr_15972_17654[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15909 === (8))){
var inst_15882 = (state_15908[(7)]);
var state_15908__$1 = state_15908;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15908__$1,(11),out,inst_15882);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13248__auto__ = null;
var cljs$core$async$state_machine__13248__auto____0 = (function (){
var statearr_15976 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15976[(0)] = cljs$core$async$state_machine__13248__auto__);

(statearr_15976[(1)] = (1));

return statearr_15976;
});
var cljs$core$async$state_machine__13248__auto____1 = (function (state_15908){
while(true){
var ret_value__13249__auto__ = (function (){try{while(true){
var result__13250__auto__ = switch__13247__auto__(state_15908);
if(cljs.core.keyword_identical_QMARK_(result__13250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13250__auto__;
}
break;
}
}catch (e15980){var ex__13251__auto__ = e15980;
var statearr_15981_17655 = state_15908;
(statearr_15981_17655[(2)] = ex__13251__auto__);


if(cljs.core.seq((state_15908[(4)]))){
var statearr_15983_17656 = state_15908;
(statearr_15983_17656[(1)] = cljs.core.first((state_15908[(4)])));

} else {
throw ex__13251__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17657 = state_15908;
state_15908 = G__17657;
continue;
} else {
return ret_value__13249__auto__;
}
break;
}
});
cljs$core$async$state_machine__13248__auto__ = function(state_15908){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13248__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13248__auto____1.call(this,state_15908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13248__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13248__auto____0;
cljs$core$async$state_machine__13248__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13248__auto____1;
return cljs$core$async$state_machine__13248__auto__;
})()
})();
var state__13486__auto__ = (function (){var statearr_15988 = f__13485__auto__();
(statearr_15988[(6)] = c__13484__auto___17639);

return statearr_15988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13486__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15996 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15996 = (function (f,ch,meta15997){
this.f = f;
this.ch = ch;
this.meta15997 = meta15997;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15996.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15998,meta15997__$1){
var self__ = this;
var _15998__$1 = this;
return (new cljs.core.async.t_cljs$core$async15996(self__.f,self__.ch,meta15997__$1));
}));

(cljs.core.async.t_cljs$core$async15996.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15998){
var self__ = this;
var _15998__$1 = this;
return self__.meta15997;
}));

(cljs.core.async.t_cljs$core$async15996.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15996.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15996.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15996.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15996.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16002 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16002 = (function (f,ch,meta15997,_,fn1,meta16003){
this.f = f;
this.ch = ch;
this.meta15997 = meta15997;
this._ = _;
this.fn1 = fn1;
this.meta16003 = meta16003;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16002.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16004,meta16003__$1){
var self__ = this;
var _16004__$1 = this;
return (new cljs.core.async.t_cljs$core$async16002(self__.f,self__.ch,self__.meta15997,self__._,self__.fn1,meta16003__$1));
}));

(cljs.core.async.t_cljs$core$async16002.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16004){
var self__ = this;
var _16004__$1 = this;
return self__.meta16003;
}));

(cljs.core.async.t_cljs$core$async16002.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16002.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async16002.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16002.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__15990_SHARP_){
var G__16016 = (((p1__15990_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__15990_SHARP_) : self__.f.call(null,p1__15990_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16016) : f1.call(null,G__16016));
});
}));

(cljs.core.async.t_cljs$core$async16002.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15997","meta15997",-447910582,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async15996","cljs.core.async/t_cljs$core$async15996",-1378150760,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta16003","meta16003",-1155393395,null)], null);
}));

(cljs.core.async.t_cljs$core$async16002.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16002.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16002");

(cljs.core.async.t_cljs$core$async16002.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16002");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16002.
 */
cljs.core.async.__GT_t_cljs$core$async16002 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16002(f__$1,ch__$1,meta15997__$1,___$2,fn1__$1,meta16003){
return (new cljs.core.async.t_cljs$core$async16002(f__$1,ch__$1,meta15997__$1,___$2,fn1__$1,meta16003));
});

}

return (new cljs.core.async.t_cljs$core$async16002(self__.f,self__.ch,self__.meta15997,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16024 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16024) : self__.f.call(null,G__16024));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async15996.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15996.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async15996.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15997","meta15997",-447910582,null)], null);
}));

(cljs.core.async.t_cljs$core$async15996.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15996.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15996");

(cljs.core.async.t_cljs$core$async15996.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15996");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15996.
 */
cljs.core.async.__GT_t_cljs$core$async15996 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15996(f__$1,ch__$1,meta15997){
return (new cljs.core.async.t_cljs$core$async15996(f__$1,ch__$1,meta15997));
});

}

return (new cljs.core.async.t_cljs$core$async15996(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16042 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16042 = (function (f,ch,meta16043){
this.f = f;
this.ch = ch;
this.meta16043 = meta16043;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16042.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16044,meta16043__$1){
var self__ = this;
var _16044__$1 = this;
return (new cljs.core.async.t_cljs$core$async16042(self__.f,self__.ch,meta16043__$1));
}));

(cljs.core.async.t_cljs$core$async16042.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16044){
var self__ = this;
var _16044__$1 = this;
return self__.meta16043;
}));

(cljs.core.async.t_cljs$core$async16042.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16042.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16042.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16042.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16042.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16042.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async16042.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16043","meta16043",63718003,null)], null);
}));

(cljs.core.async.t_cljs$core$async16042.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16042.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16042");

(cljs.core.async.t_cljs$core$async16042.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16042");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16042.
 */
cljs.core.async.__GT_t_cljs$core$async16042 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async16042(f__$1,ch__$1,meta16043){
return (new cljs.core.async.t_cljs$core$async16042(f__$1,ch__$1,meta16043));
});

}

return (new cljs.core.async.t_cljs$core$async16042(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16050 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16050 = (function (p,ch,meta16051){
this.p = p;
this.ch = ch;
this.meta16051 = meta16051;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16050.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16052,meta16051__$1){
var self__ = this;
var _16052__$1 = this;
return (new cljs.core.async.t_cljs$core$async16050(self__.p,self__.ch,meta16051__$1));
}));

(cljs.core.async.t_cljs$core$async16050.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16052){
var self__ = this;
var _16052__$1 = this;
return self__.meta16051;
}));

(cljs.core.async.t_cljs$core$async16050.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16050.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16050.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16050.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16050.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16050.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16050.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async16050.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16051","meta16051",-134249050,null)], null);
}));

(cljs.core.async.t_cljs$core$async16050.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16050.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16050");

(cljs.core.async.t_cljs$core$async16050.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16050");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16050.
 */
cljs.core.async.__GT_t_cljs$core$async16050 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async16050(p__$1,ch__$1,meta16051){
return (new cljs.core.async.t_cljs$core$async16050(p__$1,ch__$1,meta16051));
});

}

return (new cljs.core.async.t_cljs$core$async16050(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__16077 = arguments.length;
switch (G__16077) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13484__auto___17693 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13485__auto__ = (function (){var switch__13247__auto__ = (function (state_16098){
var state_val_16099 = (state_16098[(1)]);
if((state_val_16099 === (7))){
var inst_16094 = (state_16098[(2)]);
var state_16098__$1 = state_16098;
var statearr_16101_17694 = state_16098__$1;
(statearr_16101_17694[(2)] = inst_16094);

(statearr_16101_17694[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16099 === (1))){
var state_16098__$1 = state_16098;
var statearr_16102_17695 = state_16098__$1;
(statearr_16102_17695[(2)] = null);

(statearr_16102_17695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16099 === (4))){
var inst_16080 = (state_16098[(7)]);
var inst_16080__$1 = (state_16098[(2)]);
var inst_16081 = (inst_16080__$1 == null);
var state_16098__$1 = (function (){var statearr_16103 = state_16098;
(statearr_16103[(7)] = inst_16080__$1);

return statearr_16103;
})();
if(cljs.core.truth_(inst_16081)){
var statearr_16104_17696 = state_16098__$1;
(statearr_16104_17696[(1)] = (5));

} else {
var statearr_16105_17697 = state_16098__$1;
(statearr_16105_17697[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16099 === (6))){
var inst_16080 = (state_16098[(7)]);
var inst_16085 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16080) : p.call(null,inst_16080));
var state_16098__$1 = state_16098;
if(cljs.core.truth_(inst_16085)){
var statearr_16107_17698 = state_16098__$1;
(statearr_16107_17698[(1)] = (8));

} else {
var statearr_16108_17699 = state_16098__$1;
(statearr_16108_17699[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16099 === (3))){
var inst_16096 = (state_16098[(2)]);
var state_16098__$1 = state_16098;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16098__$1,inst_16096);
} else {
if((state_val_16099 === (2))){
var state_16098__$1 = state_16098;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16098__$1,(4),ch);
} else {
if((state_val_16099 === (11))){
var inst_16088 = (state_16098[(2)]);
var state_16098__$1 = state_16098;
var statearr_16113_17704 = state_16098__$1;
(statearr_16113_17704[(2)] = inst_16088);

(statearr_16113_17704[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16099 === (9))){
var state_16098__$1 = state_16098;
var statearr_16121_17705 = state_16098__$1;
(statearr_16121_17705[(2)] = null);

(statearr_16121_17705[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16099 === (5))){
var inst_16083 = cljs.core.async.close_BANG_(out);
var state_16098__$1 = state_16098;
var statearr_16126_17714 = state_16098__$1;
(statearr_16126_17714[(2)] = inst_16083);

(statearr_16126_17714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16099 === (10))){
var inst_16091 = (state_16098[(2)]);
var state_16098__$1 = (function (){var statearr_16131 = state_16098;
(statearr_16131[(8)] = inst_16091);

return statearr_16131;
})();
var statearr_16133_17721 = state_16098__$1;
(statearr_16133_17721[(2)] = null);

(statearr_16133_17721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16099 === (8))){
var inst_16080 = (state_16098[(7)]);
var state_16098__$1 = state_16098;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16098__$1,(11),out,inst_16080);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13248__auto__ = null;
var cljs$core$async$state_machine__13248__auto____0 = (function (){
var statearr_16135 = [null,null,null,null,null,null,null,null,null];
(statearr_16135[(0)] = cljs$core$async$state_machine__13248__auto__);

(statearr_16135[(1)] = (1));

return statearr_16135;
});
var cljs$core$async$state_machine__13248__auto____1 = (function (state_16098){
while(true){
var ret_value__13249__auto__ = (function (){try{while(true){
var result__13250__auto__ = switch__13247__auto__(state_16098);
if(cljs.core.keyword_identical_QMARK_(result__13250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13250__auto__;
}
break;
}
}catch (e16138){var ex__13251__auto__ = e16138;
var statearr_16140_17729 = state_16098;
(statearr_16140_17729[(2)] = ex__13251__auto__);


if(cljs.core.seq((state_16098[(4)]))){
var statearr_16141_17730 = state_16098;
(statearr_16141_17730[(1)] = cljs.core.first((state_16098[(4)])));

} else {
throw ex__13251__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17731 = state_16098;
state_16098 = G__17731;
continue;
} else {
return ret_value__13249__auto__;
}
break;
}
});
cljs$core$async$state_machine__13248__auto__ = function(state_16098){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13248__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13248__auto____1.call(this,state_16098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13248__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13248__auto____0;
cljs$core$async$state_machine__13248__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13248__auto____1;
return cljs$core$async$state_machine__13248__auto__;
})()
})();
var state__13486__auto__ = (function (){var statearr_16146 = f__13485__auto__();
(statearr_16146[(6)] = c__13484__auto___17693);

return statearr_16146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13486__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__16148 = arguments.length;
switch (G__16148) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__13484__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13485__auto__ = (function (){var switch__13247__auto__ = (function (state_16226){
var state_val_16227 = (state_16226[(1)]);
if((state_val_16227 === (7))){
var inst_16222 = (state_16226[(2)]);
var state_16226__$1 = state_16226;
var statearr_16232_17743 = state_16226__$1;
(statearr_16232_17743[(2)] = inst_16222);

(statearr_16232_17743[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16227 === (20))){
var inst_16182 = (state_16226[(7)]);
var inst_16201 = (state_16226[(2)]);
var inst_16203 = cljs.core.next(inst_16182);
var inst_16166 = inst_16203;
var inst_16167 = null;
var inst_16168 = (0);
var inst_16169 = (0);
var state_16226__$1 = (function (){var statearr_16233 = state_16226;
(statearr_16233[(8)] = inst_16168);

(statearr_16233[(9)] = inst_16166);

(statearr_16233[(10)] = inst_16201);

(statearr_16233[(11)] = inst_16169);

(statearr_16233[(12)] = inst_16167);

return statearr_16233;
})();
var statearr_16235_17744 = state_16226__$1;
(statearr_16235_17744[(2)] = null);

(statearr_16235_17744[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16227 === (1))){
var state_16226__$1 = state_16226;
var statearr_16236_17746 = state_16226__$1;
(statearr_16236_17746[(2)] = null);

(statearr_16236_17746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16227 === (4))){
var inst_16155 = (state_16226[(13)]);
var inst_16155__$1 = (state_16226[(2)]);
var inst_16156 = (inst_16155__$1 == null);
var state_16226__$1 = (function (){var statearr_16237 = state_16226;
(statearr_16237[(13)] = inst_16155__$1);

return statearr_16237;
})();
if(cljs.core.truth_(inst_16156)){
var statearr_16239_17747 = state_16226__$1;
(statearr_16239_17747[(1)] = (5));

} else {
var statearr_16241_17748 = state_16226__$1;
(statearr_16241_17748[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16227 === (15))){
var state_16226__$1 = state_16226;
var statearr_16245_17749 = state_16226__$1;
(statearr_16245_17749[(2)] = null);

(statearr_16245_17749[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16227 === (21))){
var state_16226__$1 = state_16226;
var statearr_16247_17750 = state_16226__$1;
(statearr_16247_17750[(2)] = null);

(statearr_16247_17750[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16227 === (13))){
var inst_16168 = (state_16226[(8)]);
var inst_16166 = (state_16226[(9)]);
var inst_16169 = (state_16226[(11)]);
var inst_16167 = (state_16226[(12)]);
var inst_16178 = (state_16226[(2)]);
var inst_16179 = (inst_16169 + (1));
var tmp16242 = inst_16168;
var tmp16243 = inst_16166;
var tmp16244 = inst_16167;
var inst_16166__$1 = tmp16243;
var inst_16167__$1 = tmp16244;
var inst_16168__$1 = tmp16242;
var inst_16169__$1 = inst_16179;
var state_16226__$1 = (function (){var statearr_16248 = state_16226;
(statearr_16248[(8)] = inst_16168__$1);

(statearr_16248[(9)] = inst_16166__$1);

(statearr_16248[(14)] = inst_16178);

(statearr_16248[(11)] = inst_16169__$1);

(statearr_16248[(12)] = inst_16167__$1);

return statearr_16248;
})();
var statearr_16249_17755 = state_16226__$1;
(statearr_16249_17755[(2)] = null);

(statearr_16249_17755[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16227 === (22))){
var state_16226__$1 = state_16226;
var statearr_16250_17759 = state_16226__$1;
(statearr_16250_17759[(2)] = null);

(statearr_16250_17759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16227 === (6))){
var inst_16155 = (state_16226[(13)]);
var inst_16164 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16155) : f.call(null,inst_16155));
var inst_16165 = cljs.core.seq(inst_16164);
var inst_16166 = inst_16165;
var inst_16167 = null;
var inst_16168 = (0);
var inst_16169 = (0);
var state_16226__$1 = (function (){var statearr_16253 = state_16226;
(statearr_16253[(8)] = inst_16168);

(statearr_16253[(9)] = inst_16166);

(statearr_16253[(11)] = inst_16169);

(statearr_16253[(12)] = inst_16167);

return statearr_16253;
})();
var statearr_16254_17764 = state_16226__$1;
(statearr_16254_17764[(2)] = null);

(statearr_16254_17764[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16227 === (17))){
var inst_16182 = (state_16226[(7)]);
var inst_16189 = cljs.core.chunk_first(inst_16182);
var inst_16190 = cljs.core.chunk_rest(inst_16182);
var inst_16192 = cljs.core.count(inst_16189);
var inst_16166 = inst_16190;
var inst_16167 = inst_16189;
var inst_16168 = inst_16192;
var inst_16169 = (0);
var state_16226__$1 = (function (){var statearr_16255 = state_16226;
(statearr_16255[(8)] = inst_16168);

(statearr_16255[(9)] = inst_16166);

(statearr_16255[(11)] = inst_16169);

(statearr_16255[(12)] = inst_16167);

return statearr_16255;
})();
var statearr_16256_17768 = state_16226__$1;
(statearr_16256_17768[(2)] = null);

(statearr_16256_17768[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16227 === (3))){
var inst_16224 = (state_16226[(2)]);
var state_16226__$1 = state_16226;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16226__$1,inst_16224);
} else {
if((state_val_16227 === (12))){
var inst_16212 = (state_16226[(2)]);
var state_16226__$1 = state_16226;
var statearr_16259_17769 = state_16226__$1;
(statearr_16259_17769[(2)] = inst_16212);

(statearr_16259_17769[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16227 === (2))){
var state_16226__$1 = state_16226;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16226__$1,(4),in$);
} else {
if((state_val_16227 === (23))){
var inst_16220 = (state_16226[(2)]);
var state_16226__$1 = state_16226;
var statearr_16263_17773 = state_16226__$1;
(statearr_16263_17773[(2)] = inst_16220);

(statearr_16263_17773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16227 === (19))){
var inst_16206 = (state_16226[(2)]);
var state_16226__$1 = state_16226;
var statearr_16265_17774 = state_16226__$1;
(statearr_16265_17774[(2)] = inst_16206);

(statearr_16265_17774[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16227 === (11))){
var inst_16166 = (state_16226[(9)]);
var inst_16182 = (state_16226[(7)]);
var inst_16182__$1 = cljs.core.seq(inst_16166);
var state_16226__$1 = (function (){var statearr_16266 = state_16226;
(statearr_16266[(7)] = inst_16182__$1);

return statearr_16266;
})();
if(inst_16182__$1){
var statearr_16267_17778 = state_16226__$1;
(statearr_16267_17778[(1)] = (14));

} else {
var statearr_16268_17779 = state_16226__$1;
(statearr_16268_17779[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16227 === (9))){
var inst_16214 = (state_16226[(2)]);
var inst_16215 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_16226__$1 = (function (){var statearr_16269 = state_16226;
(statearr_16269[(15)] = inst_16214);

return statearr_16269;
})();
if(cljs.core.truth_(inst_16215)){
var statearr_16270_17780 = state_16226__$1;
(statearr_16270_17780[(1)] = (21));

} else {
var statearr_16271_17781 = state_16226__$1;
(statearr_16271_17781[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16227 === (5))){
var inst_16158 = cljs.core.async.close_BANG_(out);
var state_16226__$1 = state_16226;
var statearr_16272_17784 = state_16226__$1;
(statearr_16272_17784[(2)] = inst_16158);

(statearr_16272_17784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16227 === (14))){
var inst_16182 = (state_16226[(7)]);
var inst_16187 = cljs.core.chunked_seq_QMARK_(inst_16182);
var state_16226__$1 = state_16226;
if(inst_16187){
var statearr_16273_17788 = state_16226__$1;
(statearr_16273_17788[(1)] = (17));

} else {
var statearr_16274_17792 = state_16226__$1;
(statearr_16274_17792[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16227 === (16))){
var inst_16210 = (state_16226[(2)]);
var state_16226__$1 = state_16226;
var statearr_16275_17793 = state_16226__$1;
(statearr_16275_17793[(2)] = inst_16210);

(statearr_16275_17793[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16227 === (10))){
var inst_16169 = (state_16226[(11)]);
var inst_16167 = (state_16226[(12)]);
var inst_16176 = cljs.core._nth(inst_16167,inst_16169);
var state_16226__$1 = state_16226;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16226__$1,(13),out,inst_16176);
} else {
if((state_val_16227 === (18))){
var inst_16182 = (state_16226[(7)]);
var inst_16198 = cljs.core.first(inst_16182);
var state_16226__$1 = state_16226;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16226__$1,(20),out,inst_16198);
} else {
if((state_val_16227 === (8))){
var inst_16168 = (state_16226[(8)]);
var inst_16169 = (state_16226[(11)]);
var inst_16173 = (inst_16169 < inst_16168);
var inst_16174 = inst_16173;
var state_16226__$1 = state_16226;
if(cljs.core.truth_(inst_16174)){
var statearr_16278_17798 = state_16226__$1;
(statearr_16278_17798[(1)] = (10));

} else {
var statearr_16279_17799 = state_16226__$1;
(statearr_16279_17799[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13248__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13248__auto____0 = (function (){
var statearr_16280 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16280[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13248__auto__);

(statearr_16280[(1)] = (1));

return statearr_16280;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13248__auto____1 = (function (state_16226){
while(true){
var ret_value__13249__auto__ = (function (){try{while(true){
var result__13250__auto__ = switch__13247__auto__(state_16226);
if(cljs.core.keyword_identical_QMARK_(result__13250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13250__auto__;
}
break;
}
}catch (e16281){var ex__13251__auto__ = e16281;
var statearr_16282_17800 = state_16226;
(statearr_16282_17800[(2)] = ex__13251__auto__);


if(cljs.core.seq((state_16226[(4)]))){
var statearr_16283_17801 = state_16226;
(statearr_16283_17801[(1)] = cljs.core.first((state_16226[(4)])));

} else {
throw ex__13251__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17802 = state_16226;
state_16226 = G__17802;
continue;
} else {
return ret_value__13249__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13248__auto__ = function(state_16226){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13248__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13248__auto____1.call(this,state_16226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13248__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13248__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13248__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13248__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13248__auto__;
})()
})();
var state__13486__auto__ = (function (){var statearr_16284 = f__13485__auto__();
(statearr_16284[(6)] = c__13484__auto__);

return statearr_16284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13486__auto__);
}));

return c__13484__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__16286 = arguments.length;
switch (G__16286) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__16290 = arguments.length;
switch (G__16290) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__16294 = arguments.length;
switch (G__16294) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13484__auto___17824 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13485__auto__ = (function (){var switch__13247__auto__ = (function (state_16320){
var state_val_16321 = (state_16320[(1)]);
if((state_val_16321 === (7))){
var inst_16315 = (state_16320[(2)]);
var state_16320__$1 = state_16320;
var statearr_16322_17825 = state_16320__$1;
(statearr_16322_17825[(2)] = inst_16315);

(statearr_16322_17825[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16321 === (1))){
var inst_16297 = null;
var state_16320__$1 = (function (){var statearr_16326 = state_16320;
(statearr_16326[(7)] = inst_16297);

return statearr_16326;
})();
var statearr_16327_17826 = state_16320__$1;
(statearr_16327_17826[(2)] = null);

(statearr_16327_17826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16321 === (4))){
var inst_16300 = (state_16320[(8)]);
var inst_16300__$1 = (state_16320[(2)]);
var inst_16301 = (inst_16300__$1 == null);
var inst_16302 = cljs.core.not(inst_16301);
var state_16320__$1 = (function (){var statearr_16330 = state_16320;
(statearr_16330[(8)] = inst_16300__$1);

return statearr_16330;
})();
if(inst_16302){
var statearr_16331_17828 = state_16320__$1;
(statearr_16331_17828[(1)] = (5));

} else {
var statearr_16332_17840 = state_16320__$1;
(statearr_16332_17840[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16321 === (6))){
var state_16320__$1 = state_16320;
var statearr_16333_17841 = state_16320__$1;
(statearr_16333_17841[(2)] = null);

(statearr_16333_17841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16321 === (3))){
var inst_16317 = (state_16320[(2)]);
var inst_16318 = cljs.core.async.close_BANG_(out);
var state_16320__$1 = (function (){var statearr_16334 = state_16320;
(statearr_16334[(9)] = inst_16317);

return statearr_16334;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16320__$1,inst_16318);
} else {
if((state_val_16321 === (2))){
var state_16320__$1 = state_16320;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16320__$1,(4),ch);
} else {
if((state_val_16321 === (11))){
var inst_16300 = (state_16320[(8)]);
var inst_16309 = (state_16320[(2)]);
var inst_16297 = inst_16300;
var state_16320__$1 = (function (){var statearr_16335 = state_16320;
(statearr_16335[(10)] = inst_16309);

(statearr_16335[(7)] = inst_16297);

return statearr_16335;
})();
var statearr_16336_17842 = state_16320__$1;
(statearr_16336_17842[(2)] = null);

(statearr_16336_17842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16321 === (9))){
var inst_16300 = (state_16320[(8)]);
var state_16320__$1 = state_16320;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16320__$1,(11),out,inst_16300);
} else {
if((state_val_16321 === (5))){
var inst_16297 = (state_16320[(7)]);
var inst_16300 = (state_16320[(8)]);
var inst_16304 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16300,inst_16297);
var state_16320__$1 = state_16320;
if(inst_16304){
var statearr_16339_17844 = state_16320__$1;
(statearr_16339_17844[(1)] = (8));

} else {
var statearr_16340_17845 = state_16320__$1;
(statearr_16340_17845[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16321 === (10))){
var inst_16312 = (state_16320[(2)]);
var state_16320__$1 = state_16320;
var statearr_16342_17846 = state_16320__$1;
(statearr_16342_17846[(2)] = inst_16312);

(statearr_16342_17846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16321 === (8))){
var inst_16297 = (state_16320[(7)]);
var tmp16338 = inst_16297;
var inst_16297__$1 = tmp16338;
var state_16320__$1 = (function (){var statearr_16344 = state_16320;
(statearr_16344[(7)] = inst_16297__$1);

return statearr_16344;
})();
var statearr_16345_17847 = state_16320__$1;
(statearr_16345_17847[(2)] = null);

(statearr_16345_17847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13248__auto__ = null;
var cljs$core$async$state_machine__13248__auto____0 = (function (){
var statearr_16346 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16346[(0)] = cljs$core$async$state_machine__13248__auto__);

(statearr_16346[(1)] = (1));

return statearr_16346;
});
var cljs$core$async$state_machine__13248__auto____1 = (function (state_16320){
while(true){
var ret_value__13249__auto__ = (function (){try{while(true){
var result__13250__auto__ = switch__13247__auto__(state_16320);
if(cljs.core.keyword_identical_QMARK_(result__13250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13250__auto__;
}
break;
}
}catch (e16348){var ex__13251__auto__ = e16348;
var statearr_16349_17860 = state_16320;
(statearr_16349_17860[(2)] = ex__13251__auto__);


if(cljs.core.seq((state_16320[(4)]))){
var statearr_16351_17861 = state_16320;
(statearr_16351_17861[(1)] = cljs.core.first((state_16320[(4)])));

} else {
throw ex__13251__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17862 = state_16320;
state_16320 = G__17862;
continue;
} else {
return ret_value__13249__auto__;
}
break;
}
});
cljs$core$async$state_machine__13248__auto__ = function(state_16320){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13248__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13248__auto____1.call(this,state_16320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13248__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13248__auto____0;
cljs$core$async$state_machine__13248__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13248__auto____1;
return cljs$core$async$state_machine__13248__auto__;
})()
})();
var state__13486__auto__ = (function (){var statearr_16352 = f__13485__auto__();
(statearr_16352[(6)] = c__13484__auto___17824);

return statearr_16352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13486__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__16355 = arguments.length;
switch (G__16355) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13484__auto___17867 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13485__auto__ = (function (){var switch__13247__auto__ = (function (state_16398){
var state_val_16399 = (state_16398[(1)]);
if((state_val_16399 === (7))){
var inst_16394 = (state_16398[(2)]);
var state_16398__$1 = state_16398;
var statearr_16404_17868 = state_16398__$1;
(statearr_16404_17868[(2)] = inst_16394);

(statearr_16404_17868[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16399 === (1))){
var inst_16357 = (new Array(n));
var inst_16358 = inst_16357;
var inst_16359 = (0);
var state_16398__$1 = (function (){var statearr_16407 = state_16398;
(statearr_16407[(7)] = inst_16359);

(statearr_16407[(8)] = inst_16358);

return statearr_16407;
})();
var statearr_16408_17869 = state_16398__$1;
(statearr_16408_17869[(2)] = null);

(statearr_16408_17869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16399 === (4))){
var inst_16362 = (state_16398[(9)]);
var inst_16362__$1 = (state_16398[(2)]);
var inst_16363 = (inst_16362__$1 == null);
var inst_16364 = cljs.core.not(inst_16363);
var state_16398__$1 = (function (){var statearr_16409 = state_16398;
(statearr_16409[(9)] = inst_16362__$1);

return statearr_16409;
})();
if(inst_16364){
var statearr_16410_17870 = state_16398__$1;
(statearr_16410_17870[(1)] = (5));

} else {
var statearr_16412_17871 = state_16398__$1;
(statearr_16412_17871[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16399 === (15))){
var inst_16388 = (state_16398[(2)]);
var state_16398__$1 = state_16398;
var statearr_16414_17872 = state_16398__$1;
(statearr_16414_17872[(2)] = inst_16388);

(statearr_16414_17872[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16399 === (13))){
var state_16398__$1 = state_16398;
var statearr_16416_17877 = state_16398__$1;
(statearr_16416_17877[(2)] = null);

(statearr_16416_17877[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16399 === (6))){
var inst_16359 = (state_16398[(7)]);
var inst_16384 = (inst_16359 > (0));
var state_16398__$1 = state_16398;
if(cljs.core.truth_(inst_16384)){
var statearr_16419_17881 = state_16398__$1;
(statearr_16419_17881[(1)] = (12));

} else {
var statearr_16420_17883 = state_16398__$1;
(statearr_16420_17883[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16399 === (3))){
var inst_16396 = (state_16398[(2)]);
var state_16398__$1 = state_16398;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16398__$1,inst_16396);
} else {
if((state_val_16399 === (12))){
var inst_16358 = (state_16398[(8)]);
var inst_16386 = cljs.core.vec(inst_16358);
var state_16398__$1 = state_16398;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16398__$1,(15),out,inst_16386);
} else {
if((state_val_16399 === (2))){
var state_16398__$1 = state_16398;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16398__$1,(4),ch);
} else {
if((state_val_16399 === (11))){
var inst_16378 = (state_16398[(2)]);
var inst_16379 = (new Array(n));
var inst_16358 = inst_16379;
var inst_16359 = (0);
var state_16398__$1 = (function (){var statearr_16422 = state_16398;
(statearr_16422[(7)] = inst_16359);

(statearr_16422[(8)] = inst_16358);

(statearr_16422[(10)] = inst_16378);

return statearr_16422;
})();
var statearr_16424_17884 = state_16398__$1;
(statearr_16424_17884[(2)] = null);

(statearr_16424_17884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16399 === (9))){
var inst_16358 = (state_16398[(8)]);
var inst_16376 = cljs.core.vec(inst_16358);
var state_16398__$1 = state_16398;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16398__$1,(11),out,inst_16376);
} else {
if((state_val_16399 === (5))){
var inst_16359 = (state_16398[(7)]);
var inst_16358 = (state_16398[(8)]);
var inst_16362 = (state_16398[(9)]);
var inst_16370 = (state_16398[(11)]);
var inst_16369 = (inst_16358[inst_16359] = inst_16362);
var inst_16370__$1 = (inst_16359 + (1));
var inst_16371 = (inst_16370__$1 < n);
var state_16398__$1 = (function (){var statearr_16433 = state_16398;
(statearr_16433[(12)] = inst_16369);

(statearr_16433[(11)] = inst_16370__$1);

return statearr_16433;
})();
if(cljs.core.truth_(inst_16371)){
var statearr_16434_17886 = state_16398__$1;
(statearr_16434_17886[(1)] = (8));

} else {
var statearr_16435_17887 = state_16398__$1;
(statearr_16435_17887[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16399 === (14))){
var inst_16391 = (state_16398[(2)]);
var inst_16392 = cljs.core.async.close_BANG_(out);
var state_16398__$1 = (function (){var statearr_16438 = state_16398;
(statearr_16438[(13)] = inst_16391);

return statearr_16438;
})();
var statearr_16439_17888 = state_16398__$1;
(statearr_16439_17888[(2)] = inst_16392);

(statearr_16439_17888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16399 === (10))){
var inst_16382 = (state_16398[(2)]);
var state_16398__$1 = state_16398;
var statearr_16440_17893 = state_16398__$1;
(statearr_16440_17893[(2)] = inst_16382);

(statearr_16440_17893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16399 === (8))){
var inst_16358 = (state_16398[(8)]);
var inst_16370 = (state_16398[(11)]);
var tmp16437 = inst_16358;
var inst_16358__$1 = tmp16437;
var inst_16359 = inst_16370;
var state_16398__$1 = (function (){var statearr_16447 = state_16398;
(statearr_16447[(7)] = inst_16359);

(statearr_16447[(8)] = inst_16358__$1);

return statearr_16447;
})();
var statearr_16449_17894 = state_16398__$1;
(statearr_16449_17894[(2)] = null);

(statearr_16449_17894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13248__auto__ = null;
var cljs$core$async$state_machine__13248__auto____0 = (function (){
var statearr_16452 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16452[(0)] = cljs$core$async$state_machine__13248__auto__);

(statearr_16452[(1)] = (1));

return statearr_16452;
});
var cljs$core$async$state_machine__13248__auto____1 = (function (state_16398){
while(true){
var ret_value__13249__auto__ = (function (){try{while(true){
var result__13250__auto__ = switch__13247__auto__(state_16398);
if(cljs.core.keyword_identical_QMARK_(result__13250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13250__auto__;
}
break;
}
}catch (e16453){var ex__13251__auto__ = e16453;
var statearr_16455_17895 = state_16398;
(statearr_16455_17895[(2)] = ex__13251__auto__);


if(cljs.core.seq((state_16398[(4)]))){
var statearr_16456_17896 = state_16398;
(statearr_16456_17896[(1)] = cljs.core.first((state_16398[(4)])));

} else {
throw ex__13251__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17897 = state_16398;
state_16398 = G__17897;
continue;
} else {
return ret_value__13249__auto__;
}
break;
}
});
cljs$core$async$state_machine__13248__auto__ = function(state_16398){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13248__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13248__auto____1.call(this,state_16398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13248__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13248__auto____0;
cljs$core$async$state_machine__13248__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13248__auto____1;
return cljs$core$async$state_machine__13248__auto__;
})()
})();
var state__13486__auto__ = (function (){var statearr_16461 = f__13485__auto__();
(statearr_16461[(6)] = c__13484__auto___17867);

return statearr_16461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13486__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__16469 = arguments.length;
switch (G__16469) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13484__auto___17903 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13485__auto__ = (function (){var switch__13247__auto__ = (function (state_16533){
var state_val_16537 = (state_16533[(1)]);
if((state_val_16537 === (7))){
var inst_16527 = (state_16533[(2)]);
var state_16533__$1 = state_16533;
var statearr_16543_17910 = state_16533__$1;
(statearr_16543_17910[(2)] = inst_16527);

(statearr_16543_17910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16537 === (1))){
var inst_16474 = [];
var inst_16475 = inst_16474;
var inst_16476 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_16533__$1 = (function (){var statearr_16547 = state_16533;
(statearr_16547[(7)] = inst_16476);

(statearr_16547[(8)] = inst_16475);

return statearr_16547;
})();
var statearr_16552_17911 = state_16533__$1;
(statearr_16552_17911[(2)] = null);

(statearr_16552_17911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16537 === (4))){
var inst_16479 = (state_16533[(9)]);
var inst_16479__$1 = (state_16533[(2)]);
var inst_16480 = (inst_16479__$1 == null);
var inst_16481 = cljs.core.not(inst_16480);
var state_16533__$1 = (function (){var statearr_16561 = state_16533;
(statearr_16561[(9)] = inst_16479__$1);

return statearr_16561;
})();
if(inst_16481){
var statearr_16562_17912 = state_16533__$1;
(statearr_16562_17912[(1)] = (5));

} else {
var statearr_16563_17913 = state_16533__$1;
(statearr_16563_17913[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16537 === (15))){
var inst_16475 = (state_16533[(8)]);
var inst_16517 = cljs.core.vec(inst_16475);
var state_16533__$1 = state_16533;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16533__$1,(18),out,inst_16517);
} else {
if((state_val_16537 === (13))){
var inst_16507 = (state_16533[(2)]);
var state_16533__$1 = state_16533;
var statearr_16564_17914 = state_16533__$1;
(statearr_16564_17914[(2)] = inst_16507);

(statearr_16564_17914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16537 === (6))){
var inst_16475 = (state_16533[(8)]);
var inst_16512 = inst_16475.length;
var inst_16513 = (inst_16512 > (0));
var state_16533__$1 = state_16533;
if(cljs.core.truth_(inst_16513)){
var statearr_16565_17915 = state_16533__$1;
(statearr_16565_17915[(1)] = (15));

} else {
var statearr_16572_17916 = state_16533__$1;
(statearr_16572_17916[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16537 === (17))){
var inst_16524 = (state_16533[(2)]);
var inst_16525 = cljs.core.async.close_BANG_(out);
var state_16533__$1 = (function (){var statearr_16577 = state_16533;
(statearr_16577[(10)] = inst_16524);

return statearr_16577;
})();
var statearr_16579_17917 = state_16533__$1;
(statearr_16579_17917[(2)] = inst_16525);

(statearr_16579_17917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16537 === (3))){
var inst_16529 = (state_16533[(2)]);
var state_16533__$1 = state_16533;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16533__$1,inst_16529);
} else {
if((state_val_16537 === (12))){
var inst_16475 = (state_16533[(8)]);
var inst_16500 = cljs.core.vec(inst_16475);
var state_16533__$1 = state_16533;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16533__$1,(14),out,inst_16500);
} else {
if((state_val_16537 === (2))){
var state_16533__$1 = state_16533;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16533__$1,(4),ch);
} else {
if((state_val_16537 === (11))){
var inst_16475 = (state_16533[(8)]);
var inst_16479 = (state_16533[(9)]);
var inst_16483 = (state_16533[(11)]);
var inst_16494 = inst_16475.push(inst_16479);
var tmp16580 = inst_16475;
var inst_16475__$1 = tmp16580;
var inst_16476 = inst_16483;
var state_16533__$1 = (function (){var statearr_16581 = state_16533;
(statearr_16581[(12)] = inst_16494);

(statearr_16581[(7)] = inst_16476);

(statearr_16581[(8)] = inst_16475__$1);

return statearr_16581;
})();
var statearr_16582_17918 = state_16533__$1;
(statearr_16582_17918[(2)] = null);

(statearr_16582_17918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16537 === (9))){
var inst_16476 = (state_16533[(7)]);
var inst_16490 = cljs.core.keyword_identical_QMARK_(inst_16476,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_16533__$1 = state_16533;
var statearr_16583_17920 = state_16533__$1;
(statearr_16583_17920[(2)] = inst_16490);

(statearr_16583_17920[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16537 === (5))){
var inst_16476 = (state_16533[(7)]);
var inst_16479 = (state_16533[(9)]);
var inst_16483 = (state_16533[(11)]);
var inst_16484 = (state_16533[(13)]);
var inst_16483__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16479) : f.call(null,inst_16479));
var inst_16484__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16483__$1,inst_16476);
var state_16533__$1 = (function (){var statearr_16584 = state_16533;
(statearr_16584[(11)] = inst_16483__$1);

(statearr_16584[(13)] = inst_16484__$1);

return statearr_16584;
})();
if(inst_16484__$1){
var statearr_16585_17921 = state_16533__$1;
(statearr_16585_17921[(1)] = (8));

} else {
var statearr_16586_17922 = state_16533__$1;
(statearr_16586_17922[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16537 === (14))){
var inst_16479 = (state_16533[(9)]);
var inst_16483 = (state_16533[(11)]);
var inst_16502 = (state_16533[(2)]);
var inst_16503 = [];
var inst_16504 = inst_16503.push(inst_16479);
var inst_16475 = inst_16503;
var inst_16476 = inst_16483;
var state_16533__$1 = (function (){var statearr_16591 = state_16533;
(statearr_16591[(7)] = inst_16476);

(statearr_16591[(14)] = inst_16504);

(statearr_16591[(8)] = inst_16475);

(statearr_16591[(15)] = inst_16502);

return statearr_16591;
})();
var statearr_16592_17923 = state_16533__$1;
(statearr_16592_17923[(2)] = null);

(statearr_16592_17923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16537 === (16))){
var state_16533__$1 = state_16533;
var statearr_16593_17924 = state_16533__$1;
(statearr_16593_17924[(2)] = null);

(statearr_16593_17924[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16537 === (10))){
var inst_16492 = (state_16533[(2)]);
var state_16533__$1 = state_16533;
if(cljs.core.truth_(inst_16492)){
var statearr_16594_17925 = state_16533__$1;
(statearr_16594_17925[(1)] = (11));

} else {
var statearr_16595_17926 = state_16533__$1;
(statearr_16595_17926[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16537 === (18))){
var inst_16519 = (state_16533[(2)]);
var state_16533__$1 = state_16533;
var statearr_16596_17927 = state_16533__$1;
(statearr_16596_17927[(2)] = inst_16519);

(statearr_16596_17927[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16537 === (8))){
var inst_16484 = (state_16533[(13)]);
var state_16533__$1 = state_16533;
var statearr_16597_17928 = state_16533__$1;
(statearr_16597_17928[(2)] = inst_16484);

(statearr_16597_17928[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13248__auto__ = null;
var cljs$core$async$state_machine__13248__auto____0 = (function (){
var statearr_16598 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16598[(0)] = cljs$core$async$state_machine__13248__auto__);

(statearr_16598[(1)] = (1));

return statearr_16598;
});
var cljs$core$async$state_machine__13248__auto____1 = (function (state_16533){
while(true){
var ret_value__13249__auto__ = (function (){try{while(true){
var result__13250__auto__ = switch__13247__auto__(state_16533);
if(cljs.core.keyword_identical_QMARK_(result__13250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13250__auto__;
}
break;
}
}catch (e16615){var ex__13251__auto__ = e16615;
var statearr_16616_17929 = state_16533;
(statearr_16616_17929[(2)] = ex__13251__auto__);


if(cljs.core.seq((state_16533[(4)]))){
var statearr_16617_17930 = state_16533;
(statearr_16617_17930[(1)] = cljs.core.first((state_16533[(4)])));

} else {
throw ex__13251__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17931 = state_16533;
state_16533 = G__17931;
continue;
} else {
return ret_value__13249__auto__;
}
break;
}
});
cljs$core$async$state_machine__13248__auto__ = function(state_16533){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13248__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13248__auto____1.call(this,state_16533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13248__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13248__auto____0;
cljs$core$async$state_machine__13248__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13248__auto____1;
return cljs$core$async$state_machine__13248__auto__;
})()
})();
var state__13486__auto__ = (function (){var statearr_16622 = f__13485__auto__();
(statearr_16622[(6)] = c__13484__auto___17903);

return statearr_16622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13486__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
