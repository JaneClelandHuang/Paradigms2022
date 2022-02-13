from abc import ABC, abstractmethod

class Component(ABC):
    def performOperation(self): 
        pass

    @abstractmethod
    def printContent(self):
        pass

class Leaf(Component): 
    def performOperation(self):
        self.printContent()
   
class Composite(Component):
    def __init__(self):
        self.children = []
        super().__init__()
        
    def performOperation(self):
        self.printContent() # Print content first
        for child in self.children:  # Ask children to print content
            child.performOperation()
         
    def add(self,childComponent):
        self.children.append(childComponent)
        
    def remove(self,childComponent):
        self.children.remove(childComponent)
    

