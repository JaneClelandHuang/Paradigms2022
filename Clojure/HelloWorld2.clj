(ns clojure.examples.hello
   (:gen-class))
(defn hello-world []
   (let [message "Hiya"]
   (println message)))
(hello-world)