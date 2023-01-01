(ns somekit.geometry)

(defn polygon
  "Returns a list of 2D vertices of a regular polygon."
  [x y radius num-sides & offset-radians]
  (let [step (/ m/TAU num-sides)
        offset (first offset-radians)]
    (->> (range num-sides)
         (map #(* % step))
         (map #(+ % offset))
         (map #(let [vx (-> (Math/cos %) (* radius) (+ x))
                     vy (-> (Math/sin %) (* radius) (+ y))]
                 [vx vy])))))
