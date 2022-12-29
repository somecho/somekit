(ns somekit.color)

(defn palette [t a b c d]
  (let [tau (* Math/PI 2)]
    (->> c
         (map * [t t t])
         (map + d)
         (map * [tau tau tau])
         (map Math/cos)
         (map * b)
         (map + a)
         (map * [255 255 255]))))
