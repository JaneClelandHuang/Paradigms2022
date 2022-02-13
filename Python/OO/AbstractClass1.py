# Python program showing 
# abstract base class work 
from abc import ABC, abstractmethod

class Polygon(ABC): 
    # abstract method 
    def noofsides(self): 
        print("hello parent")
        pass

class Triangle(Polygon): 
    def noofsides(self):
        print("I have three sides")

class Pentagon(Polygon): 
    # overriding abstract method 
    def noofsides(self): 
        print("I have 5 sides") 

class Hexagon(Polygon): 
    # overriding abstract method 
    def noofsides(self): 
        print("I have 6 sides") 

# Driver code 
list = []
list.append(Triangle())
print(len(list))
list.append(Pentagon())
list.append(Hexagon())

number = 0;
for shape in list:
    shape.noofsides()
    

