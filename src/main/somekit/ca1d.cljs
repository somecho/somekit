(ns somekit.ca1d
  (:require [somekit.vec :as svec]))


(defn discrete-rule
  "Given a rule number, converts it to binary form and
 outputs a list of state results based on the
 1D wolfram discrete cellular automata"
  [rule]
  (map int (-> (mod rule 256)
               (.toString 2)
               (.padStart 8 0))))

(defn apply-discrete-rule [state rule]
  (case state
    [1 1 1] (nth rule 0)
    [1 1 0] (nth rule 1)
    [1 0 1] (nth rule 2)
    [1 0 0] (nth rule 3)
    [0 1 1] (nth rule 4)
    [0 1 0] (nth rule 5)
    [0 0 1] (nth rule 6)
    [0 0 0] (nth rule 7)))

(defn group-1d
  "groups each state with its left and right neighbor"
  [states]
  (->> states
       svec/pad-wrap
       (partition 3 1)))

(defn step-1d
  "groups the states and applies a given update function"
  [states update-fn]
  (->> (group-1d states)
       (map #(apply update-fn %))
       vec))

(defn step-discrete-1d
  "applies discrete 1D CA rules"
  [states rule]
  (->> (group-1d states)
       (map #(apply-discrete-rule % (discrete-rule rule)))
       vec))
