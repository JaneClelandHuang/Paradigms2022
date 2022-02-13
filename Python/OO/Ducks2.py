# Ducks basic
from abc import ABC, abstractmethod

class Duck(ABC): 
    def __init__(self):
        super().__init__()
    
    @abstractmethod
    def display(self):
        pass
        
    def quack(self):
        print("Quack Quack")
    
    def swim(self):
        print("I'm swimming")

class MallardDuck(Duck): 
    def display(self):
        print ("I'm a Mallard Duck")
    
class RedHeadDuck(Duck):
    def display(self):
        print ("I'm a RedHeadDuck")
        
class RubberDucky(Duck):
    def display(self):
        print ("I'm just a RubberDucky")

    def quack(self):
        print ("Peep Peep")

list = []
list.append(MallardDuck())
list.append(RedHeadDuck())
list.append(RubberDucky())

for duck in list:
    duck.display()
    duck.quack()
    duck.swim()
    