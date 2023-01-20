goog.provide('somekit.vec');
/**
 * adds two vectors of same dimension together
 */
somekit.vec.add = (function somekit$vec$add(v1,v2){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,v1,v2);
});
/**
 * Adds a scalar to a vector
 */
somekit.vec.add_scalar = (function somekit$vec$add_scalar(v,scalar){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13092_SHARP_){
return (p1__13092_SHARP_ + scalar);
}),v);
});
/**
 * Returns angle of a 2D vector
 */
somekit.vec.angle = (function somekit$vec$angle(v){
var vec__13093 = v;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13093,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13093,(1),null);
return Math.atan2(y,x);
});
/**
 * Calculates the angle between two 2D Vectors using angle difference.
 */
somekit.vec.angle_between = (function somekit$vec$angle_between(v1,v2){
return (somekit.vec.angle(v2) - somekit.vec.angle(v1));
});
/**
 * Divides one vector by another. Both must be same dimension.
 */
somekit.vec.div = (function somekit$vec$div(v1,v2){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._SLASH_,v1,v2);
});
/**
 * Divides vector by a scalar
 */
somekit.vec.div_scalar = (function somekit$vec$div_scalar(v,scalar){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13096_SHARP_){
return (p1__13096_SHARP_ / scalar);
}),v);
});
/**
 * Calculates distance between two vectors of same dimension
 */
somekit.vec.distance = (function somekit$vec$distance(v1,v2){
var G__13097 = (somekit.vec.sub.cljs$core$IFn$_invoke$arity$2 ? somekit.vec.sub.cljs$core$IFn$_invoke$arity$2(v1,v2) : somekit.vec.sub.call(null,v1,v2));
return (somekit.vec.length.cljs$core$IFn$_invoke$arity$1 ? somekit.vec.length.cljs$core$IFn$_invoke$arity$1(G__13097) : somekit.vec.length.call(null,G__13097));
});
/**
 * Dot product of two vectors
 */
somekit.vec.dot = (function somekit$vec$dot(v1,v2){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(somekit.vec.mul.cljs$core$IFn$_invoke$arity$2 ? somekit.vec.mul.cljs$core$IFn$_invoke$arity$2(v1,v2) : somekit.vec.mul.call(null,v1,v2)));
});
/**
 * Returns a 2D unit vector with given angle
 */
somekit.vec.from_angle = (function somekit$vec$from_angle(theta){
return (somekit.vec.from_polar.cljs$core$IFn$_invoke$arity$2 ? somekit.vec.from_polar.cljs$core$IFn$_invoke$arity$2(theta,(1)) : somekit.vec.from_polar.call(null,theta,(1)));
});
/**
 * Returns a 2D vector from polar coordinates
 */
somekit.vec.from_polar = (function somekit$vec$from_polar(theta,radius){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(radius * Math.cos(theta)),(radius * Math.sin(theta))], null);
});
/**
 * Returns the length of a vector of any dimension.
 */
somekit.vec.length = (function somekit$vec$length(v){
return Math.sqrt(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,v,v)));
});
/**
 * Lerps between two vectors
 */
somekit.vec.lerp = (function somekit$vec$lerp(v1,v2,t){
var f = (function somekit$vec$lerp_$_f(a,b){
return somekit.math.lerp(a,b,t);
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(f,v1,v2);
});
/**
 * If vector v is bigger than limit l, vector gets scaled to l.
 */
somekit.vec.limit = (function somekit$vec$limit(v,l){
if((somekit.vec.length(v) > l)){
return (somekit.vec.set_length.cljs$core$IFn$_invoke$arity$2 ? somekit.vec.set_length.cljs$core$IFn$_invoke$arity$2(v,l) : somekit.vec.set_length.call(null,v,l));
} else {
return v;
}
});
/**
 * Multiplied two vectors of same dimensions
 */
somekit.vec.mul = (function somekit$vec$mul(v1,v2){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,v1,v2);
});
/**
 * Multiplies vector by a scalar
 */
somekit.vec.mul_scalar = (function somekit$vec$mul_scalar(v,scalar){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13098_SHARP_){
return (p1__13098_SHARP_ * scalar);
}),v);
});
/**
 * Returns a vector of any dimension normalized
 */
somekit.vec.normalize = (function somekit$vec$normalize(v){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13099_SHARP_){
return (p1__13099_SHARP_ / somekit.vec.length(v));
}),v);
});
/**
 * Returns a random vector of N dimension. Values between 0 and 1.
 */
somekit.vec.random = (function somekit$vec$random(N){
return cljs.core.vec(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(N,Math.random));
});
/**
 * returns a 2D vector from a random angle and radius between 0 and 1
 */
somekit.vec.random_polar = (function somekit$vec$random_polar(){
return somekit.vec.from_polar(((Math.random() * Math.PI) * (2)),Math.random());
});
/**
 * rotates a 2D vector by an angle
 */
somekit.vec.rotate = (function somekit$vec$rotate(v,theta){
return somekit.vec.from_polar((somekit.vec.angle(v) + theta),somekit.vec.length(v));
});
/**
 * Returns the vector v with given length l.
 */
somekit.vec.set_length = (function somekit$vec$set_length(v,l){
return somekit.vec.mul_scalar(somekit.vec.normalize(v),l);
});
/**
 * Substracts 2 vectors of same dimension
 */
somekit.vec.sub = (function somekit$vec$sub(v1,v2){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,v1,v2);
});
/**
 * Subtracts scalar from vector
 */
somekit.vec.sub_scalar = (function somekit$vec$sub_scalar(v,scalar){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13100_SHARP_){
return (p1__13100_SHARP_ - scalar);
}),v);
});

//# sourceMappingURL=somekit.vec.js.map
