# Animal behavior hierarchies 
from abc import ABC, abstractmethod
from random import randint  

class AnimalBehavior(ABC): 
    def __init__(self):
        super().__init__()
        self.head_x = 0
        self.head_y = 0
            
    @abstractmethod
    def getColor(self):
        pass

    @abstractmethod
    def getSpeed(self):
        pass

    @abstractmethod
    def getFood(self):
        pass
		
    def moveHead(self,x,y):
        self.x = x
        self.y = y	
        
    def setStartingPosition(self,width,height):
        self.head_x = randint(0, width)
        self.head_y = randint(0, height)
        
    def getX(self):
        return self.head_x
    
    def getY(self):
        return self.head_y

class Snake(AnimalBehavior): 
    def getColor(self):
        return "green"
    def getSpeed(self):
        return 1
    def getFood(self):
        return "red"

class Caterpillar(AnimalBehavior): 
    def getColor(self):
        return "red"
    def getSpeed(self):
        return 1
    def getFood(self):
        return "green"
		
class Worm(AnimalBehavior): 
    def getColor(self):
        return "brown"
    def getSpeed(self):
        return 1
    def getFood(self):
        return "yellow"
