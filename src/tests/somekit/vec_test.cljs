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

(t/deftest div
  (t/is (= (vec/div [2 2] [2 2]) [1 1])))

(t/deftest div-scalar
  (t/is (= (vec/div-scalar [10 10] 2) [5 5])))

(t/deftest distance
  (t/is (= (vec/distance [0 0] [3 4]) 5)))

(t/deftest dot
  (t/is (= (vec/dot [1 3 -5] [4 -2 -1]) 3)))

(t/deftest from-angle
  (t/is (= (vec/from-angle 0) [1 0]))
  (t/is (= (map Math/floor (vec/from-angle Math/PI)) [-1 0]))
  (t/is (= (map Math/floor (vec/from-angle (* Math/PI 1.5)) [0 -1]))))

(t/deftest from-polar
  (t/is (= (vec/from-polar 0 2) [2 0]))
  (t/is (= (map Math/floor (vec/from-polar Math/PI 2)) [-2 0]))
  (t/is (= (map Math/floor (vec/from-polar (* Math/PI 1.5) 2) [0 -2]))))

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

(t/deftest mul
  (t/is (= (vec/mul [2 2] [2 2]) [4 4]))
  (t/is (= (vec/mul [2 2] [-2 2]) [-4 4])))

(t/deftest mul-scalar
  (t/is (= (vec/mul-scalar [2 2] 2)[4 4])))

(t/deftest normalize
  (t/is (= (vec/normalize [10 0]) [1 0])))

(t/deftest random
  (t/is (not= (reduce + (vec/random 10)) 10))
  (t/is (not= (vec/random 10) (vec/random 10))))

(t/deftest random-polar
  (t/is (not= (vec/random-polar) (vec/random-polar))))

(t/deftest rotate
  (t/is (= (map Math/floor (vec/rotate [1 0] (* Math/PI 0.5))) [0 1])))

(t/deftest set-length
  (t/is (= (vec/set-length [0 1] 2) [0 2]))
  (t/is (= (vec/set-length [6 8] 5) [3 4])))

(t/deftest sub
  (t/is (= (vec/sub [69 69][69 69]) [0 0]))
  (t/is (= (vec/sub [0 0][69 -69]) [-69 69])))

(t/deftest sub-scalar
  (t/is (= (vec/sub-scalar [10 9 8 7] 2) [8 7 6 5])))
