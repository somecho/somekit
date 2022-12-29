(ns somekit.math)

(def TAU (* Math/PI 2))

(defn fract
  "get fractional part of number"
  [n]
  (mod (abs n) 1))

(defn random-bool
  "returns true if random is greater than threshold"
  [threshold]
  (> (Math/random) threshold))

(defn threshold-bool
  "returns true if number is greater than threshold"
  [n threshold]
  (if (> n threshold) true false))

(defn random-nth-custom
  "returns random element from collection with custom random"
  [coll fn]
  (-> (fn)
      (* (count coll))
      (Math/floor)
      (coll)))

(defn scale
  "scales a number to a new range"
  ([n start1 stop1 start2 stop2]
   (+ (* (/ (- n start1) (- stop1 start1))
         (- stop2 start2)) start2)))
