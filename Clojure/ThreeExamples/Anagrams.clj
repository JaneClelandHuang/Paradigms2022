(ns clojure.examples.anagram
(:gen-class))

(defn swap [data-v i j]
  (println "hello %n %n %n " data-v i j)
  (assoc data-v
         i (data-v j)
         j (data-v i)))

(defn generatePermutations [v n] 
   (if (zero? n) 
      (do (println (apply str v)) v) 

      (loop [i 0 a v] 
         (if (< i n) 
            (do 
               (let [a (generatePermutations a (dec n))] 
               (recur (inc i) (swap a (if (even? n) 0 i) n))))        
            (generatePermutations a (dec n))
            )))) 

(let [word (vec ['r' 'a' 't'])]
   (generatePermutations word 3)) 