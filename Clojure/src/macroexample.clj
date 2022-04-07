(ns macroexample
   (:gen-class))

(defmacro eval-infix [form]
	(list (second form) (first form) (second (rest form))))

(defn run [opts]
   (use 'clojure.test)
   (eval-infix (20 * 7 ))
   (* 20 7)
   (is (= (eval-infix (20 * 7 )) 140))
   (is (= (macroexpand '(eval-infix (20 * 7 ))) '(* 20 7)))
)
   