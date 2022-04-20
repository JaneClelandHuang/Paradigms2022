from abc import ABC, abstractmethod

class State(ABC):
    def __init__(self):
        print ("Hello")

class Myclass(State):
    def __init__(self):
        print("My class")

mc = Myclass()