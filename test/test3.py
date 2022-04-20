# Strategy Pattern implemented
import pandas as pd
from abc import ABC, abstractmethod
#from DisplayBehavior import *

class DisplayBehavior(ABC):
    def __init__(self):
        super().__init__()
        print ("Display behavior")

class Data(ABC): 
    def __init__(self,displayBehavior):
        super().__init__()
        self.displayBehavior = displayBehavior

    data = ""
    
    def import_data(self):    
        self.data = pd.read_csv('https://example.com/passkey=wedsmdjsjmdd')

    @abstractmethod
    def sort(self):
        pass
         
    def display(self):
        self.displayBehavior.display()

class Detailer(): 
    def display(self):
        print ("I'm a detailer class")
    
class Summarizer():
    def display(self):
        print ("I'm a Summarizer")
        

detailer = Detailer();