(ns somekit.math)

(declare scale)

(def TAU (* Math/PI 2))

(defn fract "get fractional part of number" [n] (mod (abs n) 1))

(defn half "halfs a number" [n](* n 0.5))

(defn lerp [a b t] (+ (* (- 1 t) a) (* t b)))

(defn pi "Returns PI * argument" [n] (* Math/PI n))

(defn random
  "Wraps Math/random with arguments."
  ([] (rand))
  ([a] (rand a))
  ([a b] (scale (random) 0 1 a b)))

(defn random-bool
  "Returns true if random is greater than threshold. If no argument is given,
  threshold is 0.5 by default."
  ([] (> (Math/random) 0.5))
  ([threshold] (> (Math/random) threshold)))

(defn random-nth-custom
  "returns random element from collection with custom random"
  [coll fn]
  (-> (fn)
      (* (count coll))
      (Math/floor)
      (coll)))

(defn range-from-center
  "Returns two numbers defining a range given a center and a range size"
  [center size] [(- center (* size 0.5)) (+ center (* size 0.5))])

(defn scale
  "scales a number to a new range"
  ([n start1 stop1 start2 stop2]
   (+ (* (/ (- n start1) (- stop1 start1))
         (- stop2 start2)) start2)))

(defn threshold-bool
  "returns true if number is greater than threshold"
  [n threshold] (if (> n threshold) true false))
