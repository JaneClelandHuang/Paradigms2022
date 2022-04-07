(ns recursion
   (:gen-class))

(defn factorial [n]
   (loop [cnt n acc 1]
		(if (zero? cnt)
			(printf "The factorial of  %d is %d" n acc)
			(recur (dec cnt) (* acc cnt))
)))
	   
(defn run [opts]
   (factorial 3))