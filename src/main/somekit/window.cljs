(ns somekit.window)


(defn width
  "Returns window.innerWidth"
  []
  (.-innerWidth js/window))

(defn halfwidth
  "Returns window.innerWidth * 0.5"
  []
  (* (width) 0.5))

(defn height
  "Returns window.innerHeight"
  []
  (.-innerHeight js/window))

(defn halfheight
  "returns window.innerHeight * 0.5"
  []
  (* (height) 0.5))

(defn dimensions
  "returns dimensions of window as vector"
  [] [(width) (height)])
