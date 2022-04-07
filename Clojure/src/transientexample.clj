(ns transientexample
   (:gen-class))

(defn vrange [n]
   (loop [i 0 v []]
		(if (< i n)
			(recur (inc i) (conj v i))
	v)))
	
  
(defn run [opts]
   (println "Non transient")
   (time (vrange 100000))
)
   