goog.provide('somekit.math');
somekit.math.TAU = (Math.PI * (2));
/**
 * get fractional part of number
 */
somekit.math.fract = (function somekit$math$fract(n){
return cljs.core.mod(cljs.core.abs(n),(1));
});
/**
 * halfs a number
 */
somekit.math.half = (function somekit$math$half(n){
return (n * 0.5);
});
somekit.math.lerp = (function somekit$math$lerp(a,b,t){
return ((((1) - t) * a) + (t * b));
});
/**
 * Returns PI * argument
 */
somekit.math.pi = (function somekit$math$pi(n){
return (Math.PI * n);
});
/**
 * Wraps Math/random with arguments.
 */
somekit.math.random = (function somekit$math$random(var_args){
var G__11439 = arguments.length;
switch (G__11439) {
case 0:
return somekit.math.random.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return somekit.math.random.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return somekit.math.random.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(somekit.math.random.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.rand.cljs$core$IFn$_invoke$arity$0();
}));

(somekit.math.random.cljs$core$IFn$_invoke$arity$1 = (function (a){
return cljs.core.rand.cljs$core$IFn$_invoke$arity$1(a);
}));

(somekit.math.random.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var G__11440 = somekit.math.random.cljs$core$IFn$_invoke$arity$0();
var G__11441 = (0);
var G__11442 = (1);
var G__11443 = a;
var G__11444 = b;
return (somekit.math.scale.cljs$core$IFn$_invoke$arity$5 ? somekit.math.scale.cljs$core$IFn$_invoke$arity$5(G__11440,G__11441,G__11442,G__11443,G__11444) : somekit.math.scale.call(null,G__11440,G__11441,G__11442,G__11443,G__11444));
}));

(somekit.math.random.cljs$lang$maxFixedArity = 2);

/**
 * Returns true if random is greater than threshold. If no argument is given,
 *   threshold is 0.5 by default.
 */
somekit.math.random_bool = (function somekit$math$random_bool(var_args){
var G__11446 = arguments.length;
switch (G__11446) {
case 0:
return somekit.math.random_bool.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return somekit.math.random_bool.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(somekit.math.random_bool.cljs$core$IFn$_invoke$arity$0 = (function (){
return (Math.random() > 0.5);
}));

(somekit.math.random_bool.cljs$core$IFn$_invoke$arity$1 = (function (threshold){
return (Math.random() > threshold);
}));

(somekit.math.random_bool.cljs$lang$maxFixedArity = 1);

/**
 * returns random element from collection with custom random
 */
somekit.math.random_nth_custom = (function somekit$math$random_nth_custom(coll,fn){
var G__11447 = Math.floor(((fn.cljs$core$IFn$_invoke$arity$0 ? fn.cljs$core$IFn$_invoke$arity$0() : fn.call(null)) * cljs.core.count(coll)));
return (coll.cljs$core$IFn$_invoke$arity$1 ? coll.cljs$core$IFn$_invoke$arity$1(G__11447) : coll.call(null,G__11447));
});
/**
 * Returns two numbers defining a range given a center and a range size
 */
somekit.math.range_from_center = (function somekit$math$range_from_center(center,size){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(center - (size * 0.5)),(center + (size * 0.5))], null);
});
/**
 * scales a number to a new range
 */
somekit.math.scale = (function somekit$math$scale(n,start1,stop1,start2,stop2){
return ((((n - start1) / (stop1 - start1)) * (stop2 - start2)) + start2);
});
/**
 * returns true if number is greater than threshold
 */
somekit.math.threshold_bool = (function somekit$math$threshold_bool(n,threshold){
if((n > threshold)){
return true;
} else {
return false;
}
});

//# sourceMappingURL=somekit.math.js.map
