(ns somekit.vec-test
  (:require  [cljs.test :as t :include-macros true]
             [somekit.vec :as vec]))

(t/deftest add
  (t/is (= (vec/add [2 2] [3 3]) [5 5]))
  (t/is (= (vec/add [2 2] [-3 -3]) [-1 -1])))

(t/deftest add-scalar
  (t/is (= (vec/add-scalar [2 2] 69) [71 71]))
  (t/is (= (vec/add-scalar [-2 -2] 69) [67 67])))

(t/deftest angle
  (t/is (= (vec/angle [1 0]) 0))
  (t/is (= (vec/angle [-1 0]) Math/PI)))

(t/deftest angle-between
  (t/is (= (vec/angle-between [1 0] [-1 0]) Math/PI))
  (t/is (= (vec/angle-between [-1 0] [1 0]) (- Math/PI))))

(t/deftest average
  (t/is (= (vec/average [1 2 3]) 2)))

(t/deftest div
  (t/is (= (vec/div [2 2] [2 2]) [1 1])))

(t/deftest div-scalar
  (t/is (= (vec/div-scalar [10 10] 2) [5 5])))

(t/deftest distance
  (t/is (= (vec/distance [0 0] [3 4]) 5)))

(t/deftest dot
  (t/is (= (vec/dot [1 3 -5] [4 -2 -1]) 3)))

(t/deftest dx->x
  (t/is (= (vec/dx->x [1 1 1] 0) [0 1 2 3])))

(t/deftest from-angle
  (t/is (= (vec/from-angle 0) [1 0]))
  (t/is (= (map Math/floor (vec/from-angle Math/PI)) [-1 0]))
  (t/is (= (map Math/floor (vec/from-angle (* Math/PI 1.5)) [0 -1]))))

(t/deftest from-polar
  (t/is (= (vec/from-polar 0 2) [2 0]))

  (t/is (= (map Math/floor (vec/from-polar (* Math/PI 1.5) 2) [0 -2]))))

(t/deftest indexed
  (t/is (= (vec/indexed [0 1 2 3]) [[0 0][1 1][2 2][3 3]])))

(t/deftest length
  (t/is (= (vec/length [3 4]) 5))
  (t/is (= (vec/length [3]) 3))
  (t/is (= (vec/length [0 3 4]) 5)))

(t/deftest lerp
  (t/is (= (vec/lerp [0 0] [10 10] 0.5) [5 5]))
  (t/is (= (vec/lerp [0 0 0] [10 5 100] 0.5) [5 2.5 50])))

(t/deftest limit
  (t/is (= (vec/limit [6 8] 5) [3 4]))
  (t/is (= (vec/limit [0 6 8] 5) [0 3 4])))

(t/deftest mat-trans
  (t/is (= (vec/mat-trans [[2 2][1 1]]) [[2 1][2 1]]))
  (t/is (= (vec/mat-trans [[2 2][1 1][3 3]]) [[2 1 3][2 1 3]])))

(t/deftest mul
  (t/is (= (vec/mul [2 2] [2 2]) [4 4]))
  (t/is (= (vec/mul [2 2] [-2 2]) [-4 4])))

(t/deftest mul-scalar
  (t/is (= (vec/mul-scalar [2 2] 2) [4 4])))

(t/deftest normalize
  (t/is (= (vec/normalize [10 0]) [1 0])))

(t/deftest normalize-range
  (t/is (= (vec/normalize-range [2 2]) [0.5 0.5])))

(t/deftest pad
  (t/is (= (vec/pad [1 2 3] 0) [0 1 2 3 0]))
  (t/is (= (vec/pad [1 2 3] 0 2) [0 0 1 2 3 0 0])))


(t/deftest pad-start
  (t/is (= (vec/pad-start [1 2 3] 0) [0 1 2 3]))
  (t/is (= (vec/pad-start [1 2 3] 0 2) [0 0 1 2 3])))

(t/deftest pad-end
  (t/is (= (vec/pad-end [1 2 3] 0) [1 2 3 0]))
  (t/is (= (vec/pad-end [1 2 3] 0 2) [1 2 3 0 0])))

(t/deftest pad-wrap
  (t/is (= (vec/pad-wrap [1 2 3]) [3 1 2 3 1])))

(t/deftest random
  (t/is (not= (reduce + (vec/random 10)) 10))
  (t/is (not= (reduce + (vec/random 10 Math/random)) 10))
  (t/is (not= (vec/random 10) (vec/random 10))))

(t/deftest random10
  (t/is (not= (vec/random10 10) (vec/random10 10)))
  (t/is (not= (vec/random10 10 Math/random) (vec/random10 10))))

(t/deftest random-polar
  (t/is (not= (vec/random-polar) (vec/random-polar)))
  (t/is (not= (vec/random-polar Math/random) (vec/random-polar))))

(t/deftest random-replace
  (t/is (not= (vec/random-replace [0 1 2 3] 69) [0 1 2 3]))
  (t/is (not= (vec/random-replace [0 1 2 3] 69 Math/random) [0 1 2 3])))

(t/deftest range-fill
  (t/is (= (vec/range-fill [0 1 2 3 4 5] 0 5 0) [0 0 0 0 0 0]))
  (t/is (= (vec/range-fill [0 1 2 3 4 5] 2 3 0) [0 1 0 0 4 5])))

(t/deftest range-replace
  (t/is (= (vec/range-replace [0 1 2 3 4] [69 69] 1) [0 69 69 3 4])))


(t/deftest restv
  (t/is (vector? (vec/restv [1 2 3]))))

(t/deftest rotate
  (t/is (= (map Math/floor (vec/rotate [1 0] (* Math/PI 0.5))) [0 1])))

(t/deftest select
  (t/is (= (vec/select [0 1 2 3 4] 2 4) [2 3 4])))

(t/deftest set-length
  (t/is (= (vec/set-length [0 1] 2) [0 2]))
  (t/is (= (vec/set-length [6 8] 5) [3 4])))

(t/deftest split
  (t/is (= (vec/split [0 1 2 3] 2) [[0 1][2 3]])))

(t/deftest sub
  (t/is (= (vec/sub [69 69] [69 69]) [0 0]))
  (t/is (= (vec/sub [0 0] [69 -69]) [-69 69])))

(t/deftest sub-scalar
  (t/is (= (vec/sub-scalar [10 9 8 7] 2) [8 7 6 5])))

(t/deftest sum
  (t/is (= (vec/sum [1 1 1 1 1]) 5)))

(t/deftest vec2
  (t/is (= (vec/vec2 69) [69 69]))
  (t/is (vector? (vec/vec2 69))))

(t/deftest vec3
  (t/is (= (vec/vec3 69) [69 69 69]))
  (t/is (vector? (vec/vec3 69))))

(t/deftest vec4
  (t/is (= (vec/vec4 69) [69 69 69 69]))
  (t/is (vector? (vec/vec4 69))))

(t/deftest vecn
  (t/is (vector? (vec/vecn 2 2))))

(t/deftest zeros
  (t/is (= (reduce + (vec/zeros 10)) 0)))
