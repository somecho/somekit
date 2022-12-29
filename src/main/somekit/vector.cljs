(ns somekit.vector)

(defn random
  "random vector generator
  Arguments:
  - size n
  Returns:
  - vector of size n of normalized random values"
  [n]
  (vec (map Math/random (range n))))

(defn random-custom
  "create a vector of random values between 0-1 of size n
  using a custom random function"
  [n fn]
  (vec (map fn (range n))))

(defn random-discrete
  "creates a vector of random 1s and 0s of size N"
  [n]
  (vec (map #(Math/floor (* (Math/random) 2)) (range n))))

(defn random-discrete-custom
  "creates a vector of custom random 1s and 0s of size N"
  [n fn]
  (vec (map #(Math/floor (* (fn) 2)) (range n))))

(defn of3
  "create a vector of size 3 with value"
  [value]
  (vec (repeat 3 value)))

(defn zeros
  "create a vector of zeroes with size N"
  [n]
  (vec (repeat n 0)))

(defn range-fill
  "fill range of elements in vector with value"
  [vec start stop value]
  (assoc vec start value)
  (let [new-vec (assoc vec start value)]
    (if (== (- stop start) 0)
      new-vec
      (range-fill new-vec (inc start) stop value))))

(defn mat-trans
  "Rotates an ND matrix (vec of vecs)"
  [mat]
  (apply map vector mat))

(defn indexed
  "pairs each element in a collection as
   an indexed tuple and return as vector"
  [coll]
  (mat-trans [(range (count coll)) coll]))

(defn average
  "return average of collection as vector"
  [coll]
  (/ (reduce + coll) (count coll)))

(defn random-range
  "returns a random range over a size of a vector as a vector"
  [vec]
  (let [n (count vec)
        a (* (Math/random) n)
        b (* (Math/random) n)]
    (map Math/floor (sort [a b]))))

(defn random-range-custom
  "returns a random range over a size of a vector as a vector"
  [vec fn]
  (let [n (count vec)
        a (* (fn) n)
        b (* (fn) n)]
    (map Math/floor (sort [a b]))))

(defn random-replace
  "replace random element in vector with value"
  [vec value]
  (let [i (-> (count vec)
              (* (Math/random))
              (Math/floor))]
    (range-fill vec i i value)))

(defn random-replace-custom
  "replace custom random element in vector with value"
  [vec value fn]
  (let [i (-> (count vec)
              (* (fn))
              (Math/floor))]
    (range-fill vec i i value)))

(defn but-first
  "rest of vector"
  [vector]
  (vec (rest vector)))

(defn replace-range
  "replace elements of vector with another set at given position"
  [vec value position]
  (let [new-vec (assoc vec position (first value))
        rest (but-first value)]
    (if (empty? rest)
      new-vec
      (replace-range new-vec rest (inc position)))))

(defn pad-start
  "pads start of vector with value and pad size"
  ([vector value]
   (vec (concat (list value) vector)))
  ([vector value pad-size]
   (vec (concat (repeat pad-size value) vector))))

(defn pad-end
  "pads end of vector with value and pad size"
  ([vector value]
   (vec (concat vector (list value))))
  ([vector value pad-size]
   (vec (concat vector (repeat pad-size value)))))

(defn pad-ends
  "pads ends of vector with value and pad size"
  ([vector value]
   (-> vector (pad-start value) (pad-end value)))
  ([vector value pad-size]
   (-> vector (pad-start value pad-size) (pad-end value pad-size))))

(defn pad-wrap
  "pads start of vector with end and end of vector with start"
  [vector]
  (let [a (first vector)
        b (last vector)]
    (-> vector (pad-start b) (pad-end a))))

(defn dx->x [start list]
  (cons start (->> list
                   count
                   range
                   (map inc)
                   (map #(take % list))
                   (map #(reduce + %)))))

(defn normalize [list]
  (map #(/ % (reduce + list)) list))
