from random import shuffle, random

squares = list(n * n for n in range(100))
shuffle(squares)

evens = list(n * 2 for n in range(50))
shuffle(evens)

floats = list (random() for n in range(20))
print (floats)




