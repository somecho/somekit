(ns somekit.window)

(declare width)
(declare height)
(declare random-height)
(declare random-width)

(defn dimensions
  "Returns dimensions of window as a vector. If argument is given,
  height and width gets multiplied by argument."
  ([] [(width) (height)])
  ([n] [(width n) (height n)]))

(defn halfwidth
  "Returns window.innerWidth * 0.5"
  [] (width 0.5))

(defn halfheight
  "Returns window.innerHeight * 0.5"
  [] (height 0.5))

(defn height
  "Returns window.innerHeight. If argument is given,
  muliply height by argument."
  ([] (.-innerHeight js/window))
  ([n] (* (height) n)))

(defn random-point
  "Returns a random point in the window as a vector."
  [] [(random-height) (random-width)])

(defn random-height
  "Returns a random number between 0-height"
  [] (* (height) (Math/random)))

(defn random-width
  "Returns a random number between 0-width"
  [] (* (width) (Math/random)))

(defn width
  "Returns window.innerWidth. If argument is given,
  multiply width by argument."
  ([] (.-innerWidth js/window))
  ([n] (* (width) n)))
