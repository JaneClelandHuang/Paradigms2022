# QuackBehavior
from abc import ABC, abstractmethod

class QuackBehavior(ABC): 
    def __init__(self):
        super().__init__()
    
    @abstractmethod
    def quack(self):
        pass
        
class Quack(QuackBehavior): 
    def quack(self):
        print ("Quack, Quack")
    
class Peep(QuackBehavior):
    def quack(self):
        print ("Peep, Peep")
        
class Mute(QuackBehavior):
    def quack(self):
        print ("...")
        
        