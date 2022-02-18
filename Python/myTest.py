# Test
import abc

class State(metaclass=abc.ABCMeta):
    def __init__(self):
        print ("Hello")

class Myclass(State):
    def __init__(self):
        print("My class")

mc = Myclass()