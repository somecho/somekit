(ns somekit.vec
  "A collection of vector functions. Vectors are treated both like collections
  and directions."
  (:require [somekit.math :as sm]))

(declare from-polar)
(declare length)
(declare mat-trans)
(declare mul)
(declare pad-end)
(declare pad-start)
(declare range-fill)
(declare restv)
(declare set-length)
(declare sub)
(declare sum)
(declare vecn)

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

(defn average
  "calculates the average of the vector"
  [v] (/ (sum v) (count v)))

(defn div
  "Divides one vector by another. Both must be same dimension."
  [v1 v2] (map / v1 v2))

(defn div-scalar
  "Divides vector by a scalar"
  [v scalar] (map #(/ % scalar) v))

(defn distance
  "Calculates distance between two vectors of same dimension"
  [v1 v2] (length (sub v1 v2)))

(defn dot
  "Dot product of two vectors"
  [v1 v2] (reduce + (mul v1 v2)))

(defn dx->x [list start]
  "From a list of intervals, create a list.

  For example:
  [1 1 1] -> [0 1 2 3]
  [1 2 3] -> [0 1 3 6]"
  (cons start (->> list
                   count
                   range
                   (map inc)
                   (map #(take % list))
                   (map #(reduce + %)))))

(defn from-angle
  "Returns a 2D unit vector with given angle"
  [theta] (from-polar theta 1))

(defn from-polar
  "Returns a 2D vector from polar coordinates"
  [theta radius] [(* radius (Math/cos theta)) (* radius (Math/sin theta))])

(defn indexed
  "pairs each element in a collection as
   an indexed tuple and return as vector"
  [coll]
  (mat-trans [(range (count coll)) coll]))

(defn length
  "Returns the length of a vector of any dimension."
  [v] (->> (map * v v) (reduce +) (Math/sqrt)))

(defn lerp
  "Lerps between two vectors"
  [v1 v2 t] (letfn [(f [a b] (sm/lerp a b t))] (map f v1 v2)))

(defn limit
  "If vector v is bigger than limit l, vector gets scaled to l."
  [v l] (if (> (length v) l) (set-length v l) v))

(defn mat-trans
  "Rotates an ND matrix (vec of vecs)"
  [mat]
  (apply map vector mat))

(defn mul
  "Multiplied two vectors of same dimensions"
  [v1 v2] (map * v1 v2))

(defn mul-scalar
  "Multiplies vector by a scalar"
  [v scalar] (map #(* % scalar) v))

(defn normalize
  "Returns a vector of any dimension normalized"
  [v] (map #(/ % (length v)) v))

(defn normalize-range
  "Divides every element in vector by total sum"
  [list] (map #(/ % (reduce + list)) list))

(defn pad
  "pads start and end of vector with value and pad size"
  ([vector value]
   (-> vector (pad-start value) (pad-end value)))
  ([vector value pad-size]
   (-> vector (pad-start value pad-size) (pad-end value pad-size))))

(defn pad-end
  "pads end of vector with value and pad size"
  ([vector value]
   (vec (concat vector (list value))))
  ([vector value pad-size]
   (vec (concat vector (repeat pad-size value)))))

(defn pad-start
  "pads start of vector with value and pad size"
  ([vector value]
   (vec (concat (list value) vector)))
  ([vector value pad-size]
   (vec (concat (repeat pad-size value) vector))))

(defn pad-wrap
  "pads start of vector with end and end of vector with start"
  [vector]
  (let [a (first vector)
        b (last vector)]
    (-> vector (pad-start b) (pad-end a))))

(defn random
  "Returns a random vector of N dimension. Values between 0 and 1.
  An optional second argument can be given as another RNG function."
  ([N] (vec (repeatedly N Math/random)))
  ([N f] (vec (repeatedly N f))))

(defn random10
  "Returns a vector of size N of random 1s and 0s.
  An optional second argument can be given as another RNG function."
  ([N] (vec (map #(Math/floor (* (Math/random) 2)) (range N))))
  ([N f] (vec (map #(Math/floor (* (f) 2)) (range N)))))

(defn random-polar
  "Returns a 2D vector from a random angle and radius between 0 and 1.
  An optional second argument can be given as another RNG function."
  ([] (random-polar Math/random))
  ([f] (from-polar (* (f) Math/PI 2) (f))))

(defn random-replace
  "Replace random element in vector with a value"
  ([vec value] (random-replace vec value Math/random))
  ([vec value f]
   (let [i (-> (count vec)
               (* (f))
               (Math/floor))]
     (range-fill vec i i value))))

(defn range-fill
  "fill range of elements in vector with value"
  [vec start stop value]
  (assoc vec start value)
  (let [new-vec (assoc vec start value)]
    (if (== (- stop start) 0)
      new-vec
      (range-fill new-vec (inc start) stop value))))

(defn range-replace
  "replace elements of vector with another set at given position"
  [vec value position]
  (let [new-vec (assoc vec position (first value))
        rest (restv value)]
    (if (empty? rest)
      new-vec
      (range-replace new-vec rest (inc position)))))


(defn restv
  "returns the rest of a collection as a vector"
  [col] (vec (rest col)))

(defn rotate
  "rotates a 2D vector by an angle"
  [v theta] (from-polar (+ (angle v) theta) (length v)))

(defn set-length
  "Returns the vector v with given length l."
  [v l] (mul-scalar (normalize v) l))

(defn select
  "Returns the selection of a vector from index a to and including index b."
  [v a b]
  (->> v (drop a) (drop-last (- (count v) b 1))))

(defn split
  "Return two collections split from a vector with i as the index
  starting the second group."
  [v i]
  [(drop-last (- (count v) i) v) (drop i v)])

(defn sub
  "Substracts 2 vectors of same dimension"
  [v1 v2]
  (map - v1 v2))

(defn sub-scalar
  "Subtracts scalar from vector"
  [v scalar] (map #(- % scalar) v))

(defn sum
  "Returns the sum of all elements in a vector"
  [v] (reduce + v))

(defn vec2
  "Creates a 2d vector of given value"
  [value] (vecn value 2))

(defn vec3
  "Creates a 3d vector of given value"
  [value] (vecn value 3))

(defn vec4
  "Creates a 4d vector of given value"
  [value] (vecn value 4))

(defn vecn
  "Creates an n-dimensional vector of given value"
  [value n] (vec (repeat n value)))

(defn zeros
  "Creates an n-dimensional vector of zeroes"
  [n] (vecn 0 n))
