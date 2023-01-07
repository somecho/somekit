(ns somekit.geometry.line
  (:require [somekit.vec :as vec]))

(declare direction)

(defn angle
  "Returns the angle of a line"
  [line] (let [[x1 y1 x2 y2] line] (Math/atan2 (- y2 y1) (- x2 x1))))

(defn angle-between
  "Calculates the angle between two lines via difference."
  [line1 line2] (- (angle line2) (angle line1)))

(defn at
  "Returns point at a value between 0-1 of a line, 0 being the start
  and 1 being the end."
  [line t] (let [[x1 y1 x2 y2] line] (vec/lerp [x1 y1] [x2 y2] t)))

(defn direction
  "Returns the direction of a line as a unit vector"
  [line] (let [[x1 y1 x2 y2] line] (vec/normalize [(- x2 x1) (- y2 y1)])))

(defn extrude-point
  "Creates a line from centerpoint with the resulting length and angle."
  [point length angle]
  (let [[x y] point
        x1 (-> angle (Math/cos) (* length) (* -0.5) (+ x))
        y1 (-> angle (Math/sin) (* length) (* -0.5) (+ y))
        x2 (-> angle (Math/cos) (* length) (* 0.5) (+ x))
        y2 (-> angle (Math/sin) (* length) (* 0.5) (+ y))]
    [x1 y1 x2 y2]))

(defn length
  "Calculates the length of a line"
  [line]
  (let [[x1 y1 x2 y2] line]
    (vec/length [(- x2 x1) (- y2 y1)])))



(defn line-intersection
  "Returns a vector with two items. The first is the intersection
  between two lines. The second is a boolean of whether the
  intersection occurs on the line segments."
  [line1 line2]
  (let [[sx1 sy1 ex1 ey1] line1
        [sx2 sy2 ex2 ey2] line2
        a1 (- ey1 sy1)
        b1 (- sx1 ex1)
        c1 (+ (* a1 sx1) (* b1 sy1))
        a2 (- ey2 sy2)
        b2 (- sx2 ex2)
        c2 (+ (* a2 sx2) (* b2 sy2))
        d (- (* a1 b2) (* a2 b1))
        x (/ (- (* b2 c1) (* b1 c2)) d)
        y (/ (- (* a1 c2) (* a2 c1)) d)
        ua (/ (- (* (- ex2 sx2) (- sy1 sy2)) (* (- ey2 sy2) (- sx1 sx2))) d)
        ub (/ (- (* (- ex1 sx1) (- sy1 sy2)) (* (- ey1 sy1) (- sx1 sx2))) d)
        onSegment (not (or (< ua 0) (> ua 1) (< ub 0) (> ub 1)))]
    [[x y] onSegment]))
