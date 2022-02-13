# FlyBehavior
from abc import ABC, abstractmethod

class FlyBehavior(ABC): 
    def __init__(self):
        super().__init__()
    
    @abstractmethod
    def fly(self):
        pass
        
class FlyWithWings(FlyBehavior): 
    def fly(self):
        print ("I'm flying using my wings")
    
class FlyNoWay(FlyBehavior):
    def fly(self):
        print ("I can't fly")
        
