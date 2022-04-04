; Classes
; Example 1 using protocols to reuse behavior.
(defprotocol Sounder
 (sound [sound-maker]))

(defrecord Horse [name] Sounder
 (sound [this] "neigh"))

(defrecord Cow [name] Sounder
 (sound [this] "mooo"))
 
(defrecord Sheep [name] Sounder
 (sound [this] "baaa"))

(defrecord Dog [name] Sounder
 (sound [this] "woof"))

(defn speak [animal]
 (str (.name animal) " says " (sound animal)))

(def h (Horse. "CJ"))
(println "Horse: #s " (speak h))
(def c (Cow. "Bessie"))
(println "Cow: #s " (speak c))

; Add new functionality 
(defprotocol EmojiDescribable (emoji [this])) 
(extend-type Horse EmojiDescribable (emoji [this] "\uD83D\uDC0E")) 
(extend-type Cow EmojiDescribable (emoji [this] "\uD83D\uDC04")) 
(extend-type Sheep EmojiDescribable (emoji [this] "\uD83D\uDC11")) 
(extend-type Dog EmojiDescribable (emoji [this] "\uD83D\uDC15")) 
(println (emoji h)) 
(println (emoji c)) 
(println (emoji (Sheep. "Woolie"))) 
(println (emoji (Dog. "Spike"))) 