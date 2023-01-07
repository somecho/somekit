(ns somekit.vec
  (:require [somekit.math :as sm]))

;; Declarations to keep source in alphabetical order
(declare from-polar)
(declare mul)
(declare set-length)

(defn add
  "adds two vectors of same dimension together"
  [v1 v2] (map + v1 v2))

(defn add-scalar
  "Adds a scalar to a vector"
  [v scalar] (map #(+ % scalar) v))

(defn angle
  "Returns angle of a 2D vector"
  [v] (let [[x y] v] (Math/atan2 y x)))

(defn angle-between
  "Calculates the angle between two 2D Vectors using angle difference."
  [v1 v2] (- (angle v2) (angle v1)))

(defn div
  "Divides one vector by another. Both must be same dimension."
  [v1 v2] (map / v1 v2))

(defn div-scalar
  "Divides vector by a scalar"
  [v scalar] (map #(/ % scalar) v))

(defn dot
  "Dot product of two vectors"
  [v1 v2] (reduce + (mul v1 v2)))

(defn from-angle
  "Returns a 2D unit vector with given angle"
  [theta] (from-polar theta 1))

(defn from-polar
  "Returns a 2D vector from polar coordinates"
  [theta radius] [(* radius (Math/cos theta)) (* radius (Math/sin theta))])

(defn length
  "Returns the length of a vector of any dimension."
  [v] (->> (map * v v) (reduce +) (Math/sqrt)))

(defn lerp
  "Lerps between two vectors"
  [v1 v2 t] (letfn [(f [a b] (sm/lerp a b t))] (map f v1 v2)))

(defn limit
  "If vector v is bigger than limit l, vector gets scaled to l."
  [v l] (if (> (length v) l) (set-length v l) v))

(defn mul
  "Multiplied two vectors of same dimensions"
  [v1 v2] (map * v1 v2))

(defn mul-scalar
  "Multiplies vector by a scalar"
  [v scalar] (map #(* % scalar) v))

(defn normalize
  "Returns a vector of any dimension normalized"
  [v] (map #(/ % (length v)) v))

(defn random
  "Returns a random vector of N dimension. Values between 0 and 1."
  [N] (vec (repeatedly N Math/random)))

(defn random-polar
  "returns a 2D vector from a random angle and radius between 0 and 1"
  [] (from-polar (* (Math/random) Math/PI 2) (Math/random)))

(defn rotate
  "rotates a 2D vector by an angle"
  [v theta] (from-polar (+ (angle v) theta) (length v)))

(defn set-length
  "Returns the vector v with given length l."
  [v l] (mul-scalar (normalize v) l))

(defn sub
  "Substracts 2 vectors of same dimension"
  [v1 v2]
  (map - v1 v2))

(defn sub-scalar
  "Subtracts scalar from vector"
  [v scalar] (map #(* % scalar) v))
